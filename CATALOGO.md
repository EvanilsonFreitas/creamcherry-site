# Manutenção do catálogo

O site mantém HTML, CSS e JavaScript puro, Google Fonts e Font Awesome, sem gerenciador de pacotes ou etapa de compilação. O deploy documentado prevê GitHub Pages; sua ativação não foi confirmada pela API do repositório. Os formulários continuam usando a API já configurada em `js/config.js`.

## Dados

- `js/catalog-data.js`: `CATALOG_CATEGORIES` define categorias, subcategorias e apresentações; `CATALOGO` contém os 16 produtos migrados do cardápio.
- `js/catalog.js`: filtros, busca, cards e modal. Os links antigos `?cat=tradicionais`, `especiais`, `veganos` e `gelattos` continuam funcionando.
- `js/reviews-data.js`: os três depoimentos existentes, sem inventar fontes ou fotografias.
- `js/commerce.js`: avaliações e canais de delivery.
- `css/commerce.css`: componentes responsivos e preferência de movimento reduzido.

Para cadastrar um produto, adicione um objeto em `CATALOGO`, com identificador único, `name`, `category`, `subcategory`, `flavor`, `desc`, `volume`, `unit`, `photo`, `images`, `availability` e `order`. Use um dos identificadores de categoria/subcategoria declarados no mesmo arquivo. A ordem é numérica. `photo` e `images` usam caminhos relativos à raiz, sem barra inicial. O campo `images` reserva imagens adicionais para evolução futura; a interface atual exibe a principal.

`cat` preserva a linha original (`tradicionais`, `especiais`, `veganos`, `gelattos`). Os campos opcionais `porcao`, `calorias`, `ingredientes`, `alergenos` e `nutricao` preservam o modal anterior. Não preencher informações alimentares sem confirmação. `price` foi preservado nos registros legados, mas não é exibido no catálogo informativo.

Disponibilidade: `consultar`, `disponivel`, `indisponivel` ou `oculto`. O último exclui o registro da listagem. Não cadastrar um novo SKU com base somente nas apresentações planejadas. Os produtos legados ficam em `sabores`, pois uma porção de 120 ml ou 100 ml não confirma a embalagem. As estruturas de 5 L, 10 L, 200 ml e 380 ml não significam estoque disponível.

## Imagens

```text
images/produtos/
  sorvetes/
    sabores/                 fotos existentes por sabor e morango ilustrativo
    picoles/imagens/pngs/
    copos/imagens/pngs/
    potes/imagens/pngs/
    caixas/{5l,10l}/imagens/pngs/
  acai/
    copos/imagens/pngs/
    potes/imagens/pngs/
    caixas/{5l,10l}/imagens/pngs/
  complementos/
    {casquinhas,cascoes,bijus,caixas-biju,acompanhamentos}/imagens/pngs/
    coberturas/marvi/imagens/pngs/
```

As fotos gerais e a imagem do hero permanecem em seus caminhos anteriores. Quatro fotografias de sabores foram movidas, sem duplicação, com atualização das referências. JPEGs existentes não foram convertidos para PNG. Para novos WebP/JPEG/AVIF, usar a mesma categoria em `imagens/webp`, `imagens/jpeg` ou `imagens/avif`. Priorizar imagens de até 800–1200 px, comprimir antes de publicar e conferir o enquadramento 4:3.

Baunilha e chocolate usam imagens preexistentes. `morango-ilustrativo.jpg` é uma fotografia de Micheile Henderson, [fonte Pexels](https://www.pexels.com/photo/ice-cream-and-strawberries-on-a-black-plate-7518553/), sob [licença Pexels](https://www.pexels.com/license/), consultada em setembro de 2026. A versão de 800 px tem aproximadamente 179 KiB. O campo `illustrative: true` identifica a imagem no card e no modal. Não representa uma embalagem ou porção oficial. Os demais produtos aguardam fotos compatíveis; falhas de carregamento nos cards mostram o estado neutro.

## Delivery e avaliações

`window.CREAM_DELIVERY.ifood` e `.keeta` em `js/config.js` contêm os links oficiais fornecidos pelo responsável pelo site. Os botões ficam ativos na home, no cardápio e no suporte, abrindo em nova aba com `noopener noreferrer`. Se os valores forem apagados, aparecem botões desabilitados, sem links. 99Food e WhatsApp foram preservados.

As seis páginas também usam fotografias editoriais em `images/editorial/`, com fontes e licenças registradas em `images/editorial/FONTES.md`. A home recebeu uma galeria com pessoas tomando sorvete, açaí e casquinhas, além de imagens na navegação comercial e no bloco de cursos. As páginas internas receberam faixas fotográficas e imagens complementares nas seções institucionais. `css/editorial.css` controla enquadramento, entrada suave e hover, respeitando movimento reduzido. Essas imagens não substituem as fotografias oficiais dos produtos.

Adicionar avaliações em `REVIEWS` com `id`, `name`, `text`, `location`, `rating` (ou `null`), `avatar` (ou `null`), `source` (ou `null`) e `tags`. Usar somente fotos autorizadas. Sem fotografia, aparecem iniciais. O carrossel permite rolagem nativa por toque, teclado e botões, sem avanço automático.

## Verificação

Executar `node scripts/validate.cjs` para verificar sintaxe JavaScript, caminhos locais, categorias, dados, imagens e segurança dos links externos. Conferir no navegador filtros, modais e estados vazios, além de início e cardápio em desktop, tablet e celular. Não há configuração de lint, TypeScript ou build neste repositório; não é necessário instalar dependências para essas verificações.

## Informações ainda necessárias

- Produtos e sabores por embalagem, volumes e disponibilidade comercial de caixas, potes, picolés, copos e complementos.
- Fotos oficiais dos produtos que estão sem imagem, especialmente embalagens, açaí e complementos.
- Fontes públicas e fotos autorizadas dos depoimentos, caso se queira exibi-las.

Descrições, tabelas nutricionais, avaliações e afirmações institucionais legadas foram mantidas a partir do repositório, sem validação comercial externa.
