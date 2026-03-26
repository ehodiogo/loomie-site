import { useState, useMemo, useCallback } from "react";
import { Search, Copy, Check, Menu, ArrowLeft, FileText, Code2, Info, ChevronRight, ChevronDown, Folder } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { apiRoutes, type ApiRoute } from "@/data/api-routes";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const methodColors: Record<string, string> = {
  GET: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  POST: "bg-blue-500/15 text-blue-700 border-blue-500/30",
  PUT: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  DELETE: "bg-red-500/15 text-red-700 border-red-500/30",
  PATCH: "bg-orange-500/15 text-orange-700 border-orange-500/30",
};

const methodDotColors: Record<string, string> = {
  GET: "bg-emerald-500",
  POST: "bg-blue-500",
  PUT: "bg-amber-500",
  DELETE: "bg-red-500",
  PATCH: "bg-orange-500",
};

function MethodBadge({ method }: { method: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-bold tracking-wider uppercase ${methodColors[method] || "bg-muted text-muted-foreground"}`}
    >
      {method}
    </span>
  );
}

function parseMarkdownTable(raw: string): { headers: string[]; rows: string[][] } | null {
  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length < 3) return null;
  const headerLine = lines.find((l) => l.startsWith("|") && !l.includes("---"));
  const sepIdx = lines.findIndex((l) => l.includes("---"));
  if (!headerLine || sepIdx < 0) return null;

  const parse = (line: string) =>
    line.split("|").map((c) => c.trim()).filter(Boolean);

  const headers = parse(headerLine);
  const dataLines = lines.filter((l, i) => l.startsWith("|") && i > sepIdx && !l.includes("---"));
  const rows = dataLines.map(parse);
  return { headers, rows };
}

function ParamTable({ title, raw, icon }: { title: string; raw: string; icon: React.ReactNode }) {
  const isNone = !raw || raw === "Nenhum" || raw.toLowerCase().includes("nenhum");

  if (isNone) {
    return (
      <div className="flex-1 min-w-[280px]">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        </div>
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground italic">Nenhum parâmetro necessário</p>
        </div>
      </div>
    );
  }

  const table = parseMarkdownTable(raw);

  if (table) {
    return (
      <div className="flex-1 min-w-[280px]">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        </div>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                {table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-2.5 text-left font-medium text-muted-foreground text-xs uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2.5 text-foreground">
                      {j === 0 ? <code className="text-xs bg-muted/50 px-1.5 py-0.5 rounded font-mono">{cell}</code> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-w-[280px]">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      </div>
      <div className="rounded-lg border border-border bg-muted/30 p-4">
        <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">{raw}</pre>
      </div>
    </div>
  );
}

function RouteDetail({ route }: { route: ApiRoute }) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(route.markdown);
    setCopied(true);
    toast({ title: "Copiado!", description: "Documentação copiada para a área de transferência." });
    setTimeout(() => setCopied(false), 2000);
  };

  const isPayloadNone = !route.payload || route.payload.toLowerCase().includes("nenhum");

  return (
    <motion.div
      key={route.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 flex-wrap">
        <MethodBadge method={route.method} />
        <h2 className="text-lg font-mono font-semibold text-foreground break-all">{route.endpoint}</h2>
      </div>

      {/* Description */}
      <Card className="border-border bg-card shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Info size={14} />
            Descrição
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground leading-relaxed">{route.detalhes}</p>
        </CardContent>
      </Card>

      {/* Parameters */}
      <div className="flex flex-wrap gap-6">
        <ParamTable title="Parâmetros Obrigatórios" raw={route.require} icon={<div className="w-2 h-2 rounded-full bg-red-500" />} />
        <ParamTable title="Parâmetros Opcionais" raw={route.optional} icon={<div className="w-2 h-2 rounded-full bg-blue-400" />} />
      </div>

      {/* Payload */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Code2 size={14} className="text-muted-foreground" />
          <h4 className="text-sm font-semibold text-foreground">Payload</h4>
        </div>
        {isPayloadNone ? (
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground italic">Nenhum payload necessário para esta rota.</p>
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-[hsl(220,20%,8%)] overflow-hidden">
            <ScrollArea className="max-h-[400px]">
              <pre className="p-4 text-sm text-emerald-300 font-mono whitespace-pre-wrap">{route.payload}</pre>
            </ScrollArea>
          </div>
        )}
      </div>

      {/* AI Agent Section */}
      <div className="relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="relative p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Configuração para Agente IA</h4>
                <p className="text-xs text-muted-foreground">Copie e cole no contexto do seu agente</p>
              </div>
            </div>
            <Button
              size="sm"
              onClick={handleCopy}
              className={`gap-2 transition-all ${copied ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copiado!" : "Copiar para IA"}
            </Button>
          </div>
          <div className="rounded-lg border border-border bg-[hsl(220,20%,8%)] overflow-hidden">
            <ScrollArea className="max-h-[350px]">
              <pre className="p-4 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">{route.markdown}</pre>
            </ScrollArea>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Grouping utility ---
interface CategoryGroup {
  name: string;
  routes: ApiRoute[];
}

function extractCategory(endpoint: string): string {
  const path = endpoint.replace(/^[^/]*backend\.loomiecrm\.com/, "").replace(/^\/api\//, "/").replace(/^\//, "");
  const segment = path.split("/")[0] || "Outros";
  // Clean up dynamic segments like {id}
  if (segment.startsWith("{")) return "Outros";
  return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/[-_]/g, " ");
}

function groupRoutes(routes: ApiRoute[]): CategoryGroup[] {
  const map = new Map<string, ApiRoute[]>();
  for (const r of routes) {
    const cat = extractCategory(r.endpoint);
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(r);
  }
  return Array.from(map.entries())
    .map(([name, routes]) => ({ name, routes }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// --- Collapsible category component ---
function CategoryAccordion({
  group,
  isOpen,
  onToggle,
  selectedId,
  onSelect,
}: {
  group: CategoryGroup;
  isOpen: boolean;
  onToggle: () => void;
  selectedId: number | null;
  onSelect: (route: ApiRoute) => void;
}) {
  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-2 px-3 py-2.5 text-left hover:bg-muted/40 transition-colors group"
      >
        <ChevronDown
          size={14}
          className={`text-muted-foreground flex-shrink-0 transition-transform duration-200 ${isOpen ? "" : "-rotate-90"}`}
        />
        <Folder size={14} className="text-muted-foreground flex-shrink-0" />
        <span className="text-xs font-semibold text-foreground truncate">{group.name}</span>
        <span className="ml-auto text-[10px] font-medium text-muted-foreground bg-muted/60 px-1.5 py-0.5 rounded-full flex-shrink-0">
          {group.routes.length}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pl-4 pr-1 pb-1 space-y-0.5">
          {group.routes.map((route) => (
            <button
              key={route.id}
              onClick={() => onSelect(route)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all group/item ${
                selectedId === route.id
                  ? "bg-primary/10 border border-primary/20"
                  : "hover:bg-muted/50 border border-transparent"
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${methodDotColors[route.method] || "bg-muted-foreground"}`} />
              <span className={`text-[10px] font-bold uppercase tracking-wider flex-shrink-0 w-10 ${
                selectedId === route.id ? "text-primary" : "text-muted-foreground"
              }`}>
                {route.method}
              </span>
              <span className={`text-xs font-mono truncate ${
                selectedId === route.id ? "text-foreground" : "text-muted-foreground group-hover/item:text-foreground"
              }`}>
                {route.endpoint.replace("backend.loomiecrm.com", "")}
              </span>
              <ChevronRight size={12} className={`ml-auto flex-shrink-0 transition-opacity ${
                selectedId === route.id ? "opacity-100 text-primary" : "opacity-0 group-hover/item:opacity-50"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SidebarContent({
  routes,
  search,
  setSearch,
  selectedId,
  onSelect,
}: {
  routes: ApiRoute[];
  search: string;
  setSearch: (v: string) => void;
  selectedId: number | null;
  onSelect: (route: ApiRoute) => void;
}) {
  const groups = useMemo(() => groupRoutes(routes), [routes]);
  const isSearching = search.length > 0;

  const [openCategories, setOpenCategories] = useState<Set<string>>(() => new Set());

  const toggleCategory = useCallback((name: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Logo / Back */}
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft size={14} />
          <span>Voltar ao início</span>
        </Link>
        <h1 className="font-display text-lg font-bold text-foreground">API Docs</h1>
        <p className="text-xs text-muted-foreground mt-0.5">{routes.length} endpoints disponíveis</p>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-border">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar endpoint..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-9 text-sm bg-muted/30 border-border"
          />
        </div>
      </div>

      {/* Grouped Route List */}
      <ScrollArea className="flex-1">
        <div className="py-1">
          {groups.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-xs text-muted-foreground">Nenhum endpoint encontrado</p>
            </div>
          ) : (
            groups.map((group) => (
              <CategoryAccordion
                key={group.name}
                group={group}
                isOpen={isSearching || openCategories.has(group.name)}
                onToggle={() => toggleCategory(group.name)}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

export default function Documentacao() {
  const [search, setSearch] = useState("");
  const [selectedRoute, setSelectedRoute] = useState<ApiRoute | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const isMobile = useIsMobile();

  const filtered = useMemo(() => {
    if (!search) return apiRoutes;
    const q = search.toLowerCase();
    return apiRoutes.filter(
      (r) => r.endpoint.toLowerCase().includes(q) || r.detalhes.toLowerCase().includes(q) || r.method.toLowerCase().includes(q)
    );
  }, [search]);

  const handleSelect = (route: ApiRoute) => {
    setSelectedRoute(route);
    setSheetOpen(false);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className="w-[320px] border-r border-border bg-card flex-shrink-0">
          <SidebarContent
            routes={filtered}
            search={search}
            setSearch={setSearch}
            selectedId={selectedRoute?.id ?? null}
            onSelect={handleSelect}
          />
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        {isMobile && (
          <div className="flex items-center gap-3 p-4 border-b border-border bg-card">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-[300px]">
                <SidebarContent
                  routes={filtered}
                  search={search}
                  setSearch={setSearch}
                  selectedId={selectedRoute?.id ?? null}
                  onSelect={handleSelect}
                />
              </SheetContent>
            </Sheet>
            <h1 className="font-display text-base font-bold text-foreground">API Docs</h1>
          </div>
        )}

        {/* Content Area */}
        <ScrollArea className="flex-1">
          <div className="max-w-4xl mx-auto p-6 md:p-10">
            <AnimatePresence mode="wait">
              {selectedRoute ? (
                <RouteDetail route={selectedRoute} />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-32 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <FileText size={28} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Documentação da API</h2>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Selecione um endpoint na barra lateral para visualizar os detalhes, parâmetros e configuração para agentes de IA.
                  </p>
                  <div className="flex gap-3 mt-8 flex-wrap justify-center">
                    {["GET", "POST", "PUT", "DELETE", "PATCH"].map((m) => (
                      <MethodBadge key={m} method={m} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">{apiRoutes.length} endpoints documentados</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
