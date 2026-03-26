export interface ApiRoute {
  id: number;
  method: string;
  endpoint: string;
  require: string;
  optional: string;
  detalhes: string;
  payload: string;
  markdown: string;
}

export const apiRoutes: ApiRoute[] = [
  {
    "id": 1,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/aceitou_termos/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para verificar se o usuário aceitou os termos de serviço. A autenticação é feita através de token e cookies, garantindo que apenas usuários autenticados possam acessar esta informação. Não há um corpo de resposta, pois a confirmação é feita apenas pelo status da requisição.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Verificação de Aceitação dos Termos\n\n**Método:** GET\n\n**Endpoint:** /aceitou_termos/\n\n**Autenticação:** tokenAuth, cookieAuth\n\n**Descrição:** Esta rota permite verificar se o usuário aceitou os termos de serviço. É crucial para garantir que os usuários estejam cientes e concordem com as políticas da plataforma antes de acessar funcionalidades específicas.\n\n**Respostas:**\n- **200 OK:** A requisição foi bem-sucedida e o usuário aceitou os termos.\n- **Outros status:** Indicam falhas de autenticação ou autorização."
  },
  {
    "id": 2,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/addons/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para registrar a aceitação de termos de serviço por parte do usuário. A autenticação é feita através de tokenAuth e cookieAuth, garantindo que apenas usuários autenticados possam acessar este recurso. Não há resposta de corpo para este endpoint, pois a operação é confirmada apenas pelo status de sucesso retornado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: POST /addons/\n\n### Descrição\nEste endpoint é utilizado para registrar a aceitação de termos de serviço por parte do usuário.\n\n### Segurança\nEste endpoint requer autenticação via tokenAuth e cookieAuth, garantindo que apenas usuários autenticados possam acessar este recurso.\n\n### Respostas\n- **200**: Operação bem-sucedida, sem resposta de corpo."
  },
  {
    "id": 3,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/ai-credentials/",
    "require": "| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| ordering | string   | Não         |\n| page     | integer  | Não         |\n| search   | string   | Não         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de uma lista de credenciais de AI, com suporte para ordenação, paginação e busca. A autenticação é realizada via token ou cookie, garantindo que apenas usuários autorizados possam acessar as informações. O resultado é retornado em um formato paginado, permitindo a navegação eficiente através de grandes conjuntos de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperação de Credenciais de AI\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/ai-credentials/\n\n### Parâmetros\n\n| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| ordering | string   | Não         |\n| page     | integer  | Não         |\n| search   | string   | Não         |\n\n### Segurança\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\nA resposta será um objeto JSON que contém uma lista paginada de credenciais de AI."
  },
  {
    "id": 4,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/ai-credentials/",
    "require": "| Nome    | Tipo     | Descrição                                               | Obrigatório |\n|---------|----------|---------------------------------------------------------|-------------|\n| ordering| string   | Qual campo usar ao ordenar os resultados.               | Não         |\n| page    | integer  | Um número de página dentro do conjunto de resultados.   | Não         |\n| search  | string   | Um termo de busca.                                      | Não         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a recuperação de uma lista de credenciais de IA, com suporte a ordenação e paginação. Os parâmetros de consulta permitem ao usuário especificar como os resultados devem ser ordenados, qual página deve ser retornada e um termo de busca para filtrar os resultados. A segurança é garantida através de autenticação por token e cookie.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listar Credenciais de IA\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/ai-credentials/\n\n### Parâmetros\n- **ordering**: Qual campo usar ao ordenar os resultados. (Opcional)\n- **page**: Um número de página dentro do conjunto de resultados paginado. (Opcional)\n- **search**: Um termo de busca. (Opcional)\n\n### Segurança\n- **tokenAuth**: Necessário para autenticação do usuário.\n- **cookieAuth**: Necessário para autenticação do usuário.\n\n### Resposta\n- **200 OK**: Retorna uma lista paginada de credenciais de IA."
  },
  {
    "id": 5,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/ai-credentials/{id}/",
    "require": "| Parâmetro | Tipo | Obrigatório |\n| --------- | ---- | ----------- |\n| id        | string | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de credenciais de IA associadas a um identificador específico. O usuário deve fornecer um token de autenticação e, opcionalmente, um cookie de autenticação para acessar este endpoint. A resposta bem-sucedida retorna um status 201, indicando que a credencial foi criada com sucesso. As credenciais criadas são essenciais para a integração de serviços de IA no CRM, permitindo que os desenvolvedores acessem funcionalidades avançadas de inteligência artificial de forma segura e controlada.",
    "payload": "{\"id\": \"12345\", \"credential\": \"exemplo_de_credential\", \"type\": \"tipo_de_credential\"}",
    "markdown": "## Criar Credenciais de IA\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/ai-credentials/{id}/\n\n### Parâmetros Requeridos\n| Parâmetro | Tipo | Obrigatório |\n| --------- | ---- | ----------- |\n| id        | string | Sim        |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a criação de credenciais de IA associadas a um identificador específico. O usuário deve fornecer um token de autenticação e, opcionalmente, um cookie de autenticação para acessar este endpoint. A resposta bem-sucedida retorna um status 201, indicando que a credencial foi criada com sucesso. As credenciais criadas são essenciais para a integração de serviços de IA no CRM, permitindo que os desenvolvedores acessem funcionalidades avançadas de inteligência artificial de forma segura e controlada."
  },
  {
    "id": 6,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/ai-credentials/{id}/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para recuperar as credenciais de IA associadas a um identificador específico. O parâmetro 'id' deve ser fornecido na URL e é obrigatório. A autenticação é realizada através de token e cookies, garantindo que apenas usuários autorizados possam acessar as informações. O retorno é um objeto JSON que representa as credenciais de IA, conforme definido no esquema AICredential.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperar Credenciais de IA\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/ai-credentials/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth e cookieAuth.\n\n### Resposta\nA resposta será um objeto JSON contendo as credenciais de IA associadas ao 'id' fornecido."
  },
  {
    "id": 7,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/ai-credentials/{id}/",
    "require": "| Nome  | Tipo   | Obrigatório |\n|-------|--------|-------------|\n| id    | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização das credenciais de IA associadas a um identificador específico. O parâmetro 'id' deve ser fornecido na URL e é obrigatório. O corpo da requisição deve conter os dados das credenciais de IA a serem atualizadas, e pode ser enviado em diferentes formatos (JSON, form-url-encoded ou multipart/form-data). A autenticação é realizada através de um token de autenticação e cookies. O sucesso da operação retorna um status 200 e as credenciais atualizadas.",
    "payload": "{\"clientId\": \"12345\", \"clientSecret\": \"abcde12345\", \"scope\": \"read write\"}",
    "markdown": "## Atualização de Credenciais de IA\n\n### Método\nPUT\n\n### Endpoint\n/backend.loomiecrm.com/ai-credentials/{id}/\n\n### Parâmetros Requeridos\n| Nome  | Tipo   | Obrigatório |\n|-------|--------|-------------|\n| id    | string | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve ser enviado em um dos seguintes formatos:\n- application/json\n- application/x-www-form-urlencoded\n- multipart/form-data\n\n### Autenticação\nA autenticação é realizada através de:\n- tokenAuth\n- cookieAuth\n\n### Resposta\nEm caso de sucesso, a resposta terá o status 200 e retornará as credenciais de IA atualizadas."
  },
  {
    "id": 8,
    "method": "PATCH",
    "endpoint": "/ai-credentials/{id}/",
    "require": "| Nome do Parâmetro | Tipo  | Obrigatório |\n|------------------|-------|-------------|\n| id               | string| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial das credenciais de IA, utilizando o método PATCH. O parâmetro 'id' é obrigatório e deve ser passado na URL. O corpo da requisição pode ser enviado em diferentes formatos, incluindo JSON, form-urlencoded e multipart/form-data, todos referenciando o esquema 'PatchedAICredentialRequest'. A autenticação é realizada através de tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam realizar essa operação. A resposta bem-sucedida retorna um objeto do tipo 'AICredential'.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Credenciais de IA\n\n### Método\nPATCH\n\n### Endpoint\n/ai-credentials/{id}/\n\n### Parâmetros Requeridos\n| Nome do Parâmetro | Tipo  | Obrigatório |\n|------------------|-------|-------------|\n| id               | string| Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a atualização parcial das credenciais de IA. O parâmetro 'id' deve ser fornecido na URL e é obrigatório. O corpo da requisição pode ser enviado em JSON, form-urlencoded ou multipart/form-data, todos referenciando o esquema 'PatchedAICredentialRequest'. A autenticação é feita através de tokenAuth ou cookieAuth. A resposta será um objeto do tipo 'AICredential'."
  },
  {
    "id": 9,
    "method": "DELETE",
    "endpoint": "/api-token-auth/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para deletar um token de autenticação associado a um usuário. O parâmetro obrigatório 'id' deve ser fornecido na URL para identificar o token a ser removido. A operação requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam realizar a exclusão. Uma vez que o token é deletado, o usuário não poderá mais acessar os recursos protegidos até que um novo token seja gerado. A resposta da operação é um status 204, indicando que a operação foi bem-sucedida e não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Deletar Token de Autenticação\n\n### Método\nDELETE\n\n### Endpoint\n/api-token-auth/\n\n### Parâmetros Requeridos\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Segurança\nEsta rota requer autenticação via token e cookie.\n\n### Resposta\nA operação retorna um status 204 sem corpo de resposta, indicando que o token foi deletado com sucesso."
  },
  {
    "id": 10,
    "method": "POST",
    "endpoint": "/api/{entity_type}/{entity_id}/tags/",
    "require": "| Nome do Parâmetro | Tipo     | Obrigatório |\n|------------------|----------|-------------|\n| entity_type      | string   | Sim         |\n| entity_id        | string   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a criação de tags associadas a uma entidade específica, onde 'entity_type' representa o tipo da entidade e 'entity_id' é o identificador único da entidade. O corpo da requisição deve ser enviado em um dos formatos suportados: application/x-www-form-urlencoded, multipart/form-data ou application/json, todos referenciando o esquema AuthTokenRequest. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autenticados possam criar tags. O sucesso da operação retorna um objeto AuthToken.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Criação de Tags para Entidades\n\n### Método\n**POST**\n\n### Endpoint\n`/api/{entity_type}/{entity_id}/tags/`\n\n### Parâmetros Requeridos\n| Nome do Parâmetro | Tipo     | Obrigatório |\n|------------------|----------|-------------|\n| entity_type      | string   | Sim         |\n| entity_id        | string   | Sim         |\n\n### Autenticação\nEste endpoint requer autenticação via `tokenAuth` e `cookieAuth`. É necessário que o usuário esteja autenticado para criar tags.\n\n### Resposta\nEm caso de sucesso, a resposta será um objeto do tipo `AuthToken`."
  },
  {
    "id": 11,
    "method": "GET",
    "endpoint": "/api/{entity_type}/{entity_id}/tags/",
    "require": "| Parâmetro      | Tipo     | Obrigatório |\n|----------------|----------|-------------|\n| entity_id      | integer  | Sim         |\n| entity_type    | string   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite gerenciar as tags de uma entidade específica, como Negócio ou Contato. Ao fazer uma requisição GET, todas as tags associadas à entidade identificada por entity_id e entity_type serão retornadas. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações das tags. Esta funcionalidade é crucial para a organização e categorização de entidades dentro do CRM, permitindo uma melhor gestão e filtragem dos dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Gerenciar Tags de Entidade\n\n### Descrição\nEsta rota permite listar todas as tags associadas a uma entidade específica no sistema. As entidades podem incluir Negócios, Contatos, entre outros.\n\n### Método\n**GET**\n\n### Parâmetros\n| Parâmetro      | Tipo     | Obrigatório |\n|----------------|----------|-------------|\n| entity_id      | integer  | Sim         |\n| entity_type    | string   | Sim         |\n\n### Segurança\nEsta rota requer autenticação via **tokenAuth** e **cookieAuth**. Apenas usuários autenticados poderão acessar as informações das tags.\n\n### Resposta\nA resposta para uma requisição bem-sucedida (200) não contém corpo."
  },
  {
    "id": 12,
    "method": "POST",
    "endpoint": "/api/{entity_type}/{entity_id}/tags/",
    "require": "| Nome           | Tipo     | Obrigatório |\n|----------------|----------|-------------|\n| entity_id      | integer  | Sim         |\n| entity_type    | string   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Essa rota permite gerenciar as tags de uma entidade específica, como Negócio ou Contato. É necessário fornecer o ID da entidade e o tipo da entidade como parâmetros de caminho. A autenticação é feita através de tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam adicionar tags. Essa funcionalidade é crucial para a organização e categorização de entidades dentro do CRM, permitindo que os usuários adicionem tags relevantes para facilitar a busca e filtragem.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Gerenciar Tags de Entidade\n\n### Método\nPOST\n\n### Endpoint\n/api/{entity_type}/{entity_id}/tags/\n\n### Descrição\nEssa rota permite adicionar uma tag a uma entidade específica (como Negócio ou Contato) no sistema.\n\n### Parâmetros\n| Nome           | Tipo     | Obrigatório |\n|----------------|----------|-------------|\n| entity_id      | integer  | Sim         |\n| entity_type    | string   | Sim         |\n\n### Segurança\nA autenticação é realizada através de:\n- tokenAuth\n- cookieAuth\n\n### Resposta\nA resposta para uma adição de tag bem-sucedida não contém um corpo de resposta."
  },
  {
    "id": 13,
    "method": "DELETE",
    "endpoint": "/api/atendimento/contatos/{contato_id}/historico/",
    "require": "| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| contato_id   | integer  | Sim         |\n| entity_type  | string   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por remover o histórico de um contato específico. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam realizar essa operação. Ao ser bem-sucedida, a rota retorna um status 204, indicando que a operação foi concluída sem erro e sem conteúdo adicional a ser retornado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## DELETE /api/atendimento/contatos/{contato_id}/historico/\n\n### Descrição\nEsta rota permite remover o histórico de um contato específico no sistema.\n\n### Parâmetros Requeridos\n| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| contato_id   | integer  | Sim         |\n| entity_type  | string   | Sim         |\n\n### Segurança\nA operação requer autenticação, que pode ser realizada através de tokenAuth ou cookieAuth.\n\n### Resposta\nUm status 204 é retornado em caso de sucesso, indicando que a operação foi concluída sem erros e não há corpo de resposta."
  },
  {
    "id": 14,
    "method": "GET",
    "endpoint": "/api/atendimento/conversas/{conversa_id}/",
    "require": "| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| contato_id   | integer  | Sim         |",
    "optional": "| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| limit        | integer  | Não         |\n| status       | string   | Não         |",
    "detalhes": "Esta rota permite recuperar o histórico completo de conversas de um contato específico. O parâmetro 'contato_id' é obrigatório e deve ser um número inteiro que identifica o contato. Os parâmetros 'limit' e 'status' são opcionais, permitindo ao usuário filtrar o número de conversas retornadas e o status das mesmas, respectivamente. A autenticação é feita através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar essas informações.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## GET /api/atendimento/conversas/{conversa_id}/\n\n### Descrição\nRetorna histórico completo de conversas de um contato específico.\n\n### Parâmetros de Consulta\n- **limit**: Número máximo de conversas a retornar (padrão: 20)\n- **status**: Filtro opcional de status separados por vírgula (ex: \"finalizada,perdida\"). Se não informado, retorna todas as conversas.\n\n### Resposta\n- **200**: Retorna um array de objetos com o histórico de conversas. Cada objeto contém:\n  - **id**: Identificador da conversa\n  - **criado_em**: Data de criação da conversa\n  - **finalizada_em**: Data de finalização da conversa\n  - **status**: Status da conversa\n  - **tags**: Tags associadas à conversa\n  - **operador_nome**: Nome do operador responsável\n  - **total_mensagens**: Total de mensagens trocadas\n  - **resumo**: Resumo da conversa\n\n### Segurança\nEsta rota requer autenticação via tokenAuth e cookieAuth."
  },
  {
    "id": 15,
    "method": "DELETE",
    "endpoint": "/api/atendimento/conversas/assumir-proximo/",
    "require": "| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| conversa_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão permanente de uma conversa e todas as suas interações associadas, garantindo conformidade com a LGPD. A operação é atômica, ou seja, tanto a conversa quanto suas interações são deletadas em uma única transação. É necessário que o usuário tenha as permissões adequadas, verificadas através da função get_ids_visiveis, que considera a hierarquia de acesso do sistema. A segurança é garantida através de autenticação via token e cookie.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## DELETE /api/atendimento/conversas/assumir-proximo/\n\n### Descrição\n🗑️ LGPD: Excluir conversa e todas as interações permanentemente.\n\n### Segurança\n- Verifica permissão via get_ids_visiveis (hierarquia)\n- Deleção atômica (Conversa + Interações)\n\n### Resposta\n204 No Content"
  },
  {
    "id": 16,
    "method": "POST",
    "endpoint": "/api/atendimento/historico/conversas/{conversa_id}/",
    "require": "| Parâmetro       | Tipo     | Obrigatório |\n|----------------|----------|-------------|\n| conversa_id     | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para assumir o próximo chamado da fila de atendimento de forma FIFO (First In, First Out). A lógica implementada busca conversas que estão com o status 'aguardando' e que não possuem um atendente atribuído. As conversas são filtradas com base na hierarquia do usuário que está realizando a requisição, garantindo que apenas os chamados pertinentes ao usuário sejam considerados. As conversas são ordenadas pela data de criação, priorizando as mais antigas. Para prevenir condições de corrida, utiliza-se o método select_for_update(). Após a seleção, a conversa é atribuída ao usuário que fez a requisição, e o status da conversa é atualizado para 'atendimento'.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## POST /api/atendimento/historico/conversas/{conversa_id}/\n\n### Descrição\n🎯 ENDPOINT DEDICADO: Assumir próximo chamado da fila (FIFO)\n\n### Lógica\n1. Busca conversas com status='aguardando' sem atendente atribuído\n2. Filtra pela hierarquia do usuário (get_ids_hierarquia)\n3. Ordena por criado_em (FIFO - mais antiga primeiro)\n4. Usa select_for_update() para prevenir condições de corrida\n5. Atribui ao request.user e muda status para 'atendimento'\n\n### Respostas\n- **200**: Chamado assumido com sucesso\n- **404**: Não há chamados aguardando\n- **500**: Erro interno\n\n### Segurança\n- tokenAuth\n- cookieAuth"
  },
  {
    "id": 17,
    "method": "GET",
    "endpoint": "/api/atendimento/historico/conversas/{conversa_id}/",
    "require": "| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| conversa_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de detalhes completos de uma conversa específica no histórico de atendimentos. É um modo somente leitura, ideal para visualização na sidebar. O acesso é controlado através de autenticação, utilizando tanto token quanto cookie. A resposta não contém um corpo, mas retorna um status 200 em caso de sucesso.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Detalhes da Rota\n\n### Método\nGET\n\n### Endpoint\n/api/atendimento/historico/conversas/{conversa_id}/\n\n### Descrição\nEsta rota permite a recuperação de detalhes completos de uma conversa específica no histórico de atendimentos. É um modo somente leitura, ideal para visualização na sidebar.\n\n### Parâmetros Requeridos\n| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| conversa_id  | integer  | Sim         |\n\n### Autenticação\nEsta rota requer autenticação através de:\n- tokenAuth\n- cookieAuth\n\n### Resposta\nA resposta não contém um corpo, mas retorna um status 200 em caso de sucesso."
  },
  {
    "id": 18,
    "method": "POST",
    "endpoint": "/api/atendimento/pricing/janelas-ativas/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite o envio de mídias via WhatsApp, incluindo áudio, imagem, documento e vídeo. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam enviar mídias. É importante ressaltar que não há resposta no corpo da requisição, indicando que a operação é realizada com sucesso sem retorno de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## POST /api/atendimento/pricing/janelas-ativas/\n\n### Descrição\nEsta API permite o envio de mídia (áudio, imagem, documento, vídeo) via WhatsApp.\n\n### Autenticação\nA autenticação é feita através de:\n- **tokenAuth**\n- **cookieAuth**\n\n### Respostas\n- **200**: Operação realizada com sucesso, sem corpo de resposta."
  },
  {
    "id": 19,
    "method": "GET",
    "endpoint": "/api/atendimento/pricing/relatorio/",
    "require": "canal_id (int, optional)\ntelefone (str, optional)",
    "optional": "Nenhum",
    "detalhes": "Esta rota retorna uma lista de janelas de atendimento que estão abertas nas últimas 24 horas. É possível filtrar os resultados por um canal específico utilizando o parâmetro canal_id ou por um número de telefone específico utilizando o parâmetro telefone. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar essas informações. Essa funcionalidade é crucial para a gestão de atendimentos em tempo real, permitindo que as equipes monitorem e gerenciem janelas de atendimento ativas de forma eficiente.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /api/atendimento/pricing/relatorio/\n\n### Descrição\nRetorna lista de janelas de 24h atualmente abertas.\n\n### Parâmetros de Consulta\n- **canal_id** (int, optional): Filtrar por canal específico\n- **telefone** (str, optional): Filtrar por telefone específico\n\n### Resposta\n- **200 OK**: Sem corpo de resposta.\n\n### Segurança\n- **tokenAuth**: Necessário para autenticação.\n- **cookieAuth**: Alternativa para autenticação."
  },
  {
    "id": 20,
    "method": "GET",
    "endpoint": "/api/atendimento/pricing/resumo/",
    "require": "| Nome      | Tipo | Obrigatório |\n|-----------|------|-------------|\n| canal_id  | int  | Sim         |",
    "optional": "| Nome  | Tipo | Obrigatório |\n|-------|------|-------------|\n| mes   | int  | Não         |\n| ano   | int  | Não         |",
    "detalhes": "Este endpoint retorna um relatório detalhado sobre os custos associados a um canal específico em um mês determinado. O parâmetro canal_id é obrigatório, enquanto mes e ano são opcionais, com valores padrão definidos como o mês e ano atuais, respectivamente. A autenticação é necessária através de tokenAuth ou cookieAuth. O impacto no ecossistema CRM é significativo, pois permite que os usuários analisem os custos de atendimento por canal e categoria, facilitando a tomada de decisões estratégicas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Resumo de Custos do Canal\n\nEste endpoint permite a obtenção de um relatório detalhado dos custos de um canal em um mês específico.\n\n### Parâmetros de Consulta\n- **canal_id** (int, obrigatório): ID do canal para o qual o relatório deve ser gerado.\n- **mes** (int, opcional): Mês do relatório (1-12). Se não fornecido, o mês atual será utilizado.\n- **ano** (int, opcional): Ano do relatório (ex: 2025). Se não fornecido, o ano atual será utilizado.\n\n### Resposta\nA resposta será um objeto JSON contendo informações detalhadas sobre os custos, incluindo:\n- **canal**: Nome do canal (ex: WhatsApp Business)\n- **mes**: Mês do relatório\n- **ano**: Ano do relatório\n- **total_janelas**: Total de janelas de atendimento\n- **total_cobradas**: Total de janelas cobradas\n- **total_gratuitas**: Total de janelas gratuitas\n- **por_categoria**: Detalhes por categoria (ex: MARKETING, UTILITY, SERVICE, AUTHENTICATION)\n- **custo_estimado_total**: Custo total estimado para o mês\n\n### Segurança\nEste endpoint requer autenticação via **tokenAuth** ou **cookieAuth**.\n\n### Impacto no CRM\nO uso deste endpoint é crucial para a análise de custos de atendimento, permitindo que os gestores do CRM façam ajustes e melhorias nas estratégias de atendimento."
  },
  {
    "id": 21,
    "method": "GET",
    "endpoint": "/api/atendimento/pricing/verificar-janela/",
    "require": "periodo (string)",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite ao usuário verificar um resumo geral de custos de todos os canais WABA, com a opção de filtrar os resultados por um período específico. O parâmetro 'periodo' é opcional e pode assumir os valores 'mes_atual', 'mes_anterior' ou 'ultimos_30_dias', sendo que o padrão é 'mes_atual'. A autenticação é realizada através de tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações. O impacto no ecossistema CRM é significativo, pois fornece dados financeiros essenciais para a tomada de decisões estratégicas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Verificação de Janela de Preços\n\n### Método\nGET\n\n### Endpoint\n/api/atendimento/pricing/verificar-janela/\n\n### Parâmetros Requeridos\n| Parâmetro | Tipo   | Descrição                                       |\n|------------|--------|------------------------------------------------|\n| periodo    | string | Período para filtrar os resultados.            |\n\n### Parâmetros Opcionais\nNenhum\n\n### Resposta\nRetorna um resumo geral de custos de todos os canais WABA, incluindo informações detalhadas sobre o número total de janelas, janelas cobradas, janelas gratuitas e custo estimado. A resposta não possui corpo para o código de status 200."
  },
  {
    "id": 22,
    "method": "GET",
    "endpoint": "/api/atendimento/typing/",
    "require": "| Parâmetro   | Tipo   | Obrigatório | \n|-------------|--------|-------------| \n| canal_id    | int    | Sim         | \n| telefone    | str    | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota verifica se há uma janela ativa para um contato específico, utilizando o ID do canal e o telefone do contato como parâmetros de consulta. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar essa informação. A resposta pode indicar se a janela está ativa ou não, e em caso negativo, fornece uma mensagem informativa.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Verificação de Janela Ativa\n\n### Descrição\nEsta rota permite verificar se existe uma janela ativa para um contato específico, utilizando o ID do canal e o telefone do contato como parâmetros de consulta.\n\n### Parâmetros de Consulta\n- **canal_id** (int, obrigatório): ID do canal associado ao contato.\n- **telefone** (str, obrigatório): Número de telefone do contato.\n\n### Respostas\n- **200 OK**: Retorna se a janela está ativa ou não.\n  - Se ativa:\n    ```json\n    {\n        \"janela_ativa\": true,\n        \"janela\": {\n            \"id\": 123,\n            \"categoria\": \"SERVICE\",\n            \"data_inicio\": \"2025-11-28T10:00:00Z\",\n            \"data_fim\": \"2025-11-29T10:00:00Z\",\n            \"tempo_restante_horas\": 18.5,\n            \"billable\": true\n        }\n    }\n    ```\n  - Se não ativa:\n    ```json\n    {\n        \"janela_ativa\": false,\n        \"mensagem\": \"Janela de 24h fechada. É necessário enviar um Template.\"\n    }\n    ```\n\n### Autenticação\nEsta rota requer autenticação via **tokenAuth** ou **cookieAuth**."
  },
  {
    "id": 23,
    "method": "POST",
    "endpoint": "/api/atendimento/typing/",
    "require": "| Parâmetro        | Tipo   | Obrigatório |\n|------------------|--------|-------------|\n| numero           | String | Sim         |",
    "optional": "| Parâmetro        | Tipo   | Obrigatório |\n|------------------|--------|-------------|\n| canal_id         | Integer| Não         |\n| presence         | String | Não         |\n| message_length   | Integer| Não         |\n| delay            | Integer| Não         |",
    "detalhes": "Este endpoint permite enviar um indicador de presença para um número específico. O parâmetro 'numero' é obrigatório e deve ser um número de telefone válido. Os parâmetros 'canal_id', 'presence', 'message_length' e 'delay' são opcionais e permitem personalizar a mensagem de presença. A presença pode ser definida como 'composing', 'available', 'unavailable', 'recording' ou 'paused'. O cálculo do delay é baseado no comprimento da mensagem ou no valor fornecido diretamente. O endpoint requer autenticação via token ou cookie.",
    "payload": "{\"numero\": \"5511999999999\", \"canal_id\": 1, \"presence\": \"composing\", \"message_length\": 100, \"delay\": 5}",
    "markdown": "## Endpoint para Enviar Indicador de Presença\n\n### Método\nPOST\n\n### Endpoint\n/api/atendimento/typing/\n\n### Descrição\nEste endpoint permite enviar um indicador de presença (digitando...) para um número específico. O parâmetro 'numero' é obrigatório e deve ser um número de telefone válido. Os parâmetros 'canal_id', 'presence', 'message_length' e 'delay' são opcionais e permitem personalizar a mensagem de presença.\n\n### Parâmetros\n- **numero** (String): Número de telefone, obrigatório.\n- **canal_id** (Integer): ID do CanalConfig (Evolution/WABA), opcional.\n- **presence** (String): Estado de presença, padrão é 'composing', opcional.\n- **message_length** (Integer): Tamanho da mensagem, opcional.\n- **delay** (Integer): Delay em segundos, opcional.\n\n### Cálculo de Delay\n- Se 'message_length' for fornecido, calcula: min(max(length * 0.03, 2), 15) segundos.\n- Se 'delay' for fornecido diretamente, usa esse valor.\n- Sem nenhum dos dois, envia apenas 1 sinal (sem manter ativo).\n\n### Respostas\n- **200**: Indicador enviado com sucesso.\n- **400**: Parâmetros inválidos.\n- **404**: Canal não encontrado.\n- **500**: Erro ao enviar.\n\n### Segurança\nRequer autenticação via token ou cookie."
  },
  {
    "id": 24,
    "method": "POST",
    "endpoint": "/api/configuracao-sistema/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por gerar um token de autenticação para a API. É necessário que o usuário forneça as credenciais corretas para que o token seja gerado com sucesso. A segurança é garantida através de autenticação baseada em token e cookie, permitindo que o sistema valide a identidade do usuário antes de conceder acesso aos recursos protegidos.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Geração de Token de Autenticação\n\nEsta rota permite que usuários autenticados gerem um token de autenticação para acessar a API.\n\n### Método\n- **POST**\n\n### Endpoint\n- **/api/configuracao-sistema/**\n\n### Segurança\n- **tokenAuth**: Necessário para autenticação.\n- **cookieAuth**: Alternativa para autenticação.\n\n### Resposta\n- **200**: Indica que o token foi gerado com sucesso, mas não há corpo de resposta."
  },
  {
    "id": 25,
    "method": "GET",
    "endpoint": "/api/configuracao-sistema/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para gerenciar as configurações do sistema. Ela requer autenticação através de um token de autenticação ou um cookie de autenticação. A resposta bem-sucedida retorna um status 200, mas não contém um corpo de resposta, indicando que as informações de configuração são geridas internamente e não são expostas ao cliente.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Gerenciar Configurações do Sistema\n\n### Método\nGET\n\n### Endpoint\n/api/configuracao-sistema/\n\n### Descrição\nEsta rota é utilizada para gerenciar as configurações do sistema.\n\n### Segurança\nRequer autenticação através de:\n- tokenAuth\n- cookieAuth\n\n### Respostas\n- **200**: Requisição bem-sucedida, mas sem corpo de resposta."
  },
  {
    "id": 26,
    "method": "PUT",
    "endpoint": "/api/criar-usuario-teste/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para gerenciar as configurações do sistema, permitindo a atualização de informações relevantes. É necessário autenticação via token e cookie para acessar esta funcionalidade. A resposta bem-sucedida não retorna um corpo, apenas um status 200, indicando que a operação foi realizada com sucesso.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Gerenciar Configurações do Sistema\n\n### Método\nPUT\n\n### Endpoint\n/api/criar-usuario-teste/\n\n### Requisitos\nNenhum\n\n### Parâmetros Opcionais\nNenhum\n\n### Resposta\n- **200**: A operação foi realizada com sucesso, sem corpo de resposta.\n\n### Segurança\nEsta rota requer autenticação via **tokenAuth** e **cookieAuth**.\n\n### Impacto no CRM\nEsta operação permite que as configurações do sistema sejam atualizadas, impactando diretamente a gestão e a operação do CRM."
  },
  {
    "id": 27,
    "method": "POST",
    "endpoint": "/api/message-translator/canais/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de um usuário para fins de teste. É necessária autenticação via token e cookie para acessar esta funcionalidade. O sucesso da operação é indicado por um código de status 200, mas não há corpo de resposta, o que significa que a confirmação do sucesso deve ser verificada através do código de status retornado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Criar Usuário para Teste\n\n### Descrição\nEsta rota permite a criação de um usuário para fins de teste.\n\n### Método\nPOST\n\n### Endpoint\n/api/message-translator/canais/\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Respostas\n- **200**: Sucesso, mas sem corpo de resposta."
  },
  {
    "id": 28,
    "method": "GET",
    "endpoint": "/api/message-translator/canais/",
    "require": "| Nome   | Tipo    | Obrigatório | Descrição                                              |\n|--------|---------|-------------|-------------------------------------------------------|\n| ordering | string  | Não         | Qual campo usar ao ordenar os resultados.              |\n| page    | integer | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search  | string  | Não         | Um termo de busca.                                    |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de uma lista de canais configurados no sistema. A resposta inclui informações sobre os canais, que podem ser filtrados e ordenados usando os parâmetros de consulta. A autenticação é necessária através de token ou cookie, garantindo que apenas usuários autorizados possam acessar esta informação. A rota é parte do CRUD para configuração de canais, permitindo a gestão eficiente dos mesmos.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Listar Canais\n\n### Método\nGET\n\n### Descrição\nEsta rota permite a recuperação de uma lista de canais configurados no sistema, utilizando parâmetros de consulta para filtragem e ordenação dos resultados.\n\n### Parâmetros\n| Nome   | Tipo    | Obrigatório | Descrição                                              |\n|--------|---------|-------------|-------------------------------------------------------|\n| ordering | string  | Não         | Qual campo usar ao ordenar os resultados.              |\n| page    | integer | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search  | string  | Não         | Um termo de busca.                                    |\n\n### Segurança\nEsta rota requer autenticação, que pode ser realizada através de:\n- **tokenAuth**\n- **cookieAuth**\n\n### Resposta\nA resposta será um objeto JSON que contém uma lista paginada de canais. Se a autenticação for bem-sucedida, o sistema retornará um status 200 com os dados solicitados."
  },
  {
    "id": 29,
    "method": "POST",
    "endpoint": "/api/message-translator/canais/{channel_id}/templates/",
    "require": "| Parâmetro      | Tipo   | Obrigatório |\n|----------------|--------|-------------|\n| channel_id     | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de templates para canais específicos dentro do sistema de tradução de mensagens. O parâmetro `channel_id` deve ser fornecido na URL e refere-se ao identificador único do canal. A configuração do canal é enviada no corpo da requisição em formato JSON, `application/x-www-form-urlencoded` ou `multipart/form-data`. O endpoint requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam criar templates. O sucesso da operação retorna um código de status 201, indicando que o template foi criado com sucesso.",
    "payload": "{\"templateName\": \"Exemplo de Template\", \"content\": \"Conteúdo do template aqui.\"}",
    "markdown": "## Criar Template de Canal\n\n### Descrição\nEste endpoint permite a criação de templates para canais de mensagens específicos no sistema de tradução.\n\n### Método\n`POST`\n\n### Endpoint\n`/api/message-translator/canais/{channel_id}/templates/`\n\n### Parâmetros Requeridos\n| Parâmetro      | Tipo   | Obrigatório |\n|----------------|--------|-------------|\n| channel_id     | string | Sim         |\n\n### Autenticação\nEste endpoint requer autenticação através de:\n- `tokenAuth`\n- `cookieAuth`\n\n### Resposta\nUm código de status `201` é retornado ao criar um template com sucesso. O corpo da resposta contém os detalhes do template criado."
  },
  {
    "id": 30,
    "method": "GET",
    "endpoint": "/api/message-translator/canais/{id}/",
    "require": "| Parâmetro   | Tipo     | Obrigatório |\n|-------------|----------|-------------|\n| channel_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint lista os templates de mensagem APROVADOS disponíveis no canal WABA. O fluxo envolve a validação de multi-tenant, busca e validação do canal, extração de credenciais e requisição à Graph API do WhatsApp. Retorna uma lista de templates formatados ou erros baseados em diferentes cenários de falha.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /api/message-translator/canais/{id}/\n\n### Descrição\nLista os templates de mensagem APROVADOS disponíveis no canal WABA.\n\n### Fluxo de Execução\n1. Valida multi-tenant via get_ids_visiveis().\n2. Busca canal e valida tipo WABA.\n3. Extrai credenciais (waba_id, access_token).\n4. Faz requisição para Graph API v19.0: GET /{waba_id}/message_templates?status=APPROVED.\n5. Processa resposta e formata templates com componentes e variáveis.\n6. Retorna lista de templates com metadata.\n\n### Respostas\n- **200**: Lista de templates formatados.\n- **400**: Tipo de canal inválido (não é WABA).\n- **404**: Canal não encontrado ou sem permissão.\n- **500**: Credenciais inválidas ou erro de parsing.\n- **502**: Erro na API do WhatsApp.\n- **504**: Timeout na API do WhatsApp.\n\n### Segurança\n- **tokenAuth**: Requer autenticação via token.\n- **cookieAuth**: Requer autenticação via cookie.\n\n### Referência\nBaseado na documentação oficial: https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/message_templates."
  },
  {
    "id": 31,
    "method": "GET",
    "endpoint": "/api/message-translator/canais/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|------------|\n| id   | string | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a recuperação das configurações de um canal específico, identificado pelo parâmetro `id`. É parte do CRUD para configuração de canais, permitindo que os usuários acessem as informações detalhadas de um canal existente. O acesso é protegido por autenticação via token e cookies, garantindo que apenas usuários autorizados possam acessar as informações do canal.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperação de Canal\n\n### Método\nGET\n\n### Endpoint\n/api/message-translator/canais/{id}/\n\n### Descrição\nEste endpoint permite a recuperação das configurações de um canal específico, identificado pelo parâmetro `id`. É parte do CRUD para configuração de canais, permitindo que os usuários acessem as informações detalhadas de um canal existente.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|------------|\n| id   | string | Sim        |\n\n### Segurança\nO acesso a este endpoint é protegido por autenticação via `tokenAuth` e `cookieAuth`, garantindo que apenas usuários autorizados possam acessar as informações do canal.\n\n### Resposta\nA resposta será um objeto JSON contendo as configurações do canal."
  },
  {
    "id": 32,
    "method": "PUT",
    "endpoint": "/api/message-translator/canais/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização das configurações de canais no sistema de tradução de mensagens. O parâmetro 'id' deve ser fornecido na URL e representa o identificador único do canal a ser atualizado. A autenticação é necessária, utilizando tanto o token de autenticação quanto a autenticação por cookie. O corpo da requisição deve conter os dados de configuração do canal, que podem ser enviados em formato JSON, x-www-form-urlencoded ou multipart/form-data. A resposta bem-sucedida retorna os dados atualizados do canal.",
    "payload": "{\"nome\":\"Canal de Exemplo\",\"descricao\":\"Descrição do canal de exemplo\",\"ativo\":true}",
    "markdown": "## Atualização de Canal\n\n### Método\nPUT\n\n### Endpoint\n/api/message-translator/canais/{id}/\n\n### Descrição\nEsta rota permite que os usuários atualizem as configurações de um canal específico no sistema de tradução de mensagens.\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve conter as informações do canal a ser atualizado, que podem ser enviadas nos seguintes formatos:\n- application/json\n- application/x-www-form-urlencoded\n- multipart/form-data\n\n### Autenticação\nEsta rota requer autenticação através de:\n- tokenAuth\n- cookieAuth\n\n### Resposta\nEm caso de sucesso, a resposta será um objeto JSON contendo as informações atualizadas do canal."
  },
  {
    "id": 33,
    "method": "PATCH",
    "endpoint": "/api/message-translator/canais/{id}/",
    "require": "| Nome  | Tipo   | Obrigatório |\n|-------|--------|-------------|\n| id    | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial das configurações de canais no sistema de tradução de mensagens. O parâmetro 'id' é obrigatório e identifica o canal que deve ser atualizado. A autenticação é necessária, utilizando tanto o token de autenticação quanto a autenticação via cookie. A resposta bem-sucedida retorna as configurações atualizadas do canal.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Canais\n\n### Método\nPATCH\n\n### Endpoint\n/api/message-translator/canais/{id}/\n\n### Descrição\nEsta rota permite a atualização parcial das configurações de canais no sistema de tradução de mensagens.\n\n### Parâmetros\n| Nome  | Tipo   | Obrigatório |\n|-------|--------|-------------|\n| id    | string | Sim         |\n\n### Segurança\nEsta rota requer autenticação. Os métodos de autenticação suportados são:\n- tokenAuth\n- cookieAuth\n\n### Resposta\nA resposta bem-sucedida retorna as configurações atualizadas do canal."
  },
  {
    "id": 34,
    "method": "DELETE",
    "endpoint": "/api/message-translator/canais/{id}/testar_conexao/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para testar a conexão de um canal específico no sistema de tradução de mensagens. A operação requer um identificador único do canal, que deve ser fornecido na URL. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam realizar a operação. O sucesso da operação resultará em uma resposta HTTP 204, indicando que a conexão foi testada sem erros, mas não há corpo de resposta a ser retornado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Testar Conexão do Canal\n\nEste endpoint permite que os usuários testem a conexão de um canal específico no sistema de tradução de mensagens.\n\n### Método\nDELETE\n\n### Endpoint\n/api/message-translator/canais/{id}/testar_conexao/\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEste endpoint requer autenticação via token e cookie.\n\n### Resposta\nUma resposta bem-sucedida resultará em um código de status HTTP 204, indicando que a operação foi realizada com sucesso e não há corpo de resposta."
  },
  {
    "id": 35,
    "method": "POST",
    "endpoint": "/api/message-translator/canais/uso_canais/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite testar a conexão com um canal usando credenciais reais armazenadas no banco de dados. O parâmetro 'id' é obrigatório e identifica o canal específico a ser testado. O corpo da requisição deve conter informações de configuração do canal, conforme definido no esquema 'CanalConfigRequest'. O acesso a esta rota é protegido por autenticação via token e cookies, garantindo que apenas usuários autorizados possam testar as conexões. Uma resposta bem-sucedida retornará um objeto do tipo 'CanalConfig', que contém detalhes sobre a configuração do canal testado.",
    "payload": "{\"configuracao\":\"exemplo\",\"usuario\":\"usuario_exemplo\",\"senha\":\"senha_exemplo\"}",
    "markdown": "## Testar Conexão com Canal\n\nEsta rota permite testar a conexão com um canal específico utilizando credenciais reais do banco de dados.\n\n### Método\nPOST\n\n### Endpoint\n/api/message-translator/canais/uso_canais/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Corpo da Requisição\nA requisição deve conter um corpo no formato JSON, `application/x-www-form-urlencoded` ou `multipart/form-data`, conforme o esquema 'CanalConfigRequest'.\n\n### Segurança\nA rota é protegida por autenticação via token e cookies, garantindo que apenas usuários autorizados possam acessar.\n\n### Resposta\nUma resposta bem-sucedida retornará um objeto do tipo 'CanalConfig', que contém informações sobre a configuração do canal testado."
  },
  {
    "id": 36,
    "method": "GET",
    "endpoint": "/api/message-translator/conectar-whatsapp/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para retornar informações sobre o uso de canais do tenant. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar os dados. O impacto no ecossistema CRM é significativo, pois permite que os usuários integrem e gerenciem suas comunicações via WhatsApp de forma eficiente, melhorando a experiência do cliente e a gestão de interações.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Conectar WhatsApp\n\n### Descrição\nEste endpoint permite que os usuários recuperem informações sobre o uso de canais do tenant.\n\n### Método\nGET\n\n### Endpoint\n/api/message-translator/conectar-whatsapp/\n\n### Autenticação\nEste endpoint requer autenticação via tokenAuth e cookieAuth.\n\n### Resposta\nA resposta será um objeto JSON que segue o esquema definido em CanalConfig, retornando informações relevantes sobre os canais de comunicação."
  },
  {
    "id": 37,
    "method": "POST",
    "endpoint": "/api/message-translator/evolution-webhook/",
    "require": "| Nome        | Tipo     | Obrigatório |\n|-------------|----------|-------------|\n| nome        | string   | Sim         |\n| base_url    | string   | Sim         |\n| instance    | string   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite conectar e salvar uma instância do WhatsApp utilizando a API Evolution. A autenticação é feita através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam realizar a conexão. O payload deve incluir o nome da conexão, a URL base da API e a instância específica do CRM. A resposta indicará se a conexão foi bem-sucedida e se um QR Code é necessário para a autenticação.",
    "payload": "{\\n  \\\"nome\\\": \\\"WhatsApp Principal\\\",\\n  \\\"base_url\\\": \\\"https://evo.loomiecrm.com\\\",\\n  \\\"instance\\\": \\\"crm_teste_2025\\\"\\n}",
    "markdown": "## Conectar WhatsApp Evolution API\n\n### Método\nPOST\n\n### Endpoint\n/api/message-translator/evolution-webhook/\n\n### Descrição\nEsta rota conecta e salva uma instância do WhatsApp utilizando a API Evolution.\n\n### Autenticação\nA autenticação é realizada através de:\n- tokenAuth\n- cookieAuth\n\n### Requisitos\n| Nome        | Tipo     | Obrigatório |\n|-------------|----------|-------------|\n| nome        | string   | Sim         |\n| base_url    | string   | Sim         |\n| instance    | string   | Sim         |\n\n### Resposta\nA resposta da requisição será:\n- success: true/false\n- canal_id: ID do canal criado\n- conectado: true/false\n- estado: \\\"✅ Conectado\\\" ou \\\"⚠️ Aguardando QR Code\\\"\n- requer_qr: true/false\n- mensagem: Mensagem de sucesso ou erro\n\n### Exemplo de Payload\n{\\n  \\\"nome\\\": \\\"WhatsApp Principal\\\",\\n  \\\"base_url\\\": \\\"https://evo.loomiecrm.com\\\",\\n  \\\"instance\\\": \\\"crm_teste_2025\\\"\\n}."
  },
  {
    "id": 38,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/api/message-translator/gerar-qr-code/{canal_id}/",
    "require": "| Parâmetro | Tipo | Obrigatório |\n| --------- | ---- | ----------- |\n| canal_id  | String | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para gerar um QR Code baseado no canal especificado. O QR Code é gerado a partir de um payload recebido da Evolution API. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar este recurso. O impacto no ecossistema CRM é significativo, pois permite a integração de funcionalidades de comunicação direta com os usuários, facilitando o engajamento e a interação.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Webhook para Geração de QR Code\n\n### Método\n**POST**\n\n### Endpoint\n`/api/message-translator/gerar-qr-code/{canal_id}/`\n\n### Descrição\nEste endpoint é responsável por gerar um QR Code a partir de um canal específico. Ele recebe payloads diretos da Evolution API e processa a informação para gerar o código.\n\n### Parâmetros\n| Parâmetro | Tipo | Obrigatório |\n| --------- | ---- | ----------- |\n| canal_id  | String | Sim        |\n\n### Segurança\nEste endpoint requer autenticação via `tokenAuth` e `cookieAuth`. Apenas usuários autenticados podem acessar este recurso.\n\n### Respostas\n- **200**: Sem corpo de resposta."
  },
  {
    "id": 39,
    "method": "POST",
    "endpoint": "/api/message-translator/incoming/",
    "require": "| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| canal_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota gera um QR Code para conectar-se ao WhatsApp utilizando as credenciais do canal especificado. O ID do canal deve ser fornecido na URL. A autenticação é realizada através de token e cookies. O QR Code gerado pode ser utilizado pelo usuário para estabelecer a conexão com o WhatsApp. O retorno inclui um campo de sucesso, o QR Code em formato base64, um indicador de conexão e uma mensagem para o usuário.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Geração de QR Code para WhatsApp\n\nEsta rota permite a geração de um QR Code que pode ser utilizado para conectar-se ao WhatsApp através de um canal específico. A requisição deve incluir o ID do canal como um parâmetro de caminho.\n\n### Parâmetros\n\n- **canal_id** (integer, obrigatório): O ID do canal que será utilizado para gerar o QR Code.\n\n### Resposta\n\nA resposta da rota será um objeto JSON que inclui:\n- **success** (boolean): Indica se a operação foi bem-sucedida.\n- **qr_code** (string): O QR Code gerado em formato base64.\n- **connected** (boolean): Indica se a conexão foi estabelecida.\n- **message** (string): Mensagem para o usuário, geralmente instruindo-o a escanear o QR Code.\n\n### Autenticação\n\nA rota requer autenticação via **tokenAuth** e **cookieAuth**. Certifique-se de que as credenciais estão corretas para acessar esta funcionalidade."
  },
  {
    "id": 40,
    "method": "POST",
    "endpoint": "/api/message-translator/logs/",
    "require": "| Nome          | Tipo      | Obrigatório |\n|---------------|-----------|-------------|\n| canal_tipo    | string    | sim         |\n| payload       | object    | sim         |",
    "optional": "| Nome         | Tipo   | Obrigatório |\n|--------------|--------|-------------|\n| canal_id     | integer | não         |",
    "detalhes": "Este endpoint é responsável por receber mensagens de diferentes canais, como WhatsApp e Telegram, formatá-las de acordo com as necessidades do sistema Loomie e, em seguida, roteá-las para os destinos apropriados. O parâmetro 'canal_tipo' é obrigatório e deve indicar o tipo de canal de onde a mensagem está vindo. O 'payload' deve conter a mensagem original do canal. O 'canal_id' é opcional e pode ser utilizado para identificar a configuração do canal. O endpoint requer autenticação via token e cookie.",
    "payload": "{\"canal_tipo\": \"whatsapp\", \"canal_id\": 1, \"payload\": {\"mensagem\": \"Olá, como posso ajudar?\"}}",
    "markdown": "## Endpoint: POST /api/message-translator/logs/\n\n### Descrição\n🔵 Endpoint principal de ENTRADA de mensagens. Recebe mensagem de qualquer canal → Formata para Loomie → Roteia para destinos.\n\n### Requisitos\n| Nome          | Tipo      | Obrigatório |\n|---------------|-----------|-------------|\n| canal_tipo    | string    | sim         |\n| payload       | object    | sim         |\n\n| Nome         | Tipo   | Obrigatório |\n|--------------|--------|-------------|\n| canal_id     | integer | não         |\n\n### Segurança\nEste endpoint requer autenticação via token e cookie.\n\n### Respostas\n- 200: Sem corpo de resposta."
  },
  {
    "id": 41,
    "method": "GET",
    "endpoint": "/api/message-translator/logs/{id}/",
    "require": "| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| id     | integer  | Sim         |",
    "optional": "| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| ordering | string  | Não         |\n| page     | integer | Não         |\n| search   | string  | Não         |",
    "detalhes": "Esta rota permite a visualização de logs de mensagens. É uma operação de leitura que não altera os dados. A autenticação é necessária, sendo suportado tanto o tokenAuth quanto o cookieAuth. Os parâmetros de consulta permitem filtrar e ordenar os resultados, facilitando a busca por logs específicos.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Visualização de Logs de Mensagens\n\n### Método\nGET\n\n### Endpoint\n/api/message-translator/logs/{id}/\n\n### Descrição\nEsta rota permite a visualização de logs de mensagens. É uma operação de leitura que não altera os dados.\n\n### Parâmetros\n\n#### Requeridos\n| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| id     | integer  | Sim         |\n\n#### Opcionais\n| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| ordering | string  | Não         |\n| page     | integer | Não         |\n| search   | string  | Não         |\n\n### Segurança\nA autenticação é necessária, sendo suportado tanto o tokenAuth quanto o cookieAuth.\n\n### Resposta\nA resposta será um objeto JSON que contém uma lista paginada de logs de mensagens."
  },
  {
    "id": 42,
    "method": "GET",
    "endpoint": "/api/message-translator/outgoing/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a visualização de logs de mensagens de saída, sendo uma operação de somente leitura. O parâmetro 'id' é obrigatório e deve ser fornecido no caminho da requisição. A autenticação é feita através de token ou cookie. O retorno é um objeto que representa o log da mensagem, conforme definido no esquema MensagemLog.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Visualização de Logs de Mensagens\n\n### Método\nGET\n\n### Endpoint\n/api/message-translator/outgoing/\n\n### Descrição\nEsta rota permite a visualização de logs de mensagens de saída, sendo uma operação de somente leitura.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\nA resposta será um objeto que representa o log da mensagem, conforme definido no esquema MensagemLog."
  },
  {
    "id": 43,
    "method": "POST",
    "endpoint": "/api/message-translator/regras/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é responsável por receber mensagens no formato Loomie, traduzir essas mensagens para o canal apropriado e, em seguida, enviá-las. É um ponto crucial no fluxo de comunicação do sistema, garantindo que as mensagens sejam corretamente formatadas e entregues aos destinatários certos. O uso de autenticação via token e cookie é necessário para garantir a segurança do envio das mensagens.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## POST /api/message-translator/regras/\n\n### Descrição\n🔴 Endpoint principal de SAÍDA de mensagens. Recebe mensagem no formato Loomie, traduz para canal e envia.\n\n### Autenticação\nEste endpoint requer autenticação via token e cookie.\n\n### Resposta\n- **200 OK**: Não há corpo de resposta."
  },
  {
    "id": 44,
    "method": "GET",
    "endpoint": "/api/message-translator/regras/",
    "require": "| Nome    | Tipo     | Requerido |\n|---------|----------|-----------|\n| ordering| string   | Não       |\n| page    | integer  | Não       |\n| search  | string   | Não       |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de regras de roteamento, com suporte a paginação e ordenação. Os parâmetros de consulta permitem filtrar os resultados de acordo com as necessidades do usuário. A autenticação é realizada através de tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações. A resposta é uma lista paginada de regras de roteamento, facilitando a navegação em grandes conjuntos de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: GET /api/message-translator/regras/\n\n### Descrição\nEsta rota é utilizada para listar as regras de roteamento no sistema de tradução de mensagens. Permite a aplicação de filtros e ordenação nos resultados.\n\n### Parâmetros de Consulta\n- **ordering** (string, opcional): Campo utilizado para ordenar os resultados.\n- **page** (integer, opcional): Número da página dentro do conjunto de resultados paginado.\n- **search** (string, opcional): Termo de busca para filtrar os resultados.\n\n### Segurança\nAcesso restrito a usuários autenticados através de:\n- **tokenAuth**\n- **cookieAuth**\n\n### Resposta\nRetorna um objeto JSON com uma lista paginada de regras de roteamento."
  },
  {
    "id": 45,
    "method": "POST",
    "endpoint": "/api/message-translator/regras/{id}/",
    "require": "| Parâmetro | Tipo | Obrigatório |\n|-----------|------|-------------|\n| id        | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a criação de novas regras de roteamento para mensagens. O ID da regra deve ser fornecido na URL. O corpo da requisição aceita dados em formato JSON, URL encoded ou multipart/form-data, todos referenciando o esquema 'RegrasRoteamentoRequest'. O acesso a este recurso requer autenticação via token ou cookie, garantindo que apenas usuários autorizados possam criar novas regras. Após a criação bem-sucedida, o sistema retorna um status 201 e os detalhes da nova regra criada, conforme o esquema 'RegrasRoteamento'.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## POST /api/message-translator/regras/{id}/\n\n### Descrição\nEste endpoint permite a criação de novas regras de roteamento para mensagens.\n\n### Parâmetros\n- **id**: O ID da regra a ser criada (obrigatório).\n\n### Corpo da Requisição\nO corpo da requisição deve seguir o esquema 'RegrasRoteamentoRequest' e pode ser enviado em diferentes formatos:\n- `application/json`\n- `application/x-www-form-urlencoded`\n- `multipart/form-data`\n\n### Segurança\nEste endpoint requer autenticação via:\n- **tokenAuth**\n- **cookieAuth**\n\n### Resposta\nUma resposta bem-sucedida retornará um status 201 e os detalhes da nova regra criada, conforme o esquema 'RegrasRoteamento'."
  },
  {
    "id": 46,
    "method": "GET",
    "endpoint": "/api/message-translator/regras/{id}/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação das regras de roteamento com base no ID fornecido. É essencial para o gerenciamento e a consulta de regras específicas no sistema de tradução de mensagens. A autenticação é necessária, utilizando tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações. A resposta será um objeto JSON que representa as regras de roteamento correspondentes ao ID especificado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Recuperação de Regras de Roteamento\nEsta rota permite a recuperação das regras de roteamento associadas a um ID específico.\n\n#### Método\nGET\n\n#### Endpoint\n/api/message-translator/regras/{id}/\n\n#### Parâmetros Requeridos\n| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string | Sim         |\n\n#### Autenticação\n- tokenAuth\n- cookieAuth\n\n#### Resposta\nUma resposta bem-sucedida retornará um objeto JSON com as regras de roteamento correspondentes ao ID solicitado."
  },
  {
    "id": 47,
    "method": "PUT",
    "endpoint": "/api/message-translator/regras/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a atualização de regras de roteamento no sistema. A operação é realizada através do método PUT, onde o ID da regra a ser atualizada deve ser fornecido como um parâmetro de caminho. O corpo da requisição deve conter os dados da regra a ser atualizada, conforme definido no esquema RegrasRoteamentoRequest. A segurança é garantida através de autenticação por token e cookies, assegurando que apenas usuários autorizados possam realizar alterações nas regras de roteamento.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização de Regras de Roteamento\n\n### Método\nPUT\n\n### Endpoint\n/api/message-translator/regras/{id}/\n\n### Descrição\nEste endpoint permite a atualização de regras de roteamento no sistema.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Corpo da Requisição\nO corpo deve conter os dados conforme o esquema RegrasRoteamentoRequest.\n\n### Segurança\nEste endpoint requer autenticação via token e cookies.\n\n### Resposta\nRetorna um objeto que representa a regra de roteamento atualizada."
  },
  {
    "id": 48,
    "method": "PATCH",
    "endpoint": "/api/message-translator/regras/{id}/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial das regras de roteamento no sistema. O parâmetro 'id' é necessário para identificar qual regra deve ser atualizada. A autenticação é feita através de token e cookies, garantindo que apenas usuários autorizados possam realizar alterações. O impacto dessa operação no ecossistema CRM é significativo, pois permite ajustes dinâmicos nas regras de roteamento, melhorando a eficiência do sistema de mensagens.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Regras de Roteamento\n\n### Método\nPATCH\n\n### Endpoint\n/api/message-translator/regras/{id}/\n\n### Descrição\nEsta rota permite a atualização parcial das regras de roteamento no sistema.\n\n### Parâmetros Requeridos\n| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Segurança\nEsta operação requer autenticação via token e cookies. Apenas usuários autorizados podem realizar alterações.\n\n### Resposta\nEm caso de sucesso, a resposta será um objeto JSON representando a regra de roteamento atualizada.\n\n### Exemplo de Payload\n{\n  \"campo1\": \"valor1\",\n  \"campo2\": \"valor2\"\n}."
  },
  {
    "id": 49,
    "method": "DELETE",
    "endpoint": "/api/message-translator/send-template/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por deletar uma regra de roteamento específica identificada pelo parâmetro 'id'. A autenticação é necessária, utilizando tanto o token de autenticação quanto a autenticação via cookie. O sucesso da operação é indicado por um código de status 204, que significa que a operação foi realizada com sucesso e não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## DELETE /api/message-translator/send-template/\n\n### Descrição\nEsta rota permite a exclusão de uma regra de roteamento específica através do seu identificador único.\n\n### Parâmetros\n| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |\n\n### Segurança\nEsta rota requer autenticação. Você deve fornecer um token de autenticação válido ou um cookie de sessão.\n\n### Resposta\n- **204 No Content**: A operação foi bem-sucedida e não há conteúdo a ser retornado."
  },
  {
    "id": 50,
    "method": "POST",
    "endpoint": "/api/message-translator/status-canal/{canal_id}/",
    "require": "| Parâmetro          | Tipo    | Obrigatório |\n|--------------------|---------|-------------|\n| canal_id           | Integer | Sim         |\n| recipient_number    | String  | Sim         |\n| template_name      | String  | Sim         |\n| language           | String  | Sim         |\n| variables          | Array   | Sim         |",
    "optional": "| Parâmetro       | Tipo    | Opcional |\n|-------------------|---------|----------|\n| canal_name        | String  | Sim      |\n| header_url        | String  | Sim      |\n| button_suffix     | String  | Sim      |",
    "detalhes": "Este endpoint permite o envio de templates via WhatsApp Cloud API, utilizando credenciais dinâmicas associadas ao canal do usuário logado. O canal pode ser identificado pelo ID ou pelo nome. O payload deve incluir informações do destinatário, nome do template e variáveis necessárias. A autenticação é realizada através de token e cookie, garantindo segurança no acesso. O endpoint retorna um status de sucesso e o ID da mensagem enviada, além de tratar erros comuns como token inválido ou ausência de canal configurado.",
    "payload": "{\"canal_id\":123,\"recipient_number\":\"554199999999\",\"template_name\":\"confirmacao_pedido\",\"language\":\"pt_BR\",\"variables\":[\"João\",\"12345\"],\"header_url\":\"https://meusite.com/nota.pdf\",\"button_suffix\":\"promo2024\"}",
    "markdown": "## Envio de Templates via WhatsApp Cloud API\n\n### Descrição\nEste endpoint permite o envio simplificado de templates utilizando a API do WhatsApp Cloud. É projetado para funcionar em um ambiente multi-tenant, utilizando credenciais dinâmicas do canal associado ao usuário logado.\n\n### Método\n`POST`\n\n### Endpoint\n`/api/message-translator/status-canal/{canal_id}/`\n\n### Autenticação\nEste endpoint requer autenticação através de:\n- `tokenAuth`\n- `cookieAuth`\n\n### Payload\nO payload deve conter os seguintes parâmetros:\n- `canal_id`: ID do canal (obrigatório)\n- `recipient_number`: Número do destinatário (obrigatório)\n- `template_name`: Nome do template a ser enviado (obrigatório)\n- `language`: Idioma do template (obrigatório)\n- `variables`: Variáveis a serem substituídas no template (obrigatório)\n- `canal_name`: Nome do canal (opcional)\n- `header_url`: URL para o cabeçalho da mídia (opcional)\n- `button_suffix`: Sufixo dinâmico para o botão (opcional)\n\n### Respostas\nA resposta bem-sucedida retorna um objeto contendo:\n- `success`: Indica se o envio foi bem-sucedido\n- `message_id`: ID da mensagem enviada\n- `recipient`: Número do destinatário\n- `template_name`: Nome do template enviado\n- `canal`: Nome do canal utilizado\n\n### Tratamento de Erros\nErros comuns incluem:\n- 132001: Template não existe\n- 100: Token inválido\n- 190: Token expirado\n- 403: Usuário sem canal WhatsApp configurado."
  },
  {
    "id": 51,
    "method": "GET",
    "endpoint": "/api/message-translator/sync-templates/",
    "require": "| Nome do Parâmetro | Tipo     | Obrigatório |\n|------------------|----------|-------------|\n| canal_id         | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite verificar o status de conexão de um canal específico sem gerar um QR Code. O parâmetro canal_id é obrigatório e deve ser um número inteiro que representa a identificação do canal. A resposta indica se a conexão está ativa e o estado atual da conexão, que pode ser 'open', 'close' ou 'aguardando_qr'. A segurança é garantida através de autenticação por token e cookies, assegurando que apenas usuários autorizados possam acessar esta informação.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Verificação do Status do Canal\n\n### Método\nGET\n\n### Endpoint\n/api/message-translator/sync-templates/\n\n### Descrição\nEsta rota verifica APENAS o status de conexão do canal, sem gerar QR Code.\n\n### Parâmetros\n| Nome do Parâmetro | Tipo     | Obrigatório |\n|------------------|----------|-------------|\n| canal_id         | integer  | Sim         |\n\n### Respostas\n- **200**: Sem corpo de resposta.\n\n### Segurança\nEsta rota requer autenticação via token e cookies, garantindo acesso apenas a usuários autorizados.\n\n### Impacto no Ecossistema do CRM\nA verificação do status de conexão é crucial para a operação do sistema de mensagens, pois permite monitorar a disponibilidade de canais de comunicação em tempo real."
  },
  {
    "id": 52,
    "method": "POST",
    "endpoint": "/api/message-translator/waba-webhook/",
    "require": "canal_id: Integer (opcional)",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para sincronizar templates da Meta API v23.0 para um cache local. Ao enviar uma solicitação POST para este endpoint, o sistema atualiza o cache de templates. Se o parâmetro 'canal_id' for omitido, o sistema sincroniza todos os canais WABA ativos. É necessário autenticação via token e cookie para acessar este endpoint.",
    "payload": "{\"canal_id\": 123}",
    "markdown": "## Sincronização de Templates\nEste endpoint permite a sincronização de templates da Meta API v23.0 para o cache local. É um endpoint administrativo que atualiza o cache de templates.\n\n### Método\nPOST\n\n### Endpoint\n/api/message-translator/waba-webhook/\n\n### Parâmetros\n| Nome       | Tipo     | Obrigatório | Descrição                                                                               |\n|------------|----------|-------------|-----------------------------------------------------------------------------------------|\n| canal_id   | Integer  | Não         | Se omitido, sincroniza todos os canais WABA ativos.\n\n### Resposta\nA resposta será um objeto JSON que indica o sucesso da operação e o número de templates sincronizados:\n\n```json\n{\n  \"success\": true,\n  \"synced_count\": 15,\n  \"details\": {\n    \"WhatsApp Cloud API\": {\n      \"success\": true,\n      \"synced\": 15,\n      \"total_received\": 20,\n      \"approved\": 15\n    }\n  },\n  \"timestamp\": \"2026-01-08T10:30:00Z\"\n}\n```\n\n### Segurança\nEste endpoint requer autenticação via `tokenAuth` e `cookieAuth`."
  },
  {
    "id": 53,
    "method": "GET",
    "endpoint": "/api/message-translator/waba-webhook/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é um webhook dedicado para a WhatsApp Business Cloud API, permitindo a verificação do webhook (handshake da Meta). Ele aceita application/json, mas retorna o corpo RAW para validação HMAC. Cada canal possui credenciais específicas (waba_app_secret, waba_verify_token). O endpoint retorna um status 200 OK mesmo em caso de erro, evitando reenvios infinitos da Meta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Webhook para WhatsApp Business Cloud API\nEste endpoint é utilizado para a verificação do webhook da Meta, garantindo a integridade da comunicação entre o serviço e a API do WhatsApp Business.\n\n### Método\nGET\n\n### Endpoint\n/api/message-translator/waba-webhook/\n\n### Segurança\n- tokenAuth: Necessário\n- cookieAuth: Necessário\n\n### Resposta\n- 200 OK: A resposta não contém corpo, mas indica que o webhook foi verificado com sucesso.\n\n### Importante\n- O RawJSONParser aceita application/json, mas retorna o corpo RAW, permitindo a validação HMAC.\n- Cada canal possui suas próprias credenciais (waba_app_secret, waba_verify_token).\n- O retorno de 200 OK mesmo em caso de erro é uma medida para evitar reenvios infinitos da Meta."
  },
  {
    "id": 54,
    "method": "POST",
    "endpoint": "/api/message-translator/webhooks-customizados/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para receber eventos da API do WhatsApp Business Cloud. Ele é projetado para funcionar em um ambiente de multi-tenancy, onde cada canal pode ter suas próprias credenciais, como o waba_app_secret e o waba_verify_token. O RawJSONParser é utilizado para aceitar conteúdo do tipo application/json, mas retorna o corpo em formato RAW para permitir a validação HMAC. É importante notar que o endpoint sempre retornará um status 200 OK, mesmo em caso de erro, para evitar reenvios infinitos por parte da Meta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Webhook Personalizado para WhatsApp Business Cloud API\nEste endpoint é responsável por receber eventos da API do WhatsApp Business Cloud. É um webhook dedicado que suporta multi-tenancy, permitindo que diferentes canais operem com suas próprias credenciais.\n\n### Métodos\n- **GET**: Utilizado para a verificação do webhook (handshake da Meta).\n- **POST**: Utilizado para o recebimento de eventos, como mensagens e status.\n\n### Importante\n- O RawJSONParser aceita o tipo de conteúdo application/json, mas retorna o corpo em formato RAW, permitindo a validação HMAC.\n- Cada canal deve ter suas próprias credenciais, incluindo o waba_app_secret e o waba_verify_token.\n- O endpoint retornará um status 200 OK mesmo em caso de erro, evitando reenvios infinitos da Meta.\n\n### Segurança\nEste endpoint requer autenticação via tokenAuth e cookieAuth."
  },
  {
    "id": 55,
    "method": "GET",
    "endpoint": "/api/message-translator/webhooks-customizados/",
    "require": "| Nome   | Tipo    | Requerido | Descrição                                      |\n|--------|---------|-----------|------------------------------------------------|\n| ordering | string  | Não       | Qual campo usar ao ordenar os resultados.      |\n| page     | integer | Não       | Um número de página dentro do conjunto de resultados paginado. |\n| search   | string  | Não       | Um termo de busca.                             |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a recuperação de uma lista paginada de webhooks customizados. Os parâmetros de consulta permitem a ordenação dos resultados, a paginação e a filtragem por um termo de busca específico. A autenticação é necessária através de token ou cookie, garantindo que apenas usuários autorizados possam acessar as informações. Este recurso é essencial para a gestão de webhooks dentro do sistema, permitindo que os desenvolvedores integrem e personalizem as funcionalidades de acordo com suas necessidades.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: GET /api/message-translator/webhooks-customizados/\n\n### Descrição\nEste endpoint é utilizado para listar webhooks customizados de forma paginada, permitindo a ordenação e a busca de resultados específicos.\n\n### Parâmetros\n- **ordering** (string, opcional): Campo utilizado para ordenar os resultados.\n- **page** (integer, opcional): Número da página a ser retornada dentro do conjunto de resultados paginados.\n- **search** (string, opcional): Termo de busca para filtrar os resultados.\n\n### Segurança\nA rota requer autenticação via **tokenAuth** ou **cookieAuth**.\n\n### Resposta\nA resposta será um objeto JSON contendo uma lista paginada de webhooks customizados."
  },
  {
    "id": 56,
    "method": "POST",
    "endpoint": "/api/message-translator/webhooks-customizados/{id}/",
    "require": "| Nome do Parâmetro | Tipo   | Requerido |\n|------------------|--------|-----------|\n| id               | String | Sim       |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de webhooks customizados no sistema. O usuário deve fornecer um ID válido na URL para identificar o webhook a ser criado. A autenticação é feita através de token e cookies, garantindo a segurança do acesso. O sucesso da operação resulta em um status 201, indicando que o webhook foi criado com sucesso.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Criar Webhook Customizado\n\n### Método\nPOST\n\n### Endpoint\n/api/message-translator/webhooks-customizados/{id}/\n\n### Descrição\nEsta rota permite a criação de webhooks customizados no sistema.\n\n### Parâmetros Requeridos\n| Nome do Parâmetro | Tipo   | Requerido |\n|------------------|--------|-----------|\n| id               | String | Sim       |\n\n### Segurança\nEsta operação requer autenticação via token e cookies.\n\n### Resposta\nEm caso de sucesso, a operação retorna um status 201, indicando que o webhook foi criado com sucesso."
  },
  {
    "id": 57,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/api/message-translator/webhooks-customizados/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de um webhook customizado específico, identificado pelo parâmetro `id`. A autenticação é realizada através de tokens e cookies, garantindo que apenas usuários autorizados possam acessar as informações. A resposta fornece os detalhes do webhook customizado em formato JSON, conforme definido no esquema `WebhookCustomizado`.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperar Webhook Customizado\n\n### Método\nGET\n\n### Endpoint\n/api/message-translator/webhooks-customizados/{id}/\n\n### Descrição\nEsta rota permite a recuperação de um webhook customizado específico, identificado pelo parâmetro `id`. A autenticação é realizada através de tokens e cookies, garantindo que apenas usuários autorizados possam acessar as informações.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Respostas\n- **200 OK**: Retorna os detalhes do webhook customizado em formato JSON, conforme definido no esquema `WebhookCustomizado`."
  },
  {
    "id": 58,
    "method": "PUT",
    "endpoint": "/api/message-translator/webhooks-customizados/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a atualização de webhooks customizados no sistema. O parâmetro 'id' é necessário para identificar qual webhook deve ser atualizado. O corpo da requisição deve conter os dados do webhook a serem modificados, seguindo o esquema definido em 'WebhookCustomizadoRequest'. O acesso a este endpoint requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam realizar alterações nos webhooks. A resposta bem-sucedida retornará os dados atualizados do webhook no formato definido por 'WebhookCustomizado'.",
    "payload": "{\"name\": \"Webhook Exemplo\", \"url\": \"https://exemplo.com/webhook\", \"method\": \"POST\"}",
    "markdown": "## Atualização de Webhooks Customizados\n\n### Método\nPUT\n\n### Endpoint\n/api/message-translator/webhooks-customizados/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEste endpoint permite a atualização de webhooks customizados no sistema. O parâmetro 'id' é necessário para identificar qual webhook deve ser atualizado. O corpo da requisição deve conter os dados do webhook a serem modificados, seguindo o esquema definido em 'WebhookCustomizadoRequest'. O acesso a este endpoint requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam realizar alterações nos webhooks. A resposta bem-sucedida retornará os dados atualizados do webhook no formato definido por 'WebhookCustomizado'."
  },
  {
    "id": 59,
    "method": "PATCH",
    "endpoint": "/api/message-translator/webhooks-customizados/{id}/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de webhooks customizados. O parâmetro 'id' é necessário para identificar qual webhook deve ser atualizado. O corpo da requisição deve conter os dados a serem alterados, que podem ser enviados em formato JSON, form-url-encoded ou multipart/form-data. A autenticação é realizada através de token ou cookie, garantindo que apenas usuários autorizados possam realizar alterações. O retorno é um objeto JSON representando o webhook customizado atualizado.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Webhooks Customizados\n\n### Método\nPATCH\n\n### Endpoint\n/api/message-translator/webhooks-customizados/{id}/\n\n### Parâmetros\n| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve conter os dados a serem atualizados no webhook customizado. Os dados podem ser enviados em formatos como JSON, form-url-encoded ou multipart/form-data.\n\n### Segurança\nEsta rota requer autenticação, que pode ser feita através de um token ou cookie. Apenas usuários com as permissões adequadas poderão acessar esta funcionalidade.\n\n### Resposta\nUma resposta bem-sucedida retornará um objeto JSON representando o webhook customizado atualizado."
  },
  {
    "id": 60,
    "method": "DELETE",
    "endpoint": "/api/message-translator/webhooks-customizados/{id}/testar/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão de um webhook customizado específico, identificado pelo parâmetro 'id'. A operação requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam realizar a exclusão. Ao ser chamada, a rota não retorna um corpo de resposta, apenas um código de status 204, indicando que a operação foi bem-sucedida e que não há mais dados a serem retornados. Essa funcionalidade é essencial para a gestão de webhooks no sistema, permitindo que os usuários mantenham suas integrações limpas e organizadas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Excluir Webhook Customizado\n\n### Método\nDELETE\n\n### Endpoint\n/api/message-translator/webhooks-customizados/{id}/testar/\n\n### Parâmetros Requeridos\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Resposta\nA rota retorna um código de status 204, sem corpo de resposta, indicando que a operação foi bem-sucedida.\n\n### Descrição\nEsta operação permite a exclusão de um webhook customizado específico. É importante para a manutenção da integridade e organização dos webhooks no sistema."
  },
  {
    "id": 61,
    "method": "POST",
    "endpoint": "/api/message-translator/webhooks-customizados/estatisticas/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite testar um webhook com um payload de exemplo. O parâmetro 'id' é obrigatório e deve ser fornecido no caminho da URL. O corpo da requisição deve conter um payload no formato JSON, application/x-www-form-urlencoded ou multipart/form-data, todos referenciando o esquema 'WebhookCustomizadoRequest'. A autenticação é realizada através de token e cookies, garantindo a segurança da operação.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Testa Webhook\n\nEsta rota permite testar um webhook com um payload de exemplo.\n\n### Método\nPOST\n\n### Endpoint\n/api/message-translator/webhooks-customizados/estatisticas/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Corpo da Requisição\nO corpo da requisição deve conter um payload no formato JSON, application/x-www-form-urlencoded ou multipart/form-data, todos referenciando o esquema 'WebhookCustomizadoRequest'.\n\n### Segurança\nA autenticação é realizada através de token e cookies, garantindo a segurança da operação.\n\n### Resposta\nA resposta será um objeto JSON que segue o esquema 'WebhookCustomizado'."
  },
  {
    "id": 62,
    "method": "GET",
    "endpoint": "/api/message-translator/widget-loader.js",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota retorna estatísticas gerais de todos os webhooks personalizados. É necessário autenticação via token ou cookie para acessar esta rota, garantindo que apenas usuários autorizados possam visualizar as informações. As estatísticas retornadas são cruciais para a análise de desempenho e uso dos webhooks no sistema CRM.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: GET /api/message-translator/widget-loader.js\n\n### Descrição\nEsta rota retorna estatísticas gerais de todos os webhooks personalizados.\n\n### Autenticação\nÉ necessária autenticação via `tokenAuth` ou `cookieAuth`.\n\n### Resposta\n- **Código 200**: Retorna um objeto JSON com as estatísticas dos webhooks personalizados."
  },
  {
    "id": 63,
    "method": "GET",
    "endpoint": "/api/message-translator/widget/send-message/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint serve o arquivo widget-loader.js que pode ser incluído em sites externos. É importante para a integração do tradutor de mensagens em plataformas de terceiros. O acesso a este endpoint requer autenticação via token ou cookie, garantindo que apenas usuários autorizados possam acessar o recurso.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: /api/message-translator/widget/send-message/\n\n### Método: GET\n\n### Descrição:\nServe o arquivo widget-loader.js para ser incluído em sites externos.\n\n### Autenticação:\nEste endpoint requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta:\n- **200**: Sem corpo de resposta."
  },
  {
    "id": 64,
    "method": "POST",
    "endpoint": "/api/oauth/contacts/",
    "require": "| Nome do parâmetro | Tipo      | Obrigatório |\n|-----------------|-----------|-------------|\n| session_uuid    | string    | Sim         |\n| message         | string    | Sim         |\n| widget_token    | string    | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é responsável por receber mensagens do Widget. Ele exige um corpo de requisição contendo um UUID de sessão, a mensagem a ser enviada e um token do widget. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autenticados possam enviar mensagens. Este endpoint impacta o ecossistema do CRM ao permitir a comunicação direta com os usuários através do widget, facilitando a interação e suporte em tempo real.",
    "payload": "{\"session_uuid\": \"550e8400-e29b-41d4-a716-446655440000\", \"message\": \"Olá, preciso de ajuda\", \"widget_token\": \"token_do_canal\"}",
    "markdown": "## Endpoint para Receber Mensagens do Widget\n\n### Método\nPOST\n\n### URL\n/api/oauth/contacts/\n\n### Parâmetros\n| Nome do parâmetro | Tipo      | Obrigatório |\n|-----------------|-----------|-------------|\n| session_uuid    | string    | Sim         |\n| message         | string    | Sim         |\n| widget_token    | string    | Sim         |\n\n### Descrição\nEste endpoint é responsável por receber mensagens do Widget. Ele exige um corpo de requisição contendo um UUID de sessão, a mensagem a ser enviada e um token do widget. \n\n### Autenticação\nEste endpoint requer autenticação via tokenAuth e cookieAuth.\n\n### Resposta\nA resposta para uma requisição bem-sucedida (200) não contém corpo."
  },
  {
    "id": 65,
    "method": "GET",
    "endpoint": "/api/oauth/contacts/{contact_id}/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar todos os contatos de um usuário autenticado via OAuth2. É necessário que o usuário possua um token de acesso válido para acessar esta rota. A resposta não contém um corpo, mas um status de sucesso (200) indica que a solicitação foi processada corretamente.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Listar Contatos\n\n## Descrição\nEsta rota permite listar todos os contatos de um usuário autenticado via OAuth2.\n\n## Método\nGET\n\n## Endpoint\n/api/oauth/contacts/{contact_id}/\n\n## Autenticação\nOAuth2 é obrigatório para acessar esta rota.\n\n## Resposta\n- **200**: Solicitação bem-sucedida, sem corpo de resposta."
  },
  {
    "id": 66,
    "method": "GET",
    "endpoint": "/api/oauth/contacts/{contact_id}/",
    "require": "| Nome       | Tipo     | Obrigatório |\n|------------|----------|-------------|\n| contact_id | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de informações de um contato específico utilizando o OAuth2 para autenticação. O parâmetro 'contact_id' é necessário para identificar o contato desejado. A segurança é garantida através do uso de tokens OAuth2, que devem ser fornecidos no cabeçalho da requisição. Não há corpo de resposta, pois a informação do contato é retornada diretamente no cabeçalho da resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperação de Contato\n\nEsta rota permite que os usuários recuperem informações sobre um contato específico utilizando o ID do contato. A autenticação é feita através do OAuth2, sendo necessário um token de acesso válido.\n\n### Parâmetros\n\n- **contact_id**: O ID do contato que se deseja recuperar. Este parâmetro é obrigatório e deve ser um número inteiro.\n\n### Resposta\n\nA resposta para uma requisição bem-sucedida (200) não contém um corpo, mas o cabeçalho pode incluir informações relevantes sobre a requisição.\n\n### Segurança\n\nA rota requer autenticação via OAuth2, garantindo que apenas usuários autorizados possam acessar as informações dos contatos."
  },
  {
    "id": 67,
    "method": "PUT",
    "endpoint": "/api/oauth/contacts/{contact_id}/",
    "require": "| Nome        | Tipo    | Obrigatório |\n|-------------|---------|-------------|\n| contact_id  | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização de um contato específico utilizando OAuth2 como método de autenticação. O parâmetro 'contact_id' deve ser fornecido na URL e é obrigatório. Não há corpo de resposta para esta operação, indicando que a atualização foi bem-sucedida.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Atualização de Contato\n\n### Método\nPUT\n\n### Endpoint\n/api/oauth/contacts/{contact_id}/\n\n### Descrição\nEsta rota permite a atualização de um contato específico. É necessário que o usuário esteja autenticado via OAuth2 para executar esta operação.\n\n### Parâmetros\n| Nome        | Tipo    | Obrigatório |\n|-------------|---------|-------------|\n| contact_id  | integer | Sim         |\n\n### Resposta\nA operação retorna um código de status 200 se a atualização for bem-sucedida. Não há corpo de resposta."
  },
  {
    "id": 68,
    "method": "DELETE",
    "endpoint": "/api/oauth/contacts/create/",
    "require": "| Nome        | Tipo     | Obrigatório |\n|-------------|----------|-------------|\n| contact_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão de um contato específico do sistema. É necessário fornecer o ID do contato a ser excluído, que deve ser um número inteiro. A operação requer autenticação OAuth2, garantindo que apenas usuários autorizados possam realizar essa ação. Ao ser executada com sucesso, a resposta será um código 204, indicando que a operação foi concluída sem erros e não haverá corpo na resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## DELETE /api/oauth/contacts/create/\n\n### Descrição\nEsta rota permite a exclusão de um contato específico do sistema. É necessário fornecer o ID do contato a ser excluído.\n\n### Parâmetros Requeridos\n| Nome        | Tipo     | Obrigatório |\n|-------------|----------|-------------|\n| contact_id  | integer  | Sim         |\n\n### Autenticação\nEsta operação requer autenticação OAuth2, garantindo que apenas usuários autorizados possam realizar essa ação.\n\n### Resposta\nAo ser executada com sucesso, a resposta será um código 204, indicando que a operação foi concluída sem erros e não haverá corpo na resposta."
  },
  {
    "id": 69,
    "method": "POST",
    "endpoint": "/api/oauth/conversations/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de um novo contato utilizando OAuth2 para autenticação. É necessário que o token de acesso seja fornecido no cabeçalho da requisição. A ausência de um token válido resultará em um erro de autenticação. A resposta bem-sucedida não contém corpo, confirmando a criação do contato.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Criação de Contato via OAuth2\nEsta rota é utilizada para criar um novo contato no sistema. É obrigatório que o usuário esteja autenticado via OAuth2, e o token de acesso deve ser incluído no cabeçalho da requisição.\n\n### Método\nPOST\n\n### Endpoint\n/api/oauth/conversations/\n\n### Autenticação\nA autenticação deve ser realizada através de um token OAuth2 válido.\n\n### Resposta\nEm caso de sucesso, a resposta será um status 200 sem corpo, indicando que o contato foi criado com sucesso."
  },
  {
    "id": 70,
    "method": "GET",
    "endpoint": "/api/oauth/conversations/{conversation_id}/status/",
    "require": "| Parâmetro       | Tipo    | Obrigatório |\n|----------------|---------|-------------|\n| conversation_id| string  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que os usuários listem o status de uma conversa específica utilizando OAuth2 para autenticação. O parâmetro `conversation_id` é obrigatório e deve ser fornecido na URL. A resposta da API não contém um corpo, retornando apenas um código de status 200 em caso de sucesso, o que indica que a solicitação foi processada corretamente.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Lista de Status da Conversa\n\n### Método\nGET\n\n### Endpoint\n/api/oauth/conversations/{conversation_id}/status/\n\n### Descrição\nEsta rota lista o status de uma conversa específica, requerendo autenticação via OAuth2.\n\n### Parâmetros\n| Parâmetro       | Tipo    | Obrigatório |\n|----------------|---------|-------------|\n| conversation_id| string  | Sim         |\n\n### Resposta\nEm caso de sucesso, a API retorna um código de status 200 sem corpo de resposta.\n\n### Segurança\nA autenticação é feita através do OAuth2, garantindo que apenas usuários autorizados possam acessar as informações da conversa."
  },
  {
    "id": 71,
    "method": "PUT",
    "endpoint": "/api/oauth/conversations/send-message/",
    "require": "| Nome              | Tipo     | Obrigatório |\n|-------------------|----------|-------------|\n| conversation_id   | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para alterar o status de uma conversa existente. É necessário fornecer um ID de conversa válido como parâmetro. A autenticação OAuth2 é obrigatória para acessar esta rota, garantindo que apenas usuários autorizados possam modificar o status das conversas. A resposta para uma solicitação bem-sucedida não inclui um corpo, mas retorna um status HTTP 200.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Alterar Status da Conversa\n\n### Descrição\nEsta rota permite alterar o status de uma conversa existente.\n\n### Método\n`PUT`\n\n### Endpoint\n`/api/oauth/conversations/send-message/`\n\n### Parâmetros\n| Nome              | Tipo     | Obrigatório |\n|-------------------|----------|-------------|\n| conversation_id   | integer  | Sim         |\n\n### Autenticação\nOAuth2 é obrigatória para acessar esta rota.\n\n### Resposta\nA resposta para uma solicitação bem-sucedida retorna um status HTTP 200 sem corpo."
  },
  {
    "id": 72,
    "method": "POST",
    "endpoint": "/api/oauth/info/",
    "require": "| Parâmetro | Tipo   | Obrigatório |\n|-----------|--------|-------------|\n| token     | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite o envio de mensagens em uma conversa, sendo necessário um token de autenticação OAuth2. O token deve ser incluído no cabeçalho da requisição para garantir a segurança e a autorização do usuário. Não há resposta no corpo da requisição, indicando que a operação foi realizada com sucesso.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Enviar Mensagem em Conversa\n\n### Descrição\nEsta rota permite que um usuário envie uma mensagem em uma conversa existente. É necessário que o usuário esteja autenticado via OAuth2.\n\n### Método\nPOST\n\n### Endpoint\n/api/oauth/info/\n\n### Parâmetros Requeridos\n| Parâmetro | Tipo   | Obrigatório |\n|-----------|--------|-------------|\n| token     | string | Sim         |\n\n### Resposta\nA resposta será um código de status 200 sem corpo, indicando que a mensagem foi enviada com sucesso.\n\n### Segurança\nEsta rota requer autenticação via OAuth2. O token deve ser enviado no cabeçalho da requisição, garantindo que apenas usuários autorizados possam enviar mensagens."
  },
  {
    "id": 73,
    "method": "GET",
    "endpoint": "/api/oauth/knowledge/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que os usuários recuperem informações sobre a API e os escopos disponíveis. É necessário autenticação via token ou cookie para acessar esta rota. O sucesso da operação retornará um código de status 200, mas não haverá corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Informações sobre a API e Escopos Disponíveis\n\n### Método\nGET\n\n### Endpoint\n/api/oauth/knowledge/\n\n### Segurança\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\n- **200**: Operação bem-sucedida, sem corpo de resposta."
  },
  {
    "id": 74,
    "method": "GET",
    "endpoint": "/api/oauth/knowledge/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para acessar a base de conhecimento relacionada ao OAuth2. É necessário que o usuário esteja autenticado e possua um token de acesso válido. O endpoint não retorna um corpo de resposta, mas um status de sucesso indica que a requisição foi processada corretamente.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: /api/oauth/knowledge/\n\n### Método: GET\n\n### Descrição\nEste endpoint é utilizado para acessar a base de conhecimento relacionada ao OAuth2. É necessário que o usuário esteja autenticado e possua um token de acesso válido.\n\n### Resposta\n- **200 OK**: Indica que a requisição foi processada com sucesso. Não há corpo de resposta."
  },
  {
    "id": 75,
    "method": "POST",
    "endpoint": "/api/oauth/public/contacts/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para criar contatos na base de conhecimento, exigindo autenticação OAuth2. A operação não retorna um corpo de resposta, indicando que a criação foi bem-sucedida. É importante garantir que o token de autenticação esteja incluído no cabeçalho da requisição para que o acesso seja autorizado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: POST /api/oauth/public/contacts/\n\n### Descrição\nEste endpoint é utilizado para criar contatos na base de conhecimento. A autenticação OAuth2 é obrigatória para acessar esta funcionalidade.\n\n### Requisitos\n- **Autenticação:** OAuth2 (token necessário no cabeçalho)\n\n### Resposta\n- **Código 200:** Indica que a operação foi bem-sucedida, mas não há corpo de resposta."
  },
  {
    "id": 76,
    "method": "GET",
    "endpoint": "/api/oauth/public/contacts/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para recuperar contatos públicos. É restrito ao ambiente de desenvolvimento e requer autenticação via token ou cookie. Não há um corpo de resposta esperado, indicando que a resposta será um status de sucesso sem dados adicionais.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: /api/oauth/public/contacts/\n\n### Método: GET\n\n### Descrição:\nEste endpoint é utilizado para recuperar contatos públicos. É restrito ao ambiente de desenvolvimento e requer autenticação via token ou cookie.\n\n### Segurança:\n- `tokenAuth`: Necessário para autenticação.\n- `cookieAuth`: Alternativa para autenticação.\n\n### Respostas:\n- **200 OK**: Indica que a requisição foi bem-sucedida, mas não há corpo de resposta esperado."
  },
  {
    "id": 77,
    "method": "POST",
    "endpoint": "/api/oauth/public/conversations/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para criar conversas públicas relacionadas a contatos. É importante notar que este endpoint é destinado apenas para desenvolvimento e não deve ser utilizado em produção. A autenticação é necessária, e pode ser realizada através de token ou cookie. O endpoint não retorna um corpo de resposta, mas um status de sucesso é esperado após a criação da conversa.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: POST /api/oauth/public/conversations/\n\n### Descrição\nEste endpoint é utilizado para criar conversas públicas relacionadas a contatos. É importante notar que este endpoint é destinado apenas para desenvolvimento e não deve ser utilizado em produção.\n\n### Autenticação\nA autenticação é necessária, e pode ser realizada através de token ou cookie.\n\n### Resposta\nO endpoint não retorna um corpo de resposta, mas um status de sucesso é esperado após a criação da conversa."
  },
  {
    "id": 78,
    "method": "GET",
    "endpoint": "/api/oauth/public/conversations/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para recuperar informações sobre conversas de forma pública. É restrito ao ambiente de desenvolvimento e requer autenticação via token ou cookie. O acesso é controlado para garantir que apenas usuários autenticados possam acessar as informações das conversas, embora não haja um corpo de resposta definido para este endpoint.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: /api/oauth/public/conversations/\n\n### Método: GET\n\n### Descrição:\nEste endpoint é utilizado para recuperar informações sobre conversas de forma pública. É restrito ao ambiente de desenvolvimento.\n\n### Autenticação:\n- **tokenAuth**: Necessário para autenticação via token.\n- **cookieAuth**: Necessário para autenticação via cookie.\n\n### Respostas:\n- **200 OK**: Indica que a requisição foi bem-sucedida, mas não retorna um corpo de resposta."
  },
  {
    "id": 79,
    "method": "POST",
    "endpoint": "/api/oauth/test/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para criar conversas públicas durante a fase de desenvolvimento. Ele requer autenticação através de token ou cookie. Não há corpo de resposta esperado, indicando que a operação é realizada sem retornar dados adicionais.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: POST /api/oauth/test/\n\n### Descrição\nEste endpoint é utilizado para criar conversas públicas durante a fase de desenvolvimento.\n\n### Autenticação\nRequer autenticação através de:\n- **tokenAuth**\n- **cookieAuth**\n\n### Resposta\n- **200 OK**: A operação foi realizada com sucesso, mas não há corpo de resposta esperado."
  },
  {
    "id": 80,
    "method": "GET",
    "endpoint": "/api/plano/monthly-usage/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para testar a funcionalidade de uso mensal do plano sem a necessidade de autenticação. Ele pode ser acessado por qualquer usuário, já que não requer credenciais. O retorno é um status 200, indicando que a requisição foi bem-sucedida, mas não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: /api/plano/monthly-usage/\n\n### Método: GET\n\n### Descrição:\nEste endpoint é utilizado para testar a funcionalidade de uso mensal do plano sem a necessidade de autenticação. Ele pode ser acessado por qualquer usuário, já que não requer credenciais.\n\n### Segurança:\n- `tokenAuth`: Este método de autenticação é suportado, mas não é necessário para acessar este endpoint.\n- `cookieAuth`: Este método de autenticação também é suportado, mas não é necessário.\n\n### Respostas:\n- **200**: Indica que a requisição foi bem-sucedida, mas não há corpo de resposta."
  },
  {
    "id": 81,
    "method": "GET",
    "endpoint": "/api/push/public-key/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que os usuários recuperem a chave pública necessária para operações de criptografia. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam acessar esta informação. Não há necessidade de um corpo de requisição, e a resposta não contém um corpo, indicando que a operação foi bem-sucedida.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperação da Chave Pública\n\n### Método\nGET\n\n### Endpoint\n/api/push/public-key/\n\n### Autenticação\nEsta rota requer autenticação via token e cookie para garantir a segurança das informações.\n\n### Resposta\nA resposta para esta rota não contém um corpo, mas um status 200 indica que a solicitação foi bem-sucedida."
  },
  {
    "id": 82,
    "method": "GET",
    "endpoint": "/api/push/status/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que o frontend recupere a chave pública VAPID, necessária para a implementação de notificações push. A segurança é garantida através da autenticação por token e cookies, assegurando que apenas usuários autenticados possam acessar essa informação. O impacto no ecossistema CRM é significativo, pois a chave pública é fundamental para a comunicação com os serviços de push, permitindo interações em tempo real com os usuários.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperação da Chave Pública VAPID\n\n### Método\nGET\n\n### Endpoint\n/api/push/status/\n\n### Descrição\nEsta rota retorna a chave pública VAPID necessária para o funcionamento das notificações push no frontend.\n\n### Segurança\nAcesso restrito a usuários autenticados através de tokenAuth e cookieAuth.\n\n### Resposta\nUma resposta de sucesso (200) não contém corpo, indicando que a chave pública foi recuperada com sucesso."
  },
  {
    "id": 83,
    "method": "GET",
    "endpoint": "/api/push/subscribe/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que um usuário consulte o status de suas subscrições. A segurança é garantida através de autenticação por token e cookie, assegurando que apenas o próprio usuário possa acessar suas informações de subscrição. Não há corpo de resposta para esta rota, o que significa que, ao ser bem-sucedida, a resposta será apenas um código de status 200 sem dados adicionais.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## GET /api/push/subscribe/\n\n### Descrição\nEsta rota retorna o status das subscrições do usuário.\n\n### Segurança\nA rota é protegida por autenticação via token e cookie, garantindo que apenas o próprio usuário possa acessar suas subscrições.\n\n### Respostas\n- **200**: Retorno bem-sucedido, sem corpo de resposta."
  },
  {
    "id": 84,
    "method": "POST",
    "endpoint": "/api/push/test/",
    "require": "| Nome do Parâmetro | Tipo   | Obrigatório |\n|------------------|--------|-------------|\n| endpoint         | String | Sim         |\n| keys             | Object | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é responsável por registrar uma nova subscrição de push notifications. A subscrição é automaticamente vinculada ao usuário que realiza a requisição, garantindo a segurança e evitando vazamentos de dados entre contas. O endpoint não aceita o parâmetro 'user_id' externo para prevenir problemas de segurança.",
    "payload": "{\"endpoint\": \"https://example.com/notification\",\"keys\": {\"p256dh\": \"key_value\",\"auth\": \"auth_value\"}}",
    "markdown": "## Endpoint para Registrar Subscrição de Push Notification\n\n### Método\nPOST\n\n### Endpoint\n/api/push/test/\n\n### Parâmetros Requeridos\n| Nome do Parâmetro | Tipo   | Obrigatório |\n|------------------|--------|-------------|\n| endpoint         | String | Sim         |\n| keys             | Object | Sim         |\n\n### Segurança\nEste endpoint utiliza autenticação via token e cookie. A subscrição é vinculada automaticamente ao usuário que faz a requisição, evitando assim qualquer vazamento de informações entre contas.\n\n### Resposta\nA requisição bem-sucedida retorna um status 200 sem corpo de resposta."
  },
  {
    "id": 85,
    "method": "POST",
    "endpoint": "/api/push/track/",
    "require": "| Nome do Parâmetro | Tipo   | Obrigatório |\n|-------------------|--------|-------------|\n| title             | String | Sim         |\n| body              | String | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para testar o envio de notificações, sendo aplicável apenas em ambientes de DEBUG. Ele aceita um corpo de requisição que deve conter um título e um corpo para a notificação. A autenticação é realizada através de token e cookies, garantindo que apenas usuários autenticados possam acessar este recurso. Não há resposta de corpo para requisições bem-sucedidas, apenas um status de sucesso.",
    "payload": "{\\n  \\\"title\\\": \\\"Test Notification\\\",\\n  \\\"body\\\": \\\"This is a test\\\"\\n}",
    "markdown": "## Endpoint para Teste de Notificações\n\n### Método\nPOST\n\n### URL\n/api/push/track/\n\n### Descrição\nEste endpoint é utilizado para testar o envio de notificações, sendo aplicável apenas em ambientes de DEBUG.\n\n### Parâmetros\n| Nome do Parâmetro | Tipo   | Obrigatório |\n|-------------------|--------|-------------|\n| title             | String | Sim         |\n| body              | String | Sim         |\n\n### Autenticação\nEste endpoint requer autenticação via token e cookies.\n\n### Resposta\nNão há corpo de resposta para requisições bem-sucedidas. O status 200 indica que a notificação foi enviada com sucesso."
  },
  {
    "id": 86,
    "method": "POST",
    "endpoint": "/api/push/unsubscribe/",
    "require": "| Parâmetro         | Tipo   | Obrigatório |\n|-------------------|--------|-------------|\n| action            | string | Sim         |\n| notification_type | string | Sim         |\n| item_id          | string | Sim         |\n| timestamp        | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite que os usuários rastreiem interações com notificações, como entrega, cliques e descartar. É essencial para entender como os usuários interagem com as notificações enviadas. A autenticação é necessária através de tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam registrar essas interações. A resposta é um código de sucesso 200, indicando que a interação foi registrada corretamente, mas não há corpo de resposta.",
    "payload": "{\"action\": \"delivered\", \"notification_type\": \"message\", \"item_id\": \"123\", \"timestamp\": 1234567890}",
    "markdown": "## Endpoint: POST /api/push/unsubscribe/\n\n### Descrição\nEste endpoint permite que os usuários rastreiem interações com notificações, como entrega, cliques e descartar.\n\n### Parâmetros\n| Parâmetro         | Tipo   | Obrigatório |\n|-------------------|--------|-------------|\n| action            | string | Sim         |\n| notification_type | string | Sim         |\n| item_id          | string | Sim         |\n| timestamp        | integer| Sim         |\n\n### Segurança\nEste endpoint requer autenticação via tokenAuth ou cookieAuth.\n\n### Respostas\n- **200**: Indica que a interação foi registrada com sucesso, sem corpo de resposta."
  },
  {
    "id": 87,
    "method": "POST",
    "endpoint": "/api/tags/",
    "require": "| Parâmetro | Tipo   | Obrigatório |\n|-----------|--------|-------------|\n| endpoint  | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite que um usuário remova uma subscrição de push. A operação é restrita ao próprio usuário, garantindo que apenas o dono da subscrição possa removê-la. A segurança é garantida através de autenticação por token e cookies, protegendo assim a operação contra acessos não autorizados.",
    "payload": "{\"endpoint\": \"https://...\"}",
    "markdown": "## Endpoint para Remover Subscrição\n\n### Método\nPOST\n\n### URL\n/api/tags/\n\n### Descrição\nEste endpoint permite que um usuário remova uma subscrição de push. A operação é restrita ao próprio usuário, garantindo que apenas o dono da subscrição possa removê-la.\n\n### Segurança\nA operação requer autenticação via token e cookies. Apenas o usuário autenticado pode remover suas próprias subscrições.\n\n### Parâmetros Requeridos\n| Parâmetro | Tipo   | Obrigatório |\n|-----------|--------|-------------|\n| endpoint  | string | Sim         |\n\n### Exemplo de Payload\n{\n  \"endpoint\": \"https://...\"\n}\n\n### Respostas\n- 200: Sem corpo de resposta."
  },
  {
    "id": 88,
    "method": "GET",
    "endpoint": "/api/tags/",
    "require": "| Nome   | Tipo     | Obrigatório | Descrição                                   |\n|--------|----------|-------------|---------------------------------------------|\n| ordering | string   | Não        | Qual campo usar ao ordenar os resultados.  |\n| page     | integer  | Não        | Um número de página dentro do conjunto de resultados paginado. |\n| search   | string   | Não        | Um termo de busca.                          |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite listar todas as tags associadas ao usuário. Os resultados podem ser filtrados e ordenados com base nos parâmetros de consulta fornecidos. A autenticação é necessária, utilizando tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações. O retorno é paginado, facilitando a navegação em grandes conjuntos de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /api/tags/\n\n### Descrição\nEste endpoint permite listar todas as tags associadas ao usuário. É parte de um ViewSet que gerencia Tags, oferecendo funcionalidades para listar, criar, recuperar, atualizar e deletar tags.\n\n### Parâmetros de Consulta\n- **ordering** (string, opcional): Define qual campo usar ao ordenar os resultados.\n- **page** (integer, opcional): Especifica um número de página dentro do conjunto de resultados paginado.\n- **search** (string, opcional): Permite buscar tags com base em um termo específico.\n\n### Segurança\n- **tokenAuth**: Necessário para autenticação do usuário.\n- **cookieAuth**: Alternativa para autenticação.\n\n### Resposta\n- **200 OK**: Retorna uma lista paginada de tags no formato JSON."
  },
  {
    "id": 89,
    "method": "POST",
    "endpoint": "/api/tags/{id}/",
    "require": "| Nome do Parâmetro | Tipo     | Obrigatório |\n|-------------------|----------|-------------|\n| id                | Integer  | Sim         |\n| name              | String   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a criação de uma nova tag associada a um usuário. A autenticação é necessária, utilizando tanto token quanto cookie. A validação de hierarquia é aplicada ao criar a tag, garantindo que a estrutura da tag esteja correta. O retorno da operação é um objeto JSON representando a tag criada.",
    "payload": "{\"name\": \"Nova Tag\"}",
    "markdown": "## Criar Tag\n\n### Descrição\nEste endpoint permite a criação de uma nova tag associada a um usuário.\n\n### Método\n`POST`\n\n### Endpoint\n`/api/tags/{id}/`\n\n### Parâmetros Requeridos\n| Nome do Parâmetro | Tipo     | Obrigatório |\n|-------------------|----------|-------------|\n| id                | Integer  | Sim         |\n| name              | String   | Sim         |\n\n### Autenticação\nEste endpoint requer autenticação através de token e cookie.\n\n### Resposta\nRetorna um objeto JSON representando a tag criada com sucesso."
  },
  {
    "id": 90,
    "method": "GET",
    "endpoint": "/api/tags/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a recuperação dos detalhes de uma tag específica, identificada pelo seu ID. É parte de um conjunto de operações que gerenciam tags no sistema, incluindo listagem, criação, atualização e exclusão. A autenticação é necessária, podendo ser feita via token ou cookie. O acesso é restrito a usuários autenticados, garantindo a segurança das informações.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperação de Tag\n\n### Método\nGET\n\n### Endpoint\n/api/tags/{id}/\n\n### Descrição\nEste endpoint é utilizado para recuperar os detalhes de uma tag específica, utilizando seu ID como parâmetro.\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Segurança\nEste endpoint requer autenticação. Você pode usar:\n- **tokenAuth**\n- **cookieAuth**\n\n### Respostas\n- **200**: Retorna os detalhes da tag em formato JSON."
  },
  {
    "id": 91,
    "method": "PUT",
    "endpoint": "/api/tags/{id}/",
    "require": "| Nome do Parâmetro | Tipo   | Obrigatório |\n|----------------|--------|-------------|\n| id             | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para atualizar uma tag existente no sistema. A operação requer a identificação da tag através do parâmetro de caminho `id`, que deve ser uma string representando o identificador único da tag. O corpo da requisição deve conter os dados da tag a ser atualizada, conforme definido no esquema `TagRequest`. A atualização é protegida por autenticação, sendo necessário um token de autenticação ou um cookie válido. O sucesso da operação é indicado por uma resposta HTTP 200, retornando os dados da tag atualizada.",
    "payload": "{\"name\": \"Nova Tag\", \"description\": \"Descrição da nova tag\"}",
    "markdown": "## Atualizar Tag\n\n### Descrição\nEste endpoint permite atualizar uma tag existente no sistema. Para realizar a atualização, é necessário fornecer o ID da tag que se deseja modificar e os novos dados da tag no corpo da requisição.\n\n### Requisitos de Autenticação\nA requisição deve incluir um token de autenticação ou um cookie válido para garantir a segurança da operação.\n\n### Parâmetros\n- **id**: O identificador único da tag a ser atualizada (obrigatório).\n\n### Corpo da Requisição\nO corpo da requisição deve ser enviado no formato JSON e deve seguir o esquema definido em `TagRequest`.\n\n### Resposta\nUma resposta bem-sucedida retornará um código de status 200 e os dados da tag atualizada."
  },
  {
    "id": 92,
    "method": "PATCH",
    "endpoint": "/api/tags/{id}/",
    "require": "| Nome do Parâmetro | Tipo   | Obrigatório |\n|----------------|--------|-------------|\n| id             | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de uma tag existente. O parâmetro 'id' deve ser fornecido na URL e é obrigatório. O corpo da requisição pode ser enviado em diferentes formatos, incluindo JSON, x-www-form-urlencoded e multipart/form-data, todos referenciando o esquema 'PatchedTagRequest'. A segurança é garantida através de autenticação por token e cookies. A resposta bem-sucedida retorna os detalhes da tag atualizada.",
    "payload": "{\"name\": \"Nova Tag\", \"description\": \"Descrição da nova tag\"}",
    "markdown": "## Atualização Parcial de Tag\nEsta rota permite a atualização parcial de uma tag existente no sistema.\n\n### Método\n`PATCH`\n\n### Endpoint\n`/api/tags/{id}/`\n\n### Parâmetros Requeridos\n| Nome do Parâmetro | Tipo   | Obrigatório |\n|----------------|--------|-------------|\n| id             | string | Sim         |\n\n### Segurança\nA autenticação é feita através de:\n- `tokenAuth`\n- `cookieAuth`\n\n### Resposta\nUma resposta bem-sucedida retornará os detalhes da tag atualizada no formato JSON."
  },
  {
    "id": 93,
    "method": "DELETE",
    "endpoint": "/api/tags/search/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão definitiva de uma tag, garantindo que a operação respeite a hierarquia de tags. Antes da exclusão, a função get_ids_hierarquia é chamada para validar se o usuário tem permissão para excluir a tag, ou seja, se ela pertence ao seu Mestre ou Equipe. Isso assegura que a integridade da estrutura hierárquica seja mantida e que usuários não possam excluir tags que não estão sob sua autoridade.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Exclusão de Tag\n\n### Método\nDELETE\n\n### Endpoint\n/api/tags/search/\n\n### Descrição\nEsta rota permite a exclusão definitiva de uma tag, garantindo que a operação respeite a hierarquia de tags. Antes da exclusão, a função get_ids_hierarquia é chamada para validar se o usuário tem permissão para excluir a tag, ou seja, se ela pertence ao seu Mestre ou Equipe.\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Segurança\nAcesso restrito, requer autenticação via tokenAuth ou cookieAuth.\n\n### Respostas\n- 204: Nenhum conteúdo retornado após a exclusão."
  },
  {
    "id": 94,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/assinaturas/comprar-addon/{addon_id}/",
    "require": "| Parâmetro  | Tipo   | Obrigatório  |\n|------------|--------|--------------|\n| addon_id   | string | Sim          |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite buscar informações sobre um addon específico utilizando seu ID. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autenticados possam acessar os dados. O impacto no ecossistema CRM é significativo, pois permite a integração de addons de forma segura e eficiente, facilitando a personalização da experiência do usuário.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Buscar Addon por ID\n\n### Descrição\nEsta rota permite buscar informações sobre um addon específico utilizando seu ID.\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/assinaturas/comprar-addon/{addon_id}/\n\n### Parâmetros\n| Parâmetro  | Tipo   | Obrigatório  |\n|------------|--------|--------------|\n| addon_id   | string | Sim          |\n\n### Segurança\nEsta rota requer autenticação através de tokenAuth e cookieAuth.\n\n### Resposta\nRetorna um objeto JSON com as informações do addon correspondente ao ID fornecido."
  },
  {
    "id": 95,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/assinaturas/iniciar/{plano_id}/",
    "require": "| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| plano_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota inicia uma assinatura com base no plano especificado pelo ID. O usuário deve estar autenticado, utilizando um token ou cookie de autenticação. A resposta não inclui corpo, indicando que a operação foi realizada com sucesso. É importante que o ID do plano seja válido e que o usuário tenha permissões adequadas para iniciar a assinatura.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Iniciar Assinatura\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/assinaturas/iniciar/{plano_id}/\n\n### Parâmetros Requeridos\n| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| plano_id  | integer  | Sim         |\n\n### Segurança\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\nA resposta para uma solicitação bem-sucedida não contém corpo, indicando que a assinatura foi iniciada corretamente."
  },
  {
    "id": 96,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/atendimento-stats/",
    "require": "| Nome     | Tipo     | Obrigatório |\n|----------|----------|-------------|\n| plano_id | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para iniciar um atendimento relacionado a um plano específico. O parâmetro `plano_id` é necessário para identificar qual plano está sendo ativado. A autenticação é feita através de um token JWT e cookies. A resposta para esta operação não contém corpo, indicando que a operação foi realizada com sucesso.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Iniciar Atendimento\n\n### Descrição\nEsta rota inicia um atendimento relacionado a um plano específico.\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/atendimento-stats/\n\n### Parâmetros Requeridos\n| Nome     | Tipo     | Obrigatório |\n|----------|----------|-------------|\n| plano_id | integer  | Sim         |\n\n### Autenticação\n- `tokenAuth`\n- `cookieAuth`\n\n### Resposta\nNão há corpo de resposta, indicando que a operação foi realizada com sucesso."
  },
  {
    "id": 97,
    "method": "GET",
    "endpoint": "/atendimento/exportar-relatorio/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exportação de relatórios de atendimento. É necessário autenticação via token e cookie para acessar esta funcionalidade. A resposta é um código de status 200, indicando sucesso, mas não retorna um corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Exportar Relatório de Atendimento\n\n### Método\nGET\n\n### Endpoint\n/atendimento/exportar-relatorio/\n\n### Autenticação\nEsta rota requer autenticação via `tokenAuth` e `cookieAuth`.\n\n### Resposta\nUm código de status 200 é retornado em caso de sucesso, sem corpo de resposta."
  },
  {
    "id": 98,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/atributos-personalizaveis/{negocio_id}/",
    "require": "| Nome           | Tipo   | Obrigatório |\n|----------------|--------|-------------|\n| negocio_id     | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exportação de um relatório completo de atendimento em formato Excel, contendo seis abas distintas que fornecem uma visão abrangente sobre o desempenho e a análise das interações. O acesso é restrito a usuários autenticados, exigindo um token de autenticação ou autenticação via cookie. O relatório gerado é crucial para a análise de desempenho e tomada de decisões estratégicas dentro do CRM, permitindo que os gestores avaliem KPIs, tempos de resposta e a performance individual dos operadores.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Exportar Relatório de Atendimento\n\n**Método:** GET\n\n**Descrição:** Esta rota exporta um relatório completo de atendimento em Excel, que inclui as seguintes abas:\n1. Resumo Executivo - KPIs gerais\n2. Conversas Detalhadas - Lista completa de conversas\n3. Performance por Operador - Métricas individuais\n4. Análise de Status - Distribuição de conversas\n5. Tempos de Resposta - Análise temporal\n6. Atividade por Hora - Picos de atendimento\n\n**Segurança:**\n- Requer autenticação via token (tokenAuth) ou cookie (cookieAuth).\n\n**Impacto no CRM:**\nEsta funcionalidade é essencial para a análise de dados de atendimento, permitindo que as empresas melhorem seus processos e a satisfação do cliente."
  },
  {
    "id": 99,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/atributos-personalizaveis/{id}/delete/",
    "require": "| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| negocio_id   | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão de atributos personalizáveis associados a um negócio específico. O parâmetro `negocio_id` deve ser fornecido na URL e é obrigatório para identificar qual atributo deve ser deletado. A segurança é garantida através de autenticação por token e cookie, assegurando que apenas usuários autorizados possam realizar essa operação. A resposta bem-sucedida retorna um status 201, indicando que o atributo foi deletado com sucesso.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: POST /atributos-personalizaveis/{id}/delete/\n\n### Descrição\nEsta rota permite a exclusão de atributos personalizáveis de um negócio específico.\n\n### Parâmetros\n- `negocio_id` (integer, obrigatório): ID do negócio associado ao atributo que se deseja deletar.\n\n### Segurança\n- `tokenAuth`: Necessário para autenticação via token.\n- `cookieAuth`: Necessário para autenticação via cookie.\n\n### Resposta\n- **201**: Indica que o atributo foi deletado com sucesso."
  },
  {
    "id": 100,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/atributos-personalizaveis/{id}/update/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão de um atributo personalizável identificado pelo seu ID. O ID deve ser fornecido como um parâmetro de caminho. A autenticação é necessária e pode ser feita através de token ou cookie. Um sucesso nesta operação resultará em um código de status 204, indicando que a operação foi concluída sem retornar um corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## DELETE /atributos-personalizaveis/{id}/update/\n\n### Descrição\nEsta rota permite a exclusão de um atributo personalizável específico, identificado pelo seu ID.\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Segurança\nA autenticação é necessária para acessar esta rota. As opções de autenticação incluem:\n- **tokenAuth**: Autenticação via token.\n- **cookieAuth**: Autenticação via cookie.\n\n### Resposta\nUm código de status 204 será retornado em caso de sucesso, sem corpo de resposta."
  },
  {
    "id": 101,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/atributos-personalizaveis/{id}/update/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a atualização de um atributo personalizável existente no sistema. O parâmetro 'id' é obrigatório e deve ser um número inteiro que identifica o atributo a ser atualizado. O corpo da solicitação pode ser enviado em diferentes formatos, incluindo JSON, form-urlencoded e multipart/form-data, todos referenciando o esquema 'AtributoPersonalizavelRequest'. Assegure-se de que o token de autenticação seja incluído na solicitação, pois a segurança é garantida através de 'tokenAuth' e 'cookieAuth'.",
    "payload": "{\"nome\": \"Exemplo de Atributo\", \"valor\": \"Valor do Atributo\"}",
    "markdown": "## Atualização de Atributos Personalizáveis\n\n### Método\nPUT\n\n### Endpoint\n/backend.loomiecrm.com/atributos-personalizaveis/{id}/update/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Corpo da Requisição\nO corpo da requisição deve seguir o esquema 'AtributoPersonalizavelRequest'.\n\n### Respostas\n- **200**: Retorna o atributo personalizável atualizado.\n\n### Segurança\nEste endpoint requer autenticação através de 'tokenAuth' e 'cookieAuth'.\n\n### Lógica de Negócio\nEste endpoint é crucial para a atualização de atributos personalizáveis no CRM, permitindo que os usuários modifiquem informações essenciais de maneira segura e eficiente."
  },
  {
    "id": 102,
    "method": "PATCH",
    "endpoint": "/auth/perfil/configuracao/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial das configurações de um atributo personalizável. O parâmetro 'id' é obrigatório e deve ser um inteiro que identifica o atributo a ser atualizado. A autenticação é feita através de token e cookies, garantindo que apenas usuários autorizados possam realizar essa operação. O sistema responde com os dados atualizados do atributo personalizável.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Atributos Personalizáveis\n\n### Método\nPATCH\n\n### Endpoint\n/auth/perfil/configuracao/\n\n### Parâmetros Requeridos\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a atualização parcial das configurações de um atributo personalizável. O parâmetro 'id' é obrigatório e deve ser um inteiro que identifica o atributo a ser atualizado. A autenticação é feita através de token e cookies, garantindo que apenas usuários autorizados possam realizar essa operação.\n\n### Resposta\nA resposta será um JSON com os dados atualizados do atributo personalizável."
  },
  {
    "id": 103,
    "method": "GET",
    "endpoint": "/auth/perfil/configuracao/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para recuperar as configurações do perfil do usuário autenticado. A autenticação é realizada através de um token de autenticação e cookies. Não há corpo de resposta para esta rota, indicando que a configuração do perfil é retornada diretamente na resposta sem um payload adicional.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Recuperação de Configuração de Perfil\n\n**Método:** GET\n\n**Endpoint:** /auth/perfil/configuracao/\n\n**Autenticação:**\n- tokenAuth: Necessário\n- cookieAuth: Necessário\n\n**Descrição:**\nEsta rota permite que um usuário autenticado recupere as configurações do seu perfil. A autenticação é verificada através de um token e cookies. Não há corpo de resposta para esta rota, o que significa que as configurações são retornadas diretamente na resposta sem payload adicional.\n\n**Resposta:**\n- Código 200: A requisição foi bem-sucedida, mas não há corpo de resposta."
  },
  {
    "id": 104,
    "method": "PATCH",
    "endpoint": "/auth/register/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial das informações de registro do usuário. É necessário um token de autenticação válido e um cookie de autenticação para acessar esta rota. As alterações feitas nesta rota podem impactar diretamente a configuração do perfil do usuário no CRM, refletindo as novas informações de registro.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Atualização Parcial do Registro do Usuário\n\n### Método\nPATCH\n\n### Endpoint\n/auth/register/\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Resposta\nA resposta para esta rota não contém corpo, retornando apenas um status 200 em caso de sucesso."
  },
  {
    "id": 105,
    "method": "POST",
    "endpoint": "/auth/register/subordinado/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para criar um novo usuário subordinado no sistema. É necessário que o usuário que realiza a requisição tenha um token de autenticação válido, além de um cookie de autenticação, para garantir a segurança da operação. Não há resposta no corpo, mas um status de sucesso é retornado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Criar Usuário Subordinado\n\n### Método\nPOST\n\n### Endpoint\n/auth/register/subordinado/\n\n### Descrição\nEsta rota é utilizada para criar um novo usuário subordinado no sistema.\n\n### Segurança\nEsta operação requer autenticação através de um token válido e um cookie de autenticação.\n\n### Resposta\nA operação retorna um status 200 em caso de sucesso, sem corpo de resposta."
  },
  {
    "id": 106,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/auth/token/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para autenticação de usuários, permitindo a geração de um token de acesso. É necessário que o usuário esteja devidamente autenticado através de um token ou cookie. A segurança é garantida por meio de autenticação baseada em token e cookie, assegurando que apenas usuários autorizados possam acessar os recursos protegidos do sistema.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: /auth/token/\n\n### Método: POST\n\n### Descrição:\nEste endpoint é utilizado para autenticação de usuários, permitindo a geração de um token de acesso.\n\n### Segurança:\n- tokenAuth: Necessário\n- cookieAuth: Necessário\n\n### Respostas:\n- 200: Autenticação bem-sucedida, sem corpo de resposta."
  },
  {
    "id": 107,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/auth/usuarios/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que os usuários obtenham um token de autenticação necessário para acessar recursos protegidos da API. A autenticação pode ser realizada através de token ou cookie, garantindo segurança na comunicação. Não há resposta de corpo para este endpoint, mas um token de autenticação é retornado no cabeçalho da resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Obter Token de Autenticação\n\n### Método\nPOST\n\n### Endpoint\n/backend/usuarios/\n\n### Descrição\nEsta rota permite que os usuários obtenham um token de autenticação necessário para acessar recursos protegidos da API.\n\n### Segurança\n- **tokenAuth**: Necessário para autenticação via token.\n- **cookieAuth**: Necessário para autenticação via cookie.\n\n### Resposta\nNão há corpo de resposta para este endpoint, mas um token de autenticação é retornado no cabeçalho da resposta."
  },
  {
    "id": 108,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/buscar-por-telefone/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite buscar informações de usuários com base no número de telefone fornecido. A autenticação é necessária através de tokenAuth ou cookieAuth. A resposta da rota é um código de sucesso 200, indicando que a requisição foi processada com sucesso, mas não retorna um corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Endpoint: /buscar-por-telefone/\n\n## Método\nGET\n\n## Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n## Descrição\nEsta rota permite buscar informações de usuários com base no número de telefone fornecido. A resposta é um código de sucesso 200, indicando que a requisição foi processada com sucesso, mas não retorna um corpo de resposta."
  },
  {
    "id": 109,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/calendario/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite ao usuário buscar informações no calendário. A autenticação é necessária através de token ou cookie, garantindo que apenas usuários autorizados possam acessar os dados do calendário. Não há corpo de resposta esperado para esta rota, pois a operação é realizada com sucesso sem retorno de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Buscar Calendário\n\n### Método: GET\n\n### Endpoint: /calendario/\n\n### Autenticação\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\nA rota não retorna um corpo de resposta, indicando que a operação foi bem-sucedida."
  },
  {
    "id": 110,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/calendario/",
    "require": "| Nome     | Tipo     | Obrigatório | Descrição                                                  |\n|----------|----------|-------------|----------------------------------------------------------|\n| ordering | string   | Não         | Qual campo usar ao ordenar os resultados.                 |\n| page     | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search   | string   | Não         | Um termo de busca.                                       |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar os itens do calendário de forma paginada e ordenada. Os parâmetros de consulta permitem ao usuário ordenar os resultados, especificar a página desejada e realizar buscas específicas. A segurança é garantida através de autenticação por token e cookies, assegurando que apenas usuários autenticados possam acessar os dados do calendário.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listagem do Calendário\n\nEsta rota permite que os usuários recuperem uma lista de itens do calendário.\n\n### Parâmetros de Consulta\n\n- **ordering** (string, opcional): Especifica qual campo usar para ordenar os resultados.\n- **page** (integer, opcional): Indica o número da página dentro do conjunto de resultados paginados.\n- **search** (string, opcional): Permite buscar por um termo específico nos itens do calendário.\n\n### Segurança\n\nA rota requer autenticação, que pode ser realizada através de um token ou cookie.\n\n### Resposta\n\nUma resposta bem-sucedida retornará um objeto JSON contendo a lista paginada de itens do calendário."
  },
  {
    "id": 111,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/calendario/{id}/",
    "require": "| Nome do Parâmetro | Tipo     | Obrigatório |\n|------------------|----------|-------------|\n| id               | string   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de um novo item no calendário associado ao identificador fornecido. É necessário um token de autenticação e um cookie de autenticação para acessar esta rota. O item a ser criado deve ser enviado no corpo da requisição em um dos formatos suportados: JSON, x-www-form-urlencoded ou multipart/form-data. O sucesso da operação resulta em um status 201 e retorna o item criado no formato JSON.",
    "payload": "{\"nome\": \"Reunião de Projeto\", \"data\": \"2023-10-01T10:00:00Z\", \"descricao\": \"Reunião para discutir o andamento do projeto.\"}",
    "markdown": "## Criar Item no Calendário\n\n### Método\nPOST\n\n### Endpoint\n/backend/calendario/{id}/\n\n### Descrição\nEsta rota permite a criação de um novo item no calendário associado ao identificador fornecido. O item deve ser enviado no corpo da requisição.\n\n### Requisitos de Autenticação\n- **tokenAuth**: Necessário para autenticação do usuário.\n- **cookieAuth**: Necessário para autenticação adicional.\n\n### Parâmetros\n| Nome do Parâmetro | Tipo     | Obrigatório |\n|------------------|----------|-------------|\n| id               | string   | Sim         |\n\n### Formatos Aceitos\n- application/json\n- application/x-www-form-urlencoded\n- multipart/form-data\n\n### Resposta\n- **201 Created**: Retorna o item criado no formato JSON.\n\n### Exemplo de Payload\n{\n  \"nome\": \"Reunião de Projeto\",\n  \"data\": \"2023-10-01T10:00:00Z\",\n  \"descricao\": \"Reunião para discutir o andamento do projeto.\"\n}"
  },
  {
    "id": 112,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/calendario/{id}/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a recuperação de um item do calendário baseado no ID fornecido. A autenticação é realizada através de um token de acesso ou um cookie de sessão. O sucesso da operação retorna um objeto JSON que representa o item do calendário, conforme definido no esquema ItemCalendario.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperação de Item do Calendário\n\n### Método\nGET\n\n### Endpoint\n/backend/calendario/{id}/\n\n### Parâmetros\n- **id** (string, obrigatório): O identificador único do item do calendário que se deseja recuperar.\n\n### Segurança\nEste endpoint requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\nUma resposta bem-sucedida (200) retornará um objeto JSON que representa o item do calendário."
  },
  {
    "id": 113,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/calendario/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização de um item no calendário, identificando-o pelo parâmetro 'id'. O corpo da requisição deve conter os dados do item a ser atualizado, que seguem o esquema definido em 'ItemCalendarioRequest'. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autenticados possam realizar essa operação. O impacto no ecossistema CRM é significativo, pois permite a modificação de eventos e compromissos, mantendo a integridade e a atualização dos dados do calendário.",
    "payload": "{\"data\": \"2023-10-01\", \"titulo\": \"Reunião de equipe\", \"descricao\": \"Discussão sobre o projeto X\", \"local\": \"Sala 1\"}",
    "markdown": "## Atualização de Item do Calendário\n\n### Método\nPUT\n\n### Endpoint\n/backend/calendario/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve ser enviado em formato JSON, x-www-form-urlencoded ou multipart/form-data, conforme o esquema definido em 'ItemCalendarioRequest'.\n\n### Autenticação\nA rota requer autenticação via token e cookie.\n\n### Resposta\nA resposta será um objeto JSON que representa o item atualizado do calendário, conforme o esquema 'ItemCalendario'.\n\n### Impacto no CRM\nEsta operação é crucial para a manutenção e atualização dos eventos no calendário do CRM, permitindo que os usuários modifiquem informações relevantes de compromissos."
  },
  {
    "id": 114,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/calendario/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de um item do calendário. O parâmetro 'id' é obrigatório e deve ser passado na URL. O corpo da requisição pode ser enviado em diferentes formatos, como JSON, URL encoded ou multipart/form-data, conforme o esquema definido em 'PatchedItemCalendarioRequest'. A segurança é garantida por meio de autenticação via token e cookies. A resposta bem-sucedida retorna um objeto do tipo 'ItemCalendario'.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial do Calendário\n\nEsta rota permite a atualização parcial de um item do calendário.\n\n### Método\nPATCH\n\n### Endpoint\n/backend/calendario/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Corpo da Requisição\nO corpo da requisição deve ser enviado em um dos seguintes formatos:\n- application/json\n- application/x-www-form-urlencoded\n- multipart/form-data\n\n### Segurança\nEsta rota requer autenticação através de:\n- tokenAuth\n- cookieAuth\n\n### Resposta\nA resposta bem-sucedida retorna um objeto do tipo 'ItemCalendario'.\n\n### Exemplo de Payload\n{\n  \"campo1\": \"valor1\",\n  \"campo2\": \"valor2\"\n}"
  },
  {
    "id": 115,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/calendario/por-negocio/{negocio_id}/",
    "require": "| Nome       | Tipo   | Obrigatório |\n|------------|--------|-------------|\n| negocio_id | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão de um calendário associado a um negócio específico. Para utilizar esta rota, o usuário deve estar autenticado via token ou cookie. A exclusão é permanente e não há retorno de corpo na resposta, apenas um status 204 indicando sucesso. É importante garantir que o negócio a ser excluído esteja ativo e que o usuário tenha permissão para realizar essa ação, pois a exclusão pode impactar outras funcionalidades do CRM relacionadas ao calendário.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Exclusão de Calendário por Negócio\n\n### Método\nDELETE\n\n### Endpoint\n/backend/calendario/por-negocio/{negocio_id}/\n\n### Parâmetros\n| Nome       | Tipo   | Obrigatório |\n|------------|--------|-------------|\n| negocio_id | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação através de token ou cookie.\n\n### Resposta\nA rota retorna um status 204 sem corpo, indicando que a exclusão foi realizada com sucesso.\n\n### Considerações\nA exclusão de um calendário pode afetar outras funcionalidades do CRM, por isso é crucial verificar as permissões do usuário antes de permitir a exclusão."
  },
  {
    "id": 116,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/calendario/proximas-tarefas/",
    "require": "| Nome       | Tipo   | Obrigatório |\n|------------|--------|-------------|\n| negocio_id | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite recuperar todas as tarefas do calendário associadas a um negócio específico, identificado pelo parâmetro `negocio_id`. O `negocio_id` deve ser um número inteiro, conforme definido pelo padrão regex `^[0-9]+$`. A autenticação é necessária e pode ser realizada através de um token ou cookie. O sucesso da requisição retornará um código de status 200 e um objeto JSON que representa as tarefas do calendário.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /calendario/proximas-tarefas/\n\n### Descrição\nEsta rota retorna todas as tarefas do calendário vinculadas a um negócio específico.\n\n### Parâmetros\n| Nome       | Tipo   | Obrigatório |\n|------------|--------|-------------|\n| negocio_id | string | Sim         |\n\n### Segurança\nEsta rota requer autenticação através de `tokenAuth` ou `cookieAuth`.\n\n### Resposta\nUm código de status 200 será retornado com um objeto JSON contendo as tarefas do calendário."
  },
  {
    "id": 117,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/canais-disponiveis/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite ao usuário recuperar uma lista de tarefas pendentes ou atrasadas. É importante que o usuário esteja autenticado, utilizando um token de autenticação ou cookies válidos, para acessar esta informação. A resposta será um objeto JSON que representa as tarefas disponíveis no calendário, permitindo que o CRM gerencie eficientemente as atividades dos usuários.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /calendario/proximas-tarefas/\n\n### Descrição\nEsta rota retorna apenas tarefas pendentes ou atrasadas do calendário do usuário.\n\n### Autenticação\nPara acessar este endpoint, é necessário que o usuário esteja autenticado. As opções de autenticação disponíveis incluem:\n- **tokenAuth**: O usuário deve fornecer um token de autenticação válido.\n- **cookieAuth**: Alternativamente, o usuário pode usar cookies de sessão válidos.\n\n### Resposta\nA resposta será um objeto JSON com a estrutura definida pelo schema `ItemCalendario`, que contém as informações das tarefas pendentes ou atrasadas."
  },
  {
    "id": 118,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/configuracao-email/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que o usuário obtenha uma lista de canais de comunicação disponíveis. A autenticação é necessária, utilizando tokenAuth ou cookieAuth. A resposta é um código de sucesso 200, indicando que a operação foi bem-sucedida, mas não retorna um corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Canais Disponíveis\n\n### Descrição\nEsta rota lista os canais de comunicação disponíveis para o usuário.\n\n### Método\nGET\n\n### Endpoint\n/configuracao-email/\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\n- **Código 200**: Operação bem-sucedida, sem corpo de resposta."
  },
  {
    "id": 119,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/configuracao-email/",
    "require": "Nenhum",
    "optional": "ordering: string, page: integer, search: string",
    "detalhes": "Este endpoint permite visualizar as configurações de email do usuário. Ele suporta paginação e ordenação dos resultados através dos parâmetros de consulta. A autenticação é feita utilizando tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /configuracao-email/\n\n### Descrição\nEste endpoint permite visualizar as configurações de email do usuário. Ele é parte de um ViewSet que também suporta a criação e atualização das configurações de email.\n\n### Parâmetros\n| Nome     | Tipo     | Requerido | Descrição                                         |\n|----------|----------|-----------|---------------------------------------------------|\n| ordering | string   | Não       | Qual campo usar ao ordenar os resultados.         |\n| page     | integer  | Não       | Um número de página dentro do conjunto de resultados paginado. |\n| search   | string   | Não       | Um termo de busca.                               |\n\n### Segurança\nEste endpoint requer autenticação através de tokenAuth ou cookieAuth.\n\n### Resposta\nUma resposta bem-sucedida retornará um código de status 200 e um objeto JSON contendo a lista paginada das configurações de email."
  },
  {
    "id": 120,
    "method": "POST",
    "endpoint": "/configuracao-email/{id}/",
    "require": "| Parâmetro | Tipo | Obrigatório |\n| --------- | ---- | ----------- |\n| id        | String | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite criar ou atualizar as configurações de email do usuário. O usuário deve fornecer um ID válido para a configuração de email que deseja gerenciar. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autenticados possam acessar este recurso. As configurações de email são essenciais para a comunicação eficaz e devem ser gerenciadas com cuidado.",
    "payload": "{\"email\":\"usuario@exemplo.com\",\"senha\":\"senhaSegura123\",\"servidorSMTP\":\"smtp.exemplo.com\",\"porta\":587,\"ssl\":true}",
    "markdown": "## Endpoint: POST /configuracao-email/{id}/\n\n### Descrição\nEste endpoint é utilizado para criar ou atualizar as configurações de email do usuário. Ele faz parte do ViewSet que gerencia as configurações de email.\n\n### Autenticação\nEste endpoint requer autenticação via `tokenAuth` e `cookieAuth`. Apenas usuários autenticados podem acessar este recurso.\n\n### Parâmetros\n- **id**: O ID da configuração de email que está sendo gerenciada. Este parâmetro é obrigatório.\n\n### Respostas\n- **201 Created**: Retorna a configuração de email criada ou atualizada com sucesso.\n\n### Exemplo de Payload\nO payload deve ser enviado no formato JSON e deve incluir os seguintes campos:\n- `email`: O endereço de email do usuário.\n- `senha`: A senha para autenticação no servidor de email.\n- `servidorSMTP`: O endereço do servidor SMTP.\n- `porta`: A porta utilizada para a conexão SMTP.\n- `ssl`: Um booleano que indica se a conexão deve ser feita via SSL."
  },
  {
    "id": 121,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/configuracao-email/{id}/",
    "require": "| Nome  | Tipo   | Obrigatório |\n|-------|--------|-------------|\n| id    | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite visualizar as configurações de email do usuário. É necessário fornecer o ID da configuração de email que se deseja consultar. O acesso a esta rota é controlado por autenticação, sendo necessário um token de autenticação ou autenticação via cookie. A resposta contém os detalhes da configuração de email correspondente ao ID fornecido.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /configuracao-email/{id}/\n\n### Descrição\nEste endpoint permite visualizar as configurações de email do usuário. É necessário fornecer o ID da configuração de email que se deseja consultar.\n\n### Parâmetros\n| Nome  | Tipo   | Obrigatório |\n|-------|--------|-------------|\n| id    | string | Sim         |\n\n### Autenticação\nEste endpoint requer autenticação. Você pode usar:\n- **tokenAuth**\n- **cookieAuth**\n\n### Resposta\nA resposta será um objeto JSON contendo os detalhes da configuração de email correspondente ao ID fornecido."
  },
  {
    "id": 122,
    "method": "PUT",
    "endpoint": "/configuracao-email/{id}/",
    "require": "| Nome do parâmetro | Localização | Tipo   | Obrigatório |\n|----------------|--------------|--------|-------------|\n| id             | path         | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite gerenciar as configurações de email do usuário. Através dele, é possível criar e atualizar as configurações de email, utilizando um ID específico para identificar a configuração a ser alterada. A segurança é garantida através de autenticação por token e cookies, assegurando que apenas usuários autorizados possam modificar as configurações. O impacto no ecossistema CRM é significativo, pois permite que os usuários personalizem suas configurações de comunicação, melhorando a eficiência e a eficácia das interações via email.",
    "payload": "{\"email\": \"usuario@exemplo.com\", \"senha\": \"senhaSegura\", \"servidorSMTP\": \"smtp.exemplo.com\", \"porta\": 587, \"usoSSL\": true}",
    "markdown": "## Atualização de Configuração de Email\n\n### Descrição\nEste endpoint permite atualizar as configurações de email de um usuário específico, identificando-o pelo ID fornecido na URL.\n\n### Método\n`PUT`\n\n### Autenticação\nEste endpoint requer autenticação via `tokenAuth` e `cookieAuth`.\n\n### Parâmetros\n- `id`: O ID da configuração de email a ser atualizada (obrigatório).\n\n### Exemplo de Payload\nO payload deve ser enviado no formato JSON, conforme o exemplo abaixo:\n\n```json\n{\n  \"email\": \"usuario@exemplo.com\",\n  \"senha\": \"senhaSegura\",\n  \"servidorSMTP\": \"smtp.exemplo.com\",\n  \"porta\": 587,\n  \"usoSSL\": true\n}\n```\n\n### Resposta\nUma resposta bem-sucedida retornará um status `200` com as novas configurações de email."
  },
  {
    "id": 123,
    "method": "PATCH",
    "endpoint": "/configuracao-email/{id}/",
    "require": "| Nome   | Tipo   | Obrigatório |\n|--------|--------|-------------|\n| id     | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite que os usuários atualizem parcialmente as configurações de email. O parâmetro 'id' é necessário para identificar a configuração específica a ser atualizada. O acesso é protegido por autenticação via token e cookie. As configurações de email são essenciais para a comunicação dentro do sistema CRM, impactando diretamente a entrega de notificações e alertas aos usuários.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial da Configuração de Email\n\n### Método\nPATCH\n\n### Endpoint\n/configuracao-email/{id}/\n\n### Descrição\nEste endpoint permite que os usuários atualizem parcialmente as configurações de email. O parâmetro 'id' é necessário para identificar a configuração específica a ser atualizada.\n\n### Parâmetros\n| Nome   | Tipo   | Obrigatório |\n|--------|--------|-------------|\n| id     | string | Sim         |\n\n### Segurança\nEste endpoint requer autenticação via token e cookie.\n\n### Resposta\nUma resposta bem-sucedida retornará um objeto JSON representando a configuração de email atualizada."
  },
  {
    "id": 124,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/contato-buscar_por_telefone/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por deletar uma configuração de email específica do usuário, identificada pelo parâmetro 'id'. A operação requer autenticação através de token e cookie. Ao ser chamada com sucesso, a rota retorna um status 204, indicando que a operação foi realizada sem erros e não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## DELETE /contato-buscar_por_telefone/\n\n### Descrição\nEsta rota permite deletar uma configuração de email do usuário com base no ID fornecido.\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Segurança\nEsta operação requer autenticação via token e cookie.\n\n### Resposta\nUm status 204 é retornado se a operação for bem-sucedida, indicando que a configuração foi deletada com sucesso e não há corpo na resposta."
  },
  {
    "id": 125,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/contatos/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite buscar contatos através do número de telefone. É necessário autenticação via token e cookie para acessar esta funcionalidade. A resposta para uma busca bem-sucedida não inclui um corpo de resposta, apenas um código de status 200.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Buscar Contatos por Telefone\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/contatos/\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Resposta\n- **200 OK**: A requisição foi bem-sucedida, mas não há corpo de resposta.\n\n### Descrição\nEsta rota permite buscar contatos através do número de telefone. É uma funcionalidade essencial para a gestão de contatos no CRM, permitindo que usuários encontrem rapidamente informações de contato baseadas em números de telefone."
  },
  {
    "id": 126,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/contatos/",
    "require": "| Nome     | Tipo     | Obrigatório | Descrição                                          |\n|----------|----------|-------------|--------------------------------------------------|\n| ordering | string   | Não         | Qual campo usar ao ordenar os resultados.        |\n| page     | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| page_size| integer  | Não         | Número de resultados a serem retornados por página. |\n| search   | string   | Não         | Um termo de busca.                               |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar contatos de forma paginada, com opções de ordenação e filtragem. O usuário pode especificar o campo de ordenação, a página desejada, o número de resultados por página e um termo de busca. A autenticação é realizada através de token ou cookie, garantindo que apenas usuários autorizados possam acessar os dados. Os resultados são retornados no formato paginado, facilitando a navegação em grandes conjuntos de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listar Contatos\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/contatos/\n\n### Descrição\nEsta rota permite listar contatos de forma paginada, com opções de ordenação e filtragem. O usuário pode especificar o campo de ordenação, a página desejada, o número de resultados por página e um termo de busca.\n\n### Parâmetros\n| Nome     | Tipo     | Obrigatório | Descrição                                          |\n|----------|----------|-------------|--------------------------------------------------|\n| ordering | string   | Não         | Qual campo usar ao ordenar os resultados.        |\n| page     | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| page_size| integer  | Não         | Número de resultados a serem retornados por página. |\n| search   | string   | Não         | Um termo de busca.                               |\n\n### Segurança\nA autenticação é realizada através de token ou cookie, garantindo que apenas usuários autorizados possam acessar os dados.\n\n### Resposta\nOs resultados são retornados no formato paginado, facilitando a navegação em grandes conjuntos de dados."
  },
  {
    "id": 127,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/contatos/{contato_id}/detalhes/",
    "require": "| Parâmetro      | Tipo    | Obrigatório |\n|----------------|---------|-------------|\n| contato_id     | String  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de um novo contato ou a atualização dos detalhes de um contato existente, dependendo do contexto. O usuário deve fornecer um token de autenticação válido e, opcionalmente, um cookie para acessar esta funcionalidade. O impacto desta operação no ecossistema CRM é significativo, pois permite a gestão eficiente de contatos, facilitando a comunicação e o relacionamento com os clientes.",
    "payload": "{\"nome\": \"João da Silva\", \"email\": \"joao.silva@example.com\", \"telefone\": \"123456789\", \"endereco\": \"Rua Exemplo, 123\"}",
    "markdown": "## Rota: Criar ou Atualizar Contato\n\n### Método: POST\n\n### Endpoint: /contatos/{contato_id}/detalhes/\n\n### Descrição:\nEsta rota permite a criação de um novo contato ou a atualização dos detalhes de um contato existente. O usuário deve fornecer um token de autenticação válido e, opcionalmente, um cookie para acessar esta funcionalidade.\n\n### Parâmetros:\n| Parâmetro      | Tipo    | Obrigatório |\n|----------------|---------|-------------|\n| contato_id     | String  | Sim         |\n\n### Segurança:\n- tokenAuth: Necessário\n- cookieAuth: Opcional\n\n### Respostas:\n- **201 Created**: Retorna os detalhes do contato criado ou atualizado."
  },
  {
    "id": 128,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/contatos/{id}/",
    "require": "| Nome        | Tipo     | Obrigatório |\n|-------------|----------|-------------|\n| contato_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de detalhes completos de um contato específico, incluindo informações sobre negócios e conversas vinculadas. É necessário fornecer o ID do contato como um parâmetro de caminho. A autenticação é feita através de token e cookies, garantindo que apenas usuários autorizados possam acessar as informações. O impacto no ecossistema CRM é significativo, pois permite que os usuários acessem informações críticas para a gestão de relacionamentos.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Detalhes do Contato\n\nEsta rota permite a recuperação de detalhes completos de um contato específico, incluindo informações sobre negócios e conversas vinculadas.\n\n### Parâmetros\n\n- **contato_id** (integer): O ID do contato que você deseja recuperar. Este parâmetro é obrigatório.\n\n### Segurança\n\n- **tokenAuth**: Requer um token de autenticação válido.\n- **cookieAuth**: Requer um cookie de autenticação válido.\n\n### Resposta\n\n- **200 OK**: A solicitação foi bem-sucedida, mas não há corpo de resposta."
  },
  {
    "id": 129,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/contatos/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Essa rota é responsável por detalhar as informações de um contato específico no sistema. O parâmetro 'id' deve ser fornecido na URL e é obrigatório. A autenticação é realizada através de tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam acessar os dados do contato. A resposta bem-sucedida (200) retornará um objeto JSON com os detalhes do contato solicitado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Detalhamento do Contato\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/contatos/{id}/\n\n### Descrição\nEssa rota permite detalhar as informações de um contato específico no sistema.\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Segurança\nRequer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\nA resposta bem-sucedida retornará um objeto JSON com os detalhes do contato."
  },
  {
    "id": 130,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/contatos/{id}/",
    "require": "| Nome do Parâmetro | Tipo    | Obrigatório |\n|------------------|---------|-------------|\n| id               | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar, atualizar e deletar um contato existente no sistema. O parâmetro 'id' deve ser fornecido na URL e representa o identificador único do contato a ser atualizado. O corpo da requisição deve conter os dados do contato no formato JSON, URL-encoded ou multipart/form-data, conforme especificado. A autenticação é feita através de token e cookie, garantindo que apenas usuários autorizados possam realizar essa operação. A resposta bem-sucedida retorna os dados do contato atualizado.",
    "payload": "{\"nome\": \"João da Silva\", \"email\": \"joao.silva@example.com\", \"telefone\": \"1234567890\"}",
    "markdown": "## Atualizar Contato\n\n### Método\nPUT\n\n### Endpoint\n/backend.loomiecrm.com/contatos/{id}/\n\n### Descrição\nEsta rota permite detalhar, atualizar e deletar um contato existente no sistema.\n\n### Parâmetros Requeridos\n| Nome do Parâmetro | Tipo    | Obrigatório |\n|------------------|---------|-------------|\n| id               | integer | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve conter os dados do contato no formato JSON, URL-encoded ou multipart/form-data.\n\n### Segurança\nA autenticação é feita através de token e cookie, garantindo que apenas usuários autorizados possam realizar essa operação.\n\n### Resposta\nA resposta bem-sucedida retorna os dados do contato atualizado."
  },
  {
    "id": 131,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/contatos/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar, atualizar e deletar um contato existente. O parâmetro 'id' é obrigatório e deve ser um número inteiro que identifica unicamente o contato a ser modificado. A autenticação é feita através de tokenAuth e cookieAuth, garantindo que apenas usuários autenticados possam realizar alterações. O corpo da requisição pode ser enviado em diferentes formatos, incluindo JSON, form-urlencoded e multipart/form-data, todos referenciando o esquema 'PatchedContatoRequest'. A resposta bem-sucedida retorna um objeto 'Contato' atualizado.",
    "payload": "{\"nome\": \"João da Silva\", \"email\": \"joao.silva@example.com\", \"telefone\": \"123456789\"}",
    "markdown": "## PATCH /contatos/{id}/\n\n### Descrição\nEsta rota permite detalhar, atualizar e deletar um contato existente.\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Segurança\nEsta rota requer autenticação via tokenAuth e cookieAuth.\n\n### Formatos de Envio\nO corpo da requisição pode ser enviado em:\n- application/json\n- application/x-www-form-urlencoded\n- multipart/form-data\n\n### Resposta\nUma resposta bem-sucedida retornará um objeto 'Contato' atualizado."
  },
  {
    "id": 132,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/contatos/{id}/impacto-exclusao/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por deletar um contato específico, identificado pelo seu ID. A exclusão de um contato pode impactar outras entidades no CRM, como registros de interações e relatórios. É necessário autenticação via token e cookie para garantir a segurança da operação. A resposta da operação é um código de status 204, indicando que a exclusão foi bem-sucedida e não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## DELETE /contatos/{id}/impacto-exclusao/\n\n### Descrição\nEsta rota permite a exclusão de um contato específico do sistema, utilizando o seu ID como parâmetro. A operação é crítica, pois a remoção de um contato pode afetar dados relacionados no CRM.\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer | Sim         |\n\n### Segurança\nRequer autenticação via:\n- **tokenAuth**\n- **cookieAuth**\n\n### Resposta\nA operação retorna um código de status 204, indicando que a exclusão foi realizada com sucesso e não há corpo de resposta."
  },
  {
    "id": 133,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/contatos/bulk-delete/",
    "require": "| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que o usuário obtenha a contagem de entidades que estão vinculadas a um contato específico e que serão deletadas em cascata. A operação é protegida por autenticação via token e cookie, garantindo que apenas usuários autorizados possam acessar essa informação. Essa funcionalidade é crucial para a manutenção da integridade dos dados no CRM, permitindo que os usuários compreendam o impacto da exclusão de um contato antes de realizar a ação.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: /contatos/bulk-delete/\n\n### Método: GET\n\n### Descrição:\nRetorna a contagem de entidades vinculadas a um contato que serão deletadas em cascata.\n\n### Parâmetros:\n| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |\n\n### Segurança:\nEsta rota requer autenticação via token e cookie.\n\n### Resposta:\n- Código 200: Sem corpo de resposta."
  },
  {
    "id": 134,
    "method": "POST",
    "endpoint": "/contatos/bulk-delete/impacto/",
    "require": "| Nome do Parâmetro | Tipo   | Obrigatório |\n|-------------------|--------|-------------|\n| ids               | array  | Sim         |\n| select_all        | boolean| Não         |",
    "optional": "select_all",
    "detalhes": "Esta rota permite a exclusão em massa de contatos no sistema. O parâmetro 'ids' deve conter uma lista de IDs dos contatos a serem excluídos. Alternativamente, se a flag 'select_all' for definida como verdadeira, todos os contatos visíveis serão excluídos. A autenticação é necessária, utilizando tokenAuth ou cookieAuth, para garantir que apenas usuários autorizados possam realizar essa operação.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Exclusão em Massa de Contatos\n\n### Descrição\nEsta rota permite a exclusão em massa de contatos no sistema. Aceita uma lista de IDs ou a flag select_all para deletar todos os contatos visíveis.\n\n### Método\n**POST**\n\n### Endpoint\n**/contatos/bulk-delete/impacto/**\n\n### Parâmetros\n| Nome do Parâmetro | Tipo   | Obrigatório |\n|-------------------|--------|-------------|\n| ids               | array  | Sim         |\n| select_all        | boolean| Não         |\n\n### Segurança\nEsta rota requer autenticação. Você pode usar:\n- **tokenAuth**\n- **cookieAuth**\n\n### Resposta\nA rota não retorna corpo na resposta."
  },
  {
    "id": 135,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/contatos/telefone/",
    "require": "| Nome do Parâmetro | Tipo      | Obrigatório |\n|-------------------|-----------|-------------|\n| contact_ids       | lista     | Sim         |\n| select_all        | booleano  | Não         |\n| search_term       | string    | Não         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de um registro de contagem agregada de entidades vinculadas a contatos selecionados. Os parâmetros 'contact_ids' são obrigatórios e devem ser fornecidos como uma lista. Os parâmetros 'select_all' e 'search_term' são opcionais e podem ser utilizados para filtrar os contatos a serem considerados na contagem.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: POST /contatos/telefone/\n\n### Descrição\nEsta rota retorna a contagem agregada de entidades vinculadas aos contatos selecionados. Para utilizá-la, deve-se enviar uma lista de 'contact_ids' ou utilizar os parâmetros 'select_all' e 'search_term'.\n\n### Autenticação\nA rota requer autenticação via tokenAuth e cookieAuth.\n\n### Resposta\nA resposta para uma solicitação bem-sucedida (200) não possui corpo."
  },
  {
    "id": 136,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/conversas/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite buscar um contato utilizando o número de telefone. A autenticação é realizada através de um token de autenticação e cookies. Não há corpo de resposta, o que indica que a operação é realizada sem a necessidade de retornar dados adicionais, apenas confirmando a execução da ação.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Buscar Contato por Telefone\n\n**Método:** GET\n\n**Endpoint:** /conversas/\n\n**Descrição:** Esta rota é utilizada para buscar um contato específico através do número de telefone. É especialmente útil em integrações com ferramentas como N8N.\n\n**Segurança:**\n- `tokenAuth`: Necessário para autenticação do usuário.\n- `cookieAuth`: Alternativa de autenticação via cookies.\n\n**Resposta:**\n- Código 200: A operação foi bem-sucedida, mas não há corpo de resposta."
  },
  {
    "id": 137,
    "method": "GET",
    "endpoint": "/conversas/{conversa_id}/adicionar-tag/",
    "require": "| Nome    | Tipo     | Obrigatório | Descrição                                      |\n|---------|----------|-------------|------------------------------------------------|\n| ordering| string   | Não         | Qual campo usar ao ordenar os resultados.      |\n| page    | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| page_size| integer | Não         | Número de resultados a serem retornados por página. |\n| search  | string   | Não         | Um termo de busca.                             |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a listagem de conversas com suporte a paginação e ordenação. Os parâmetros de consulta permitem que o usuário especifique como os resultados devem ser ordenados, a página atual e o tamanho da página. A segurança é garantida através de autenticação com token e cookie. O impacto no CRM é significativo, pois permite que os usuários acessem e gerenciem conversas de forma eficiente.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Listagem de Conversas\n\n## Método\nGET\n\n## Endpoint\n/conversas/{conversa_id}/adicionar-tag/\n\n## Descrição\nEsta rota lista conversas com URLs locais e suporte a paginação.\n\n## Parâmetros\n| Nome    | Tipo     | Obrigatório | Descrição                                      |\n|---------|----------|-------------|------------------------------------------------|\n| ordering| string   | Não         | Qual campo usar ao ordenar os resultados.      |\n| page    | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| page_size| integer | Não         | Número de resultados a serem retornados por página. |\n| search  | string   | Não         | Um termo de busca.                             |\n\n## Segurança\n- tokenAuth\n- cookieAuth\n\n## Resposta\n- 200: Retorna uma lista paginada de conversas."
  },
  {
    "id": 138,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/conversas/{conversa_id}/atendimento-humano/",
    "require": "| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| conversa_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite adicionar uma tag a uma conversa específica, utilizando o ID da conversa fornecido como parâmetro. A operação é protegida por autenticação via token e cookie, garantindo que apenas usuários autorizados possam realizar a ação. A resposta confirma a adição da tag e retorna as tags atuais associadas à conversa, impactando diretamente a organização e categorização das conversas no CRM.",
    "payload": "{\"tag\": \"Compra\"}",
    "markdown": "## Adicionar Tag à Conversa\n\n### Método\nPOST\n\n### Endpoint\n/backend.conversas/{conversa_id}/atendimento-humano/\n\n### Descrição\n🏷️ Adiciona uma tag à conversa (para integração n8n)\n\n### Parâmetros Requeridos\n| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| conversa_id  | integer  | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Corpo da Requisição\n```json\n{\"tag\": \"Compra\"}\n```\n\n### Resposta\n- **Código 200**: Sem corpo de resposta.\n\n### Segurança\nEsta rota requer autenticação via `tokenAuth` e `cookieAuth`."
  },
  {
    "id": 139,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/conversas/{conversa_id}/remover-tag/",
    "require": "| Nome         | Tipo     | Necessário |\n|--------------|----------|------------|\n| conversa_id  | integer  | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para ativar ou desativar o atendimento humano em uma conversa específica. Ao ativar, o bot é pausado por 15 minutos, permitindo que um atendente humano assuma a conversa. O parâmetro 'conversa_id' é obrigatório e deve ser um número inteiro que identifica a conversa. A segurança é garantida através de autenticação por token e cookies. Não há resposta no corpo da requisição, mas um status de sucesso é retornado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## POST /conversas/{conversa_id}/remover-tag/\n\n### Descrição\nAtiva ou desativa o atendimento humano em uma conversa específica, pausando o bot por 15 minutos.\n\n### Parâmetros\n| Nome         | Tipo     | Necessário |\n|--------------|----------|------------|\n| conversa_id  | integer  | Sim        |\n\n### Segurança\nEsta rota requer autenticação via token e cookies.\n\n### Resposta\nNão há corpo de resposta, mas um status de sucesso é retornado."
  },
  {
    "id": 140,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/conversas/{conversa_pk}/interacoes/",
    "require": "| Nome         | Tipo     | Obrigatório | Descrição                            |\n|--------------|----------|-------------|--------------------------------------|\n| conversa_id  | integer  | Sim         | ID da conversa para a qual a tag será removida |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que uma tag específica seja removida de uma conversa existente. A operação é realizada através de um método POST, onde o ID da conversa é passado como um parâmetro de caminho. A autenticação é necessária e pode ser realizada através de token ou cookie. O sucesso da operação é indicado pela resposta JSON, que inclui uma mensagem de confirmação e a lista atualizada de tags.",
    "payload": "{\"tag\": \"Compra\"}",
    "markdown": "## Remoção de Tag da Conversa\n\n### Método\nPOST\n\n### Endpoint\n/backend.conversas/{conversa_pk}/interacoes/\n\n### Descrição\nEsta rota permite remover uma tag de uma conversa específica, facilitando a integração com o n8n.\n\n### Parâmetros\n| Nome         | Tipo     | Obrigatório | Descrição                            |\n|--------------|----------|-------------|--------------------------------------|\n| conversa_id  | integer  | Sim         | ID da conversa para a qual a tag será removida |\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\nA resposta será um objeto JSON indicando o sucesso da operação e a lista atualizada de tags:\n{\n  \"success\": true,\n  \"tags\": [\"Urgente\"],\n  \"mensagem\": \"Tag 'Compra' removida com sucesso\"\n} \n\n### Considerações\nEsta operação é crucial para a manutenção da organização das conversas no CRM, permitindo que tags sejam gerenciadas de forma dinâmica."
  },
  {
    "id": 141,
    "method": "POST",
    "endpoint": "/conversas/{conversa_pk}/notas/",
    "require": "| Nome do Parâmetro | Tipo     | Obrigatório |\n|------------------|----------|-------------|\n| conversa_pk      | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de uma nova interação ou mensagem dentro de uma conversa específica. A interação é automaticamente atribuída ao operador que está enviando a mensagem, caso a conversa não tenha um atendente. Além disso, se a conversa não tiver um dono definido, o usuário que faz a requisição será atribuído como o criador da interação. Isso garante que todas as interações sejam registradas com um responsável, facilitando o acompanhamento e a gestão das conversas no sistema. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam criar interações.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Criação de Interação/Mensagem\n\n### Método\nPOST\n\n### Endpoint\n/conversas/{conversa_pk}/notas/\n\n### Parâmetros Obrigatórios\n| Nome do Parâmetro | Tipo     | Obrigatório |\n|------------------|----------|-------------|\n| conversa_pk      | integer  | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a criação de uma nova interação ou mensagem dentro de uma conversa específica. A interação é automaticamente atribuída ao operador que está enviando a mensagem, caso a conversa não tenha um atendente. Além disso, se a conversa não tiver um dono definido, o usuário que faz a requisição será atribuído como o criador da interação. Isso garante que todas as interações sejam registradas com um responsável, facilitando o acompanhamento e a gestão das conversas no sistema.\n\n### Segurança\nA autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam criar interações.\n\n### Exemplo de Payload\n{\n  \"campo1\": \"valor1\",\n  \"campo2\": \"valor2\"\n}"
  },
  {
    "id": 142,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/conversas/{conversa_pk}/notas/",
    "require": "| Nome        | Tipo     | Obrigatório | Descrição                                             |\n|-------------|----------|-------------|-----------------------------------------------------|\n| conversa_pk | integer  | Sim         | Identificador da conversa para listar as notas.     |",
    "optional": "| Nome   | Tipo     | Obrigatório | Descrição                                             |\n|---------|----------|-------------|-----------------------------------------------------|\n| ordering | string   | Não         | Campo para ordenar os resultados.                    |\n| page     | integer  | Não         | Número da página no conjunto de resultados.          |\n| search   | string   | Não         | Termo de busca para filtrar resultados.              |",
    "detalhes": "Esta rota permite listar as notas de atendimento associadas a uma conversa específica, identificada pelo parâmetro 'conversa_pk'. É possível aplicar filtros como ordenação, paginação e busca. A autenticação é realizada através de token ou cookie. O retorno é uma lista paginada de notas, facilitando a navegação entre grandes volumes de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listar Notas de Atendimento\n\n### Descrição\nEsta rota é utilizada para listar as notas de atendimento relacionadas a uma conversa específica. O parâmetro 'conversa_pk' é obrigatório e deve ser fornecido na URL.\n\n### Parâmetros\n- **conversa_pk**: Identificador da conversa (obrigatório).\n- **ordering**: Campo para ordenar os resultados (opcional).\n- **page**: Número da página no conjunto de resultados paginados (opcional).\n- **search**: Termo de busca para filtrar os resultados (opcional).\n\n### Segurança\nA rota requer autenticação, que pode ser realizada através de token ou cookie. É fundamental garantir que o usuário tenha as permissões necessárias para acessar as notas da conversa.\n\n### Impacto no CRM\nIntegrar esta rota ao sistema de CRM permite que os usuários acessem rapidamente as notas de atendimento, melhorando a eficiência no gerenciamento de interações com os clientes."
  },
  {
    "id": 143,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/conversas/{id}/",
    "require": "| Nome              | Tipo     | Obrigatório |\n|-------------------|----------|-------------|\n| conversa_pk       | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar e criar notas de atendimento associadas a uma conversa específica. O parâmetro `conversa_pk` é obrigatório e deve ser um número inteiro que identifica a conversa. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam acessar esta funcionalidade. A resposta bem-sucedida retorna um status 201 com os detalhes da nota de atendimento criada.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Rota: Criar Notas de Atendimento\n\n### Método\nPOST\n\n### Endpoint\n/backend.conversas/{id}/\n\n### Descrição\nEsta rota permite listar e criar notas de atendimento associadas a uma conversa específica.\n\n### Parâmetros\n| Nome              | Tipo     | Obrigatório |\n|-------------------|----------|-------------|\n| conversa_pk       | integer  | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Resposta\nA resposta bem-sucedida retorna um status 201 com os detalhes da nota de atendimento criada.\n\n### Exemplo de Payload\n{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}"
  },
  {
    "id": 144,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/conversas/{id}/",
    "require": "| Nome | Tipo   | Necessário | Descrição |\n|------|--------|------------|-----------|\n| id   | integer| Sim        | ID da conversa a ser detalhada |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação dos detalhes de uma conversa específica, identificada pelo seu ID. A autenticação é necessária através de token ou cookie, garantindo que apenas usuários autorizados possam acessar as informações. A resposta retorna os detalhes da conversa em formato JSON, conforme definido no esquema 'ConversaDetail'.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Detalhamento da Rota GET /conversas/{id}/\n\n### Descrição\nEsta rota permite a recuperação dos detalhes de uma conversa específica, identificada pelo seu ID.\n\n### Parâmetros\n| Nome | Tipo   | Necessário | Descrição |\n|------|--------|------------|-----------|\n| id   | integer| Sim        | ID da conversa a ser detalhada |\n\n### Segurança\nA autenticação é necessária através de token ou cookie, garantindo que apenas usuários autorizados possam acessar as informações.\n\n### Resposta\nA resposta retorna os detalhes da conversa em formato JSON, conforme definido no esquema 'ConversaDetail'."
  },
  {
    "id": 145,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/conversas/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite atualizar os detalhes de uma conversa específica utilizando o ID fornecido. O ID é um parâmetro obrigatório que identifica a conversa a ser atualizada. A autenticação é feita através de um token e cookies, garantindo que apenas usuários autorizados possam realizar essa operação. A atualização pode incluir URLs locais nas interações, o que é crucial para manter a integridade das informações dentro do CRM.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualizar Conversa\n\n### Descrição\nEsta rota permite atualizar os detalhes de uma conversa específica utilizando o ID fornecido.\n\n### Método\n`PUT`\n\n### Endpoint\n`/conversas/{id}/`\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Autenticação\nEsta rota requer autenticação via `tokenAuth` e `cookieAuth`.\n\n### Resposta\nA resposta será um objeto JSON que representa a conversa atualizada."
  },
  {
    "id": 146,
    "method": "PATCH",
    "endpoint": "/conversas/criar/",
    "require": "| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de uma conversa existente, identificada pelo parâmetro 'id'. A atualização é feita através de um payload que pode ser enviado em diferentes formatos, como JSON, form-urlencoded ou multipart/form-data. A segurança é garantida através de autenticação por token e cookies, assegurando que apenas usuários autorizados possam realizar alterações nas conversas.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Conversas\n\n### Método\nPATCH\n\n### Endpoint\n/conversas/criar/\n\n### Parâmetros Requeridos\n| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a atualização parcial de uma conversa existente, identificada pelo parâmetro 'id'. A atualização é feita através de um payload que pode ser enviado em diferentes formatos, como JSON, form-urlencoded ou multipart/form-data.\n\n### Segurança\nA segurança é garantida através de autenticação por token e cookies, assegurando que apenas usuários autorizados possam realizar alterações nas conversas.\n\n### Resposta\nA resposta da rota é um objeto JSON que representa a conversa atualizada."
  },
  {
    "id": 147,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/criar_gatilho/",
    "require": "| Nome do Parâmetro | Tipo   | Obrigatório |\n|------------------|--------|-------------|\n| contato          | integer | Sim         |\n| assunto          | string  | Sim         |\n| origem           | string  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação manual de uma nova conversa com um contato específico. O usuário deve fornecer o ID do contato, um assunto para a conversa e a origem da conversa, que deve ser definida como 'manual'. A autenticação é feita através de token e cookie, garantindo que apenas usuários autorizados possam criar novas conversas. Essa funcionalidade é crucial para a gestão de interações com clientes no CRM, permitindo que os usuários iniciem conversas de forma eficiente e organizada.",
    "payload": "{\"contato\": 12345, \"assunto\": \"Dúvida sobre o produto\", \"origem\": \"manual\"}",
    "markdown": "## Criar Gatilho\n\n### Descrição\nEsta rota permite a criação manual de uma nova conversa com um contato específico.\n\n### Método\n`POST`\n\n### Endpoint\n`/criar_gatilho/`\n\n### Parâmetros Requeridos\n| Nome do Parâmetro | Tipo   | Obrigatório |\n|------------------|--------|-------------|\n| contato          | integer | Sim         |\n| assunto          | string  | Sim         |\n| origem           | string  | Sim         |\n\n### Exemplo de Payload\n```json\n{\"contato\": 12345, \"assunto\": \"Dúvida sobre o produto\", \"origem\": \"manual\"}\n```\n\n### Segurança\n- `tokenAuth`: Necessário para autenticação.\n- `cookieAuth`: Necessário para autenticação.\n\n### Impacto no CRM\nEssa funcionalidade é crucial para a gestão de interações com clientes, permitindo que os usuários iniciem conversas de forma eficiente e organizada."
  },
  {
    "id": 148,
    "method": "POST",
    "endpoint": "/criar_tarefas/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável pela criação de novas tarefas no sistema. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam criar tarefas. A ausência de um corpo de resposta indica que a operação é realizada com sucesso, mas não retorna dados adicionais.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Criar Tarefas\n\n### Método\nPOST\n\n### Endpoint\n/criar_tarefas/\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth e cookieAuth.\n\n### Descrição\nEsta rota é responsável pela criação de novas tarefas no sistema. A operação não retorna um corpo de resposta, indicando que a tarefa foi criada com sucesso, mas sem dados adicionais. É importante garantir que o usuário tenha as permissões necessárias para executar esta ação."
  },
  {
    "id": 149,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/dashboard/",
    "require": "| Parâmetro  | Tipo   | Obrigatório |\n|------------|--------|-------------|\n| body       | object | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por criar novas tarefas no sistema. O usuário deve estar autenticado através de tokenAuth ou cookieAuth para acessar esta funcionalidade. A criação de tarefas impacta diretamente no gerenciamento de atividades dentro do CRM, permitindo uma melhor organização e acompanhamento das tarefas atribuídas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Criar Tarefas\n\n### Método\nPOST\n\n### Endpoint\n/backend/dashboard/\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n### Descrição\nEsta rota permite a criação de novas tarefas dentro do sistema. O corpo da requisição deve conter os detalhes da tarefa a ser criada. A criação de tarefas é essencial para a gestão eficiente de atividades no CRM, permitindo que os usuários organizem e priorizem suas responsabilidades.\n\n### Respostas\n- **200**: A operação foi realizada com sucesso, sem resposta no corpo."
  },
  {
    "id": 150,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/dashboard/stats/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de estatísticas do dashboard. É necessário autenticação via token ou cookie para acessar este endpoint. Não há corpo de resposta, indicando que a operação é bem-sucedida sem retornar dados adicionais.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: /dashboard/stats/\n\n### Método: GET\n\n### Descrição\nEsta rota é responsável por recuperar as estatísticas do dashboard.\n\n### Autenticação\nÉ necessário autenticação via `tokenAuth` ou `cookieAuth` para acessar este endpoint.\n\n### Resposta\nA resposta para uma solicitação bem-sucedida não contém corpo."
  },
  {
    "id": 151,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/entries/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por recuperar as estatísticas do dashboard. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam acessar as informações. Não há necessidade de parâmetros adicionais para esta requisição, e o corpo da resposta será vazio, indicando que a operação foi bem-sucedida.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Estatísticas do Dashboard\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/entries/\n\n### Descrição\nEsta rota permite que os usuários recuperem as estatísticas do dashboard.\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\nA resposta para esta requisição será um código de status 200, indicando sucesso, mas não retornará um corpo de resposta."
  },
  {
    "id": 152,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/entries/",
    "require": "| Nome    | Tipo     | Obrigatório | Descrição                                      |\n|---------|----------|-------------|------------------------------------------------|\n| ordering| string   | Não         | Qual campo usar ao ordenar os resultados.      |\n| page    | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search  | string   | Não         | Um termo de busca.                             |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar as entradas de conhecimento de forma paginada e ordenada, possibilitando a busca por um termo específico. A autenticação é feita através de token ou cookie, garantindo a segurança dos dados. O retorno é uma lista paginada de entradas, facilitando a navegação em grandes conjuntos de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listar Entradas\n\nEsta rota permite recuperar uma lista de entradas de conhecimento.\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/entries/\n\n### Parâmetros\n- **ordering** (opcional): Qual campo usar ao ordenar os resultados.\n- **page** (opcional): Um número de página dentro do conjunto de resultados paginado.\n- **search** (opcional): Um termo de busca.\n\n### Autenticação\nA rota requer autenticação via **tokenAuth** ou **cookieAuth**.\n\n### Resposta\nA resposta é um objeto JSON que contém uma lista paginada de entradas de conhecimento."
  },
  {
    "id": 153,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/entries/{id}/",
    "require": "| Parâmetro | Tipo | Obrigatório |\n|-----------|------|-------------|\n| id        | String | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de uma nova entrada na base de conhecimento, utilizando o método POST. É necessário fornecer um token de autenticação e, opcionalmente, um cookie de autenticação. O payload deve seguir o esquema definido em KnowledgeBaseEntryRequest. Após a criação, a resposta será um objeto do tipo KnowledgeBaseEntry com status 201, indicando sucesso na operação.",
    "payload": "{\"title\": \"Título da Entrada\", \"content\": \"Conteúdo detalhado da entrada na base de conhecimento.\"}",
    "markdown": "## Criar Entrada na Base de Conhecimento\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/entries/{id}/\n\n### Parâmetros Requeridos\n| Parâmetro | Tipo | Obrigatório |\n|-----------|------|-------------|\n| id        | String | Sim        |\n\n### Autenticação\nEsta rota requer autenticação via token e, opcionalmente, cookie.\n\n### Resposta\nEm caso de sucesso, a rota retorna um objeto do tipo KnowledgeBaseEntry com status 201.\n\n### Descrição\nEsta rota é utilizada para criar novas entradas na base de conhecimento. O cliente deve fornecer um JSON que siga a estrutura definida em KnowledgeBaseEntryRequest. A criação de uma nova entrada impacta diretamente na atualização da base de dados do CRM, permitindo que os usuários acessem informações relevantes e atualizadas."
  },
  {
    "id": 154,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/entries/{id}/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de uma entrada específica da base de conhecimento utilizando seu ID. O parâmetro `id` é obrigatório e deve ser fornecido na URL. A autenticação é realizada através de tokens e cookies, garantindo que apenas usuários autenticados possam acessar as informações. A resposta bem-sucedida retorna os detalhes da entrada em formato JSON, conforme definido no esquema `KnowledgeBaseEntry`.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperar Entrada da Base de Conhecimento\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/entries/{id}/\n\n### Parâmetros\n- **id** (string, obrigatório): O ID da entrada que você deseja recuperar.\n\n### Autenticação\nEsta rota requer autenticação via `tokenAuth` ou `cookieAuth`. Certifique-se de que o usuário esteja autenticado antes de fazer a solicitação.\n\n### Resposta\nUma resposta bem-sucedida (200) retornará os detalhes da entrada da base de conhecimento no formato JSON, conforme definido no esquema `KnowledgeBaseEntry`."
  },
  {
    "id": 155,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/entries/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização de uma entrada na base de conhecimento, identificada pelo parâmetro \"id\". O corpo da requisição deve conter os dados a serem atualizados, conforme definido no esquema \"KnowledgeBaseEntryRequest\". O acesso a esta rota é restrito e requer autenticação via token e cookie. A resposta bem-sucedida retorna os dados atualizados da entrada na base de conhecimento, conforme o esquema \"KnowledgeBaseEntry\".",
    "payload": "{\"title\": \"Título da Entrada\",\"content\": \"Conteúdo da entrada em formato de texto.\",\"tags\": [\"tag1\", \"tag2\"]}",
    "markdown": "## Atualização de Entrada na Base de Conhecimento\n\n### Método\nPUT\n\n### Endpoint\n/backend.loomiecrm.com/entries/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a atualização de uma entrada na base de conhecimento, identificada pelo parâmetro \"id\". O corpo da requisição deve conter os dados a serem atualizados, conforme definido no esquema \"KnowledgeBaseEntryRequest\". O acesso a esta rota é restrito e requer autenticação via token e cookie.\n\n### Resposta\nA resposta bem-sucedida retorna os dados atualizados da entrada na base de conhecimento, conforme o esquema \"KnowledgeBaseEntry\"."
  },
  {
    "id": 156,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/entries/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de uma entrada na base de conhecimento. O parâmetro `id` deve ser fornecido na URL e é obrigatório. O corpo da requisição pode ser enviado em três formatos: JSON, x-www-form-urlencoded ou multipart/form-data, todos referenciando o esquema `PatchedKnowledgeBaseEntryRequest`. A autenticação é necessária através de token ou cookie. A resposta bem-sucedida retornará os dados atualizados da entrada na base de conhecimento.",
    "payload": "{\"title\": \"Atualização Parcial\", \"content\": \"Conteúdo atualizado da entrada.\"}",
    "markdown": "## Atualização Parcial de Entrada na Base de Conhecimento\n\n### Método\nPATCH\n\n### Endpoint\n/backend.loomiecrm.com/entries/{id}/\n\n### Parâmetros Obrigatórios\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Corpo da Requisição\nA requisição deve conter um corpo no formato JSON, x-www-form-urlencoded ou multipart/form-data, conforme definido pelo esquema `PatchedKnowledgeBaseEntryRequest`.\n\n### Autenticação\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\nUma resposta de sucesso (200) retornará os dados atualizados da entrada na base de conhecimento."
  },
  {
    "id": 157,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/estagios/{kanban_id}/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por deletar uma entrada específica no kanban, identificada pelo parâmetro id. A operação requer autenticação via token ou cookie para garantir a segurança e a privacidade dos dados. Ao ser executada com sucesso, a resposta será um código de status 204, indicando que a operação foi concluída sem retornar um corpo de resposta. Esta funcionalidade é crucial para a manutenção da integridade do sistema de gerenciamento de estágios, permitindo que os usuários removam entradas desnecessárias ou incorretas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Deletar Estágio\n\n### Método\nDELETE\n\n### Endpoint\n/backend.loomiecrm.com/estagios/{kanban_id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |\n\n### Segurança\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\nAo deletar com sucesso, a resposta será um código de status 204, sem corpo de resposta."
  },
  {
    "id": 158,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/estagios/{kanban_id}/",
    "require": "| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| kanban_id | integer  | Sim         |",
    "optional": "| Nome    | Tipo     | Obrigatório |\n|---------|----------|-------------|\n| ordering | string   | Não         |\n| page     | integer  | Não         |\n| search   | string   | Não         |",
    "detalhes": "Esta rota permite listar os estágios associados a um kanban específico, identificado pelo parâmetro kanban_id. Os resultados podem ser filtrados e ordenados com base nos parâmetros de consulta opcionais. A autenticação é necessária e deve ser feita através de token ou cookie. O impacto no ecossistema CRM é significativo, pois permite que os usuários visualizem e gerenciem estágios de forma eficiente, melhorando a experiência do usuário e a gestão de tarefas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listagem de Estágios\n\n### Descrição\nEsta rota permite listar os estágios de um kanban específico, identificado pelo seu ID. Os usuários podem aplicar filtros e ordenações nos resultados retornados.\n\n### Parâmetros\n- **kanban_id**: ID do kanban (obrigatório).\n- **ordering**: Campo para ordenar os resultados (opcional).\n- **page**: Número da página para resultados paginados (opcional).\n- **search**: Termo de busca para filtrar os resultados (opcional).\n\n### Autenticação\nÉ necessário autenticação via **tokenAuth** ou **cookieAuth**.\n\n### Resposta\nRetorna uma lista paginada de estágios em formato JSON."
  },
  {
    "id": 159,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/estagios/{id}/detail/",
    "require": "| Nome       | Tipo     | Obrigatório |\n|------------|----------|-------------|\n| kanban_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de um novo estágio associado a um kanban específico. O parâmetro 'kanban_id' é obrigatório e deve ser um número inteiro que identifica de forma única o kanban ao qual o estágio pertence. A requisição deve conter um corpo com os dados do estágio a ser criado, que pode ser enviado em formato JSON, x-www-form-urlencoded ou multipart/form-data. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autenticados possam criar estágios. A resposta bem-sucedida retorna um status 201, indicando que o estágio foi criado com sucesso.",
    "payload": "{\"nome\": \"Novo Estágio\", \"descricao\": \"Descrição do novo estágio\", \"ordem\": 1}",
    "markdown": "## Criar Estágio\n\n### Descrição\nEsta rota permite a criação de um novo estágio associado a um kanban específico.\n\n### Método\n`POST`\n\n### Endpoint\n`/estagios/{id}/detail/`\n\n### Parâmetros\n| Nome       | Tipo     | Obrigatório |\n|------------|----------|-------------|\n| kanban_id  | integer  | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve conter os dados do estágio a ser criado, que pode ser enviado em formato JSON, x-www-form-urlencoded ou multipart/form-data.\n\n### Segurança\nA autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autenticados possam criar estágios.\n\n### Resposta\nA resposta bem-sucedida retorna um status 201, indicando que o estágio foi criado com sucesso."
  },
  {
    "id": 160,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/estagios/{id}/detail/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite recuperar os detalhes de um estágio específico, identificado pelo seu ID. É necessário fornecer um token de autenticação via header e, opcionalmente, um cookie de autenticação. A resposta incluirá os detalhes do estágio em formato JSON, conforme definido no esquema 'Estagio'.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Detalhes da Rota\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/estagios/{id}/detail/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth e cookieAuth.\n\n### Resposta\nA resposta será um objeto JSON contendo os detalhes do estágio correspondente ao ID fornecido.\n\n### Observações\nUtilize esta rota para obter informações detalhadas sobre um estágio específico, que podem ser utilizadas para visualização ou para operações subsequentes."
  },
  {
    "id": 161,
    "method": "PUT",
    "endpoint": "/estagios/{id}/detail/",
    "require": "| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| id     | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite atualizar os detalhes de um estágio existente no sistema. O parâmetro 'id' deve ser fornecido na URL e refere-se ao identificador único do estágio que se deseja atualizar. O corpo da requisição deve conter os dados do estágio a serem atualizados, que podem ser enviados em formato JSON, x-www-form-urlencoded ou multipart/form-data. A autenticação é realizada através de um token de autenticação e cookies, garantindo que apenas usuários autorizados possam realizar essa operação. O sucesso da operação retornará um status 200 com os dados atualizados do estágio.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização de Detalhes do Estágio\n\n### Método\nPUT\n\n### Endpoint\n/estagios/{id}/detail/\n\n### Descrição\nEsta rota permite atualizar os detalhes de um estágio existente no sistema.\n\n### Parâmetros\n| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| id     | integer  | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve conter os dados do estágio a serem atualizados, que podem ser enviados em formato JSON, x-www-form-urlencoded ou multipart/form-data.\n\n### Autenticação\nA autenticação é realizada através de um token de autenticação e cookies.\n\n### Resposta\nUm status 200 será retornado com os dados atualizados do estágio."
  },
  {
    "id": 162,
    "method": "PATCH",
    "endpoint": "/estagios/{id}/detail/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial dos detalhes de um estágio específico. O parâmetro 'id' é obrigatório e deve ser um número inteiro que identifica o estágio a ser atualizado. O corpo da requisição pode ser enviado em diferentes formatos, como JSON, application/x-www-form-urlencoded ou multipart/form-data, conforme definido no schema 'PatchedEstagioRequest'. A autenticação é realizada através de tokenAuth ou cookieAuth, garantindo que apenas usuários autenticados possam realizar essa operação. A resposta bem-sucedida retorna um objeto do tipo 'Estagio'.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Atualização Parcial de Estágio\n\nEsta rota permite a atualização parcial dos detalhes de um estágio específico. Para utilizá-la, é necessário fornecer o parâmetro 'id' no caminho da URL, que deve ser um número inteiro correspondente ao estágio que se deseja atualizar.\n\n#### Autenticação\n\nA autenticação é necessária e pode ser realizada através de:\n- **tokenAuth**: Um token de autenticação deve ser incluído no cabeçalho da requisição.\n- **cookieAuth**: Um cookie de sessão deve estar presente na requisição.\n\n#### Formatos de Envio\n\nO corpo da requisição pode ser enviado em diferentes formatos:\n- **application/json**: Para enviar dados em formato JSON.\n- **application/x-www-form-urlencoded**: Para enviar dados como um formulário.\n- **multipart/form-data**: Para enviar dados que podem incluir arquivos.\n\n#### Resposta\n\nEm caso de sucesso, a resposta retornará um objeto do tipo 'Estagio', contendo os detalhes atualizados do estágio."
  },
  {
    "id": 163,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/excluir_gatilho/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por excluir um gatilho específico do sistema, identificado pelo seu ID. A operação requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam realizar a exclusão. A resposta para uma exclusão bem-sucedida é um status 204, que indica que a operação foi concluída sem retornar conteúdo.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Excluir Gatilho\n\n### Método\nDELETE\n\n### Endpoint\n/backend.excluir_gatilho/{id}/\n\n### Descrição\nEsta rota permite a exclusão de um gatilho específico do sistema, identificado pelo seu ID.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Segurança\nEsta operação requer autenticação via token e cookie.\n\n### Resposta\nA operação retornará um status 204, indicando que a exclusão foi realizada com sucesso, sem conteúdo adicional."
  },
  {
    "id": 164,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/excluir_tarefa/{tarefa_id}/",
    "require": "| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| tarefa_id | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão de uma tarefa específica do sistema. O parâmetro 'tarefa_id' deve ser fornecido no caminho da URL e é obrigatório. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam realizar a exclusão. A resposta bem-sucedida retorna um código 204, indicando que a operação foi concluída sem erros e que não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Excluir Tarefa\n\n### Método\nDELETE\n\n### Endpoint\n/backend.excluir_tarefa/{tarefa_id}/\n\n### Parâmetros\n| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| tarefa_id | integer  | Sim         |\n\n### Respostas\n- **204**: Operação concluída com sucesso, sem corpo de resposta.\n\n### Detalhes\nEsta rota permite a exclusão de uma tarefa específica do sistema. O parâmetro 'tarefa_id' deve ser fornecido no caminho da URL e é obrigatório. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam realizar a exclusão. A resposta bem-sucedida retorna um código 204, indicando que a operação foi concluída sem erros e que não há corpo de resposta."
  },
  {
    "id": 165,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/fields/",
    "require": "| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| tarefa_id | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por excluir uma tarefa específica no sistema. O parâmetro obrigatório 'tarefa_id' deve ser fornecido na URL para identificar qual tarefa deve ser removida. A autenticação é realizada através de tokenAuth ou cookieAuth, garantindo que apenas usuários autenticados possam realizar essa operação. O sucesso da operação é indicado por um código de status 204, que significa que a tarefa foi excluída com sucesso e não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Excluir Tarefa\n\nEsta rota permite a exclusão de uma tarefa específica no sistema.\n\n### Método\nDELETE\n\n### Endpoint\n/backend.loomiecrm.com/fields/\n\n### Parâmetros\n| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| tarefa_id | integer  | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\nUm código de status 204 será retornado em caso de sucesso, indicando que a tarefa foi excluída."
  },
  {
    "id": 166,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/fields/",
    "require": "| Nome    | Tipo    | Obrigatório | Descrição                                            |\n|---------|---------|-------------|-----------------------------------------------------|\n| ordering| string  | Não         | Qual campo usar ao ordenar os resultados.           |\n| page    | integer | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search  | string  | Não         | Um termo de busca.                                  |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar os campos disponíveis na base de conhecimento de forma paginada. Os parâmetros de consulta permitem ordenar os resultados, navegar entre páginas e filtrar os resultados com base em um termo de busca. A autenticação é necessária e pode ser realizada através de token ou cookie. A resposta é um objeto JSON que contém a lista paginada de campos.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Listar Campos\n\nEsta rota permite recuperar uma lista de campos disponíveis na base de conhecimento. É possível ordenar os resultados, paginar a lista e buscar por um termo específico.\n\n#### Parâmetros de Consulta\n\n- **ordering** (string, opcional): Qual campo usar ao ordenar os resultados.\n- **page** (integer, opcional): Um número de página dentro do conjunto de resultados paginado.\n- **search** (string, opcional): Um termo de busca.\n\n#### Autenticação\n\nA autenticação é requerida e pode ser feita utilizando `tokenAuth` ou `cookieAuth`.\n\n#### Resposta\n\nA resposta será um objeto JSON que contém uma lista paginada de campos."
  },
  {
    "id": 167,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/fields/{id}/",
    "require": "| Parâmetro | Tipo | Obrigatório |\n|-----------|------|-------------|\n| id        | String | Sim        |\n| body      | Object | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é responsável pela criação de um novo campo na base de conhecimento. O parâmetro 'id' deve ser fornecido na URL e representa o identificador do campo a ser criado. O corpo da requisição deve conter um objeto que segue o esquema definido em 'KnowledgeBaseFieldRequest'. A autenticação é necessária e pode ser feita através de um token ou cookie. O sucesso da operação resulta em um status 201 e retorna o novo campo criado.",
    "payload": "{\"name\": \"Novo Campo\", \"type\": \"texto\", \"required\": true}",
    "markdown": "## Criar Campo na Base de Conhecimento\n\n### Método\nPOST\n\n### Endpoint\n/backend/fields/{id}/\n\n### Parâmetros Requeridos\n| Parâmetro | Tipo | Obrigatório |\n|-----------|------|-------------|\n| id        | String | Sim        |\n| body      | Object | Sim        |\n\n### Autenticação\nEsse endpoint requer autenticação via token ou cookie.\n\n### Resposta\nEm caso de sucesso, retorna um status 201 e o objeto do campo criado."
  },
  {
    "id": 168,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/fields/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de um campo específico da base de conhecimento através do seu ID. O parâmetro 'id' é obrigatório e deve ser uma string que representa o identificador único do campo. A autenticação é realizada através de tokenAuth ou cookieAuth, garantindo que apenas usuários autenticados possam acessar os dados. A resposta bem-sucedida retorna um objeto JSON que representa o campo solicitado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperar Campo da Base de Conhecimento\n\nEsta rota permite que um usuário autenticado recupere um campo específico da base de conhecimento utilizando seu ID.\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/fields/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação através de:\n- **tokenAuth**\n- **cookieAuth**\n\n### Resposta\nEm caso de sucesso, a resposta será um objeto JSON que representa o campo da base de conhecimento."
  },
  {
    "id": 169,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/fields/{id}/",
    "require": "| Nome do Parâmetro | Tipo   | Obrigatório |\n|------------------|--------|-------------|\n| id               | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite atualizar um campo específico da base de conhecimento utilizando o identificador único do campo. O usuário deve estar autenticado, utilizando either tokenAuth ou cookieAuth para acessar esta funcionalidade. A atualização é feita através do envio de um corpo de requisição que deve seguir o esquema definido em KnowledgeBaseFieldRequest. O sistema responde com os dados atualizados do campo em formato JSON, conforme o esquema KnowledgeBaseField.",
    "payload": "{\"name\": \"Campo Atualizado\", \"type\": \"texto\", \"description\": \"Descrição do campo atualizado.\"}",
    "markdown": "## Atualização de Campo da Base de Conhecimento\n\n### Método\nPUT\n\n### Endpoint\n/backend/fields/{id}/\n\n### Parâmetros\n| Nome do Parâmetro | Tipo   | Obrigatório |\n|------------------|--------|-------------|\n| id               | string | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve ser enviado no formato JSON, x-www-form-urlencoded ou multipart/form-data, seguindo o esquema definido em KnowledgeBaseFieldRequest.\n\n### Autenticação\nEsta rota requer autenticação através de tokenAuth ou cookieAuth.\n\n### Resposta\nA resposta será um objeto JSON que representa o campo atualizado, conforme o esquema KnowledgeBaseField."
  },
  {
    "id": 170,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/fields/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de um campo na base de conhecimento. O parâmetro 'id' é necessário para identificar qual campo deve ser atualizado. A autenticação é feita através de token e cookies, garantindo que apenas usuários autorizados possam realizar a modificação. O impacto dessa operação no ecossistema do CRM é significativo, pois permite a personalização e atualização dinâmica dos campos, melhorando a experiência do usuário e a gestão do conhecimento.",
    "payload": "{\"campo\":\"valor atualizado\"}",
    "markdown": "## Atualização Parcial de Campo\n\nEsta rota permite a atualização parcial de um campo na base de conhecimento. Para utilizar esta rota, é necessário fornecer o ID do campo que se deseja atualizar.\n\n### Método\nPATCH\n\n### Endpoint\n/backend.loomiecrm.com/fields/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Autenticação\nEsta rota exige autenticação via token e cookies.\n\n### Respostas\nA resposta bem-sucedida retornará um objeto JSON representando o campo atualizado."
  },
  {
    "id": 171,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/funil/stats/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por deletar estatísticas de um funil específico no CRM. O parâmetro 'id' deve ser fornecido para identificar qual estatística deve ser removida. A autenticação é necessária, e pode ser feita através de um token ou cookie. Se a operação for bem-sucedida, o servidor retornará um status 204 sem corpo de resposta, indicando que a operação foi concluída sem erros.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## DELETE /funil/stats/\n\n### Descrição\nEsta rota permite a exclusão de estatísticas de funis no sistema CRM da Loomie. Para realizar a operação, é necessário fornecer o ID da estatística a ser deletada.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nA autenticação é necessária e pode ser realizada utilizando um token de autenticação ou um cookie.\n\n### Resposta\nSe a operação for bem-sucedida, o servidor retornará um status 204 sem corpo de resposta, indicando que a exclusão foi realizada com sucesso."
  },
  {
    "id": 172,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/health/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para verificar a saúde do sistema. Não requer parâmetros e retorna um status de sucesso se o sistema estiver operacional. A autenticação é feita através de token ou cookie, garantindo que apenas usuários autenticados possam acessar esta informação. É uma rota essencial para monitoramento e manutenção do CRM, permitindo que administradores verifiquem rapidamente o estado do serviço.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Verificação de Saúde do Sistema\n\n## Método\nGET\n\n## Endpoint\n/backend.loomiecrm.com/health/\n\n## Descrição\nEsta rota fornece uma verificação de saúde do sistema, retornando um status que indica se o serviço está operacional.\n\n## Segurança\nAcesso restrito a usuários autenticados através de:\n- **tokenAuth**\n- **cookieAuth**\n\n## Resposta\n- **200**: Indica que o sistema está funcionando corretamente, sem corpo de resposta."
  },
  {
    "id": 173,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/kanban/{kanban_id}/estagio/{estagio_id}/negocios/",
    "require": "N/A",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para realizar um check de saúde do sistema, permitindo o monitoramento da VPS. A autenticação é feita através de token e cookies, garantindo que apenas usuários autorizados possam acessar essa informação. A resposta da rota não contém corpo, retornando apenas um status de sucesso.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Rota: Health Check\n\n**Método:** GET\n\n**Descrição:** Esta rota realiza um check de saúde do sistema, permitindo que administradores monitorem a saúde da VPS.\n\n**Segurança:**\n- **tokenAuth:** Necessário um token de autenticação válido.\n- **cookieAuth:** Autenticação via cookies também é suportada.\n\n**Resposta:**\n- **200 OK:** Retorna um status de sucesso sem corpo de resposta."
  },
  {
    "id": 174,
    "method": "GET",
    "endpoint": "/kanban/{kanban_id}/mover-time/",
    "require": "| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| estagio_id| integer  | Sim         |\n| kanban_id | integer  | Sim         |",
    "optional": "| Nome       | Tipo     | Obrigatório |\n|------------|----------|-------------|\n| ordering   | string   | Não         |\n| page       | integer  | Não         |\n| page_size  | integer  | Não         |\n| search     | string   | Não         |",
    "detalhes": "Esta rota permite listar negócios de um estágio específico em um kanban, com suporte a paginação e filtros. O usuário deve fornecer o ID do estágio e o ID do kanban como parâmetros obrigatórios. Os parâmetros de consulta opcionais permitem a ordenação dos resultados, a seleção de uma página específica e a definição do número de resultados por página, além de um termo de busca para filtrar os resultados. A segurança é garantida através de autenticação por token e cookies, assegurando que apenas usuários autorizados possam acessar essas informações.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Listagem de Negócios por Estágio\n\n## Descrição\nEsta API permite a listagem de negócios que pertencem a um estágio específico dentro de um kanban. Os resultados são paginados e podem ser filtrados com base em critérios específicos.\n\n## Parâmetros\n- **estagio_id**: ID do estágio (obrigatório).\n- **kanban_id**: ID do kanban (obrigatório).\n- **ordering**: Campo para ordenar os resultados (opcional).\n- **page**: Número da página a ser retornada (opcional).\n- **page_size**: Número de resultados por página (opcional).\n- **search**: Termo de busca para filtrar resultados (opcional).\n\n## Segurança\nEsta rota requer autenticação via **tokenAuth** ou **cookieAuth**.\n\n## Resposta\nA resposta será um objeto JSON que contém uma lista paginada de negócios, conforme definido no esquema `PaginatedNegocioList`."
  },
  {
    "id": 175,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/kanbans/",
    "require": "| Nome       | Tipo     | Obrigatório |\n|------------|----------|-------------|\n| kanban_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de um Kanban específico, identificado pelo seu ID. O parâmetro 'kanban_id' deve ser fornecido na URL e é obrigatório para que a operação seja realizada. A autenticação é necessária, utilizando um token ou cookie. Não há corpo de resposta para esta operação, indicando que a atualização foi bem-sucedida.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Atualização Parcial de Kanban\n\nEsta rota permite a atualização parcial de um Kanban específico, utilizando o método PATCH. Para realizar essa operação, é necessário fornecer o ID do Kanban na URL.\n\n### Parâmetros\n\n| Nome       | Tipo     | Obrigatório |\n|------------|----------|-------------|\n| kanban_id  | integer  | Sim         |\n\n### Segurança\n\nA autenticação é requerida, podendo ser realizada através de um token ou cookie. Isso garante que apenas usuários autorizados possam realizar alterações nos Kanbans.\n\n### Resposta\n\nNão há corpo de resposta para esta operação, o que indica que a atualização foi bem-sucedida."
  },
  {
    "id": 176,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/kanbans/",
    "require": "| Nome    | Tipo     | Obrigatório | Descrição                                          |\n|---------|----------|-------------|--------------------------------------------------|\n| ordering| string   | Não         | Qual campo usar ao ordenar os resultados.         |\n| page    | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search  | string   | Não         | Um termo de busca.                                |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a listagem de kanbans, permitindo a ordenação, paginação e busca nos resultados. A autenticação é feita através de token ou cookie, garantindo a segurança das informações. O retorno é uma lista paginada de kanbans, que pode ser filtrada com base nos parâmetros fornecidos.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Listar Kanbans\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/kanbans/\n\n### Descrição\nEsta rota permite a listagem de kanbans, permitindo a ordenação, paginação e busca nos resultados.\n\n### Parâmetros\n| Nome    | Tipo     | Obrigatório | Descrição                                          |\n|---------|----------|-------------|--------------------------------------------------|\n| ordering| string   | Não         | Qual campo usar ao ordenar os resultados.         |\n| page    | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search  | string   | Não         | Um termo de busca.                                |\n\n### Segurança\nA autenticação é feita através de token ou cookie, garantindo a segurança das informações.\n\n### Resposta\nO retorno é uma lista paginada de kanbans, que pode ser filtrada com base nos parâmetros fornecidos."
  },
  {
    "id": 177,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/kanbans/{kanban_id}/negocios/",
    "require": "| Nome do Parâmetro | Tipo     | Obrigatório |\n|------------------|----------|-------------|\n| kanban_id        | string   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de novos negócios dentro de um kanban específico. O parâmetro `kanban_id` deve ser fornecido na URL e é obrigatório. A autenticação é realizada via token e cookie, garantindo que apenas usuários autorizados possam criar novos negócios. O sucesso da operação resulta em um código de status 201, indicando que o novo negócio foi criado com sucesso.",
    "payload": "{\"titulo\": \"Novo Negócio\", \"descricao\": \"Descrição detalhada do negócio\", \"status\": \"em andamento\"}",
    "markdown": "## Criação de Negócios no Kanban\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/kanbans/{kanban_id}/negocios/\n\n### Descrição\nEsta rota permite a criação de novos negócios dentro de um kanban específico. Para utilizar esta rota, o usuário deve estar autenticado, utilizando token ou cookie.\n\n### Parâmetros\n- **kanban_id** (string, obrigatório): ID do kanban onde o negócio será criado.\n\n### Resposta\n- **201 Created**: Retorna os detalhes do negócio criado.\n\n### Segurança\nEsta rota requer autenticação via tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam criar novos negócios."
  },
  {
    "id": 178,
    "method": "GET",
    "endpoint": "/kanbans/{kanban_id}/negocios/",
    "require": "| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| kanban_id | integer  | Sim         |",
    "optional": "| Nome    | Tipo     | Obrigatório |\n|---------|----------|-------------|\n| ordering | string   | Não         |\n| page     | integer  | Não         |\n| search   | string   | Não         |",
    "detalhes": "Esta rota permite listar e criar negócios associados a um kanban específico. O parâmetro `kanban_id` é obrigatório e deve ser um inteiro que identifica o kanban desejado. Os parâmetros opcionais permitem que o usuário ordene os resultados, pagine os resultados e busque por termos específicos. A autenticação é realizada através de token ou cookie.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Listar Negócios\n\n## Descrição\nEsta rota permite listar e criar negócios associados a um kanban específico.\n\n## Método\nGET\n\n## Endpoint\n/kanbans/{kanban_id}/negocios/\n\n## Parâmetros\n\n| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| kanban_id | integer  | Sim         |\n| ordering   | string   | Não         |\n| page       | integer  | Não         |\n| search     | string   | Não         |\n\n## Autenticação\nEsta rota requer autenticação via token ou cookie.\n\n## Resposta\nUma resposta bem-sucedida retornará um status 200 com uma lista paginada de negócios."
  },
  {
    "id": 179,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/kanbans/{id}/",
    "require": "| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| kanban_id   | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de novos negócios dentro de um kanban específico. O parâmetro `kanban_id` é necessário para identificar qual kanban receberá o novo negócio. A autenticação é realizada através de `tokenAuth` e `cookieAuth`, garantindo que apenas usuários autorizados possam criar negócios. O sucesso da operação é indicado por um código de status 201, retornando os detalhes do negócio criado.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Criação de Negócios\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/kanbans/{id}/\n\n### Parâmetros Requeridos\n| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| kanban_id   | integer  | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a criação de novos negócios dentro de um kanban específico. O parâmetro `kanban_id` é necessário para identificar qual kanban receberá o novo negócio. A autenticação é realizada através de `tokenAuth` e `cookieAuth`, garantindo que apenas usuários autorizados possam criar negócios. O sucesso da operação é indicado por um código de status 201, retornando os detalhes do negócio criado.\n\n### Payload de Exemplo\n{\n  \"campo1\": \"valor1\",\n  \"campo2\": \"valor2\"\n}"
  },
  {
    "id": 180,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/kanbans/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar um kanban específico, identificado pelo parâmetro `id`. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam acessar as informações do kanban. O retorno é um objeto JSON que representa o kanban solicitado, permitindo que o usuário visualize suas informações detalhadas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Detalhamento do Kanban\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/kanbans/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Descrição\nEsta rota permite detalhar um kanban específico, identificado pelo parâmetro `id`. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam acessar as informações do kanban. O retorno é um objeto JSON que representa o kanban solicitado, permitindo que o usuário visualize suas informações detalhadas.\n\n### Respostas\n- **200**: Retorna os detalhes do kanban em formato JSON."
  },
  {
    "id": 181,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/kanbans/{id}/",
    "require": "| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar e atualizar um kanban existente. O parâmetro 'id' é necessário para identificar qual kanban deve ser atualizado. A autenticação é realizada através de token e cookies, garantindo que apenas usuários autorizados possam modificar os dados. O corpo da requisição deve ser enviado no formato JSON, x-www-form-urlencoded ou multipart/form-data, conforme especificado no schema 'KanbanRequest'.",
    "payload": "{\\n  \\\"titulo\\\": \\\"Novo Kanban\\\",\\n  \\\"descricao\\\": \\\"Descrição atualizada do kanban\\\",\\n  \\\"itens\\\": [\\n    {\\n      \\\"titulo\\\": \\\"Item 1\\\",\\n      \\\"status\\\": \\\"em andamento\\\"\\n    },\\n    {\\n      \\\"titulo\\\": \\\"Item 2\\\",\\n      \\\"status\\\": \\\"concluído\\\"\\n    }\\n  ]\\n}",
    "markdown": "## Atualizar Kanban\n\n### Descrição\nEsta rota permite detalhar e atualizar um kanban existente. O parâmetro 'id' é necessário para identificar qual kanban deve ser atualizado.\n\n### Autenticação\nA autenticação é realizada através de token e cookies, garantindo que apenas usuários autorizados possam modificar os dados.\n\n### Formatos de Corpo da Requisição\nO corpo da requisição deve ser enviado no formato JSON, x-www-form-urlencoded ou multipart/form-data, conforme especificado no schema 'KanbanRequest'.\n\n### Resposta\nA resposta bem-sucedida retornará um objeto Kanban atualizado."
  },
  {
    "id": 182,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/kanbans/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de um kanban existente. O parâmetro `id` é necessário para identificar qual kanban deve ser atualizado. A autenticação é realizada através de um token e cookies. O corpo da requisição pode ser enviado em diferentes formatos, incluindo JSON, form-urlencoded e multipart/form-data, todos referenciando o esquema `PatchedKanbanRequest`. O retorno da operação é um objeto `Kanban` com os dados atualizados.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Kanban\n\n### Método\nPATCH\n\n### Endpoint\n`/kanbans/{id}/`\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve seguir o esquema `PatchedKanbanRequest` e pode ser enviado nos seguintes formatos:\n- `application/json`\n- `application/x-www-form-urlencoded`\n- `multipart/form-data`\n\n### Autenticação\nEsta rota requer autenticação via `tokenAuth` e `cookieAuth`.\n\n### Resposta\nUma resposta bem-sucedida retornará um objeto `Kanban` com os dados atualizados."
  },
  {
    "id": 183,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/kanbans/from-preset/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão de um kanban específico utilizando seu ID. A operação requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam realizar a exclusão. O sucesso da operação é indicado por uma resposta 204, sem corpo, confirmando que o kanban foi removido com êxito do sistema.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Exclusão de Kanban\n\n### Método\nDELETE\n\n### Endpoint\n/backend.loomiecrm.com/kanbans/from-preset/\n\n### Descrição\nEsta rota permite a exclusão de um kanban específico utilizando seu ID.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Autenticação\nEsta operação requer autenticação via token e cookie.\n\n### Resposta\nUma resposta 204 indica que o kanban foi removido com sucesso, sem corpo na resposta."
  },
  {
    "id": 184,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/listar_estagios/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por criar estágios a partir de um modelo pré-definido. A segurança é garantida através de autenticação via token e cookies, assegurando que apenas usuários autenticados possam acessar esta funcionalidade.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Criar Estágios a partir de um Modelo Pré-definido\n\n### Método\nPOST\n\n### Endpoint\n/backend/listar_estagios/\n\n### Segurança\n- **tokenAuth**: Necessário para autenticação do usuário.\n- **cookieAuth**: Utilizado para manter a sessão do usuário.\n\n### Resposta\n- **200**: A operação é bem-sucedida, mas não há corpo de resposta."
  },
  {
    "id": 185,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/listar_gatilhos/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para listar todos os gatilhos disponíveis no sistema. A autenticação é realizada através de um token de autenticação ou cookies. É importante garantir que o usuário tenha as permissões necessárias para acessar esta informação, pois a falta de permissões resultará em um erro de autenticação. Esta operação não requer um corpo de requisição e não retorna um corpo de resposta, apenas um status de sucesso.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Listar Gatilhos\n\n#### Método\nGET\n\n#### Endpoint\n/backend/listar_gatilhos/\n\n#### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n#### Resposta\n- **200**: Sucesso, sem corpo de resposta.\n\n#### Descrição\nEsta rota é utilizada para listar todos os gatilhos disponíveis no sistema. É crucial que o usuário tenha as permissões necessárias para acessar esta informação, pois a falta de permissões resultará em um erro de autenticação."
  },
  {
    "id": 186,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/listar_tarefas/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de uma lista de tarefas disponíveis no sistema. A autenticação é necessária, utilizando tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam acessar essa informação. Não há corpo de resposta, indicando que a operação é realizada sem a necessidade de retornar dados específicos ao cliente.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listar Tarefas\n\n### Método\nGET\n\n### Endpoint\n/backend/listar_tarefas/\n\n### Autenticação\n- tokenAuth\n- cookieAuth\n\n### Descrição\nEsta rota permite a recuperação de uma lista de tarefas disponíveis no sistema. A autenticação é necessária, utilizando tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam acessar essa informação. Não há corpo de resposta, indicando que a operação é realizada sem a necessidade de retornar dados específicos ao cliente."
  },
  {
    "id": 187,
    "method": "GET",
    "endpoint": "/marketplace/automacoes/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar as automações disponíveis no marketplace. A autenticação é necessária, e pode ser feita através de um token de autenticação ou cookies. Não há corpo de resposta para esta rota, indicando que a resposta será apenas um status de sucesso ou erro.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listar Automacoes\n\n### Método\nGET\n\n### Endpoint\n/marketplace/automacoes/\n\n### Autenticação\nEsta rota requer autenticação via token ou cookies.\n\n### Resposta\nA resposta será um código de status 200 se a requisição for bem-sucedida, mas não haverá corpo de resposta."
  },
  {
    "id": 188,
    "method": "GET",
    "endpoint": "/marketplace/automacoes/",
    "require": "| Nome   | Localização | Tipo    | Obrigatório |\n|--------|-------------|---------|-------------|\n| ordering | query       | string  | Não         |\n| page     | query       | integer | Não         |\n| search   | query       | string  | Não         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite visualizar uma lista de automações disponíveis no marketplace. Os resultados podem ser ordenados, paginados e filtrados por um termo de busca. A autenticação é necessária, utilizando tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações. Este recurso é essencial para a integração e automação dentro do ecossistema CRM, permitindo que os usuários encontrem rapidamente as automações relevantes para suas necessidades.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /marketplace/automacoes/\n\n### Descrição\nEste endpoint permite visualizar uma lista de automações disponíveis no marketplace.\n\n### Parâmetros\n- **ordering** (query, string, Não): Qual campo usar ao ordenar os resultados.\n- **page** (query, integer, Não): Um número de página dentro do conjunto de resultados paginado.\n- **search** (query, string, Não): Um termo de busca.\n\n### Segurança\n- **tokenAuth**: Necessário para autenticação.\n- **cookieAuth**: Alternativa para autenticação.\n\n### Resposta\n- **200**: Retorna uma lista paginada de automações."
  },
  {
    "id": 189,
    "method": "POST",
    "endpoint": "/marketplace/automacoes/{id}/",
    "require": "| Nome do Parâmetro | Tipo       | Obrigatório |\n|------------------|------------|-------------|\n| id               | String     | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a criação de uma nova automação no marketplace. A operação requer um ID que identifica a automação a ser criada. O corpo da requisição deve ser enviado no formato JSON, x-www-form-urlencoded ou multipart/form-data, conforme definido no esquema AutomacaoRequest. O endpoint está protegido por autenticação de token e cookies, garantindo que apenas usuários autenticados possam criar automações. Ao sucesso, a resposta retorna um status 201 e os detalhes da nova automação criada.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Criação de Automação no Marketplace\n\n### Método\nPOST\n\n### Endpoint\n/marketplace/automacoes/{id}/\n\n### Descrição\nEste endpoint permite a criação de uma nova automação no marketplace.\n\n### Parâmetros\n| Nome do Parâmetro | Tipo       | Obrigatório |\n|------------------|------------|-------------|\n| id               | String     | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve ser enviado em um dos seguintes formatos:\n- application/json\n- application/x-www-form-urlencoded\n- multipart/form-data\n\n### Segurança\nEste endpoint requer autenticação via token e cookies.\n\n### Resposta\nEm caso de sucesso, retorna um status 201 com os detalhes da nova automação."
  },
  {
    "id": 190,
    "method": "GET",
    "endpoint": "/marketplace/automacoes/{id}/",
    "require": "| Nome | Tipo | Obrigatório | Descrição |\n|------|------|-------------|-------------|\n| id   | integer | Sim         | Um valor inteiro único que identifica este automacao.",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite visualizar uma automação específica no marketplace, identificada pelo seu ID único. Ele requer autenticação via token ou cookie para garantir a segurança dos dados. A resposta bem-sucedida retorna os detalhes da automação solicitada, conforme definido no esquema de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: /marketplace/automacoes/{id}/\n\n### Método: GET\n\n### Descrição:\nEste endpoint permite visualizar uma automação específica no marketplace, identificada pelo seu ID único.\n\n### Parâmetros:\n| Nome | Tipo | Obrigatório | Descrição |\n|------|------|-------------|-------------|\n| id   | integer | Sim         | Um valor inteiro único que identifica este automacao.\n\n### Segurança:\nEste endpoint requer autenticação via token ou cookie.\n\n### Resposta:\n- **Código 200**: Retorna os detalhes da automação solicitada, conforme definido no esquema de resposta."
  },
  {
    "id": 191,
    "method": "PUT",
    "endpoint": "/marketplace/automacoes/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a atualização de uma automação existente no marketplace. O parâmetro 'id' é um identificador único que deve ser fornecido na URL para especificar qual automação deve ser atualizada. O corpo da requisição deve conter os dados da automação no formato JSON, x-www-form-urlencoded ou multipart/form-data, conforme definido no schema 'AutomacaoRequest'. O acesso a este endpoint é restrito e requer autenticação via token ou cookie. O sucesso da operação resultará em uma resposta 200 com os dados atualizados da automação.",
    "payload": "{\"nome\": \"Nova Automação\", \"descricao\": \"Descrição da automação\", \"ativa\": true}",
    "markdown": "## Atualização de Automação\n\n### Método\nPUT\n\n### Endpoint\n`/marketplace/automacoes/{id}/`\n\n### Descrição\nEste endpoint permite atualizar uma automação existente no marketplace. O parâmetro `id` deve ser fornecido na URL e representa o identificador único da automação a ser atualizada.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve ser enviado em um dos seguintes formatos:\n- application/json\n- application/x-www-form-urlencoded\n- multipart/form-data\n\nO schema para o corpo da requisição é definido em `AutomacaoRequest`.\n\n### Segurança\nEste endpoint requer autenticação via `tokenAuth` ou `cookieAuth`.\n\n### Resposta\nUma resposta bem-sucedida retornará um status 200 com os dados atualizados da automação."
  },
  {
    "id": 192,
    "method": "PATCH",
    "endpoint": "/marketplace/automacoes/{id}/",
    "require": "| Parâmetro | Tipo    | Obrigatório |\n|-----------|---------|-------------|\n| id        | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de uma automação específica identificada pelo parâmetro `id`. O método PATCH é utilizado para modificar apenas os campos que precisam ser alterados, sem a necessidade de enviar todos os dados da automação. A autenticação é realizada através de um token e cookies, garantindo que apenas usuários autorizados possam realizar essa operação. O impacto na ecosistema CRM é significativo, pois permite ajustes dinâmicos nas automações, aumentando a flexibilidade e a personalização dos processos.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Automação\n\n### Método\nPATCH\n\n### Endpoint\n`/marketplace/automacoes/{id}/`\n\n### Parâmetros Requeridos\n| Parâmetro | Tipo    | Obrigatório |\n|-----------|---------|-------------|\n| id        | integer | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a atualização parcial de uma automação específica identificada pelo parâmetro `id`. O método PATCH é utilizado para modificar apenas os campos que precisam ser alterados, sem a necessidade de enviar todos os dados da automação. A autenticação é realizada através de um token e cookies, garantindo que apenas usuários autorizados possam realizar essa operação. O impacto na ecosistema CRM é significativo, pois permite ajustes dinâmicos nas automações, aumentando a flexibilidade e a personalização dos processos.\n\n### Exemplo de Payload\n{\n  \"campo1\": \"valor1\",\n  \"campo2\": \"valor2\"\n}"
  },
  {
    "id": 193,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/marketplace/automacoes/{id}/comprar/",
    "require": "| Nome | Tipo | Obrigatório | Descrição |\n|------|------|-------------|-------------|\n| id   | integer | Sim         | Um valor inteiro único que identifica este automacao.|",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão de uma automação específica no marketplace, identificada pelo seu ID. A operação requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam realizar a exclusão. Ao ser executada com sucesso, a resposta é um status 204, indicando que a operação foi concluída sem retornar um corpo de resposta. Esta funcionalidade é crítica para a gestão de automações no CRM, permitindo que usuários mantenham seu ambiente organizado e livre de automações obsoletas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## DELETE /marketplace/automacoes/{id}/comprar/\n\n### Descrição\nEsta rota permite a exclusão de uma automação específica no marketplace, identificada pelo seu ID.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório | Descrição |\n|------|------|-------------|-------------|\n| id   | integer | Sim         | Um valor inteiro único que identifica este automacao.|\n\n### Segurança\nEsta operação requer autenticação via token e cookie.\n\n### Resposta\nAo ser executada com sucesso, a resposta é um status 204, indicando que a operação foi concluída sem retornar um corpo de resposta.\n\n### Impacto no CRM\nEsta funcionalidade é crítica para a gestão de automações no CRM, permitindo que usuários mantenham seu ambiente organizado e livre de automações obsoletas."
  },
  {
    "id": 194,
    "method": "POST",
    "endpoint": "/marketplace/automacoes/{id}/execucoes/",
    "require": "| Nome | Tipo     | Obrigatório | Descrição                                                        |\n|------|----------|-------------|------------------------------------------------------------------|\n| id   | integer  | Sim         | Um valor inteiro único que identifica esta automacao.            |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a execução de uma automação específica identificada pelo parâmetro 'id'. A autenticação é necessária através de token e cookie. A execução da automação pode impactar o CRM ao acionar processos automatizados que podem alterar dados ou estados dentro do sistema.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Endpoint: POST /marketplace/automacoes/{id}/execucoes/\n\n### Descrição\nEste endpoint permite a execução de uma automação específica identificada pelo parâmetro 'id'.\n\n### Parâmetros\n- **id** (integer, obrigatório): Um valor inteiro único que identifica esta automacao.\n\n### Autenticação\nEste endpoint requer autenticação via token e cookie.\n\n### Resposta\nUma resposta bem-sucedida retornará um objeto JSON representando a automação executada."
  },
  {
    "id": 195,
    "method": "GET",
    "endpoint": "/marketplace/automacoes/{id}/executar-webhook/",
    "require": "| Nome | Tipo   | Obrigatório | Descrição                                                |\n|------|--------|-------------|----------------------------------------------------------|\n| id   | integer| Sim         | Um valor inteiro único que identifica esta automação.   |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a execução de uma automação específica identificada pelo parâmetro `id`. O acesso a esta rota requer autenticação via token e cookie. A resposta é um objeto JSON que representa a automação executada, conforme definido no esquema `Automacao`. Esta funcionalidade é crucial para a integração e automação de processos dentro do CRM, permitindo que os usuários acionem automações de forma programática.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Executar Webhook da Automação\n\nEsta rota permite a execução de uma automação específica no marketplace.\n\n#### Método\nGET\n\n#### Endpoint\n`/marketplace/automacoes/{id}/executar-webhook/`\n\n#### Parâmetros\n| Nome | Tipo   | Obrigatório | Descrição                                                |\n|------|--------|-------------|----------------------------------------------------------|\n| id   | integer| Sim         | Um valor inteiro único que identifica esta automação.   |\n\n#### Segurança\nEsta rota requer autenticação via `tokenAuth` e `cookieAuth`.\n\n#### Resposta\nA resposta é um objeto JSON que representa a automação executada, conforme o esquema `Automacao`. Esta funcionalidade é essencial para a automação de processos no CRM, permitindo que ações sejam realizadas de forma eficiente."
  },
  {
    "id": 196,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/marketplace/automacoes/{id}/prompts/",
    "require": "| Nome    | Tipo     | Descrição                                                  | Obrigatório |\n|---------|----------|----------------------------------------------------------|-------------|\n| id      | integer  | Um valor inteiro único que identifica esta automação.    | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para executar um webhook de automação específico, identificado pelo parâmetro `id`. O usuário deve fornecer um payload no formato JSON, `application/x-www-form-urlencoded` ou `multipart/form-data`, conforme definido no schema `AutomacaoRequest`. Assegure-se de que o token de autenticação e/ou cookie estejam presentes para acessar este recurso. A resposta bem-sucedida retornará um objeto de automação, conforme definido no schema `Automacao`.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Executar Webhook de Automação\n\n### Descrição\nEste endpoint permite a execução de um webhook de automação específico, identificado pelo parâmetro `id`. A automação pode ser acionada através de um payload enviado em formato JSON, `application/x-www-form-urlencoded` ou `multipart/form-data`.\n\n### Parâmetros\n- **id** (integer, obrigatório): Um valor inteiro único que identifica esta automação.\n\n### Segurança\n- **tokenAuth**: Autenticação via token é necessária.\n- **cookieAuth**: Autenticação via cookie é necessária.\n\n### Resposta\nUma resposta bem-sucedida (200) retorna um objeto de automação, conforme definido no schema `Automacao`."
  },
  {
    "id": 197,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/marketplace/automacoes/{id}/prompts/",
    "require": "| Nome | Tipo   | Obrigatório | Descrição                                           |\n|------|--------|-------------|---------------------------------------------------|\n| id   | integer| Sim         | Um valor inteiro único que identifica este automacao.|",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite visualizar os prompts associados a uma automação específica. O parâmetro 'id' é obrigatório e deve ser um valor inteiro que identifica unicamente a automação desejada. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações. O retorno é um objeto JSON que representa a automação, conforme definido no esquema 'Automacao'.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /marketplace/automacoes/{id}/prompts/\n\n### Descrição\nEste endpoint permite visualizar os prompts associados a uma automação específica.\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório | Descrição                                           |\n|------|--------|-------------|---------------------------------------------------|\n| id   | integer| Sim         | Um valor inteiro único que identifica este automacao.\n\n### Autenticação\nA autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações.\n\n### Resposta\nO retorno é um objeto JSON que representa a automação, conforme definido no esquema 'Automacao'."
  },
  {
    "id": 198,
    "method": "PUT",
    "endpoint": "/marketplace/automacoes/{id}/registrar-chave/",
    "require": "| Nome  | Tipo     | Descrição                                                  | Obrigatório |\n|-------|----------|----------------------------------------------------------|-------------|\n| id    | integer  | Um valor inteiro único que identifica este automacao.    | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite atualizar uma automação existente no marketplace, registrando uma nova chave para a automação especificada pelo ID. A autenticação é feita através de token e cookies, garantindo que apenas usuários autorizados possam realizar essa operação. O impacto no CRM é significativo, pois permite a modificação dinâmica das automações, aumentando a flexibilidade e a personalização das interações com os clientes.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização de Automação\n\nEste endpoint permite que um usuário autenticado atualize uma automação existente no marketplace. A operação exige um ID de automação e um corpo de requisição que deve ser enviado no formato JSON, x-www-form-urlencoded ou multipart/form-data.\n\n### Parâmetros\n\n- **id** (integer, obrigatório): Identificador único da automação a ser atualizada.\n\n### Segurança\n\nA operação requer autenticação através de **tokenAuth** e **cookieAuth**, garantindo que apenas usuários com permissões adequadas possam acessar e modificar a automação.\n\n### Resposta\n\nUma resposta bem-sucedida retornará um objeto JSON representando a automação atualizada."
  },
  {
    "id": 199,
    "method": "POST",
    "endpoint": "/marketplace/automacoes/minhas/",
    "require": "| Nome | Tipo   | Obrigatório | Descrição                                                  |\n|------|--------|-------------|----------------------------------------------------------|\n| id   | integer| Sim         | Um valor inteiro único que identifica este automacao.    |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite registrar uma nova automação no sistema. O parâmetro 'id' é um identificador único necessário para associar a automação criada. A autenticação é realizada através de um token e cookies, garantindo que apenas usuários autorizados possam acessar esta funcionalidade. O sucesso da operação é indicado por um retorno 200, que fornece os detalhes da automação criada.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Endpoint: POST /marketplace/automacoes/minhas/\n\n### Descrição\nEste endpoint permite registrar uma nova automação no sistema.\n\n### Parâmetros Obrigatórios\n- **id**: Um valor inteiro único que identifica esta automacao.\n\n### Segurança\n- **tokenAuth**: Necessário para autenticação.\n- **cookieAuth**: Necessário para autenticação.\n\n### Respostas\n- **200**: Retorna os detalhes da automação criada."
  },
  {
    "id": 200,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/mensagens/buscar/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para recuperar mensagens relacionadas à automação no marketplace. A autenticação é feita através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações. A resposta é um objeto JSON que representa a estrutura de uma automação, conforme definido no esquema 'Automacao'.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /mensagens/buscar/\n\n### Descrição\nEsta rota permite que os usuários visualizem mensagens relacionadas às automações disponíveis no marketplace.\n\n### Autenticação\nAcesso protegido por:\n- **tokenAuth**: Necessário para autenticação via token.\n- **cookieAuth**: Alternativa para autenticação via cookies.\n\n### Resposta\n- **Código 200**: Retorna um objeto JSON que representa a automação, conforme descrito no esquema 'Automacao'.\n\n### Observações\n- Nenhum payload de envio é necessário para esta rota."
  },
  {
    "id": 201,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/negocio/{negocio_id}/mover-time/",
    "require": "| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| negocio_id | string | Sim         |",
    "optional": "| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| page   | integer  | Não         |\n| search | string   | Não         |",
    "detalhes": "Esta rota permite buscar mensagens com URLs locais associadas a um negócio específico, identificado por `negocio_id`. A busca pode ser refinada utilizando os parâmetros `page` e `search`, que permitem a paginação e a filtragem dos resultados. A autenticação é realizada através de `tokenAuth` ou `cookieAuth`, garantindo que apenas usuários autorizados possam acessar as informações. O retorno da API é uma lista paginada de interações, facilitando a navegação pelos resultados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Rota: Buscar Mensagens\n\n## Método: GET\n\n### Descrição\nEsta rota permite buscar mensagens com URLs locais associadas a um negócio específico, identificado por `negocio_id`. A busca pode ser refinada utilizando os parâmetros `page` e `search`, que permitem a paginação e a filtragem dos resultados.\n\n### Parâmetros\n| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| negocio_id | string | Sim         |\n| page   | integer  | Não         |\n| search | string   | Não         |\n\n### Segurança\n- `tokenAuth`: Necessário para autenticação do usuário.\n- `cookieAuth`: Alternativa para autenticação.\n\n### Resposta\nA resposta da API será uma lista paginada de interações, facilitando a navegação pelos resultados."
  },
  {
    "id": 202,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/negocios/",
    "require": "| Parâmetro     | Tipo     | Obrigatório |\n|---------------|----------|-------------|\n| negocio_id    | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de um negócio, movendo-o para um novo time. O parâmetro 'negocio_id' é obrigatório e deve ser um inteiro que identifica de forma única o negócio a ser atualizado. Assegura que apenas usuários autenticados possam acessar esta funcionalidade, utilizando tanto autenticação por token quanto por cookie.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Atualização Parcial de Negócio\n\n### Método\nPATCH\n\n### Endpoint\n/backend.loomiecrm.com/negocios/\n\n### Parâmetros\n| Parâmetro     | Tipo     | Obrigatório |\n|---------------|----------|-------------|\n| negocio_id    | integer  | Sim         |\n\n### Descrição\nEsta rota permite a atualização parcial de um negócio, movendo-o para um novo time. O parâmetro 'negocio_id' é obrigatório e deve ser um inteiro que identifica de forma única o negócio a ser atualizado.\n\n### Segurança\nAcesso restrito a usuários autenticados através de tokenAuth e cookieAuth.\n\n### Resposta\nRetorna um código de status 200 sem corpo de resposta."
  },
  {
    "id": 203,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/negocios/",
    "require": "| Nome   | Tipo     | Obrigatório | Descrição                                         |\n|--------|----------|-------------|--------------------------------------------------|\n| ordering | string   | Não        | Qual campo usar ao ordenar os resultados.       |\n| page     | integer  | Não        | Um número de página dentro do conjunto de resultados paginado. |\n| search   | string   | Não        | Um termo de busca.                               |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar e criar negócios no sistema. Ao utilizar os parâmetros de consulta, o usuário pode ordenar, paginar e buscar resultados específicos. A autenticação é necessária através de token ou cookie, garantindo que apenas usuários autorizados possam acessar os dados de negócios. A resposta será uma lista paginada de negócios, permitindo uma navegação eficiente pelos resultados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Listar Negócios\n\n### Método: GET\n\n### Descrição\nEsta rota permite listar e criar negócios no sistema. Ao utilizar os parâmetros de consulta, o usuário pode ordenar, paginar e buscar resultados específicos.\n\n### Parâmetros\n| Nome   | Tipo     | Obrigatório | Descrição                                         |\n|--------|----------|-------------|--------------------------------------------------|\n| ordering | string   | Não        | Qual campo usar ao ordenar os resultados.       |\n| page     | integer  | Não        | Um número de página dentro do conjunto de resultados paginado. |\n| search   | string   | Não        | Um termo de busca.                               |\n\n### Autenticação\nA autenticação é necessária através de token ou cookie, garantindo que apenas usuários autorizados possam acessar os dados de negócios.\n\n### Resposta\nA resposta será uma lista paginada de negócios, permitindo uma navegação eficiente pelos resultados."
  },
  {
    "id": 204,
    "method": "POST",
    "endpoint": "/negocios/{negocio_id}/comentarios/",
    "require": "| Nome do Parâmetro | Tipo   | Obrigatório |\n|------------------|--------|-------------|\n| negocio_id       | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de comentários associados a um negócio específico identificado pelo ID. A autenticação é necessária, utilizando tokenAuth ou cookieAuth. O sucesso da operação resultará na criação de um novo comentário, retornando um status 201 e os detalhes do comentário criado.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Criar Comentário em um Negócio\n\n### Método\nPOST\n\n### Endpoint\n/negocios/{negocio_id}/comentarios/\n\n### Descrição\nEsta rota permite a criação de comentários associados a um negócio específico.\n\n### Parâmetros\n| Nome do Parâmetro | Tipo   | Obrigatório |\n|------------------|--------|-------------|\n| negocio_id       | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\nEm caso de sucesso, a rota retornará um status 201 e os detalhes do comentário criado."
  },
  {
    "id": 205,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/negocios/{id}/",
    "require": "| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| negocio_id   | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a criação de um novo comentário associado a um negócio específico, identificado pelo seu ID. O usuário deve fornecer um token de autenticação e, opcionalmente, pode usar autenticação via cookie. O sucesso da operação resulta na criação do comentário, retornando um status 201 e os dados do comentário recém-criado.",
    "payload": "{\"texto\": \"Este é um comentário sobre o negócio.\", \"autor\": \"Usuário Exemplo\"}",
    "markdown": "## Criar Comentário para Negócio\n\n### Descrição\nEste endpoint permite a criação de um novo comentário associado a um negócio específico.\n\n### Método\n`POST`\n\n### Endpoint\n`/negocios/{id}/`\n\n### Parâmetros Requeridos\n| Nome         | Tipo     | Obrigatório |\n|--------------|----------|-------------|\n| negocio_id   | integer  | Sim         |\n\n### Autenticação\n- `tokenAuth`: O token deve ser incluído no cabeçalho da requisição.\n- `cookieAuth`: Opcionalmente, um cookie de autenticação pode ser utilizado.\n\n### Resposta\n- **201 Created**: Retorna os dados do comentário criado.\n\n### Exemplo de Payload\n```json\n{\"texto\": \"Este é um comentário sobre o negócio.\", \"autor\": \"Usuário Exemplo\"}\n```"
  },
  {
    "id": 206,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/negocios/{id}/",
    "require": "| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que o usuário recupere detalhes de um negócio específico através do seu ID. O ID do negócio deve ser fornecido como um parâmetro de caminho. A autenticação é necessária e pode ser feita através de um token ou cookie. O retorno é um objeto JSON que representa o negócio solicitado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Detalhes da Rota\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/negocios/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |\n\n### Autenticação\nEsta rota requer autenticação através de `tokenAuth` ou `cookieAuth`.\n\n### Resposta\nRetorna um objeto JSON com os detalhes do negócio especificado pelo ID."
  },
  {
    "id": 207,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/negocios/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar, atualizar e deletar um negócio existente no sistema. O parâmetro 'id' é necessário para identificar qual negócio deve ser atualizado. A autenticação é realizada através de 'tokenAuth' e 'cookieAuth', garantindo que apenas usuários autenticados possam realizar esta operação. O impacto desta rota no ecossistema CRM é significativo, pois permite que os usuários mantenham os dados dos negócios atualizados e em conformidade com as necessidades do cliente.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização de Negócios\n\n### Descrição\nEsta rota permite detalhar, atualizar e deletar um negócio existente no sistema.\n\n### Método\nPUT\n\n### Endpoint\n/backend.loomiecrm.com/negocios/{id}/\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth e cookieAuth.\n\n### Resposta\nA resposta para uma atualização bem-sucedida retornará um objeto do tipo Negocio.\n\n### Impacto no CRM\nPermite que os usuários mantenham os dados dos negócios atualizados e em conformidade com as necessidades do cliente."
  },
  {
    "id": 208,
    "method": "PATCH",
    "endpoint": "/negocios/{id}/",
    "require": "| Nome  | Tipo     | Obrigatório |\n|-------|----------|-------------|\n| id    | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de um negócio existente. O parâmetro 'id' deve ser fornecido na URL e é obrigatório. O corpo da requisição pode ser enviado em diferentes formatos, como JSON, x-www-form-urlencoded ou multipart/form-data, todos referenciando o esquema 'PatchedNegocioRequest'. A autenticação é realizada através de token ou cookie. Se a atualização for bem-sucedida, a resposta retornará os detalhes do negócio atualizado.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Negócio\n\n### Método\nPATCH\n\n### Endpoint\n/negocios/{id}/\n\n### Parâmetros Requeridos\n| Nome  | Tipo     | Obrigatório |\n|-------|----------|-------------|\n| id    | integer  | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a atualização parcial de um negócio existente. O parâmetro 'id' deve ser fornecido na URL e é obrigatório. O corpo da requisição pode ser enviado em diferentes formatos, como JSON, x-www-form-urlencoded ou multipart/form-data, todos referenciando o esquema 'PatchedNegocioRequest'. A autenticação é realizada através de token ou cookie. Se a atualização for bem-sucedida, a resposta retornará os detalhes do negócio atualizado."
  },
  {
    "id": 209,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/negocios/{id}/marcar-ganha/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que um negócio específico seja marcado como ganho. O parâmetro 'id' representa o identificador único do negócio a ser atualizado. A operação requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam modificar o estado do negócio. A resposta é um código de status 204, indicando que a operação foi bem-sucedida e não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Marcar Negócio como Ganha\n\n### Método\nDELETE\n\n### Endpoint\n/backend.loomiecrm.com/negocios/{id}/marcar-ganha/\n\n### Descrição\nEsta rota permite que um negócio específico seja marcado como ganho.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Segurança\nEsta operação requer autenticação via token e cookie.\n\n### Resposta\nA resposta será um código de status 204, indicando que a operação foi bem-sucedida e não há corpo de resposta."
  },
  {
    "id": 210,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/negocios/{id}/marcar-perdida/",
    "require": "| Parâmetro | Tipo      | Obrigatório |\n|-----------|-----------|-------------|\n| id        | integer   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite marcar um negócio como ganho, utilizando o método POST. O parâmetro 'id' é necessário e deve ser um número inteiro que representa o identificador do negócio a ser marcado. A autenticação é feita através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam realizar essa ação. Não há resposta no corpo para uma solicitação bem-sucedida, mas um status 200 é retornado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Marcar Negócio como Ganho\n\nEsta rota permite marcar um negócio como ganho no sistema CRM.\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/negocios/{id}/marcar-perdida/\n\n### Parâmetros\n| Parâmetro | Tipo      | Obrigatório |\n|-----------|-----------|-------------|\n| id        | integer   | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\nUm status 200 é retornado em caso de sucesso, sem corpo de resposta."
  },
  {
    "id": 211,
    "method": "POST",
    "endpoint": "/negocios/{id}/mencoes/lidas/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para marcar um negócio como perdido. O parâmetro `id` deve ser fornecido no caminho da requisição e representa o identificador único do negócio a ser atualizado. A autenticação é necessária e pode ser realizada através de um token ou cookie. Uma vez que a operação é bem-sucedida, a resposta não contém um corpo, mas um status de sucesso é retornado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Marcar Negócio como Perdido\n\nEsta rota permite que um usuário marque um negócio como perdido no sistema.\n\n**Método:** POST\n\n**Endpoint:** /negocios/{id}/mencoes/lidas/\n\n#### Parâmetros:\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n#### Segurança:\n- **tokenAuth**: Necessário para autenticação do usuário.\n- **cookieAuth**: Alternativa para autenticação.\n\n#### Resposta:\n- **200**: Indica que o negócio foi marcado como perdido com sucesso. Não há corpo na resposta."
  },
  {
    "id": 212,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/negocios/exportar-relatorio/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exportação de relatórios relacionados a negócios. O parâmetro 'id' é obrigatório e deve ser um número inteiro que representa o identificador do negócio a ser exportado. A autenticação é feita através de token e cookie, garantindo que apenas usuários autorizados possam acessar esta funcionalidade. Não há corpo de resposta, indicando que a operação é realizada sem retorno de dados adicionais.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Exportar Relatório de Negócios\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/negocios/exportar-relatorio/\n\n### Parâmetros Requeridos\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Detalhes\nEsta rota permite a exportação de relatórios relacionados a negócios. O parâmetro 'id' é obrigatório e deve ser um número inteiro que representa o identificador do negócio a ser exportado. A autenticação é feita através de token e cookie, garantindo que apenas usuários autorizados possam acessar esta funcionalidade. Não há corpo de resposta, indicando que a operação é realizada sem retorno de dados adicionais."
  },
  {
    "id": 213,
    "method": "GET",
    "endpoint": "/negocios/historico-vendas/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exportação de um relatório completo de vendas em formato Excel, contendo todos os dados necessários para análise estratégica. A autenticação é realizada através de tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam acessar os dados. A resposta para esta requisição é um código de status 200, indicando sucesso, mas não contém corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Exportação de Relatório de Vendas\n\n### Método\nGET\n\n### Endpoint\n/negocios/historico-vendas/\n\n### Descrição\nEsta rota exporta um relatório completo de vendas em Excel, contendo todos os dados relevantes para análise estratégica.\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\nA resposta para uma requisição bem-sucedida (200) não contém corpo."
  },
  {
    "id": 214,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/negocios/motivos-perda/",
    "require": "| Parâmetro | Tipo   | Obrigatório | Descrição                             |\n|-----------|--------|-------------|---------------------------------------|\n| kanban_id | string | Não         | Filtrar por funil específico          |\n| status    | string | Não         | 'ganha', 'perdida', ou vazio para ambas |\n| periodo   | string | Não         | 'hoje', 'semana', 'mes', 'trimestre', 'ano' |\n| busca     | string | Não         | Buscar por nome do contato            |\n| page      | int    | Não         | Número da página (padrão: 1)         |\n| page_size | int    | Não         | Tamanho da página (padrão: 10, máx: 100) |\n| ordenar   | string | Não         | 'data_recente', 'data_antiga', 'valor_maior', 'valor_menor' |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a recuperação do histórico de vendas, tanto ganhas quanto perdidas, com suporte a paginação. Os parâmetros permitem filtrar os resultados com base em diferentes critérios, como o funil de vendas, status da venda, período, e outros. A autenticação é realizada através de token e cookies, garantindo que apenas usuários autorizados possam acessar essas informações. O uso adequado dos parâmetros de paginação e ordenação é essencial para otimizar a visualização dos dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Histórico de Vendas\n\nEste endpoint fornece acesso ao histórico de vendas, permitindo que os usuários visualizem vendas ganhas e perdidas com a possibilidade de paginação.\n\n## Parâmetros\n\n- **kanban_id**: Filtra as vendas por um funil específico.\n- **status**: Permite filtrar por status da venda, que pode ser 'ganha', 'perdida', ou vazio para incluir ambos.\n- **periodo**: Define o intervalo de tempo para a pesquisa, podendo ser 'hoje', 'semana', 'mes', 'trimestre' ou 'ano'.\n- **busca**: Permite buscar vendas através do nome do contato.\n- **page**: Especifica o número da página a ser retornada, com padrão de 1.\n- **page_size**: Define o tamanho da página, com um padrão de 10 e máximo de 100.\n- **ordenar**: Permite ordenar os resultados por 'data_recente', 'data_antiga', 'valor_maior', ou 'valor_menor'.\n\n## Segurança\n\nA autenticação é realizada através de **tokenAuth** e **cookieAuth**, garantindo que apenas usuários autorizados possam acessar os dados.\n\n## Impacto no CRM\n\nEste endpoint é crucial para a análise de desempenho de vendas, permitindo que os usuários identifiquem tendências e ajustem estratégias de vendas com base em dados históricos."
  },
  {
    "id": 215,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/negocios/stats-vendas/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para listar os motivos de perda disponíveis no sistema. É uma operação que não requer parâmetros de entrada e não retorna um corpo de resposta, apenas um status de sucesso. A segurança é garantida através de autenticação por token e cookie, assegurando que apenas usuários autenticados possam acessar esta informação.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Listar Motivos de Perda\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/negocios/stats-vendas/\n\n### Descrição\nEsta rota permite listar os motivos de perda disponíveis no sistema, que são constantes e não requerem parâmetros de entrada.\n\n### Segurança\nAcesso restrito a usuários autenticados, utilizando autenticação por token e cookie.\n\n### Resposta\nA rota não retorna um corpo de resposta, apenas um status de sucesso (200)."
  },
  {
    "id": 216,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/negocios/tags-metrics/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota fornece estatísticas completas do dashboard de vendas, permitindo que os usuários visualizem métricas relevantes para a gestão de negócios. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações. A resposta da rota não contém um corpo, indicando que as informações são retornadas através de cabeçalhos ou status de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## GET /negocios/tags-metrics/\n\n### Descrição\nEsta rota fornece estatísticas completas do dashboard de vendas, permitindo que os usuários visualizem métricas relevantes para a gestão de negócios.\n\n### Autenticação\n- **tokenAuth**: Necessário para autenticação via token.\n- **cookieAuth**: Necessário para autenticação via cookie.\n\n### Resposta\n- **Código 200**: Indica sucesso na requisição. Não há corpo de resposta."
  },
  {
    "id": 217,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/negocios/usuarios-hierarquia/",
    "require": "| Nome          | Tipo     | Obrigatório |\n|---------------|----------|-------------|\n| kanban_id     | Integer  | Sim         |\n| periodo       | String   | Não         |",
    "optional": "| Nome          | Tipo     | Obrigatório |\n|---------------|----------|-------------|\n| subordinado_id | Integer  | Não         |",
    "detalhes": "Esta rota retorna as métricas de tags por estágio do pipeline, permitindo a análise da quantidade de negócios por tag e sua distribuição entre os estágios. A hierarquia de permissões é respeitada, e os dados podem ser filtrados com base no kanban e no período especificado. O parâmetro 'kanban_id' é obrigatório para identificar o pipeline específico, enquanto 'periodo' é opcional, com um valor padrão de 'mes'. O parâmetro 'subordinado_id' permite filtrar por um subordinado específico, mas é opcional.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Métricas de Tags por Estágio do Pipeline\nEsta rota permite obter métricas de tags associadas aos negócios em diferentes estágios do pipeline.\n\n### Parâmetros\n- **kanban_id** (obrigatório): ID do pipeline que será utilizado para filtrar os resultados.\n- **periodo** (opcional): Define o período de análise, podendo ser 'hoje', 'semana' ou 'mes' (padrão: 'mes').\n- **subordinado_id** (opcional): Permite filtrar os resultados por um subordinado específico.\n\n### Segurança\nEsta rota requer autenticação via tokenAuth ou cookieAuth para garantir que apenas usuários autorizados possam acessar as métricas.\n\n### Resposta\nA resposta para esta rota é um código de status 200 sem corpo, indicando que a solicitação foi processada com sucesso."
  },
  {
    "id": 218,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/notas/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota retorna uma lista de todos os usuários pertencentes à mesma organização (tenant). É utilizada principalmente para a funcionalidade de autocomplete em menções no Kanban, permitindo que os usuários mencionem outros sem restrições de privacidade, visto que a menção não depende da visualização dos dados do usuário mencionado. A segurança é garantida através de autenticação por token e cookie.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Rota: GET /notas/\n\n**Descrição:** Esta API retorna uma lista de todos os usuários da mesma organização (tenant). É utilizada para o autocomplete de @menções no Kanban, permitindo que os usuários mencionem outros sem considerar a privacidade dos dados.\n\n**Segurança:**\n- tokenAuth: Necessário\n- cookieAuth: Necessário\n\n**Respostas:**\n- **200**: Retorna uma lista de usuários sem corpo de resposta."
  },
  {
    "id": 219,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/notas/",
    "require": "| Nome   | Tipo     | Obrigatório | Descrição                                                  |\n|--------|----------|-------------|----------------------------------------------------------|\n| ordering | string   | Não         | Qual campo usar ao ordenar os resultados.                |\n| page      | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search    | string   | Não         | Um termo de busca.                                       |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar notas de atendimento, com suporte a ordenação, paginação e busca. A autenticação é feita através de token ou cookie, garantindo a segurança dos dados. Os parâmetros de consulta permitem personalizar a resposta, facilitando a navegação e a localização de notas específicas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listar Notas de Atendimento\n\n### Método\nGET\n\n### Endpoint\n/notas/\n\n### Parâmetros\n- **ordering** (opcional): Qual campo usar ao ordenar os resultados.\n- **page** (opcional): Um número de página dentro do conjunto de resultados paginado.\n- **search** (opcional): Um termo de busca.\n\n### Segurança\nEsta rota requer autenticação via **tokenAuth** ou **cookieAuth**.\n\n### Resposta\nRetorna uma lista paginada de notas de atendimento."
  },
  {
    "id": 220,
    "method": "POST",
    "endpoint": "/notas/{id}/",
    "require": "| Parâmetro | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| id        | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar e criar notas de atendimento associadas a um determinado ID. O ID deve ser fornecido na URL e é um parâmetro obrigatório. A autenticação é feita através de token e cookies, garantindo que apenas usuários autorizados possam acessar esta funcionalidade. O retorno da operação é um objeto de nota de atendimento recém-criada, com status 201.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Endpoint: POST /notas/{id}/\n\n### Descrição\nEsta rota permite listar e criar notas de atendimento associadas a um determinado ID.\n\n### Parâmetros\n- **id**: O ID da nota de atendimento a ser criada. Este parâmetro é obrigatório.\n\n### Autenticação\n- **tokenAuth**: Necessário para autenticação via token.\n- **cookieAuth**: Necessário para autenticação via cookies.\n\n### Resposta\n- **201 Created**: Retorna um objeto de nota de atendimento recém-criada."
  },
  {
    "id": 221,
    "method": "GET",
    "endpoint": "/notas/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar uma nota específica com base no seu ID. O acesso é restrito e requer autenticação via token ou cookie. A resposta inclui os detalhes da nota no formato JSON, permitindo que o sistema CRM apresente informações detalhadas ao usuário.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Detalhamento da Nota\nEsta rota é utilizada para obter detalhes de uma nota específica no sistema.\n\n### Método\n- **GET**\n\n### Endpoint\n- **/notas/{id}/**\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Autenticação\n- **tokenAuth**: Necessário para autenticação do usuário.\n- **cookieAuth**: Alternativa para autenticação via cookies.\n\n### Resposta\n- **200 OK**: Retorna os detalhes da nota no formato JSON."
  },
  {
    "id": 222,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/notas/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar e atualizar uma nota existente. O parâmetro 'id' deve ser fornecido na URL e representa o identificador único da nota que se deseja atualizar. O corpo da requisição deve conter os dados da nota a serem atualizados, podendo ser enviado em diferentes formatos, como JSON ou form-data. A autenticação é feita através de token e cookies, garantindo que apenas usuários autorizados possam realizar essa operação.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização de Nota\n\n### Descrição\nEsta rota é utilizada para detalhar e atualizar uma nota existente no sistema.\n\n### Método\nPUT\n\n### Endpoint\n/notas/{id}/\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve conter os dados da nota a serem atualizados, podendo ser enviado em JSON, x-www-form-urlencoded ou multipart/form-data.\n\n### Autenticação\nEsta rota requer autenticação via token e cookies.\n\n### Resposta\nUma resposta bem-sucedida retornará um objeto JSON representando a nota atualizada."
  },
  {
    "id": 223,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/notas/{id}/",
    "require": "| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar, atualizar e deletar uma nota específica com base no ID fornecido. O ID da nota é um parâmetro obrigatório que deve ser passado na URL. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam realizar essa operação. O corpo da requisição pode ser enviado em diferentes formatos, incluindo JSON, form-urlencoded e multipart/form-data, todos referenciando o mesmo esquema de dados. A resposta bem-sucedida retorna a nota atualizada em formato JSON.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## PATCH /notas/{id}/\n\n### Descrição\nEsta rota permite detalhar, atualizar e deletar uma nota específica com base no ID fornecido.\n\n### Parâmetros\n- **id**: O ID da nota a ser atualizada (obrigatório).\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Formatos de Envio\nO corpo da requisição pode ser enviado nos seguintes formatos:\n- application/json\n- application/x-www-form-urlencoded\n- multipart/form-data\n\n### Resposta\nUma resposta bem-sucedida retornará a nota atualizada em formato JSON."
  },
  {
    "id": 224,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/notificacoes/",
    "require": "| Nome | Tipo   | Requerido |\n|------|--------|-----------|\n| id   | integer| Sim       |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para deletar uma notificação específica do sistema. O parâmetro 'id' deve ser fornecido no caminho da requisição e é obrigatório. A autenticação é feita através de tokenAuth ou cookieAuth, garantindo que apenas usuários autenticados possam realizar esta ação. O sucesso da operação é indicado pelo código de status 204, que significa que a notificação foi deletada com sucesso e não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Deletar Notificação\n\n### Método\nDELETE\n\n### Endpoint\n/backend/notificacoes/\n\n### Descrição\nEsta rota permite deletar uma notificação específica do sistema.\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Requerido |\n|------|--------|-----------|\n| id   | integer| Sim       |\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n### Respostas\n- **204**: Notificação deletada com sucesso. Não há corpo de resposta."
  },
  {
    "id": 225,
    "method": "GET",
    "endpoint": "/notificacoes/{id}/lida/",
    "require": "| Nome     | Tipo     | Requerido |\n|----------|----------|-----------|\n| ordering | string   | Não       |\n| page     | integer  | Não       |\n| search   | string   | Não       |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que os usuários recuperem uma lista de notificações paginadas, com opções para ordenar e buscar resultados específicos. A autenticação é realizada via token ou cookie, garantindo que apenas usuários autorizados possam acessar as notificações. A resposta é formatada em JSON e segue o esquema definido em 'PaginatedNotificacaoList'.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Listar Notificações Lidas\n\n### Método\nGET\n\n### Endpoint\n/notificacoes/{id}/lida/\n\n### Parâmetros\n- **ordering** (string, opcional): Qual campo usar ao ordenar os resultados.\n- **page** (integer, opcional): Um número de página dentro do conjunto de resultados paginado.\n- **search** (string, opcional): Um termo de busca.\n\n### Segurança\nEsta rota requer autenticação via **tokenAuth** ou **cookieAuth**.\n\n### Resposta\nA resposta será um objeto JSON que segue o esquema definido em 'PaginatedNotificacaoList'.\n\n### Considerações\nA utilização correta dos parâmetros de consulta permite a personalização da lista de notificações retornadas, facilitando a navegação e a busca por informações relevantes."
  },
  {
    "id": 226,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/notificacoes/{id}/lida/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por marcar uma notificação como lida. O parâmetro 'id' deve ser fornecido na URL e representa o identificador da notificação que se deseja atualizar. O corpo da requisição deve conter os dados necessários para a atualização, conforme definido no schema 'NotificacaoRequest'. A autenticação é feita através de um token e cookies, garantindo que apenas usuários autorizados possam executar esta ação.",
    "payload": "{\"status\":\"lida\"}",
    "markdown": "## Marcar Notificação como Lida\n\nEsta rota permite que um usuário marque uma notificação específica como lida. A requisição deve ser feita utilizando o método POST na URL `/notificacoes/{id}/lida/`, onde `{id}` é o identificador da notificação.\n\n### Parâmetros\n\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve conter os dados conforme o schema `NotificacaoRequest`. Exemplo de payload:\n\n```json\n{\"status\":\"lida\"}\n```\n\n### Segurança\nA rota requer autenticação via `tokenAuth` e `cookieAuth`, garantindo que apenas usuários com permissões adequadas possam marcar notificações como lidas.\n\n### Resposta\nUma resposta bem-sucedida retornará um status 200 com os detalhes da notificação atualizada."
  },
  {
    "id": 227,
    "method": "PUT",
    "endpoint": "/notificacoes/{id}/lida/",
    "require": "| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por marcar uma notificação como lida. O parâmetro 'id' deve ser fornecido na URL e representa o identificador da notificação a ser atualizada. O corpo da requisição deve conter os dados da notificação, que podem ser enviados em diferentes formatos, como JSON, form-urlencoded ou multipart/form-data. A autenticação é feita através de token e cookie, garantindo que apenas usuários autorizados possam marcar notificações como lidas. A resposta bem-sucedida retorna os detalhes da notificação atualizada.",
    "payload": "{\"status\":\"lida\"}",
    "markdown": "## Atualização de Notificação Lida\n\n### Método\nPUT\n\n### Endpoint\n/notificacoes/{id}/lida/\n\n### Parâmetros Requeridos\n| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite que o usuário marque uma notificação como lida. O parâmetro 'id' deve ser incluído na URL e representa a notificação que será atualizada. O corpo da requisição deve conter os dados da notificação e pode ser enviado em diferentes formatos, como JSON, form-urlencoded ou multipart/form-data. A autenticação é necessária através de token e cookie.\n\n### Resposta\nA resposta bem-sucedida retornará os detalhes da notificação atualizada em formato JSON."
  },
  {
    "id": 228,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/notificacoes/criar/",
    "require": "| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de uma notificação específica, identificada pelo parâmetro `id`. O corpo da requisição deve conter os dados que se deseja atualizar, conforme definido no esquema `PatchedNotificacaoRequest`. A autenticação é realizada através de um token de autenticação e cookies. O sucesso da operação retorna um status 200 e os dados da notificação atualizada.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Notificações\n\n### Método\nPATCH\n\n### Endpoint\n/backend/notificacoes/criar/\n\n### Parâmetros Requeridos\n| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a atualização parcial de uma notificação específica, identificada pelo parâmetro `id`. O corpo da requisição deve conter os dados que se deseja atualizar, conforme definido no esquema `PatchedNotificacaoRequest`.\n\n### Autenticação\nEsta rota requer autenticação via `tokenAuth` e `cookieAuth`.\n\n### Resposta\nUm status 200 indica que a atualização foi bem-sucedida, retornando os dados da notificação atualizada."
  },
  {
    "id": 229,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/notificacoes/marcar-todas-lidas/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite marcar todas as notificações como lidas para o usuário autenticado. A autenticação é realizada através de um token de autenticação e cookies. É importante garantir que o usuário tenha permissões adequadas para realizar esta ação, pois ela impacta diretamente a visualização das notificações no sistema CRM.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Marcar Todas as Notificações como Lidas\n\n### Método\nPOST\n\n### Endpoint\n/notificacoes/marcar-todas-lidas/\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth e cookieAuth.\n\n### Resposta\n- **200 OK**: A operação foi bem-sucedida e todas as notificações foram marcadas como lidas. Não há corpo de resposta."
  },
  {
    "id": 230,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/operadores/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que o usuário marque todas as notificações como lidas. A autenticação é necessária através de token ou cookie. A resposta para uma requisição bem-sucedida não contém corpo, apenas um status 200.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## PATCH /operadores/\n\nEsta rota permite que o usuário marque todas as notificações como lidas.\n\n### Autenticação\n\nA autenticação é necessária através de:\n- **tokenAuth**\n- **cookieAuth**\n\n### Resposta\n\nUma requisição bem-sucedida retornará um status 200 sem corpo."
  },
  {
    "id": 231,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/perfil/{id}/editar/",
    "require": "| Parâmetro | Tipo | Obrigatório |\n|-----------|------|-------------|\n| id        | String | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que os usuários recuperem informações sobre um operador específico através de seu ID. É necessário fornecer um token de autenticação para acessar esta rota, garantindo que apenas usuários autorizados possam visualizar os dados do operador. A resposta não contém um corpo, mas um status 200 indica que a solicitação foi bem-sucedida.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Detalhes da Rota\n### Método: GET\n### Endpoint: /perfil/{id}/editar/\n\n### Descrição\nEsta rota permite que os usuários recuperem informações sobre um operador específico através de seu ID.\n\n### Segurança\n- **tokenAuth**: Necessário para autenticação.\n- **cookieAuth**: Alternativa para autenticação.\n\n### Resposta\n- **200**: Solicitação bem-sucedida, sem corpo de resposta.\n\n### Impacto no CRM\nEsta rota é essencial para a visualização de dados de operadores, permitindo que os usuários acessem informações críticas e realizem operações subsequentes em um ambiente seguro."
  },
  {
    "id": 232,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/perfil/{id}/editar/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite editar o perfil de um usuário específico, identificado pelo parâmetro 'id'. A autenticação é necessária através de tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam realizar alterações. Não há resposta no corpo da requisição, mas um status 200 indica sucesso na operação.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Editar Perfil\n\n### Método\nPOST\n\n### Endpoint\n/backend/perfil/{id}/editar/\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Segurança\nAcesso protegido por tokenAuth e cookieAuth.\n\n### Resposta\nStatus 200 indica sucesso na operação."
  },
  {
    "id": 233,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/perfil/{id}/resetar-senha/",
    "require": "| Nome  | Tipo     | Obrigatório |\n|-------|----------|-------------|\n| id    | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que um usuário redefina a senha do perfil identificado pelo parâmetro {id}. A operação requer autenticação via token e cookie. Ao ser executada com sucesso, não retorna corpo de resposta, mas indica que a operação foi realizada com êxito. É crucial que o usuário tenha permissão para modificar o perfil correspondente ao ID fornecido.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Rota: Redefinir Senha do Perfil\n\n**Método:** PATCH\n\n**Endpoint:** /perfil/{id}/resetar-senha/\n\n**Descrição:** Esta rota permite que um usuário redefina a senha do perfil identificado pelo parâmetro {id}. A operação requer autenticação via token e cookie.\n\n**Parâmetros:**\n\n| Nome  | Tipo     | Obrigatório |\n|-------|----------|-------------|\n| id    | integer  | Sim         |\n\n**Respostas:**\n- **200**: Operação realizada com sucesso, sem corpo de resposta.\n\n**Segurança:**\n- Autenticação via tokenAuth e cookieAuth é necessária para acessar esta rota.\n\n**Impacto no CRM:**\nEsta operação é fundamental para a manutenção da segurança das contas de usuário, permitindo que senhas sejam redefinidas de maneira segura e controlada."
  },
  {
    "id": 234,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/perfil/{id}/resetar-senha/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que um usuário redefina a senha de um perfil específico, identificado pelo parâmetro \"id\". A autenticação é necessária e pode ser realizada através de um token de autenticação ou cookies. A resposta é um código de sucesso 200, sem corpo de resposta, indicando que a operação foi concluída com êxito.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Redefinir Senha do Perfil\n\n### Método\nPOST\n\n### Endpoint\n/backend.perfil/{id}/resetar-senha/\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\nRetorna um código de status 200 sem corpo de resposta, indicando que a redefinição da senha foi realizada com sucesso."
  },
  {
    "id": 235,
    "method": "PATCH",
    "endpoint": "/ping/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite que o usuário redefina a senha de seu perfil. O parâmetro 'id' é necessário para identificar o perfil específico que terá sua senha alterada. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autenticados possam realizar essa operação. Não há resposta no corpo, indicando que a operação foi concluída com sucesso.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Atualização Parcial de Senha de Perfil\n\nEste endpoint permite que um usuário redefina a senha de seu perfil.\n\n### Parâmetros\n\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Segurança\n\nEste endpoint requer autenticação através de tokenAuth e cookieAuth.\n\n### Resposta\n\nNão há corpo de resposta, indicando que a operação foi concluída com sucesso."
  },
  {
    "id": 236,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/plan_usage/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para verificar a utilização do plano do usuário. Não há corpo de resposta, indicando que a operação foi bem-sucedida. A autenticação é necessária e pode ser feita através de token ou cookie.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: GET /plan_usage/\n\n### Descrição\nEsta rota permite que os usuários verifiquem a utilização do seu plano. É uma operação simples que não retorna um corpo de resposta, mas confirma que a solicitação foi processada com sucesso.\n\n### Autenticação\nA autenticação é obrigatória e pode ser realizada através de:\n- **tokenAuth**: Um token de autenticação deve ser incluído no cabeçalho da solicitação.\n- **cookieAuth**: Um cookie de autenticação deve ser enviado junto com a solicitação.\n\n### Resposta\n- **Código 200**: Indica que a solicitação foi bem-sucedida, mas não há corpo de resposta."
  },
  {
    "id": 237,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/plano/contador/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que os usuários recuperem informações sobre o uso do plano associado ao contador. A autenticação é necessária e pode ser realizada através de um token ou cookie. Não há corpo de resposta, indicando que a operação é bem-sucedida, mas não retorna dados adicionais.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Recuperar Uso do Plano\n\n## Descrição\nEsta rota permite que os usuários recuperem informações sobre o uso do plano associado ao contador.\n\n## Método\nGET\n\n## Endpoint\n/backend/plano/contador/\n\n## Autenticação\nEsta rota requer autenticação, que pode ser realizada através de um token ou cookie.\n\n## Respostas\n- **200**: Nenhum corpo de resposta, indicando que a operação foi bem-sucedida."
  },
  {
    "id": 238,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/planos/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para recuperar informações sobre os planos disponíveis. A autenticação é feita através de um token de acesso ou via cookies. Não há corpo de resposta para esta rota, pois a informação é retornada diretamente no cabeçalho da resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperar Planos\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/planos/\n\n### Autenticação\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\nA resposta não contém corpo, mas retorna um código de status 200 se a requisição for bem-sucedida.\n\n### Detalhes\nEsta rota é utilizada para recuperar informações sobre os planos disponíveis, permitindo que o usuário visualize as opções disponíveis no sistema."
  },
  {
    "id": 239,
    "method": "GET",
    "endpoint": "/preset-kanban/{preset_id}/mover-time/",
    "require": "Nenhum",
    "optional": "ordering: string, page: integer, search: string",
    "detalhes": "Esta rota permite listar planos em um formato paginado, com a opção de ordenar os resultados e filtrar por um termo de busca. O acesso a esta rota requer autenticação via token ou cookie, garantindo que apenas usuários autorizados possam visualizar os dados. A rota é essencial para a gestão de planos dentro do sistema, permitindo que os usuários encontrem rapidamente informações relevantes.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Listagem de Planos\n\nEsta rota permite que os usuários listem planos disponíveis no sistema. Os parâmetros de consulta são utilizados para personalizar a resposta:\n\n- **ordering**: (opcional) Define qual campo deve ser utilizado para ordenar os resultados.\n- **page**: (opcional) Especifica o número da página a ser retornada dentro do conjunto de resultados paginados.\n- **search**: (opcional) Permite filtrar os resultados com base em um termo de busca específico.\n\n#### Autenticação\n\nPara acessar esta rota, é necessário estar autenticado, utilizando um token ou cookie de autenticação.\n\n#### Resposta\n\nA resposta será um objeto JSON que contém uma lista paginada de planos, conforme definido no esquema `PaginatedPlanoList`."
  },
  {
    "id": 240,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/presets/",
    "require": "| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| preset_id | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de um preset no sistema. O parâmetro 'preset_id' é obrigatório e deve ser um número inteiro que identifica o preset a ser atualizado. A autenticação é realizada através de token e cookies, garantindo segurança na operação. Não há resposta no corpo da requisição, indicando que a operação foi bem-sucedida.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Atualização Parcial de Preset\n\nEsta rota permite a atualização parcial de um preset específico no sistema. Para utilizá-la, é necessário fornecer o ID do preset a ser atualizado, que deve ser um número inteiro.\n\n#### Parâmetros da Requisição\n\n| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| preset_id | integer  | Sim         |\n\n#### Segurança\n\nA autenticação é realizada através de:\n- **tokenAuth**: Necessário para validar o usuário que está fazendo a requisição.\n- **cookieAuth**: Usado como método adicional de autenticação.\n\n#### Resposta\n\nA rota não retorna um corpo de resposta, mas um código de status 200 indica que a operação foi realizada com sucesso."
  },
  {
    "id": 241,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/presets/",
    "require": "| Nome    | Localização | Tipo     | Obrigatório |\n|---------|-------------|----------|-------------|\n| ordering| query       | string   | Não         |\n| page    | query       | integer  | Não         |\n| search  | query       | string   | Não         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar presets disponíveis, com opções para ordenar, paginar e buscar por termos específicos. A autenticação é feita via token ou cookie, garantindo que apenas usuários autorizados possam acessar os dados. A resposta é paginada, facilitando a navegação em grandes conjuntos de resultados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listar Presets\n\n### Descrição\nEsta rota permite listar presets disponíveis, com opções para ordenar, paginar e buscar por termos específicos.\n\n### Método\nGET\n\n### Endpoint\n/presets/\n\n### Parâmetros\n| Nome    | Localização | Tipo     | Obrigatório |\n|---------|-------------|----------|-------------|\n| ordering| query       | string   | Não         |\n| page    | query       | integer  | Não         |\n| search  | query       | string   | Não         |\n\n### Autenticação\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\nA resposta é paginada, facilitando a navegação em grandes conjuntos de resultados."
  },
  {
    "id": 242,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/presets/{id}/",
    "require": "| Nome do Parâmetro | Tipo       | Obrigatório |\n|----------------|------------|-------------|\n| id             | string     | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de um novo preset com base no ID fornecido. O usuário deve estar autenticado utilizando o token de autenticação ou cookies. O corpo da requisição deve conter os atributos do preset conforme definido no esquema PresetAtributosRequest. A resposta bem-sucedida retornará um status 201 e os detalhes do preset criado.",
    "payload": "{\"nome\": \"Preset Exemplo\", \"descricao\": \"Descrição do preset\", \"atributos\": {\"atributo1\": \"valor1\", \"atributo2\": \"valor2\"}}",
    "markdown": "## Criar Preset\n\n### Método\nPOST\n\n### Endpoint\n/presets/{id}/\n\n### Parâmetros Requeridos\n| Nome do Parâmetro | Tipo       | Obrigatório |\n|----------------|------------|-------------|\n| id             | string     | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token ou cookie.\n\n### Descrição\nEsta rota é utilizada para criar um novo preset. O usuário deve fornecer um ID válido e os atributos do preset no corpo da requisição. Os atributos devem seguir o esquema definido em PresetAtributosRequest. A resposta será um objeto JSON com os detalhes do preset criado e um status HTTP 201."
  },
  {
    "id": 243,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/presets/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de um preset específico com base no seu ID. O ID deve ser fornecido como um parâmetro de caminho e é obrigatório. A autenticação é realizada através de token e cookies, garantindo que apenas usuários autorizados possam acessar os dados. O retorno da requisição será um objeto JSON que representa os atributos do preset solicitado, conforme definido no esquema PresetAtributos.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperar Preset\n\nEsta rota permite a recuperação de um preset específico através do seu ID.\n\n### Método\nGET\n\n### Endpoint\n/presets/{id}/\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token e cookies.\n\n### Resposta\nEm caso de sucesso, a resposta será um objeto JSON que representa os atributos do preset."
  },
  {
    "id": 244,
    "method": "PUT",
    "endpoint": "/presets/{id}/",
    "require": "| Nome  | Tipo     | Obrigatório |\n|-------|----------|-------------|\n| id    | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite atualizar um preset existente com base no ID fornecido. O ID deve ser um número inteiro e é um parâmetro obrigatório na URL. O corpo da requisição deve conter os atributos do preset a serem atualizados, podendo ser enviado em diferentes formatos, como JSON, URL encoded ou multipart/form-data. A autenticação é necessária através de token ou cookie.",
    "payload": "{\"atributo1\": \"valor1\", \"atributo2\": \"valor2\"}",
    "markdown": "## Atualização de Preset\n\n### Método\nPUT\n\n### Endpoint\n/presets/{id}/\n\n### Parâmetros Requeridos\n| Nome  | Tipo     | Obrigatório |\n|-------|----------|-------------|\n| id    | integer  | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve ser enviado no formato JSON, URL encoded ou multipart/form-data, contendo os atributos do preset a serem atualizados. Exemplo:\n\n```json\n{\n  \"atributo1\": \"valor1\",\n  \"atributo2\": \"valor2\"\n}\n```\n\n### Segurança\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\nA resposta será um objeto JSON representando o preset atualizado."
  },
  {
    "id": 245,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/presets/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial dos atributos de um preset específico identificado pelo ID fornecido. A autenticação é necessária, utilizando tanto o token de autenticação quanto a autenticação por cookie. A atualização pode ser feita através de diferentes formatos de conteúdo, incluindo JSON, form-urlencoded e multipart/form-data. O retorno da operação bem-sucedida é um objeto JSON representando os atributos atualizados do preset.",
    "payload": "{\"atributo1\": \"valor1\", \"atributo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Presets\n\n### Método\nPATCH\n\n### Endpoint\n/presets/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim        |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite a atualização parcial dos atributos de um preset específico identificado pelo ID fornecido. A autenticação é necessária, utilizando tanto o token de autenticação quanto a autenticação por cookie. A atualização pode ser feita através de diferentes formatos de conteúdo, incluindo JSON, form-urlencoded e multipart/form-data. O retorno da operação bem-sucedida é um objeto JSON representando os atributos atualizados do preset.\n\n### Exemplo de Payload\n{\"atributo1\": \"valor1\", \"atributo2\": \"valor2\"}"
  },
  {
    "id": 246,
    "method": "DELETE",
    "endpoint": "/presets/create/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por deletar um preset específico do sistema. O parâmetro 'id' é essencial para identificar qual preset deve ser removido. A autenticação é feita através de tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam realizar esta operação. A resposta esperada é um código de status 204, indicando que a operação foi bem-sucedida e que não há conteúdo a ser retornado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## DELETE /presets/create/\n\n### Descrição\nEsta rota permite a exclusão de um preset específico do sistema.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Autenticação\nEsta operação requer autenticação via tokenAuth ou cookieAuth.\n\n### Resposta\nUm código de status 204 indica que a operação foi bem-sucedida e que não há conteúdo a ser retornado."
  },
  {
    "id": 247,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/presets/create/",
    "require": "| Nome     | Tipo     | Obrigatório | Descrição                                      |\n|----------|----------|-------------|------------------------------------------------|\n| ordering | string   | Não         | Qual campo usar ao ordenar os resultados.      |\n| page     | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search   | string   | Não         | Um termo de busca.                             |",
    "optional": "Nenhum",
    "detalhes": "Essa rota permite a recuperação de uma lista de presets, podendo ser filtrada e ordenada com base em parâmetros de consulta. A autenticação é feita através de token ou cookie, garantindo que apenas usuários autorizados possam acessar os dados. A resposta é paginada, permitindo a navegação eficiente através de grandes conjuntos de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Obter Lista de Presets\n\n### Método\nGET\n\n### Endpoint\n/presets/create/\n\n### Parâmetros\n- **ordering** (string, não obrigatório): Qual campo usar ao ordenar os resultados.\n- **page** (integer, não obrigatório): Um número de página dentro do conjunto de resultados paginado.\n- **search** (string, não obrigatório): Um termo de busca.\n\n### Segurança\nEssa rota requer autenticação, podendo ser realizada através de token ou cookie.\n\n### Resposta\nA resposta será um objeto JSON com a lista de presets paginada, conforme definido no schema `PaginatedPresetAtributosList`."
  },
  {
    "id": 248,
    "method": "POST",
    "endpoint": "/presets/estagios/",
    "require": "| Nome do Parâmetro | Tipo         | Obrigatório |\n|------------------|--------------|-------------|\n| body             | object       | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de novos presets de estagios. O corpo da requisição deve conter um objeto que atenda ao esquema PresetAtributosRequest. A autenticação é feita através de token e cookie, garantindo que apenas usuários autorizados possam criar novos presets. A resposta bem-sucedida retorna um status 201, indicando que o recurso foi criado com sucesso.",
    "payload": "{\"nome\": \"Exemplo de Preset\", \"atributos\": {\"atributo1\": \"valor1\", \"atributo2\": \"valor2\"}}",
    "markdown": "## Criação de Presets de Estágios\n\nEsta rota permite a criação de novos presets de estagios no sistema. É um endpoint do tipo POST que requer um corpo de requisição no formato JSON, onde o usuário deve enviar os atributos do preset a ser criado.\n\n### Autenticação\nA autenticação é realizada através de dois métodos: tokenAuth e cookieAuth. Ambos devem ser fornecidos para que a requisição seja aceita.\n\n### Resposta\nEm caso de sucesso, a rota retorna um status 201, indicando que o preset foi criado com sucesso. O corpo da resposta conterá os detalhes do preset recém-criado."
  },
  {
    "id": 249,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/presets/estagios/",
    "require": "| Nome     | Tipo     | Obrigatório | Descrição                                             |\n|----------|----------|-------------|-----------------------------------------------------|\n| ordering | string   | Não        | Qual campo usar ao ordenar os resultados.            |\n| page     | integer  | Não        | Um número de página dentro do conjunto de resultados paginado. |\n| search   | string   | Não        | Um termo de busca.                                   |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar os presets de estágios disponíveis no sistema. Os resultados podem ser ordenados, paginados e filtrados por um termo de busca. A autenticação é realizada através de token ou cookie, garantindo que apenas usuários autorizados possam acessar os dados. O impacto dessa rota no ecossistema CRM é significativo, pois permite que os usuários acessem e visualizem informações críticas sobre estágios de presets, que podem ser utilizados em processos de vendas e gestão de leads.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listar Presets de Estágios\n\n### Método\nGET\n\n### Endpoint\n/presets/estagios/\n\n### Parâmetros\n\n| Nome     | Tipo     | Obrigatório | Descrição                                             |\n|----------|----------|-------------|-----------------------------------------------------|\n| ordering | string   | Não        | Qual campo usar ao ordenar os resultados.            |\n| page     | integer  | Não        | Um número de página dentro do conjunto de resultados paginado. |\n| search   | string   | Não        | Um termo de busca.                                   |\n\n### Respostas\n\n- **200 OK**: Retorna uma lista paginada de presets de estágios.\n\n### Segurança\n\n- **tokenAuth**: Necessário para autenticação.\n- **cookieAuth**: Alternativa para autenticação."
  },
  {
    "id": 250,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/presets/estagios/{id}/",
    "require": "| Nome do parâmetro | Tipo       | Obrigatório |\n|------------------|------------|-------------|\n| id               | string     | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de um novo estágio para presets. O parâmetro `id` é obrigatório e deve ser fornecido na URL. O corpo da requisição deve estar no formato JSON, x-www-form-urlencoded ou multipart/form-data, conforme especificado. A autenticação é realizada através de token e cookies, garantindo que apenas usuários autenticados possam criar novos estágios. A resposta bem-sucedida retorna um status 201 com os detalhes do estágio criado.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Criar Estágio para Presets\n\nEsta rota permite a criação de um novo estágio para presets.\n\n### Método\nPOST\n\n### Endpoint\n/presets/estagios/{id}/\n\n### Parâmetros\n| Nome do parâmetro | Tipo       | Obrigatório |\n|------------------|------------|-------------|\n| id               | string     | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve estar no formato JSON, x-www-form-urlencoded ou multipart/form-data, conforme especificado.\n\n### Segurança\nA autenticação é realizada através de token e cookies, garantindo que apenas usuários autenticados possam criar novos estágios.\n\n### Resposta\nA resposta bem-sucedida retorna um status 201 com os detalhes do estágio criado."
  },
  {
    "id": 251,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/presets/estagios/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite recuperar um preset de estágio específico com base no ID fornecido. A autenticação é necessária através de token ou cookie. O sucesso da operação retorna um objeto JSON que representa o preset de estágio, permitindo que os usuários acessem informações detalhadas sobre o mesmo.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperar Preset de Estágio\n\n### Método\nGET\n\n### Endpoint\n/presets/estagios/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Autenticação\nEste endpoint requer autenticação com um token ou cookie.\n\n### Resposta\nUma resposta bem-sucedida retorna um objeto do tipo `PresetEstagio` em formato JSON, contendo as informações do preset de estágio solicitado."
  },
  {
    "id": 252,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/presets/estagios/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização de um preset de estágio específico, identificado pelo parâmetro 'id'. O corpo da requisição deve conter os dados a serem atualizados, conforme definido no esquema 'PresetEstagioRequest'. Esta operação requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam realizar alterações. A resposta bem-sucedida retorna os dados atualizados do preset no formato definido pelo esquema 'PresetEstagio'.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização de Preset de Estágio\n\n### Método\nPUT\n\n### Endpoint\n/presets/estagios/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Corpo da Requisição\nO corpo deve ser um objeto JSON que segue o esquema 'PresetEstagioRequest'.\n\n### Segurança\nEsta rota requer autenticação via token e cookie.\n\n### Resposta\nUma resposta bem-sucedida retorna um objeto JSON que representa o preset de estágio atualizado, conforme o esquema 'PresetEstagio'."
  },
  {
    "id": 253,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/presets/estagios/{id}/",
    "require": "| Nome | Tipo   | Obrigatório | \n|------|--------|-------------| \n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de um preset de estágio, identificando o estágio pelo seu ID. O ID deve ser fornecido como um parâmetro de caminho e é obrigatório. O corpo da requisição pode ser enviado em diferentes formatos, incluindo JSON, x-www-form-urlencoded e multipart/form-data, todos referenciando o esquema 'PatchedPresetEstagioRequest'. A segurança é garantida através de autenticação por token e cookie. A resposta bem-sucedida retorna um objeto do tipo 'PresetEstagio'.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Preset de Estágio\n\n### Método\nPATCH\n\n### Endpoint\n/presets/estagios/{id}/\n\n### Parâmetros Obrigatórios\n| Nome | Tipo   | Obrigatório | \n|------|--------|-------------| \n| id   | integer| Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Corpo da Requisição\nO corpo da requisição deve seguir o esquema 'PatchedPresetEstagioRequest'.\n\n### Segurança\nEsta rota requer autenticação por token e cookie.\n\n### Resposta\nUma resposta bem-sucedida retorna um objeto do tipo 'PresetEstagio'."
  },
  {
    "id": 254,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/presets/kanbans/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por deletar um estágio específico do sistema. O parâmetro 'id' é obrigatório e deve ser um número inteiro que identifica de forma única o estágio a ser removido. A autenticação é feita através de tokens e cookies, garantindo que apenas usuários autorizados possam realizar essa operação. A resposta da operação é um status 204, indicando que a remoção foi bem-sucedida e que não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Deletar Estágio\nEsta rota permite a remoção de um estágio específico do sistema.\n\n### Método\nDELETE\n\n### Endpoint\n/presets/kanbans/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Autenticação\n- tokenAuth\n- cookieAuth\n\n### Resposta\n- Código 204: A operação foi bem-sucedida e não há corpo de resposta."
  },
  {
    "id": 255,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/presets/kanbans/",
    "require": "| Nome    | Tipo     | Obrigatório | Descrição                                                   |\n|---------|----------|-------------|-----------------------------------------------------------|\n| ordering| string   | Não        | Qual campo usar ao ordenar os resultados.                  |\n| page    | integer  | Não        | Um número de página dentro do conjunto de resultados paginado.|\n| search  | string   | Não        | Um termo de busca.                                         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite listar os presets de kanban disponíveis, com suporte a ordenação, paginação e busca. A autenticação é necessária, utilizando tokenAuth ou cookieAuth. Os parâmetros de consulta permitem que os usuários especifiquem como desejam visualizar os resultados, melhorando a experiência do usuário. O retorno é uma lista paginada, facilitando a navegação em grandes conjuntos de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Listar Presets de Kanban\n\n## Método\nGET\n\n## Endpoint\n/presets/kanbans/\n\n## Parâmetros\n- **ordering** (string, opcional): Qual campo usar ao ordenar os resultados.\n- **page** (integer, opcional): Um número de página dentro do conjunto de resultados paginado.\n- **search** (string, opcional): Um termo de busca.\n\n## Segurança\nEste endpoint requer autenticação, utilizando **tokenAuth** ou **cookieAuth**.\n\n## Resposta\nUma resposta bem-sucedida retorna um código 200 e uma lista paginada de presets de kanban."
  },
  {
    "id": 256,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/presets/kanbans/{id}/",
    "require": "| Parâmetro | Tipo | Obrigatório |\n| --- | --- | --- |\n| id | string | Sim |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de um novo Kanban a partir de um preset existente. O parâmetro 'id' na URL é obrigatório e deve corresponder ao identificador do preset que se deseja usar. A autenticação é feita através de token e cookie, garantindo que apenas usuários autorizados possam realizar essa operação. O retorno da operação será um objeto JSON representando o novo Kanban criado.",
    "payload": "{\"presetId\": \"12345\", \"title\": \"Novo Kanban\", \"description\": \"Descrição do Kanban\"}",
    "markdown": "## Criar Kanban a partir de Preset\n\n### Método\nPOST\n\n### Endpoint\n/presets/kanbans/{id}/\n\n### Parâmetros Requeridos\n| Parâmetro | Tipo | Obrigatório |\n| --- | --- | --- |\n| id | string | Sim |\n\n### Descrição\nEsta rota permite a criação de um novo Kanban a partir de um preset existente. O parâmetro 'id' na URL é obrigatório e deve corresponder ao identificador do preset que se deseja usar. A autenticação é feita através de token e cookie, garantindo que apenas usuários autorizados possam realizar essa operação.\n\n### Resposta\nA resposta será um objeto JSON representando o novo Kanban criado."
  },
  {
    "id": 257,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/presets/kanbans/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de um Kanban específico utilizando seu ID. É necessário fornecer um token de autenticação e, opcionalmente, um cookie de autenticação para acessar este recurso. A resposta será um objeto JSON que representa o Kanban solicitado, conforme definido no esquema PresetKanban.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Recuperar Kanban\n\nEsta rota permite a recuperação de um Kanban específico através do seu ID. Para utilizar esta rota, é necessário fornecer um token de autenticação e, opcionalmente, um cookie de autenticação.\n\n#### Parâmetros\n\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n#### Resposta\n\nA resposta será um objeto JSON que representa o Kanban solicitado, conforme definido no esquema PresetKanban. \n\n#### Segurança\n\nEsta rota requer autenticação através de token e/ou cookie."
  },
  {
    "id": 258,
    "method": "PUT",
    "endpoint": "/presets/kanbans/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização de um Kanban existente, identificado pelo parâmetro 'id'. O corpo da requisição deve conter os dados a serem atualizados, seguindo a estrutura definida no schema 'PresetKanbanRequest'. A autenticação é requerida através de token ou cookie, garantindo que apenas usuários autorizados possam realizar essa operação.",
    "payload": "{\"title\": \"Novo Kanban\", \"description\": \"Descrição do Kanban atualizado\"}",
    "markdown": "## Atualização de Kanban\n\nEsta rota permite a atualização de um Kanban existente no sistema.\n\n### Método\n- **PUT**\n\n### Endpoint\n- **/presets/kanbans/{id}/**\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | integer| Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve ser enviado no formato JSON, `application/json`, `application/x-www-form-urlencoded` ou `multipart/form-data`, e deve seguir a estrutura definida no schema 'PresetKanbanRequest'.\n\n### Autenticação\nA requisição deve incluir autenticação via `tokenAuth` ou `cookieAuth`.\n\n### Resposta\nUma resposta bem-sucedida retornará um objeto do tipo 'PresetKanban'."
  },
  {
    "id": 259,
    "method": "PATCH",
    "endpoint": "/presets/kanbans/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de um Kanban específico identificado pelo parâmetro 'id'. O corpo da requisição pode ser enviado em diferentes formatos, como JSON, form-urlencoded ou multipart/form-data, todos referenciando o esquema 'PatchedPresetKanbanRequest'. A autenticação é realizada através de token ou cookie, garantindo que apenas usuários autorizados possam modificar os dados. O retorno da operação é um objeto do tipo 'PresetKanban', que representa o Kanban atualizado.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Kanban\n\nEsta rota permite a atualização parcial de um Kanban específico.\n\n### Método\nPATCH\n\n### Endpoint\n/presets/kanbans/{id}/\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Corpo da Requisição\nO corpo pode ser enviado nos seguintes formatos:\n- application/json\n- application/x-www-form-urlencoded\n- multipart/form-data\n\n### Autenticação\nA requisição requer autenticação via token ou cookie.\n\n### Resposta\nEm caso de sucesso, a resposta será um objeto do tipo 'PresetKanban'."
  },
  {
    "id": 260,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/quick/nota/",
    "require": "| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é responsável por deletar uma nota específica identificada pelo seu ID. A operação requer autenticação via token e cookie, garantindo que apenas usuários autorizados possam realizar a exclusão. Ao ser executado com sucesso, o servidor retorna um status 204, indicando que a operação foi concluída sem retornar um corpo de resposta. Esta funcionalidade é crucial para a manutenção da integridade dos dados no sistema de CRM, permitindo que notas obsoletas ou incorretas sejam removidas de forma segura.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Deletar Nota\n\n### Descrição\nEste endpoint permite a exclusão de uma nota específica no sistema de CRM.\n\n### Método\nDELETE\n\n### Endpoint\n/backend/quick/nota/\n\n### Parâmetros\n| Nome | Tipo    | Obrigatório |\n|------|---------|-------------|\n| id   | integer | Sim         |\n\n### Autenticação\nEste endpoint requer autenticação via:\n- tokenAuth\n- cookieAuth\n\n### Resposta\n- **204 No Content**: A operação foi bem-sucedida e não há corpo de resposta."
  },
  {
    "id": 261,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/quick/tarefa/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de uma nota rápida no sistema. A autenticação é realizada através de token e cookies, garantindo que apenas usuários autorizados possam criar notas. A resposta da rota não contém corpo, indicando que a operação foi bem-sucedida.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Criar Nota Rápida\n\n### Método\nPOST\n\n### Endpoint\n/backend/quick/tarefa/\n\n### Segurança\n- tokenAuth: Necessário\n- cookieAuth: Necessário\n\n### Descrição\nEsta rota permite a criação de uma nota rápida no sistema. A autenticação é realizada através de token e cookies, garantindo que apenas usuários autorizados possam criar notas. A resposta da rota não contém corpo, indicando que a operação foi bem-sucedida."
  },
  {
    "id": 262,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/respostas-rapidas/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de uma tarefa rápida no sistema. Para utilizar esta rota, é necessário que o usuário esteja autenticado, utilizando um token de autenticação ou um cookie de sessão. A criação de uma tarefa rápida impacta diretamente na eficiência do CRM, permitindo que os usuários registrem tarefas com agilidade e sem a necessidade de passar por múltiplas etapas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Criar Tarefa Rápida\n\n### Método\nPOST\n\n### Endpoint\n/backend/respostas-rapidas/\n\n### Autenticação\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\nA resposta para uma criação bem-sucedida não contém corpo."
  },
  {
    "id": 263,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/respostas-rapidas/",
    "require": "| Nome    | Tipo     | Obrigatório | Descrição                                          |\n|---------|----------|-------------|--------------------------------------------------|\n| ordering| string   | Não         | Qual campo usar ao ordenar os resultados.        |\n| page    | integer  | Não         | Um número de página dentro do conjunto de resultados paginado.|\n| search  | string   | Não         | Um termo de busca.                               |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar respostas rápidas, com a opção de ordenação, paginação e filtragem por um termo de busca. A autenticação é necessária através de token ou cookie, garantindo que apenas usuários autorizados possam acessar as informações. A resposta é retornada em formato paginado, facilitando a navegação entre grandes conjuntos de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "### Endpoint: GET /respostas-rapidas/\n\nEsta rota permite listar e criar respostas rápidas. Você pode utilizar parâmetros de consulta para ordenar os resultados, especificar uma página de resultados e buscar por um termo específico.\n\n#### Parâmetros:\n- **ordering** (string, opcional): Campo para ordenar os resultados.\n- **page** (integer, opcional): Número da página no conjunto de resultados paginado.\n- **search** (string, opcional): Termo de busca para filtrar os resultados.\n\n#### Segurança:\nEsta rota requer autenticação via `tokenAuth` ou `cookieAuth`. Somente usuários autenticados podem acessar as respostas rápidas.\n\n#### Resposta:\nA resposta é retornada em formato JSON, contendo uma lista paginada de respostas rápidas."
  },
  {
    "id": 264,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/sets/",
    "require": "| Nome do Campo | Tipo     | Obrigatório |\n|---------------|----------|-------------|\n| id            | integer  | Sim         |\n| conteudo      | string   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de novas respostas rápidas no sistema. O usuário deve fornecer um ID único e o conteúdo da resposta. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam criar respostas rápidas. A resposta bem-sucedida retorna um código de status 201 e o objeto da resposta rápida criada.",
    "payload": "{\"id\": 1, \"conteudo\": \"Resposta rápida de exemplo\"}",
    "markdown": "## Criar Respostas Rápidas\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/sets/\n\n### Descrição\nEsta rota permite a criação de novas respostas rápidas no sistema.\n\n### Parâmetros Requeridos\n| Nome do Campo | Tipo     | Obrigatório |\n|---------------|----------|-------------|\n| id            | integer  | Sim         |\n| conteudo      | string   | Sim         |\n\n### Autenticação\nEsta rota requer autenticação através de tokenAuth e cookieAuth.\n\n### Resposta\nA resposta bem-sucedida retorna um código de status 201 e o objeto da resposta rápida criada."
  },
  {
    "id": 265,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/sets/",
    "require": "| Nome  | Tipo     | Obrigatório | Descrição                                             |\n|-------|----------|-------------|-----------------------------------------------------|\n| page  | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search| string   | Não         | Um termo de busca.                                   |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de um conjunto de resultados paginados de sets. Os parâmetros de consulta `page` e `search` são utilizados para controlar a paginação e filtrar os resultados, respectivamente. A autenticação é feita através de token ou cookie, garantindo que apenas usuários autenticados possam acessar os dados. A resposta da API será um objeto JSON que contém uma lista paginada de sets, conforme definido no esquema `PaginatedKnowledgeBaseSetList`.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: GET /sets/\n\nEsta rota permite a recuperação de conjuntos de resultados paginados de sets.\n\n### Parâmetros:\n\n- **page** (opcional): Um número de página dentro do conjunto de resultados paginado.\n- **search** (opcional): Um termo de busca para filtrar os resultados.\n\n### Segurança:\n\nA rota requer autenticação via `tokenAuth` ou `cookieAuth`, garantindo que apenas usuários autenticados possam acessar os dados.\n\n### Resposta:\n\nA resposta será um objeto JSON que contém uma lista paginada de sets, conforme definido no esquema `PaginatedKnowledgeBaseSetList`."
  },
  {
    "id": 266,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/sets/{id}/",
    "require": "| Nome do Parâmetro | Tipo     | Obrigatório |\n|-------------------|----------|-------------|\n| id                | string   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de um novo conjunto de conhecimento associado a um ID específico. O endpoint exige autenticação via token e cookie. O sucesso da operação resulta em um código de status 201, indicando que o recurso foi criado com sucesso. A segurança é garantida através de autenticação, o que limita o acesso a usuários autorizados e protege os dados sensíveis do CRM.",
    "payload": "{\"name\": \"Novo Conjunto de Conhecimento\", \"description\": \"Descrição do conjunto de conhecimento\", \"items\": [\"Item 1\", \"Item 2\"]}",
    "markdown": "## Criar Conjunto de Conhecimento\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/sets/{id}/\n\n### Descrição\nEsta rota permite a criação de um novo conjunto de conhecimento associado a um ID específico.\n\n### Parâmetros Requeridos\n| Nome do Parâmetro | Tipo     | Obrigatório |\n|-------------------|----------|-------------|\n| id                | string   | Sim         |\n\n### Autenticação\nA rota requer autenticação através de token e cookie.\n\n### Resposta\nUm código de status 201 é retornado em caso de sucesso, indicando que o recurso foi criado com sucesso."
  },
  {
    "id": 267,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/sets/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de um conjunto específico de conhecimento utilizando seu ID. A autenticação é feita através de token e cookies, garantindo que apenas usuários autorizados possam acessar as informações. O impacto no ecossistema CRM é significativo, pois permite que os usuários acessem dados críticos para a tomada de decisões e gerenciamento de conhecimento.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperar Conjunto de Conhecimento\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/sets/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação através de token e cookies.\n\n### Resposta\nA resposta será um objeto JSON representando o conjunto de conhecimento solicitado, conforme definido no esquema `KnowledgeBaseSet`. \n\n### Impacto no CRM\nA recuperação de conjuntos de conhecimento é crucial para a análise e gestão de dados dentro do CRM, permitindo acesso a informações relevantes e atualizadas."
  },
  {
    "id": 268,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/sets/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização de um conjunto de conhecimento identificado pelo parâmetro `id`. A autenticação é realizada através de um token de autenticação e cookies, garantindo que apenas usuários autorizados possam modificar os dados. A atualização é feita através de um corpo de requisição que pode ser enviado em diferentes formatos, como JSON, form-urlencoded ou multipart/form-data, todos referenciando o esquema `KnowledgeBaseSetRequest`. O sucesso da operação retorna um objeto do tipo `KnowledgeBaseSet`.",
    "payload": "{\"name\": \"Conjunto de Conhecimento Atualizado\", \"description\": \"Descrição atualizada do conjunto de conhecimento.\"}",
    "markdown": "## Atualização de Conjunto de Conhecimento\n\n### Método\nPUT\n\n### Endpoint\n/backend.loomiecrm.com/sets/{id}/\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token e cookies.\n\n### Corpo da Requisição\nA requisição deve conter um corpo no formato JSON, form-urlencoded ou multipart/form-data, conforme o esquema `KnowledgeBaseSetRequest`.\n\n### Resposta\nUma resposta bem-sucedida retorna um objeto do tipo `KnowledgeBaseSet`."
  },
  {
    "id": 269,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/sets/{id}/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial de um conjunto de conhecimento identificado pelo ID fornecido. É necessário fornecer um token de autenticação e, opcionalmente, um cookie de autenticação para acessar este recurso. A atualização é feita através de um payload JSON que deve seguir a estrutura definida no schema PatchedKnowledgeBaseSetRequest. O sucesso da operação retorna um objeto do tipo KnowledgeBaseSet.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Conjunto de Conhecimento\n\n### Método\nPATCH\n\n### Endpoint\n/backend.loomiecrm.com/sets/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Descrição\nEsta operação permite a atualização parcial de um conjunto de conhecimento, onde o ID do conjunto deve ser passado como parte da URL. O payload deve ser enviado no formato JSON, conforme o schema definido. O sucesso da operação resultará na resposta com um objeto do tipo KnowledgeBaseSet."
  },
  {
    "id": 270,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/sets/create_full/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por deletar um conjunto específico identificado pelo parâmetro 'id'. Para executar esta operação, o usuário deve estar autenticado, utilizando um token de autenticação ou cookies. A exclusão de um conjunto pode impactar outras partes do sistema, especialmente se houver relacionamentos com outros dados no CRM.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Deletar Conjunto\n\n### Método\nDELETE\n\n### Endpoint\n/backend.loomiecrm.com/sets/create_full/\n\n### Parâmetros Requeridos\n| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |\n\n### Segurança\nEsta rota requer autenticação via token ou cookie.\n\n### Resposta\n- **204 No Content**: A operação foi realizada com sucesso e não há conteúdo a ser retornado."
  },
  {
    "id": 271,
    "method": "POST",
    "endpoint": "/stats/tempo-resposta/",
    "require": "| Parâmetro | Tipo   | Obrigatório |\n|-----------|--------|-------------|\n| client    | integer| Sim         |\n| name      | string | Sim         |\n| fields    | array  | Sim         |\n| entries   | array  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite criar ou atualizar uma base de conhecimento completa, que é única por cliente e nome. Os campos e entradas são definidos pelo usuário, e a operação requer um corpo de solicitação no formato JSON, que deve incluir os parâmetros obrigatórios. A segurança é garantida através de autenticação por token e cookie, assegurando que apenas usuários autorizados possam acessar esta funcionalidade.",
    "payload": "{\"client\": 1, \"name\": \"Imóveis\", \"fields\": [{\"name\": \"Endereço\", \"field_type\": \"TEXT\"}, {\"name\": \"Preço\", \"field_type\": \"NUMBER\"}, {\"name\": \"Ativo\", \"field_type\": \"BOOLEAN\"}], \"entries\": [{\"values\": {\"Endereço\": \"Rua das Flores\", \"Preço\": 500000, \"Ativo\": true}}, {\"values\": {\"Endereço\": \"Av. Central\", \"Preço\": 350000, \"Ativo\": false}}]}",
    "markdown": "## Criação e Atualização de Base de Conhecimento\n\nEsta rota permite criar ou atualizar uma base completa (única por cliente e nome), incluindo campos e entradas (linhas de dados).\n\n### Parâmetros Requeridos\n- **client**: ID do cliente (integer).\n- **name**: Nome da base de conhecimento (string).\n- **fields**: Lista de campos a serem incluídos (array).\n- **entries**: Lista de entradas de dados (array).\n\n### Segurança\nEsta rota utiliza autenticação por **tokenAuth** e **cookieAuth**, garantindo que apenas usuários autenticados possam realizar operações de criação ou atualização.\n\n### Impacto no CRM\nA criação ou atualização de bases de conhecimento impacta diretamente a estrutura de dados do CRM, permitindo uma melhor organização e acesso a informações relevantes para o cliente."
  },
  {
    "id": 272,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/tarefas/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para obter estatísticas de tempo de resposta das tarefas. É necessário que o usuário esteja autenticado, utilizando um token de autenticação ou autenticação via cookie. Não há corpo de resposta, pois a informação é retornada apenas no cabeçalho da resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Estatísticas de Tempo de Resposta\n\n### Descrição\nEsta rota permite que os usuários obtenham estatísticas de tempo de resposta para as tarefas registradas no sistema.\n\n### Autenticação\nA autenticação é necessária e pode ser feita através de um token de autenticação ou cookie.\n\n### Resposta\nA resposta não contém um corpo, mas o status HTTP 200 indica que a operação foi bem-sucedida."
  },
  {
    "id": 273,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/tarefas/",
    "require": "| Nome   | Tipo    | Obrigatório | Descrição                                               |\n|--------|---------|-------------|--------------------------------------------------------|\n| ordering | string  | Não         | Qual campo usar ao ordenar os resultados.              |\n| page     | integer | Não         | Um número de página dentro do conjunto de resultados.  |\n| search   | string  | Não         | Um termo de busca.                                     |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar tarefas e, potencialmente, criar novas tarefas. A ordenação dos resultados pode ser feita através do parâmetro 'ordering', enquanto a paginação é controlada pelo parâmetro 'page'. O parâmetro 'search' permite filtrar as tarefas com base em um termo específico. A autenticação é realizada através de tokenAuth ou cookieAuth, garantindo que apenas usuários autenticados possam acessar as informações de tarefas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Listar e Criar Tarefas\n\n### Método\nGET\n\n### Endpoint\n/backend.tarefas/\n\n### Parâmetros\n| Nome   | Tipo    | Obrigatório | Descrição                                               |\n|--------|---------|-------------|--------------------------------------------------------|\n| ordering | string  | Não         | Qual campo usar ao ordenar os resultados.              |\n| page     | integer | Não         | Um número de página dentro do conjunto de resultados.  |\n| search   | string  | Não         | Um termo de busca.                                     |\n\n### Respostas\n- **200 OK**: Retorna uma lista paginada de tarefas."
  },
  {
    "id": 274,
    "method": "POST",
    "endpoint": "/tarefas-massa/",
    "require": "| Nome       | Tipo   | Obrigatório |\n|------------|--------|-------------|\n| tarefas    | object | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite listar e criar múltiplas tarefas no sistema. O corpo da requisição deve conter os dados das tarefas a serem criadas. A autenticação é feita através de um token e cookies, garantindo que apenas usuários autorizados possam realizar essa operação. A resposta bem-sucedida retorna o status 201 e os detalhes das tarefas criadas.",
    "payload": "{\"tarefas\":[{\"titulo\":\"Nova tarefa\",\"descricao\":\"Descrição da nova tarefa\",\"dataLimite\":\"2023-12-31\"}]}",
    "markdown": "## Criar Tarefas em Massa\n\n### Descrição\nEsta rota permite listar e criar múltiplas tarefas no sistema.\n\n### Método\n`POST`\n\n### Endpoint\n`/tarefas-massa/`\n\n### Autenticação\nEsta rota requer autenticação via `tokenAuth` e `cookieAuth`.\n\n### Requisitos\n| Nome       | Tipo   | Obrigatório |\n|------------|--------|-------------|\n| tarefas    | object | Sim         |\n\n### Exemplo de Payload\n```json\n{\"tarefas\":[{\"titulo\":\"Nova tarefa\",\"descricao\":\"Descrição da nova tarefa\",\"dataLimite\":\"2023-12-31\"}]}\n```\n\n### Resposta\n- **201 Created**: Retorna os detalhes das tarefas criadas."
  },
  {
    "id": 275,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/tarefas-massa/{tarefa_massa_id}/status/",
    "require": "| Nome do Parâmetro | Tipo     | Obrigatório |\n|------------------|----------|-------------|\n| tarefa_massa_id  | integer  | Sim         | \n| canal_id        | integer  | Sim         | \n| contato_ids     | array    | Sim         | \n| select_all      | boolean  | Não         | \n| search_term     | string   | Não         | \n| template_name   | string   | Sim         | \n| template_language| string   | Sim         | \n| template_variables| array   | Sim         | \n| config_recorrencia| object | Sim         | \n| tipo_disparo    | string   | Sim         | \n| intervalo_valor  | integer | Sim         | \n| intervalo_unidade| string  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a criação de uma TarefaMassa que contém múltiplos ItemDisparoMassa, agendando sua execução através do Celery Beat. O parâmetro tarefa_massa_id é utilizado para identificar a tarefa em massa específica. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam criar tarefas em massa. O uso do Celery Beat permite o agendamento de tarefas de forma eficiente, impactando diretamente a gestão de campanhas no CRM.",
    "payload": "{\"canal_id\":4,\"contato_ids\":[101,102,103],\"select_all\":false,\"search_term\":\"\",\"template_name\":\"feliz_natal\",\"template_language\":\"pt_BR\",\"template_variables\":[\"{{contact_name}}\",\"Promoção\"],\"config_recorrencia\":{\"tipo\":\"unica\",\"valor1\":\"2026-03-07T10:00\"},\"tipo_disparo\":\"intervalado\",\"intervalo_valor\":30,\"intervalo_unidade\":\"segundos\"}",
    "markdown": "## Criação de Tarefa em Massa\n\nEsta rota permite a criação de uma TarefaMassa com múltiplos ItemDisparoMassa, agendando sua execução via Celery Beat.\n\n### Autenticação\nA autenticação é realizada através de `tokenAuth` e `cookieAuth`, garantindo que apenas usuários autorizados possam acessar esta funcionalidade.\n\n### Parâmetros\n- **tarefa_massa_id**: ID da tarefa em massa (obrigatório).\n- **canal_id**: ID do canal a ser utilizado (obrigatório).\n- **contato_ids**: Lista de IDs de contatos (obrigatório).\n- **select_all**: Indica se todos os contatos devem ser selecionados (opcional).\n- **search_term**: Termo de busca para filtrar contatos (opcional).\n- **template_name**: Nome do template a ser utilizado (obrigatório).\n- **template_language**: Idioma do template (obrigatório).\n- **template_variables**: Variáveis a serem substituídas no template (obrigatório).\n- **config_recorrencia**: Configuração de recorrência (obrigatório).\n- **tipo_disparo**: Tipo de disparo (obrigatório).\n- **intervalo_valor**: Valor do intervalo entre disparos (obrigatório).\n- **intervalo_unidade**: Unidade do intervalo (obrigatório).\n\n### Exemplo de Payload\n```json\n{\n  \"canal_id\": 4,\n  \"contato_ids\": [101, 102, 103],\n  \"select_all\": false,\n  \"search_term\": \"\",\n  \"template_name\": \"feliz_natal\",\n  \"template_language\": \"pt_BR\",\n  \"template_variables\": [\"{{contact_name}}\", \"Promoção\"],\n  \"config_recorrencia\": { \"tipo\": \"unica\", \"valor1\": \"2026-03-07T10:00\" },\n  \"tipo_disparo\": \"intervalado\",\n  \"intervalo_valor\": 30,\n  \"intervalo_unidade\": \"segundos\"\n}\n```\n\n### Impacto no CRM\nA criação de tarefas em massa impacta diretamente na eficiência das campanhas de marketing, permitindo que múltiplos contatos sejam alcançados de forma automatizada e programada."
  },
  {
    "id": 276,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/tarefas/{id}/",
    "require": "| Nome                | Tipo     | Obrigatório |\n|---------------------|----------|-------------|\n| tarefa_massa_id     | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que os usuários consultem o progresso de uma TarefaMassa específica, identificada pelo seu ID. A autenticação é realizada através de tokenAuth ou cookieAuth, garantindo que apenas usuários autorizados possam acessar as informações. A resposta não contém um corpo, indicando que a operação é bem-sucedida quando o status HTTP 200 é retornado.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Obter Status da TarefaMassa\n\n### Método\nGET\n\n### Endpoint\n/backend.tarefas/{id}/\n\n### Descrição\nEsta rota retorna o progresso de uma TarefaMassa específica, identificada pelo seu ID.\n\n### Parâmetros\n| Nome                | Tipo     | Obrigatório |\n|---------------------|----------|-------------|\n| tarefa_massa_id     | integer  | Sim         |\n\n### Autenticação\nEsta rota requer autenticação através de tokenAuth ou cookieAuth.\n\n### Respostas\n- **200**: Operação bem-sucedida, sem corpo de resposta."
  },
  {
    "id": 277,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/tarefas/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar uma tarefa específica utilizando seu ID. O usuário deve estar autenticado, utilizando o token de autenticação ou cookies. A resposta incluirá os detalhes da tarefa no formato JSON, conforme definido no esquema TarefaAtendimento.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Detalhamento da Rota\n\n### Método\nGET\n\n### Endpoint\n/backend.tarefas/{id}/\n\n### Descrição\nEsta rota permite detalhar, atualizar e deletar uma tarefa específica através do seu ID.\n\n### Parâmetros Requeridos\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | integer | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token ou cookies.\n\n### Resposta\nA resposta será um objeto JSON que representa a tarefa detalhada, conforme o esquema TarefaAtendimento."
  },
  {
    "id": 278,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/tarefas/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|------------|\n| id   | integer | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar, atualizar e deletar uma tarefa específica identificada pelo parâmetro 'id'. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam modificar as tarefas. O impacto no ecossistema do CRM é significativo, pois permite a gestão eficiente das tarefas, melhorando a produtividade e o acompanhamento das atividades.",
    "payload": "{\"titulo\": \"Atualização da Tarefa\", \"descricao\": \"Descrição detalhada da tarefa\", \"status\": \"em andamento\"}",
    "markdown": "## Atualizar Tarefa\n\n### Método\nPUT\n\n### Endpoint\n/backend.tarefas/{id}/\n\n### Parâmetros Requeridos\n| Nome | Tipo | Obrigatório |\n|------|------|------------|\n| id   | integer | Sim        |\n\n### Parâmetros Opcionais\nNenhum\n\n### Descrição\nEsta rota permite detalhar, atualizar e deletar uma tarefa específica identificada pelo parâmetro 'id'. A autenticação é realizada através de tokenAuth e cookieAuth, garantindo que apenas usuários autorizados possam modificar as tarefas. O impacto no ecossistema do CRM é significativo, pois permite a gestão eficiente das tarefas, melhorando a produtividade e o acompanhamento das atividades.\n\n### Payload Exemplo\n{\n  \"titulo\": \"Atualização da Tarefa\",\n  \"descricao\": \"Descrição detalhada da tarefa\",\n  \"status\": \"em andamento\"\n} \n\n### Respostas\n- **200**: Retorna a tarefa atualizada."
  },
  {
    "id": 279,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/tarefas/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|------------|\n| id   | integer | Sim        |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite detalhar, atualizar e deletar uma tarefa específica identificada pelo seu ID. O parâmetro 'id' é obrigatório e deve ser um número inteiro. A autenticação é feita através de token e cookie. A resposta bem-sucedida retorna os detalhes da tarefa atualizada.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualizar Tarefa\n\nEsta rota permite a atualização parcial de uma tarefa existente no sistema.\n\n### Método\nPATCH\n\n### Endpoint\n/backend.tarefas/{id}/\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|------------|\n| id   | integer | Sim        |\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Resposta\nEm caso de sucesso, a resposta retornará os detalhes da tarefa atualizada no formato JSON."
  },
  {
    "id": 280,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/tarefas/{task_id}/status/",
    "require": "| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| task_id| integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a exclusão do status de uma tarefa específica no sistema. O parâmetro 'task_id' deve ser fornecido na URL e é obrigatório. A autenticação é feita através de token ou cookie, garantindo que apenas usuários autorizados possam realizar essa ação. A resposta da API será um código de status 204, indicando que a operação foi bem-sucedida, mas não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Exclusão de Status da Tarefa\n\n### Método\nDELETE\n\n### Endpoint\n/backend.tarefas/{task_id}/status/\n\n### Parâmetros\n| Nome   | Tipo     | Obrigatório |\n|--------|----------|-------------|\n| task_id| integer  | Sim         |\n\n### Descrição\nEsta rota permite a exclusão do status de uma tarefa específica no sistema. O parâmetro 'task_id' deve ser fornecido na URL e é obrigatório.\n\n### Segurança\nA autenticação é feita através de token ou cookie, garantindo que apenas usuários autorizados possam realizar essa ação.\n\n### Resposta\nA resposta da API será um código de status 204, indicando que a operação foi bem-sucedida, mas não há corpo de resposta."
  },
  {
    "id": 281,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/tarefas/minhas/",
    "require": "| Parâmetro | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| task_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial do status de uma tarefa específica. O parâmetro 'task_id' é obrigatório e deve ser um número inteiro que identifica a tarefa a ser atualizada. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam realizar alterações. A resposta da solicitação é um código de status 200, indicando sucesso, mas não retorna corpo de resposta, pois a atualização é feita diretamente no servidor.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Atualizar Status da Tarefa\n\n### Método\nPATCH\n\n### Endpoint\n/tarefas/minhas/\n\n### Parâmetros Requeridos\n| Parâmetro | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| task_id  | integer  | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Resposta\nUm código de status 200 é retornado em caso de sucesso, sem corpo de resposta."
  },
  {
    "id": 282,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/tarefas/stats/",
    "require": "| Nome   | Tipo     | Obrigatório | Descrição                                           |\n|--------|----------|-------------|----------------------------------------------------|\n| ordering | string   | Não         | Qual campo usar ao ordenar os resultados.          |\n| page      | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search    | string   | Não         | Um termo de busca.                                 |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite que o operador logado consulte as estatísticas de suas tarefas. Os parâmetros de consulta permitem a ordenação, paginação e busca de tarefas específicas. A autenticação é feita através de token ou cookie, garantindo que apenas usuários autorizados possam acessar as informações. O retorno é uma lista paginada de tarefas, facilitando a navegação em grandes conjuntos de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Endpoint: GET /tarefas/stats/\n\n### Descrição\nEsta rota retorna as estatísticas das tarefas do operador logado, permitindo que o usuário visualize as informações de suas tarefas de forma organizada e filtrada.\n\n### Parâmetros\n- **ordering** (opcional): Campo para ordenar os resultados.\n- **page** (opcional): Número da página para paginar os resultados.\n- **search** (opcional): Termo de busca para filtrar as tarefas.\n\n### Autenticação\nA rota requer autenticação via **tokenAuth** ou **cookieAuth**.\n\n### Resposta\nRetorna um objeto JSON com uma lista paginada de tarefas, conforme o esquema definido em `PaginatedTarefaAtendimentoList`."
  },
  {
    "id": 283,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/translator/canais/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para recuperar estatísticas relacionadas às tarefas. A autenticação é realizada através de um token de autenticação e cookies, garantindo que apenas usuários autorizados possam acessar essas informações. A resposta para esta requisição é um status 200, indicando sucesso, mas não retorna um corpo de resposta, pois as estatísticas são processadas no backend e não são enviadas de volta ao cliente.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Estatísticas das Tarefas\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/translator/canais/\n\n### Descrição\nEsta rota permite a recuperação de estatísticas das tarefas no sistema. É importante para monitorar o desempenho e a eficiência das tarefas realizadas.\n\n### Autenticação\nAcesso à rota requer autenticação via token e cookies.\n\n### Resposta\nRetorna um status 200 em caso de sucesso, mas não inclui um corpo de resposta."
  },
  {
    "id": 284,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/translator/canais/",
    "require": "| Nome    | Tipo     | Obrigatório | Descrição                                                    |\n|---------|----------|-------------|------------------------------------------------------------|\n| ordering| string   | Não         | Qual campo usar ao ordenar os resultados.                   |\n| page    | integer  | Não         | Um número de página dentro do conjunto de resultados paginado.|\n| search  | string   | Não         | Um termo de busca.                                         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a configuração de canais através de um CRUD. O endpoint é utilizado para listar canais, permitindo a ordenação, paginação e busca de resultados. A segurança é garantida através de autenticação por token e cookie, assegurando que apenas usuários autorizados possam acessar as informações. Os resultados são retornados em um formato paginado, facilitando a navegação entre grandes conjuntos de dados.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Listar Canais\n\n### Método: GET\n\n### Descrição\nEsta rota é utilizada para listar os canais configurados no sistema. Os resultados podem ser ordenados e filtrados com base em parâmetros de busca, permitindo uma melhor experiência ao usuário.\n\n### Parâmetros\n- **ordering**: Campo para ordenar os resultados (opcional).\n- **page**: Número da página para resultados paginados (opcional).\n- **search**: Termo de busca para filtrar os resultados (opcional).\n\n### Segurança\nAcesso restrito a usuários autenticados via **tokenAuth** e **cookieAuth**.\n\n### Resposta\nRetorna um objeto JSON com a lista paginada de canais."
  },
  {
    "id": 285,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/translator/canais/{channel_id}/templates/",
    "require": "| Parâmetro       | Tipo     | Obrigatório |\n|----------------|----------|-------------|\n| channel_id     | String   | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a criação de templates para canais específicos. A configuração do canal é enviada no corpo da requisição, que pode ser em formato JSON, x-www-form-urlencoded ou multipart/form-data. O acesso a este recurso requer autenticação via token e cookie. O sucesso da operação resulta na criação do template, retornando um código de status 201.",
    "payload": "{\"templateName\": \"Nome do Template\", \"templateContent\": \"Conteúdo do Template\"}",
    "markdown": "## POST /translator/canais/{channel_id}/templates/\n\n### Descrição\nEste endpoint permite a criação de templates para canais específicos.\n\n### Parâmetros\n| Parâmetro       | Tipo     | Obrigatório |\n|----------------|----------|-------------|\n| channel_id     | String   | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve conter as configurações do canal no formato JSON, x-www-form-urlencoded ou multipart/form-data.\n\n### Autenticação\nEste endpoint requer autenticação via token e cookie.\n\n### Resposta\nEm caso de sucesso, retorna um código de status 201."
  },
  {
    "id": 286,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/translator/canais/{id}/",
    "require": "| Parâmetro   | Tipo     | Obrigatório |\n|-------------|----------|-------------|\n| channel_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint lista os templates de mensagem APROVADOS disponíveis em um canal WABA. O fluxo inicia com a validação multi-tenant, seguida pela busca e validação do tipo de canal. Após extrair as credenciais necessárias, uma requisição é feita para a Graph API do WhatsApp para obter os templates. O retorno é uma lista de templates formatados com suas respectivas metadatas. O endpoint é protegido por autenticação via token e cookie.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Descrição da Rota\nEste endpoint permite listar os templates de mensagem que estão aprovados e disponíveis para um canal WABA específico.\n\n## Fluxo de Execução\n1. Valida multi-tenant via get_ids_visiveis()\n2. Busca canal e valida se é do tipo WABA\n3. Extrai as credenciais necessárias (waba_id, access_token)\n4. Realiza uma requisição para a Graph API v19.0: GET /{waba_id}/message_templates?status=APPROVED\n5. Processa a resposta e formata os templates com componentes e variáveis\n6. Retorna uma lista de templates com metadados\n\n## Respostas\n- **200**: Lista de templates formatados\n- **400**: Tipo de canal inválido (não é WABA)\n- **404**: Canal não encontrado ou sem permissão\n- **500**: Credenciais inválidas ou erro de parsing\n- **502**: Erro na API do WhatsApp\n- **504**: Timeout na API do WhatsApp\n\n## Segurança\nEste endpoint requer autenticação via token e cookie."
  },
  {
    "id": 287,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/translator/canais/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação das configurações de um canal específico, identificado pelo parâmetro `id`. O acesso a esta rota requer autenticação, que pode ser realizada através de token ou cookie. A resposta bem-sucedida retorna um objeto JSON que contém as configurações do canal, conforme definido no schema `CanalConfig`.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperar Configuração de Canal\n\n### Método\nGET\n\n### Endpoint\n/backend.loomiecrm.com/translator/canais/{id}/\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Descrição\nEsta rota permite a recuperação das configurações de um canal específico, identificado pelo parâmetro `id`. O acesso a esta rota requer autenticação, que pode ser realizada através de token ou cookie. A resposta bem-sucedida retorna um objeto JSON que contém as configurações do canal, conforme definido no schema `CanalConfig`.\n\n### Segurança\n- tokenAuth\n- cookieAuth"
  },
  {
    "id": 288,
    "method": "PUT",
    "endpoint": "backend.loomiecrm.com/translator/canais/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização das configurações de um canal específico. O parâmetro 'id' é necessário para identificar qual canal deve ser atualizado. A autenticação é realizada através de token e cookies, garantindo que apenas usuários autorizados possam modificar as configurações. A resposta bem-sucedida retorna as novas configurações do canal em formato JSON.",
    "payload": "{\"nome\": \"Canal Atualizado\", \"descricao\": \"Descrição do canal atualizado\", \"ativo\": true}",
    "markdown": "## Atualização de Canal\n\n### Método\nPUT\n\n### Endpoint\n/backend/translator/canais/{id}/\n\n### Descrição\nEsta rota permite a atualização das configurações de um canal específico.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token e cookies.\n\n### Resposta\nUma resposta bem-sucedida retornará as novas configurações do canal em formato JSON.\n\n### Exemplo de Payload\n{\n  \"nome\": \"Canal Atualizado\",\n  \"descricao\": \"Descrição do canal atualizado\",\n  \"ativo\": true\n}."
  },
  {
    "id": 289,
    "method": "PATCH",
    "endpoint": "backend.loomiecrm.com/translator/canais/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial das configurações de canais. O parâmetro 'id' é obrigatório e deve ser fornecido na URL. A autenticação é realizada via token e cookie. A resposta bem-sucedida retorna as configurações atualizadas do canal em formato JSON.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## PATCH /translator/canais/{id}/\n\n### Descrição\nEsta rota permite a atualização parcial das configurações de canais.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Resposta\nUma resposta bem-sucedida (200) retorna as configurações do canal atualizadas em formato JSON."
  },
  {
    "id": 290,
    "method": "DELETE",
    "endpoint": "backend.loomiecrm.com/translator/canais/{id}/testar_conexao/",
    "require": "| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é responsável por testar a conexão de um canal específico, identificado pelo parâmetro 'id'. O sucesso da operação é indicado por uma resposta 204, que significa que a operação foi realizada com sucesso e não há conteúdo a ser retornado. A segurança é garantida através de autenticação com token e cookies, assegurando que apenas usuários autorizados possam realizar essa operação.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Testar Conexão do Canal\n\n### Método\nDELETE\n\n### Endpoint\n/backend.loomiecrm.com/translator/canais/{id}/testar_conexao/\n\n### Descrição\nEsta rota permite testar a conexão de um canal específico, identificado pelo parâmetro 'id'.\n\n### Parâmetros\n| Nome | Tipo  | Obrigatório |\n|------|-------|-------------|\n| id   | string| Sim         |\n\n### Respostas\n- **204**: Operação realizada com sucesso, sem conteúdo a ser retornado.\n\n### Segurança\nEsta rota requer autenticação via token e cookies, garantindo que apenas usuários autorizados possam acessar esta funcionalidade."
  },
  {
    "id": 291,
    "method": "POST",
    "endpoint": "backend.loomiecrm.com/translator/canais/uso_canais/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite testar a conexão com um canal utilizando credenciais reais armazenadas no banco de dados. O parâmetro 'id' é obrigatório e deve ser passado na URL. O corpo da requisição aceita dados em formatos JSON, x-www-form-urlencoded e multipart/form-data, todos referenciando o esquema 'CanalConfigRequest'. A autenticação é realizada através de token e cookie, garantindo que apenas usuários autorizados possam acessar esta funcionalidade. O retorno da requisição é um objeto que segue o esquema 'CanalConfig', que contém informações sobre a configuração do canal testado.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Testar Conexão com Canal\n\nEsta rota permite testar a conexão com um canal utilizando credenciais reais do banco de dados.\n\n### Método\nPOST\n\n### Endpoint\n/backend.loomiecrm.com/translator/canais/uso_canais/\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEsta rota requer autenticação via token e cookie.\n\n### Resposta\nA resposta será um objeto que segue o esquema 'CanalConfig', contendo informações sobre a configuração do canal testado."
  },
  {
    "id": 292,
    "method": "GET",
    "endpoint": "backend.loomiecrm.com/translator/conectar-whatsapp/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é utilizado para retornar informações sobre o uso de canais do tenant. A autenticação é realizada através de um token de autenticação e cookies. O retorno é um objeto que representa a configuração do canal, conforme definido no esquema CanalConfig.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "# Conectar WhatsApp\nEste endpoint permite que o usuário obtenha informações sobre o uso de canais do tenant.\n\n## Método\nGET\n\n## Autenticação\nEste endpoint requer autenticação via tokenAuth e cookieAuth.\n\n## Resposta\n- **Código 200**: Retorna um objeto JSON que contém a configuração do canal, conforme especificado no esquema CanalConfig.\n\n## Impacto no CRM\nA utilização deste endpoint é crucial para a integração e gerenciamento de canais de comunicação dentro do sistema CRM, permitindo que os usuários visualizem e configurem os canais de forma eficiente."
  },
  {
    "id": 293,
    "method": "POST",
    "endpoint": "/api/message-translator/gerar-qr-code/{canal_id}/",
    "require": "| Parâmetro   | Tipo   | Obrigatório |\n|-------------|--------|-------------|\n| canal_id    | String | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é responsável por gerar um QR Code baseado no canal especificado. Ele aceita um ID de canal como parâmetro de caminho e processa o payload recebido da API Evolution. A segurança é garantida através de autenticação por token e cookies, permitindo acesso seguro ao recurso.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## POST /api/message-translator/gerar-qr-code/{canal_id}/\n\n### Descrição\nEste endpoint gera um QR Code para o canal especificado.\n\n### Parâmetros\n- **canal_id** (String): ID do canal, obrigatório.\n\n### Segurança\n- **tokenAuth**: Necessário para autenticação.\n- **cookieAuth**: Também é necessário para autenticação.\n\n### Resposta\n- **200 OK**: Não há corpo de resposta."
  },
  {
    "id": 294,
    "method": "POST",
    "endpoint": "/api/message-translator/incoming/",
    "require": "| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| canal_id  | integer  | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota gera um QR Code que permite a conexão com o WhatsApp utilizando as credenciais do canal especificado pelo 'canal_id'. O QR Code gerado é retornado em formato base64, permitindo que o cliente o exiba diretamente. A segurança é garantida através de autenticação por token e cookie, assegurando que apenas usuários autenticados possam acessar esta funcionalidade. O impacto no ecossistema CRM é significativo, pois facilita a integração do WhatsApp como um canal de comunicação, melhorando a interação com clientes e aumentando a eficiência nas respostas.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Geração de QR Code para WhatsApp\n\n### Descrição\nEsta rota permite gerar um QR Code para conectar-se ao WhatsApp usando as credenciais do canal especificado pelo 'canal_id'.\n\n### Método\nPOST\n\n### Endpoint\n/api/message-translator/incoming/\n\n### Parâmetros\n| Nome      | Tipo     | Obrigatório |\n|-----------|----------|-------------|\n| canal_id  | integer  | Sim         |\n\n### Resposta\nA resposta será um objeto JSON com os seguintes campos:\n- success: Indica se a operação foi bem-sucedida.\n- qr_code: O QR Code gerado em formato base64.\n- connected: Indica se a conexão foi estabelecida.\n- message: Mensagem para o usuário, sugerindo que escaneie o QR Code.\n\n### Segurança\nEsta rota requer autenticação via token e cookie, garantindo que apenas usuários autenticados possam acessar esta funcionalidade."
  },
  {
    "id": 295,
    "method": "POST",
    "endpoint": "/api/message-translator/logs/",
    "require": "| Nome         | Tipo   | Obrigatório |\n|--------------|--------|-------------|\n| canal_tipo   | string | Sim         |\n| canal_id     | int    | Não         |\n| payload       | object | Sim         |",
    "optional": "canal_id",
    "detalhes": "Este endpoint é responsável por receber mensagens de diferentes canais, formatá-las para o sistema Loomie e, em seguida, roteá-las para os destinos apropriados. A autenticação é necessária através de tokenAuth ou cookieAuth. O campo 'canal_tipo' é obrigatório e deve indicar o tipo de canal de onde a mensagem se origina. O campo 'canal_id' é opcional e pode ser usado para identificar configurações específicas do canal. O 'payload' contém a mensagem original que será processada.",
    "payload": "{\"canal_tipo\": \"whatsapp\", \"canal_id\": 1, \"payload\": {}}",
    "markdown": "## POST /api/message-translator/logs/\n\n### Descrição\n🔵 Endpoint principal de ENTRADA de mensagens. Recebe mensagem de qualquer canal → Formata para Loomie → Roteia para destinos.\n\n### Autenticação\nEste endpoint requer autenticação via tokenAuth ou cookieAuth.\n\n### Parâmetros\n| Nome         | Tipo   | Obrigatório |\n|--------------|--------|-------------|\n| canal_tipo   | string | Sim         |\n| canal_id     | int    | Não         |\n| payload       | object | Sim         |\n\n### Exemplo de Payload\n{\n  \"canal_tipo\": \"whatsapp\",\n  \"canal_id\": 1,\n  \"payload\": {}\n}\n\n### Resposta\nRetorna um status 200 sem corpo de resposta."
  },
  {
    "id": 296,
    "method": "GET",
    "endpoint": "/api/message-translator/logs/{id}/",
    "require": "| Nome   | Tipo    | Obrigatório |\n|--------|---------|-------------|\n| id     | string  | Sim         |",
    "optional": "| Nome     | Tipo     | Obrigatório |\n|----------|----------|-------------|\n| ordering | string   | Não         |\n| page     | integer  | Não         |\n| search   | string   | Não         |",
    "detalhes": "Esta rota permite a visualização de logs de mensagens, sendo uma operação de leitura. Os parâmetros de consulta permitem filtrar e ordenar os resultados, facilitando a busca de logs específicos. A autenticação é realizada através de token ou cookies, garantindo a segurança dos dados acessados. A resposta retorna uma lista paginada de logs, conforme definido no esquema PaginatedMensagemLogList.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Visualização de Logs de Mensagens\n\n### Método\nGET\n\n### Endpoint\n/api/message-translator/logs/{id}/\n\n### Parâmetros Requeridos\n| Nome   | Tipo   | Obrigatório |\n|--------|--------|-------------|\n| id     | string | Sim         |\n\n### Parâmetros Opcionais\n| Nome     | Tipo     | Obrigatório |\n|----------|----------|-------------|\n| ordering | string   | Não         |\n| page     | integer  | Não         |\n| search   | string   | Não         |\n\n### Descrição\nEsta rota permite a visualização de logs de mensagens, sendo uma operação de leitura. Os parâmetros de consulta permitem filtrar e ordenar os resultados, facilitando a busca de logs específicos. A autenticação é realizada através de token ou cookies, garantindo a segurança dos dados acessados. A resposta retorna uma lista paginada de logs, conforme definido no esquema PaginatedMensagemLogList."
  },
  {
    "id": 297,
    "method": "GET",
    "endpoint": "/api/message-translator/outgoing/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a visualização de logs de mensagens enviadas, sendo uma operação de leitura. O parâmetro 'id' é necessário para identificar o log específico a ser recuperado. A autenticação é feita através de token ou cookie, garantindo que apenas usuários autorizados possam acessar essas informações. A resposta é um objeto JSON que representa o log da mensagem, conforme definido no esquema MensagemLog.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: Recuperar Logs de Mensagens\n\n### Método\nGET\n\n### Descrição\nEsta rota permite a visualização de logs de mensagens enviadas, sendo uma operação de leitura.\n\n### Parâmetros\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Segurança\nA autenticação é feita através de token ou cookie, garantindo que apenas usuários autorizados possam acessar essas informações.\n\n### Resposta\nA resposta é um objeto JSON que representa o log da mensagem, conforme definido no esquema MensagemLog."
  },
  {
    "id": 298,
    "method": "POST",
    "endpoint": "/api/message-translator/regras/",
    "require": "Nenhum",
    "optional": "Nenhum",
    "detalhes": "Este endpoint é responsável por receber mensagens no formato específico do Loomie, traduzir essas mensagens para o canal apropriado e enviá-las. É uma parte crucial do sistema de tradução de mensagens, permitindo a comunicação entre diferentes plataformas. O acesso a este endpoint é protegido por autenticação via token e cookies, garantindo que apenas usuários autorizados possam enviar mensagens. Não há resposta no corpo da resposta, indicando que a operação foi bem-sucedida.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## POST /api/message-translator/regras/\n\n### Descrição\n🔴 Endpoint principal de SAÍDA de mensagens. Recebe mensagem no formato Loomie → Traduz para canal → Envia.\n\n### Segurança\nEste endpoint requer autenticação via token e cookies para garantir que apenas usuários autorizados possam acessar suas funcionalidades.\n\n### Respostas\n- **200**: Indica que a mensagem foi processada com sucesso, sem corpo de resposta."
  },
  {
    "id": 299,
    "method": "GET",
    "endpoint": "/api/message-translator/regras/",
    "require": "| Nome    | Tipo     | Obrigatório | Descrição                                        |\n|---------|----------|-------------|--------------------------------------------------|\n| ordering| string   | Não         | Qual campo usar ao ordenar os resultados.        |\n| page    | integer  | Não         | Um número de página dentro do conjunto de resultados paginado. |\n| search  | string   | Não         | Um termo de busca.                               |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de regras de roteamento de mensagens. Os parâmetros de consulta permitem que o usuário especifique como os resultados devem ser ordenados, qual página de resultados deve ser retornada e um termo de busca para filtrar os resultados. A autenticação é necessária, utilizando token ou cookie. A resposta será uma lista paginada das regras.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Rota: GET /api/message-translator/regras/\n\n### Descrição\nEsta rota permite a recuperação de regras de roteamento de mensagens. \n\n### Parâmetros\n- **ordering**: Qual campo usar ao ordenar os resultados. (opcional)\n- **page**: Um número de página dentro do conjunto de resultados paginado. (opcional)\n- **search**: Um termo de busca. (opcional)\n\n### Segurança\nEsta rota requer autenticação. Você pode usar:\n- **tokenAuth**\n- **cookieAuth**\n\n### Resposta\nA resposta será uma lista paginada das regras, conforme definido no esquema `PaginatedRegrasRoteamentoList`."
  },
  {
    "id": 300,
    "method": "POST",
    "endpoint": "/api/message-translator/regras/{id}/",
    "require": "| Nome do Parâmetro | Tipo   | Obrigatório |\n|-------------------|--------|-------------|\n| id                | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Este endpoint permite a criação de novas regras de roteamento. O usuário deve fornecer um ID válido na URL, e o corpo da requisição deve conter os dados necessários conforme definido no schema 'RegrasRoteamentoRequest'. As regras de roteamento são essenciais para direcionar mensagens corretamente dentro do sistema. O acesso é controlado por autenticação via token e cookie, garantindo que apenas usuários autorizados possam modificar as regras.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Endpoint: POST /api/message-translator/regras/{id}/\n\n### Descrição\nEste endpoint permite a criação de novas regras de roteamento. O usuário deve fornecer um ID válido na URL, e o corpo da requisição deve conter os dados necessários conforme definido no schema 'RegrasRoteamentoRequest'.\n\n### Autenticação\nEste endpoint requer autenticação via token e cookie.\n\n### Resposta\nEm caso de sucesso, retorna um status 201 com os detalhes da regra criada."
  },
  {
    "id": 301,
    "method": "GET",
    "endpoint": "/api/message-translator/regras/{id}/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a recuperação de regras de roteamento específicas através do ID fornecido. É parte de um sistema CRUD que gerencia regras de roteamento para mensagens. A autenticação é necessária via token ou cookie, garantindo que apenas usuários autorizados possam acessar as informações. O impacto no ecossistema CRM é significativo, pois permite a personalização e a automação de fluxos de mensagens com base em regras definidas pelo usuário.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Recuperação de Regras de Roteamento\n\n### Método\nGET\n\n### Endpoint\n/api/message-translator/regras/{id}/\n\n### Descrição\nEsta rota permite a recuperação de regras de roteamento específicas através do ID fornecido. É parte de um sistema CRUD que gerencia regras de roteamento para mensagens.\n\n### Parâmetros\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Segurança\nA autenticação é necessária via token ou cookie, garantindo que apenas usuários autorizados possam acessar as informações.\n\n### Impacto no CRM\nO impacto no ecossistema CRM é significativo, pois permite a personalização e a automação de fluxos de mensagens com base em regras definidas pelo usuário."
  },
  {
    "id": 302,
    "method": "PUT",
    "endpoint": "/api/message-translator/regras/{id}/",
    "require": "| Parâmetro | Tipo   | Obrigatório |\n|-----------|--------|-------------|\n| id        | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização de regras de roteamento no sistema. O parâmetro 'id' é necessário para identificar qual regra deve ser atualizada. O corpo da requisição deve conter os dados da regra a ser atualizada, seguindo o esquema definido em 'RegrasRoteamentoRequest'. A autenticação é feita através de um token e de cookies, garantindo que apenas usuários autorizados possam realizar esta operação. A resposta retornará os dados atualizados da regra em formato JSON.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização de Regras de Roteamento\n\nEsta rota permite a atualização de regras de roteamento no sistema.\n\n### Método\nPUT\n\n### Endpoint\n/api/message-translator/regras/{id}/\n\n### Parâmetros\n| Parâmetro | Tipo   | Obrigatório |\n|-----------|--------|-------------|\n| id        | string | Sim         |\n\n### Corpo da Requisição\nO corpo da requisição deve conter os dados da regra a ser atualizada, seguindo o esquema definido em 'RegrasRoteamentoRequest'.\n\n### Segurança\nEsta rota requer autenticação através de um token e de cookies. Apenas usuários autorizados podem realizar esta operação.\n\n### Resposta\nA resposta retornará os dados atualizados da regra em formato JSON."
  },
  {
    "id": 303,
    "method": "PATCH",
    "endpoint": "/api/message-translator/regras/{id}/",
    "require": "| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota permite a atualização parcial das regras de roteamento. O parâmetro 'id' é necessário para identificar qual regra deve ser atualizada. A autenticação é feita através de token e cookie. O impacto desta rota no ecossistema CRM é significativo, pois permite que as regras de roteamento sejam ajustadas dinamicamente, melhorando a eficiência do sistema de mensagens.",
    "payload": "{\"campo1\": \"valor1\", \"campo2\": \"valor2\"}",
    "markdown": "## Atualização Parcial de Regras de Roteamento\n\n### Método\nPATCH\n\n### Endpoint\n/api/message-translator/regras/{id}/\n\n### Descrição\nEsta rota permite a atualização parcial das regras de roteamento.\n\n### Parâmetros Requeridos\n| Nome | Tipo   | Obrigatório |\n|------|--------|-------------|\n| id   | string | Sim         |\n\n### Parâmetros Opcionais\nNenhum\n\n### Autenticação\nÉ necessário autenticar-se utilizando token ou cookie.\n\n### Respostas\n- **200**: Retorna as regras de roteamento atualizadas.\n\n### Impacto no CRM\nEsta rota é crucial para a flexibilidade e eficiência do sistema de mensagens, permitindo ajustes dinâmicos nas regras de roteamento."
  },
  {
    "id": 304,
    "method": "DELETE",
    "endpoint": "/api/message-translator/send-template/",
    "require": "| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |",
    "optional": "Nenhum",
    "detalhes": "Esta rota é utilizada para excluir um template de mensagem específico, identificado pelo parâmetro 'id'. O acesso a esta operação requer autenticação via token e cookies, garantindo que apenas usuários autorizados possam realizar a exclusão. A resposta da operação é um código de status 204, indicando que a exclusão foi bem-sucedida e que não há corpo de resposta.",
    "payload": "Nenhum payload de envio necessário para esta rota.",
    "markdown": "## Excluir Template de Mensagem\n\n### Método\nDELETE\n\n### Endpoint\n/api/message-translator/send-template/\n\n### Descrição\nEsta rota permite a exclusão de um template de mensagem específico através do seu ID.\n\n### Parâmetros Requeridos\n| Nome | Tipo | Obrigatório |\n|------|------|-------------|\n| id   | string | Sim         |\n\n### Autenticação\nEsta operação requer autenticação via:\n- tokenAuth\n- cookieAuth\n\n### Resposta\nA operação retorna um código de status 204, indicando que a exclusão foi realizada com sucesso e não há corpo de resposta."
  }
];
