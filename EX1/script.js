function clicar() {
    let bt = window.document.querySelector("#bttn")
    let div = window.document.querySelector("#div-bt")
    let parag = window.document.querySelector('#parag')

    // if (bt.id != 'bt') {
    //     bt.innerHTML = 'Boa!' 
    //     bt.id = 'bt' 
    //     bt.onclick = '' 

    //     div.innerHTML += '<button onclick="clicar()" id="bttn">Clique Aqui</button>'
    // } 

    let max = Number(window.prompt('Até quanto contaremos?'))
    let num = 0

    while (num != max) {
        
        parag.innerHTML += `${++num} `
    }
}