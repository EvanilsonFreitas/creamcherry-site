# Validação da evolução comercial

## Ambiente e preservação

- Checkout inicial limpo, branch `main`, sem commits locais exclusivos.
- O origin antigo (`Evanillson/creamcherry-site`) redireciona no GitHub para `EvanilsonFreitas/creamcherry-site`; identidade e permissão de escrita confirmadas via API autenticada.
- Atualização remota `8b7b5fa` integrada com fast-forward antes das alterações. Nenhum reset, limpeza forçada ou force push.
- Stack estática preservada, sem novas dependências e sem alteração da URL da API dos formulários.

## Verificações executadas

- `node scripts/validate.cjs`: 6 páginas, 16 scripts, 320 caminhos locais, 16 produtos e 3 avaliações, sem falhas.
- `git diff --check`: sem erros de whitespace.
- Catálogo no navegador: 16 produtos no total, 15 em Sorvetes, 1 em Açaí; Complementos e apresentações sem cadastro exibem estado vazio.
- Filtros de caixas e 5 L, limpeza de filtros, busca sem acentos (`limao`: dois resultados), entrada de busca contendo HTML e links antigos por linha testados.
- Modal: conteúdo, imagem de morango, legenda ilustrativa, fechamento por Escape, retorno de foco e ciclo de Tab/Shift+Tab testados.
- Carrossel: três avaliações preservadas, avanço por botão e navegação pelo teclado testados. Rolagem por toque usa o comportamento nativo; não foi testada em aparelho físico.
- Home e páginas internas inspecionadas em larguras de 390 e 1440 px; catálogo e avaliações também inspecionados em 768 px. Fotografias sem falhas de carregamento nas áreas verificadas. Corrigida largura intrínseca dos blocos do atacado no celular.
- Console consultado durante as navegações: nenhum erro registrado.
- Links de iFood e Keeta renderizados com os endereços fornecidos, `target="_blank"` e `rel="noopener noreferrer"`. Redirecionamento Keeta respondeu HTTP 200; o iFood retornou 403 à consulta automatizada, portanto a loja não foi inspecionada por esse meio. Pedidos e pagamentos não foram realizados.
- Encontrado e corrigido link legado para `delivery.html` inexistente no menu móvel de Suporte.

## Limites

- Não há TypeScript, configuração de lint ou comando de build no projeto. A sintaxe dos scripts externos e inline foi validada com Node; não se declara lint ou compilação de framework.
- Formulários de produção não foram enviados. Não foram alterados os contratos da API.
- Preferência de movimento reduzido implementada em CSS e nos comandos de rolagem; não foi alterada a preferência do sistema operacional durante os testes.
- Fotografias editoriais são ilustrativas e têm créditos registrados; não comprovam embalagens, instalações ou disponibilidade comercial.
- Dados alimentares e depoimentos foram preservados do repositório; não houve auditoria comercial externa.
- A consulta da configuração GitHub Pages retornou 404. A publicação do código no GitHub não implica confirmação do deploy do domínio público.
