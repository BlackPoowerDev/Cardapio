let max = document.querySelectorAll('#max')
let min = document.querySelectorAll('#min')
let carrinho = document.querySelector('#carrinho')
let valorTotal = document.querySelector('#valorTotal')


max.forEach( (e) =>{
    e.addEventListener('click', (e) =>{
        const totalCarrinho = Number(carrinho.innerText) // Pegar valor total do carrinho
        carrinho.innerText = totalCarrinho + 1 // Adicionar +1 no carrinho
        e.target.parentNode.children[1].value = Number(e.target.parentNode.children[1].value) + 1 // Pegar quantidade 

        const valor = Number(e.target.parentElement.parentElement.children[1].getAttribute('data-valor')) // Pegar valor do cardapio

        const ValorCarrinho = Number(valorTotal.innerText) // Pegar valor total do pedido
        const Valorfinal = valor * 1 // Multiplicar valor

        valorTotal.innerText = ValorCarrinho + Valorfinal // Somar valor total do pedido
    })
})

min.forEach( (e) =>{
    e.addEventListener('click', (e) =>{

        const quantidade = Number(e.target.parentNode.children[1].value) // Pegar quantidade
        if(quantidade > 0){ // Verificar quantidade
            carrinho.innerText = Number(carrinho.innerText) - 1 // Diminuir valor total do carrinho
            e.target.parentNode.children[1].value = quantidade - 1 // Diminuir quantidade 

            const valor = Number(e.target.parentElement.parentElement.children[1].getAttribute('data-valor')) // Pegar valor do cardapio

            const ValorCarrinho = Number(valorTotal.innerText) //Pegar valor total do carrinho
            const Valorfinal = valor * 1 // Multiplicar valor
    
            valorTotal.innerText = ValorCarrinho - Valorfinal // Somar valor total do pedido

        }
    })
})