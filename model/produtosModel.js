function getAllProducts() {
    const produtos = [
        {
            "id": 1,
            "titulo": "Cesta de Dia dos Pais",
            "descricao": "Nossa cesta inclui dois vinhos chilenos, baguetes, geléia artesanal e frutas frescas orgânicas.",
            "preco": 258.9,
            "imagem": "/images/cestacafe.jpg"
        },
        {
            "id": 2,
            "titulo": "Kit de Chocolates",
            "descricao": "Uma seleção dos melhores chocolates belgas, ideal para presentear.",
            "preco": 199.5,
            "imagem": "/images/chocolates.jpg"
        }
    ]

    return produtos;
}

module.exports = { getAllProducts };