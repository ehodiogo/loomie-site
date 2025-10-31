import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Copy, Check, BookOpen, Users, Briefcase, CheckSquare, MessageSquare, Zap, Database, Shield } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Documentation = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, id }: { code: string; id: string }) => (
    <div className="relative bg-secondary/50 rounded-lg p-4 mt-4">
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-2"
        onClick={() => copyToClipboard(code, id)}
      >
        {copiedCode === id ? (
          <Check className="h-4 w-4 text-success" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
      <pre className="text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-6">
                <BookOpen className="h-5 w-5 text-foreground" />
                <span className="text-sm font-medium">Documentação da API v1.0.1</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                API Loomie CRM
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Interface RESTful completa para gestão de contatos, conversas, negócios e automações do seu CRM
              </p>
            </div>
          </div>
        </section>

        {/* Documentation Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="auth" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto gap-2">
                  <TabsTrigger value="auth" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Autenticação
                  </TabsTrigger>
                  <TabsTrigger value="contacts" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Contatos
                  </TabsTrigger>
                  <TabsTrigger value="deals" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Negócios
                  </TabsTrigger>
                  <TabsTrigger value="tasks" className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4" />
                    Tarefas
                  </TabsTrigger>
                  <TabsTrigger value="conversations" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Conversas
                  </TabsTrigger>
                  <TabsTrigger value="translator" className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Translator
                  </TabsTrigger>
                  <TabsTrigger value="knowledge" className="flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Base de Conhecimento
                  </TabsTrigger>
                  <TabsTrigger value="examples" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Exemplos
                  </TabsTrigger>
                </TabsList>

                {/* Autenticação Tab */}
                <TabsContent value="auth" className="space-y-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Autenticação da API</CardTitle>
                      <CardDescription>
                        Sistema de autenticação baseado em token para acesso à API
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Obtendo Token de Acesso</h3>
                        <p className="text-muted-foreground mb-4">
                          Todas as requisições exigem autenticação via token. Use o endpoint abaixo para obter seu token:
                        </p>
                        <CodeBlock
                          id="auth-endpoint"
                          code={`POST /api-token-auth/
Content-Type: application/x-www-form-urlencoded

username=seu_usuario&password=sua_senha`}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3">Resposta de Sucesso</h3>
                        <CodeBlock
                          id="auth-response"
                          code={`{
  "token": "seu_token_aqui_abc123xyz"
}`}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3">Usando o Token</h3>
                        <p className="text-muted-foreground mb-4">
                          Inclua o token no header Authorization de todas as requisições:
                        </p>
                        <CodeBlock
                          id="auth-header"
                          code={`Authorization: Bearer seu_token_aqui_abc123xyz`}
                        />
                      </div>

                      <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-foreground" />
                          Verificação de Saúde
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Endpoint para verificar status da API (não requer autenticação):
                        </p>
                        <code className="text-sm bg-secondary px-2 py-1 rounded">GET /health/</code>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Contatos Tab */}
                <TabsContent value="contacts" className="space-y-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-6 w-6 text-primary" />
                        Gerenciamento de Contatos
                      </CardTitle>
                      <CardDescription>
                        O contato é a entidade fundamental do CRM - gerencie clientes, leads e prospects
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Criar Novo Contato</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <CodeBlock
                          id="contact-create"
                          code={`POST /contatos/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "nome": "João Silva",
  "email": "joao@example.com",
  "telefone": "(11) 99999-9999",
  "empresa": "Tech Solutions",
  "cargo": "Gerente de TI",
  "endereco": "Rua das Flores, 123",
  "cidade": "São Paulo",
  "estado": "SP",
  "cep": "01234-567",
  "data_nascimento": "1990-05-15",
  "observacoes": "Contato interessado em nossa solução de CRM"
}`}
                        />
                        <div className="mt-4 text-sm text-muted-foreground">
                          <p className="font-medium mb-2">Campos obrigatórios:</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li><code className="bg-secondary px-1 rounded">nome</code> - Nome completo do contato</li>
                            <li><code className="bg-secondary px-1 rounded">email</code> - E-mail do contato (pode ser null)</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Listar e Buscar Contatos</h3>
                          <Badge variant="outline">GET</Badge>
                        </div>
                        <CodeBlock
                          id="contact-list"
                          code={`GET /contatos/?search=joão&ordering=nome&page=1
Authorization: Bearer SEU_TOKEN`}
                        />
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Parâmetros de consulta:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• <code className="bg-secondary px-1 rounded">search</code> - Buscar por nome, email, etc.</li>
                            <li>• <code className="bg-secondary px-1 rounded">ordering</code> - Ordenar (ex: nome, -nome)</li>
                            <li>• <code className="bg-secondary px-1 rounded">page</code> - Número da página</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Atualizar Contato</h3>
                          <Badge variant="outline">PATCH</Badge>
                        </div>
                        <CodeBlock
                          id="contact-update"
                          code={`PATCH /contatos/{id}/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "telefone": "(11) 98888-8888",
  "cargo": "Diretor de TI"
}`}
                        />
                        <div className="mt-4 bg-secondary/30 p-3 rounded-lg border border-border">
                          <p className="text-sm font-medium">✓ Recomendação</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Use PATCH para atualizações parciais. PUT requer todos os campos obrigatórios.
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Outros Endpoints</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/contatos/&#123;id&#125;/</code>
                            <span className="text-muted-foreground">- Detalhar contato</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">DELETE</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/contatos/&#123;id&#125;/</code>
                            <span className="text-muted-foreground">- Excluir contato</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Negócios Tab */}
                <TabsContent value="deals" className="space-y-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-primary" />
                        Pipeline de Vendas
                      </CardTitle>
                      <CardDescription>
                        Gerencie oportunidades de venda através do funil de vendas (Kanban → Estágios → Negócios)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                        <h4 className="font-semibold mb-2">📊 Hierarquia de Dados</h4>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. <strong>Kanban</strong> - O quadro/pipeline (ex: "Pipeline de Vendas")</li>
                          <li>2. <strong>Estágio</strong> - Coluna do Kanban (ex: "Prospecção", "Negociação")</li>
                          <li>3. <strong>Negócio</strong> - Cartão que representa a oportunidade</li>
                        </ol>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Listar Kanbans e Estágios</h3>
                          <Badge variant="outline">GET</Badge>
                        </div>
                        <CodeBlock
                          id="kanban-list"
                          code={`# Listar todos os pipelines
GET /kanbans/
Authorization: Bearer SEU_TOKEN

# Listar estágios de um Kanban específico
GET /estagios/{kanban_id}/
Authorization: Bearer SEU_TOKEN`}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Criar Negócio</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <CodeBlock
                          id="deal-create"
                          code={`POST /negocios/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "titulo": "Implantação CRM - Empresa XYZ",
  "contato_id": 42,
  "estagio_id": 5,
  "descricao": "Projeto de implantação do sistema CRM",
  "valor": "25000.00",
  "operador_id": 1,
  "origem": "inbound",
  "data_prevista": "2025-12-31"
}`}
                        />
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Campos obrigatórios:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• <code className="bg-secondary px-1 rounded">titulo</code> - Nome do negócio</li>
                            <li>• <code className="bg-secondary px-1 rounded">contato_id</code> - ID do contato associado</li>
                            <li>• <code className="bg-secondary px-1 rounded">estagio_id</code> - ID do estágio inicial</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Mover Negócio no Funil</h3>
                          <Badge variant="outline">PATCH</Badge>
                        </div>
                        <CodeBlock
                          id="deal-move"
                          code={`PATCH /negocios/{id}/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "estagio_id": 8
}`}
                        />
                        <p className="text-sm text-muted-foreground mt-3">
                          Altere apenas o <code className="bg-secondary px-1 rounded">estagio_id</code> para mover o negócio entre estágios.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Atributos Personalizáveis</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Adicione campos customizados aos negócios:
                        </p>
                        <CodeBlock
                          id="deal-attributes"
                          code={`POST /atributos-personalizaveis/{negocio_id}/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "label": "Código da Proposta",
  "valor": "PROP-2025-001",
  "type": "string"
}`}
                        />
                        <div className="mt-3">
                          <p className="text-sm font-medium mb-1">Tipos disponíveis:</p>
                          <p className="text-sm text-muted-foreground">
                            string, integer, boolean, date, file
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tarefas Tab */}
                <TabsContent value="tasks" className="space-y-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckSquare className="h-6 w-6 text-primary" />
                        Gerenciamento de Tarefas
                      </CardTitle>
                      <CardDescription>
                        Gerencie atividades e itens de "a fazer" vinculados a operadores, contatos ou conversas
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Criar Nova Tarefa</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <CodeBlock
                          id="task-create"
                          code={`POST /tarefas/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "titulo": "Ligar para cliente sobre proposta",
  "responsavel": 3,
  "descricao": "Discutir detalhes da proposta comercial enviada",
  "status": "pendente",
  "prioridade": "alta",
  "conversa": null,
  "contato": 42,
  "data_vencimento": "2025-11-15T14:00:00Z"
}`}
                        />
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Campos obrigatórios:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• <code className="bg-secondary px-1 rounded">titulo</code> - Descrição da tarefa</li>
                            <li>• <code className="bg-secondary px-1 rounded">responsavel</code> - ID do operador</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Status e Prioridades</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-secondary/30 p-3 rounded-lg">
                            <p className="text-sm font-medium mb-2">Status:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• pendente</li>
                              <li>• em_andamento</li>
                              <li>• concluida</li>
                              <li>• cancelada</li>
                            </ul>
                          </div>
                          <div className="bg-secondary/30 p-3 rounded-lg">
                            <p className="text-sm font-medium mb-2">Prioridades:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• baixa</li>
                              <li>• media</li>
                              <li>• alta</li>
                              <li>• critica</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Endpoints Úteis</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/tarefas/</code>
                            <span className="text-muted-foreground">- Listar todas as tarefas</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/tarefas/minhas/</code>
                            <span className="text-muted-foreground">- Minhas tarefas (do operador autenticado)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/tarefas/&#123;id&#125;/</code>
                            <span className="text-muted-foreground">- Detalhar tarefa</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">PATCH</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/tarefas/&#123;id&#125;/</code>
                            <span className="text-muted-foreground">- Atualizar tarefa</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">DELETE</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/tarefas/&#123;id&#125;/</code>
                            <span className="text-muted-foreground">- Excluir tarefa</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/tarefas/stats/</code>
                            <span className="text-muted-foreground">- Estatísticas de tarefas</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Conversas Tab */}
                <TabsContent value="conversations" className="space-y-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-6 w-6 text-primary" />
                        Gerenciamento de Conversas
                      </CardTitle>
                      <CardDescription>
                        Rastreie e gerencie histórico de comunicação com contatos
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                        <h4 className="font-semibold mb-2">💬 Estrutura de Conversas</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Conversa</strong> - Container da comunicação com um contato</li>
                          <li>• <strong>Interação</strong> - Mensagem individual dentro da conversa</li>
                          <li>• <strong>Nota</strong> - Anotação interna (não visível ao contato)</li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Listar Conversas</h3>
                          <Badge variant="outline">GET</Badge>
                        </div>
                        <CodeBlock
                          id="conversation-list"
                          code={`GET /conversas/?status=entrada&operador=3
Authorization: Bearer SEU_TOKEN`}
                        />
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Filtros disponíveis:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• <code className="bg-secondary px-1 rounded">status</code> - entrada, atendimento, finalizada, pendente, perdida</li>
                            <li>• <code className="bg-secondary px-1 rounded">operador</code> - ID do operador</li>
                            <li>• <code className="bg-secondary px-1 rounded">search</code> - Buscar por termo</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Enviar Mensagem (Interação)</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <CodeBlock
                          id="message-send"
                          code={`POST /conversas/{conversa_pk}/interacoes/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "mensagem": "Olá! Recebi sua solicitação e estou analisando.",
  "remetente": "operador",
  "tipo": "texto",
  "media_url": null
}`}
                        />
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Tipos de mensagem:</p>
                          <p className="text-sm text-muted-foreground">
                            texto, imagem, audio, video, documento
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            * Para tipos diferentes de "texto", o campo <code className="bg-secondary px-1 rounded">media_url</code> é obrigatório
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Adicionar Nota Interna</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <CodeBlock
                          id="note-create"
                          code={`POST /conversas/{conversa_pk}/notas/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "titulo": "Cliente solicitou desconto",
  "conteudo": "Negociar desconto de até 10% se fechar hoje",
  "tipo": "importante"
}`}
                        />
                        <div className="mt-3">
                          <p className="text-sm font-medium mb-1">Tipos de nota:</p>
                          <p className="text-sm text-muted-foreground">
                            info, importante, urgente, followup
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Respostas Rápidas</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Mensagens pré-definidas para agilizar o atendimento:
                        </p>
                        <CodeBlock
                          id="quick-reply"
                          code={`# Listar respostas rápidas
GET /respostas-rapidas/

# Criar nova resposta rápida
POST /respostas-rapidas/
{
  "atalho": "/saudacao",
  "titulo": "Saudação Inicial",
  "texto": "Olá! Seja bem-vindo ao nosso atendimento. Como posso ajudá-lo hoje?"
}`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Translator Tab */}
                <TabsContent value="translator" className="space-y-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-6 w-6 text-primary" />
                        Translator - Hub de Comunicação
                      </CardTitle>
                      <CardDescription>
                        Middleware que centraliza comunicação com múltiplos canais (WhatsApp, Telegram, Email, etc.)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                        <h4 className="font-semibold mb-2">🔄 Como Funciona</h4>
                        <p className="text-sm text-muted-foreground">
                          O Translator atua como middleware entre sua aplicação e canais de comunicação. 
                          Você configura os canais uma vez e depois envia/recebe mensagens através de endpoints unificados.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Configurar Canal de Comunicação</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <CodeBlock
                          id="channel-create"
                          code={`POST /translator/canais/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "nome": "WhatsApp Vendas",
  "tipo": "whatsapp",
  "credenciais": {
    "api_key": "sua_chave_api",
    "base_url": "https://api.evolution.com"
  }
}`}
                        />
                        <div className="mt-3">
                          <p className="text-sm font-medium mb-1">Tipos de canal disponíveis:</p>
                          <p className="text-sm text-muted-foreground">
                            whatsapp, telegram, instagram, email, evo
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Conectar WhatsApp (Evolution API)</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Fluxo simplificado para conectar via Evolution API:
                        </p>
                        <CodeBlock
                          id="whatsapp-connect"
                          code={`# 1. Conectar instância
POST /translator/conectar-whatsapp/
{
  "nome": "WhatsApp Vendas",
  "base_url": "https://evolution.example.com",
  "api_key": "sua_api_key",
  "instance": "vendas_instance"
}

# 2. Se requer_qr: true, gerar QR Code
POST /translator/gerar-qr-code/{canal_id}/

# Resposta contém: { "qr_code": "base64_image_data" }`}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Receber Mensagens (Incoming)</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Configure webhooks dos canais para apontarem para este endpoint:
                        </p>
                        <CodeBlock
                          id="incoming"
                          code={`POST /translator/incoming/
Content-Type: application/json

# Este endpoint recebe payloads de diferentes canais
# O Translator identifica o canal e traduz automaticamente`}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Enviar Mensagens (Outgoing)</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <CodeBlock
                          id="outgoing"
                          code={`POST /translator/outgoing/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "conversa_id": 123,
  "mensagem": "Sua solicitação foi processada!",
  "tipo": "texto"
}

# O Translator identifica o canal da conversa e
# traduz a mensagem para o formato correto`}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Webhooks Customizados</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Envie eventos automaticamente para sistemas externos (n8n, Make, etc.):
                        </p>
                        <CodeBlock
                          id="webhook-custom"
                          code={`POST /translator/webhooks-customizados/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "nome": "Enviar para N8N",
  "url": "https://seu-n8n.com/webhook/loomie",
  "filtro_canal": "whatsapp",
  "filtro_direcao": "entrada"
}`}
                        />
                        <div className="mt-3">
                          <p className="text-sm font-medium mb-1">Filtros:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• <code className="bg-secondary px-1 rounded">filtro_canal</code> - todos, whatsapp, telegram, etc.</li>
                            <li>• <code className="bg-secondary px-1 rounded">filtro_direcao</code> - entrada, saida, ambas</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Base de Conhecimento Tab */}
                <TabsContent value="knowledge" className="space-y-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Database className="h-6 w-6 text-primary" />
                        Base de Conhecimento
                      </CardTitle>
                      <CardDescription>
                        Sistema de banco de dados customizável para armazenar informações estruturadas
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                        <h4 className="font-semibold mb-2">🗄️ Estrutura</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Set</strong> - Uma "tabela" (ex: "Produtos", "Imóveis")</li>
                          <li>• <strong>Fields</strong> - "Colunas" da tabela (ex: "Nome", "Preço")</li>
                          <li>• <strong>Entries</strong> - "Linhas" ou registros individuais</li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Criar Base Completa</h3>
                          <Badge variant="outline">POST</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Crie tabela, colunas e registros em uma única requisição:
                        </p>
                        <CodeBlock
                          id="knowledge-full"
                          code={`POST /sets/create_full/
Content-Type: application/json
Authorization: Bearer SEU_TOKEN

{
  "client": 1,
  "name": "Imóveis",
  "fields": [
    {
      "name": "Endereço",
      "field_type": "text"
    },
    {
      "name": "Preço",
      "field_type": "number"
    },
    {
      "name": "Quartos",
      "field_type": "number"
    },
    {
      "name": "Disponível",
      "field_type": "boolean"
    }
  ],
  "entries": [
    {
      "values": {
        "Endereço": "Rua das Flores, 100",
        "Preço": 450000,
        "Quartos": 3,
        "Disponível": true
      }
    },
    {
      "values": {
        "Endereço": "Av. Paulista, 1500",
        "Preço": 850000,
        "Quartos": 4,
        "Disponível": false
      }
    }
  ]
}`}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Tipos de Campos</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-secondary/30 p-3 rounded-lg">
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• text</li>
                              <li>• number</li>
                              <li>• boolean</li>
                            </ul>
                          </div>
                          <div className="bg-secondary/30 p-3 rounded-lg">
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• date</li>
                              <li>• url</li>
                              <li>• email</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                        <p className="text-sm font-medium mb-2">💡 Casos de Uso</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Catálogo de produtos para consulta por bots</li>
                          <li>• Base de imóveis para atendimento automatizado</li>
                          <li>• FAQ estruturado para respostas rápidas</li>
                          <li>• Tabela de preços dinâmica</li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="font-semibold text-lg">Endpoints de Dashboard</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/dashboard/</code>
                            <span className="text-muted-foreground">- Dashboard principal</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/atendimento-stats/</code>
                            <span className="text-muted-foreground">- Estatísticas de atendimento</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline">GET</Badge>
                            <code className="bg-secondary px-2 py-1 rounded">/stats/tempo-resposta/</code>
                            <span className="text-muted-foreground">- Tempo de resposta</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Exemplos Tab */}
                <TabsContent value="examples" className="space-y-6 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-6 w-6 text-primary" />
                        Exemplos de Código
                      </CardTitle>
                      <CardDescription>
                        Exemplos práticos de integração em diferentes linguagens
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">JavaScript / Node.js</h3>
                        <CodeBlock
                          id="js-example"
                          code={`const axios = require('axios');

const API_URL = 'https://api.loomiecrm.com';
let authToken = null;

// Autenticar e obter token
async function authenticate() {
  try {
    const response = await axios.post(
      \`\${API_URL}/api-token-auth/\`,
      new URLSearchParams({
        username: 'seu_usuario',
        password: 'sua_senha'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    
    authToken = response.data.token;
    console.log('Autenticado com sucesso!');
    return authToken;
  } catch (error) {
    console.error('Erro na autenticação:', error.response?.data);
  }
}

// Criar novo contato
async function createContact(contactData) {
  try {
    const response = await axios.post(
      \`\${API_URL}/contatos/\`,
      contactData,
      {
        headers: {
          'Authorization': \`Bearer \${authToken}\`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Contato criado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar contato:', error.response?.data);
  }
}

// Exemplo de uso
async function main() {
  await authenticate();
  
  const newContact = await createContact({
    nome: 'João Silva',
    email: 'joao@example.com',
    telefone: '(11) 99999-9999',
    empresa: 'Tech Solutions'
  });
}

main();`}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3">Python</h3>
                        <CodeBlock
                          id="python-example"
                          code={`import requests

API_URL = 'https://api.loomiecrm.com'
auth_token = None

def authenticate():
    """Autentica e obtém token"""
    global auth_token
    
    url = f'{API_URL}/api-token-auth/'
    data = {
        'username': 'seu_usuario',
        'password': 'sua_senha'
    }
    
    response = requests.post(url, data=data)
    
    if response.status_code == 200:
        auth_token = response.json()['token']
        print('Autenticado com sucesso!')
        return auth_token
    else:
        print('Erro na autenticação:', response.text)
        return None

def create_contact(contact_data):
    """Cria novo contato"""
    url = f'{API_URL}/contatos/'
    headers = {
        'Authorization': f'Bearer {auth_token}',
        'Content-Type': 'application/json'
    }
    
    response = requests.post(url, json=contact_data, headers=headers)
    
    if response.status_code == 201:
        print('Contato criado:', response.json())
        return response.json()
    else:
        print('Erro:', response.text)
        return None

def list_conversations(status='entrada'):
    """Lista conversas por status"""
    url = f'{API_URL}/conversas/'
    headers = {
        'Authorization': f'Bearer {auth_token}'
    }
    params = {'status': status}
    
    response = requests.get(url, headers=headers, params=params)
    
    if response.status_code == 200:
        return response.json()
    else:
        print('Erro:', response.text)
        return None

# Exemplo de uso
if __name__ == '__main__':
    authenticate()
    
    # Criar contato
    new_contact = create_contact({
        'nome': 'Maria Santos',
        'email': 'maria@example.com',
        'telefone': '(11) 98888-8888'
    })
    
    # Listar conversas na entrada
    conversations = list_conversations('entrada')
    print(f'Conversas: {len(conversations)} encontradas')`}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3">cURL</h3>
                        <CodeBlock
                          id="curl-example"
                          code={`# Autenticar
curl -X POST https://api.loomiecrm.com/api-token-auth/ \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "username=seu_usuario&password=sua_senha"

# Resposta: {"token": "abc123..."}

# Criar contato
curl -X POST https://api.loomiecrm.com/contatos/ \\
  -H "Authorization: Bearer abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "nome": "Pedro Costa",
    "email": "pedro@example.com",
    "telefone": "(11) 97777-7777"
  }'

# Listar negócios
curl -X GET "https://api.loomiecrm.com/negocios/?ordering=-valor" \\
  -H "Authorization: Bearer abc123..."

# Criar tarefa
curl -X POST https://api.loomiecrm.com/tarefas/ \\
  -H "Authorization: Bearer abc123..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "titulo": "Follow-up com cliente",
    "responsavel": 1,
    "prioridade": "alta",
    "status": "pendente"
  }'`}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3">PHP</h3>
                        <CodeBlock
                          id="php-example"
                          code={`<?php

$apiUrl = 'https://api.loomiecrm.com';
$authToken = null;

// Autenticar
function authenticate($username, $password) {
    global $apiUrl, $authToken;
    
    $data = [
        'username' => $username,
        'password' => $password
    ];
    
    $ch = curl_init($apiUrl . '/api-token-auth/');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/x-www-form-urlencoded'
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode === 200) {
        $result = json_decode($response, true);
        $authToken = $result['token'];
        echo "Autenticado com sucesso!\\n";
        return $authToken;
    } else {
        echo "Erro na autenticação\\n";
        return null;
    }
}

// Criar contato
function createContact($contactData) {
    global $apiUrl, $authToken;
    
    $ch = curl_init($apiUrl . '/contatos/');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($contactData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $authToken,
        'Content-Type: application/json'
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode === 201) {
        return json_decode($response, true);
    } else {
        echo "Erro ao criar contato\\n";
        return null;
    }
}

// Exemplo de uso
authenticate('seu_usuario', 'sua_senha');

$newContact = createContact([
    'nome' => 'Ana Paula',
    'email' => 'ana@example.com',
    'telefone' => '(11) 96666-6666'
]);

print_r($newContact);

?>`}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Suporte</CardTitle>
                      <CardDescription>Precisa de ajuda com a integração?</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Nossa equipe de suporte está pronta para ajudá-lo:
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="outline" asChild>
                          <a href="mailto:suporte@loomiecrm.com">
                            📧 suporte@loomiecrm.com
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                            💬 WhatsApp: (11) 99999-9999
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;