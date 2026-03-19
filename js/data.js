/* ========================================
   CREAM CHERRY — Data (produtos/sabores)
   ======================================== */

const FLAVORS = {
  tradicionais: [
    { emoji: "🍦", name: "Baunilha Clássica",   desc: "Fava de baunilha Bourbon, suave e aveludada.",  price: "R$ 12,90", tag: "Favorito" },
    { emoji: "🍫", name: "Chocolate Belga",      desc: "Cacau 70% importado, intenso e cremoso.",       price: "R$ 14,90", tag: "Top venda" },
    { emoji: "🍓", name: "Morango Fresco",        desc: "Morangos selecionados, colhidos na estação.",   price: "R$ 13,90", tag: "" },
    { emoji: "🥜", name: "Crocante de Amendoim",  desc: "Pasta de amendoim com pedaços crocantes.",     price: "R$ 15,90", tag: "" },
    { emoji: "🍋", name: "Limão Siciliano",       desc: "Azedo na medida certa, refrescante e vivo.",   price: "R$ 13,90", tag: "Novo" },
    { emoji: "🫐", name: "Mirtilo & Nata",        desc: "Mirtilos frescos com creme de nata suave.",    price: "R$ 15,90", tag: "" },
    { emoji: "🍑", name: "Pêssego",               desc: "Pêssego caipira, levemente adocicado.",        price: "R$ 13,90", tag: "" },
    { emoji: "🍌", name: "Banana Foster",         desc: "Banana caramelada com toque de canela.",       price: "R$ 14,90", tag: "Favorito" },
  ],
  especiais: [
    { emoji: "🍒", name: "Cherry Cheesecake",    desc: "Cream cheese, calda de cereja e biscoito.",    price: "R$ 18,90", tag: "Premium" },
    { emoji: "🫚", name: "Pistache Italiano",    desc: "Pistache siciliano, recipe autêntica.",         price: "R$ 22,90", tag: "Importado" },
    { emoji: "🍫", name: "Nutella Trufado",      desc: "Avelã e Nutella com pedaços de trufa.",         price: "R$ 19,90", tag: "Top venda" },
    { emoji: "🧁", name: "Red Velvet",           desc: "Veludo vermelho com cobertura de cream cheese.",price: "R$ 19,90", tag: "Novo" },
    { emoji: "☕", name: "Tiramisù",             desc: "Mascarpone, café espresso e cacau.",            price: "R$ 21,90", tag: "Premium" },
    { emoji: "🍰", name: "Cheesecake de Manga",  desc: "Manga Haden com base de cheesecake.",          price: "R$ 18,90", tag: "" },
    { emoji: "🌺", name: "Flor de Hibisco",      desc: "Hibisco com toque de limão e gengibre.",       price: "R$ 17,90", tag: "Sazonal" },
    { emoji: "🍯", name: "Mel com Lavanda",      desc: "Mel silvestre e flores de lavanda francesa.",  price: "R$ 20,90", tag: "Artesanal" },
  ],
  veganos: [
    { emoji: "🥥", name: "Coco & Maracujá",     desc: "Base de leite de coco, 100% vegano.",           price: "R$ 15,90", tag: "Vegano" },
    { emoji: "🫐", name: "Açaí Power",           desc: "Açaí amazônico com banana e granola.",          price: "R$ 16,90", tag: "Vegano" },
    { emoji: "🍓", name: "Morango Vegano",       desc: "Base de aveia com morangos frescos.",           price: "R$ 14,90", tag: "Vegano" },
    { emoji: "🍫", name: "Choco Vegano",         desc: "Cacau 70% com leite de amêndoa.",               price: "R$ 15,90", tag: "Vegano" },
    { emoji: "🥭", name: "Manga Tropical",       desc: "Manga orgânica com base de caju.",              price: "R$ 14,90", tag: "Vegano" },
    { emoji: "🌿", name: "Matcha & Limão",       desc: "Chá verde japonês com raspas de limão.",        price: "R$ 17,90", tag: "Vegano" },
    { emoji: "🍍", name: "Abacaxi c/ Hortelã",  desc: "Abacaxi gelado com hortelã fresca.",            price: "R$ 14,90", tag: "Vegano" },
    { emoji: "🫚", name: "Pistache Vegano",      desc: "Pistache com base de leite de castanha.",       price: "R$ 19,90", tag: "Vegano" },
  ],
  gelattos: [
    { emoji: "🍒", name: "Gelatto Cereja",       desc: "Gelatto italiano tradicional de cereja.",       price: "R$ 16,90", tag: "Gelatto" },
    { emoji: "🍋", name: "Sorbetto Limone",      desc: "Sorbetto clássico, cremoso e ácido.",           price: "R$ 15,90", tag: "Gelatto" },
    { emoji: "🍓", name: "Fragola Fresca",       desc: "Morango italiano com textua sedosa.",           price: "R$ 16,90", tag: "Gelatto" },
    { emoji: "🫚", name: "Pistacchio",           desc: "Pistache siciliano, receita da Bronte.",        price: "R$ 24,90", tag: "Premium" },
    { emoji: "🍫", name: "Cioccolato Nero",      desc: "Chocolate negro 72%, amargo e suave.",          price: "R$ 18,90", tag: "Gelatto" },
    { emoji: "☕", name: "Caffè e Panna",        desc: "Expresso cremoso com chantilly italiano.",      price: "R$ 18,90", tag: "Gelatto" },
    { emoji: "🍑", name: "Pesca e Rosmarino",    desc: "Pêssego com alecrim, combinação inusitada.",    price: "R$ 17,90", tag: "Sazonal" },
    { emoji: "🍦", name: "Fiordilatte",          desc: "O clássico gelatto branco, puro e cremoso.",    price: "R$ 15,90", tag: "Favorito" },
  ],
};
