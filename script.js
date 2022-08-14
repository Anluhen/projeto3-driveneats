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
            prato = choosen;
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
}