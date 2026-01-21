
// AQUI EU DEFINO O ENDEREÇO DA API

// "Estou guardando o endereço da API onde ficam os produtos"
const API_URL = 'http://localhost:3000/produtos'

console.log(API_URL)

// "Estou pegando do HTML o lugar onde a lista de produtos vai aparecer"
const list = document.getElementById('product-list')

// "Estou pegando do HTML o formulário onde cadastro novos produtos"
const form = document.getElementById('product-form')


// FUNÇÃO PARA BUSCAR E MOSTRAR OS PRODUTOS

function carregarProdutos() {

  // "Estou pedindo para a API me mostrar todos os produtos (GET)"
  fetch(API_URL)

    // "Quando a API responder, eu transformo a resposta em JSON"
    .then(res => res.json())

    // "Agora eu recebo a lista de produtos pronta para usar"
    .then(produtos => {

      // "Antes de mostrar tudo de novo, eu limpo a lista da tela"
      list.innerHTML = ''

      // "Para cada produto que veio da API, eu faço o seguinte:"
      produtos.forEach(produto => {

        // "Crio um elemento <li> (item da lista)"
        const li = document.createElement('li')

        // "Coloco dentro do <li> as informações do produto"
        li.innerHTML = `
          ${produto.nome} - R$ ${produto.preco} 
          (Estoque: ${produto.estoque})
          <button onclick="deletarProduto(${produto.id})">❌</button>
        `

        // "Adiciono esse <li> dentro da lista que está no HTML"
        list.appendChild(li)
      })
    })
}



// QUANDO O USUÁRIO ENVIA O FORMULÁRIO

form.addEventListener('submit', function (e) {

  // "Impeço o comportamento padrão do formulário (recarregar a página)"
  e.preventDefault()

  // "Monto um objeto produto com os dados digitados no formulário"
  const produto = {
    nome: nome.value,                   // nome digitado
    preco: Number(preco.value),          // preço convertido para número
    estoque: Number(estoque.value)       // estoque convertido para número
  }

  // "Envio esse novo produto para a API (POST)"
  fetch(API_URL, {

    // "Estou avisando que quero CRIAR um novo produto"
    method: 'POST',

    // "Estou dizendo que o conteúdo é JSON"
    headers: {
      'Content-Type': 'application/json'
    },

    // "Estou enviando o produto convertido para texto JSON"
    body: JSON.stringify(produto)
  })

  // "Quando a API terminar de salvar"
  .then(() => {

    // "Limpo o formulário"
    form.reset()

    // "Atualizo a lista de produtos na tela"
    carregarProdutos()
  })
})


// FUNÇÃO PARA DELETAR UM PRODUTO PELO ID

function deletarProduto(id) {

  // "Peço para a API apagar o produto com esse ID (DELETE)"
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })

  // "Depois de apagar, atualizo a lista"
  .then(() => carregarProdutos())
}


// APLICAÇÃO COMEÇA AQUI

// "Assim que a página abrir, carrego os produtos"
carregarProdutos()
