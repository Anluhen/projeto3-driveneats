let prato = undefined
let bebida = undefined
let sobremesa = undefined
let message

function select(choosen) {
    if (choosen.classList.contains("prato")) {
        if (prato === choosen) {
            choosen.classList.toggle("selected")
        } else if (prato === undefined) {
            choosen.classList.toggle("selected")
            prato = choosen
        } else {
            prato.classList.remove("selected")
            choosen.classList.toggle("selected")
            prato = choosen
        }
    }
    if (choosen.classList.contains("bebida")) {
        if (bebida === choosen) {
            choosen.classList.toggle("selected")
        } else if (bebida === undefined) {
            choosen.classList.toggle("selected")
            bebida = choosen
        } else {
            bebida.classList.remove("selected")
            choosen.classList.toggle("selected")
            bebida = choosen
        }
    }
    if (choosen.classList.contains("sobremesa")) {
        if (sobremesa === choosen) {
            choosen.classList.toggle("selected")
        } else if (sobremesa === undefined) {
            choosen.classList.toggle("selected")
            sobremesa = choosen
        } else {
            sobremesa.classList.remove("selected")
            choosen.classList.toggle("selected")
            sobremesa = choosen
        }
    }
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        const b = document.querySelector("button")
        if (prato.classList.contains("selected") && bebida.classList.contains("selected") && sobremesa.classList.contains("selected")) {
            b.classList.add("enable")
            b.innerHTML = "Fechar pedido"
        } else {
            b.classList.remove("enable")
            b.innerHTML = "Selecione os 3 itens para fechar o pedido"
        }
    }
}

function pedir(cliked) {
    if (cliked.classList.contains("enable")) {
        const total = (Number(prato.querySelector("h4").querySelector("span").innerHTML.replace(",", ".")) + Number(bebida.querySelector("h4").querySelector("span").innerHTML.replace(",", ".")) + Number(sobremesa.querySelector("h4").querySelector("span").innerHTML.replace(",", "."))).toFixed(2)
        const nome = prompt("Qual é o seu nome?")
        const endereco = prompt("Qual é o endereço de entrega?")
        message = "Olá, gostaria de fazer o pedido:\n- Prato: " + prato.querySelector("h3").innerHTML + "\n- Bebida: " + bebida.querySelector("h3").innerHTML + "\n- Sobremesa: " + sobremesa.querySelector("h3").innerHTML + "\nTotal: R$ " + total + "\n\nNome: " + nome + "\nEndereço: " + endereco
        const confirm = document.querySelector(".confirm")
        confirm.classList.add("show")
        confirm.querySelector(".c-prato").querySelector(".nome").innerHTML = prato.querySelector("h3").innerHTML
        confirm.querySelector(".c-prato").querySelector(".preco").innerHTML = "R$ " + prato.querySelector("span").innerHTML
        confirm.querySelector(".c-bebida").querySelector(".nome").innerHTML = bebida.querySelector("h3").innerHTML
        confirm.querySelector(".c-bebida").querySelector(".preco").innerHTML = "R$ " + bebida.querySelector("span").innerHTML
        confirm.querySelector(".c-sobremesa").querySelector(".nome").innerHTML = sobremesa.querySelector("h3").innerHTML
        confirm.querySelector(".c-sobremesa").querySelector(".preco").innerHTML = "R$ " + sobremesa.querySelector("span").innerHTML
        confirm.querySelector(".popup").querySelector(".total").querySelector(".valor").innerHTML = ("R$ " + total).replace(".",",")
    }
}

function send() {
    location.href = "https://wa.me/5545998348694?text=" + encodeURIComponent(message)
}

function hide() {
    document.querySelector(".confirm").classList.remove("show")
}