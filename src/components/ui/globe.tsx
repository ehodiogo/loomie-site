"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0.2, 0.4, 1],
  glowColor: [0.85, 0.85, 0.85],
  markers: [
    // Wave 1 — appear early (frames 0-60, ~first half rotation)
    { location: [-23.5505, -46.6333], size: 0.12 },  // São Paulo
    { location: [40.7128, -74.006], size: 0.1 },      // NYC
    { location: [-22.9068, -43.1729], size: 0.1 },    // Rio
    { location: [19.4326, -99.1332], size: 0.1 },     // Mexico City
    { location: [-15.7975, -47.8919], size: 0.08 },   // Brasília
    { location: [-30.0346, -51.2177], size: 0.07 },   // Porto Alegre
    { location: [30.0444, 31.2357], size: 0.07 },     // Cairo
    { location: [-12.9714, -38.5124], size: 0.07 },   // Salvador
    { location: [41.0082, 28.9784], size: 0.06 },     // Istanbul
    // Wave 2 — appear later (frames 60-200)
    { location: [14.5995, 120.9842], size: 0.03 },    // Manila
    { location: [19.076, 72.8777], size: 0.1 },       // Mumbai
    { location: [23.8103, 90.4125], size: 0.05 },     // Dhaka
    { location: [39.9042, 116.4074], size: 0.08 },    // Beijing
    { location: [-19.9167, -43.9345], size: 0.07 },   // BH
    { location: [-3.1190, -60.0217], size: 0.06 },    // Manaus
    { location: [-25.4284, -49.2733], size: 0.06 },   // Curitiba
    { location: [-8.0476, -34.8770], size: 0.05 },    // Recife
    { location: [34.6937, 135.5022], size: 0.05 },    // Osaka
  ],
}

const ALL_MARKERS = GLOBE_CONFIG.markers!
const WAVE_1_COUNT = 9 // first 9 markers appear early

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  let frameCount = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)
  const markerScales = useRef(ALL_MARKERS.map(() => 0))

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
      frameCount++

      // Staggered reveal: wave 1 unlocks immediately, wave 2 after ~60 frames
      const currentPhi = phi + r
      const theta = config.theta ?? 0.3
      state.markers = ALL_MARKERS.map((marker, i) => {
        // Delay: wave 1 markers unlock at frame 0, wave 2 at frame 60+
        const unlockFrame = i < WAVE_1_COUNT ? 0 : 60 + (i - WAVE_1_COUNT) * 20
        if (frameCount < unlockFrame) {
          markerScales.current[i] = 0
          return { location: marker.location, size: 0 }
        }

        const [lat, lng] = marker.location as [number, number]
        const markerPhi = ((90 - lat) * Math.PI) / 180
        const markerTheta = ((180 + lng) * Math.PI) / 180

        const cx = Math.sin(markerPhi) * Math.cos(markerTheta)
        const cz = Math.sin(markerPhi) * Math.sin(markerTheta)
        const cy = Math.cos(markerPhi)

        const vx = Math.sin(Math.PI / 2 - theta) * Math.cos(currentPhi)
        const vz = Math.sin(Math.PI / 2 - theta) * Math.sin(currentPhi)
        const vy = Math.cos(Math.PI / 2 - theta)

        const dot = cx * vx + cy * vy + cz * vz
        const visible = dot > 0.2

        const target = visible ? 1 : 0
        markerScales.current[i] += (target - markerScales.current[i]) * 0.06

        return {
          location: marker.location,
          size: (marker.size as number) * markerScales.current[i],
        }
      })
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    })
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
