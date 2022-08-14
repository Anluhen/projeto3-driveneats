let prato = undefined;
let bebida = undefined;
let sobremesa = undefined;

function select(choosen) {
    if (choosen.classList.contains("prato")) {
        if (prato === choosen) {
            choosen.classList.toggle("selected");
        } else if (prato === undefined) {
            choosen.classList.toggle("selected");
            prato = choosen
        } else {
            prato.classList.remove("selected");
            choosen.classList.toggle("selected");
            prato = choosen
        }
    }
    if (choosen.classList.contains("bebida")) {
        if (bebida === choosen) {
            choosen.classList.toggle("selected");
        } else if (bebida === undefined) {
            choosen.classList.toggle("selected");
            bebida = choosen
        } else {
            bebida.classList.remove("selected");
            choosen.classList.toggle("selected");
            bebida = choosen;
        }
    }
    if (choosen.classList.contains("sobremesa")) {
        if (sobremesa === choosen) {
            choosen.classList.toggle("selected");
        } else if (sobremesa === undefined) {
            choosen.classList.toggle("selected");
            sobremesa = choosen
        } else {
            sobremesa.classList.remove("selected");
            choosen.classList.toggle("selected");
            sobremesa = choosen;
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