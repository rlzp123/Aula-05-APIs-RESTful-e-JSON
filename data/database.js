let categorias = [
    { id: 1, nome: "Temaki", },
    { id: 2, nome: "Combinado", },
    { id: 3, nome: "Bebidas" },
    { id: 4, nome: "Sobremesas", },
];

let produtos = [
    {
        categoriaId: 1,
        nome: "Temaki Completo",
        descricao: "Temaki com salmão, atum, kani, cream cheese e cebolinha.",
        preco: 35.50,
        imagem: "https://static.itdg.com.br/images/640-400/4dc0be09b735235b391d83a90b59343a/324513-original.jpg"
    },
    {
        categoriaId: 2,
        nome: "Combinado 20 peças",
        descricao: "Combinado com 20 peças variadas de sushi e sashimi",
        preco: 85.00,
        imagem: "https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/sujirusushi/427_5ebdc97b97c37.jpg"
    },
    {
        categoriaId: 3,
        nome: "Coca-Cola",
        descricao: "Refrigerante Coca-Cola 350ml",
        preco: 7.50,
        imagem: "https://res.cloudinary.com/piramides/image/upload/c_fill,h_564,w_395/v1/products/3716-coca-cola-lata-350ml-normal-12un.20251024104230.png?_a=BAAAV6GX"
    },
];

module.exports = { categorias, produtos };