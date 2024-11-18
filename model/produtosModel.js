function getAllProducts() {
    const produtos = [
        {
            "id": 0,
            "titulo": "titulo do produto",
            "descricao": "descricaoproduto",
            "preco": 0.00,
            "imagem": "URL imagem",
        }
    ]

    return produtos;
}

module.exports = { getAllProducts };