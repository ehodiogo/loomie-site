import * as React from "react";

interface LoaderProps {
  size?: number;
  text?: string;
}

export const AILoader: React.FC<LoaderProps> = ({ size = 180, text = "Processando" }) => {
  const letters = text.split("");

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div
        className="animate-loaderCircle rounded-full"
        style={{
          width: size,
          height: size,
          boxShadow:
            "0 6px 12px 0 hsl(var(--primary)) inset, 0 12px 18px 0 hsl(var(--primary)) inset, 0 36px 36px 0 hsl(var(--accent)) inset, 0 0 3px 1.2px hsl(var(--primary) / 0.3), 0 0 6px 1.8px hsl(var(--accent) / 0.2)",
        }}
      />

      <div className="flex items-center gap-0.5">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="animate-loaderLetter text-sm font-semibold tracking-widest uppercase text-primary"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes loaderCircle {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 6px 12px 0 hsl(var(--primary)) inset,
              0 12px 18px 0 hsl(var(--accent)) inset,
              0 36px 36px 0 hsl(var(--primary)) inset,
              0 0 3px 1.2px hsl(var(--primary) / 0.3),
              0 0 6px 1.8px hsl(var(--accent) / 0.2);
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 6px 12px 0 hsl(var(--accent)) inset,
              0 12px 6px 0 hsl(var(--primary)) inset,
              0 24px 36px 0 hsl(var(--accent)) inset,
              0 0 3px 1.2px hsl(var(--primary) / 0.3),
              0 0 6px 1.8px hsl(var(--accent) / 0.2);
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 6px 12px 0 hsl(var(--primary)) inset,
              0 12px 18px 0 hsl(var(--accent)) inset,
              0 36px 36px 0 hsl(var(--primary)) inset,
              0 0 3px 1.2px hsl(var(--primary) / 0.3),
              0 0 6px 1.8px hsl(var(--accent) / 0.2);
          }
        }

        @keyframes loaderLetter {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.15);
          }
          40% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }

        .animate-loaderCircle {
          animation: loaderCircle 5s linear infinite;
        }

        .animate-loaderLetter {
          animation: loaderLetter 3s infinite;
        }
      `}</style>
    </div>
  );
};
