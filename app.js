const refresh = document.querySelector(" .refresh");
const maxPaletteBoxes = 32;
const generatePalette = ()=>{
    for(let i =0;i<maxPaletteBoxes;i++){
        let randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
        randomHex = '#'+randomHex;
        console.log(randomHex)
    }
        const color =document.createElement("li");
        color.classList.add("color");
}
refresh.addEventListener("click",generatePalette);