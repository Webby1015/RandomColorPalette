const container = document.querySelector(".container")
const refresh = document.querySelector(" .refresh");
const maxPaletteBoxes = 32;
const generatePalette = ()=>{
    container.innerHTML="";
    for(let i =0;i<maxPaletteBoxes;i++){
        let randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;
        // console.log(randomHex)
        const color =document.createElement("li");
        color.classList.add("color");
        color.innerHTML=`<div class="rect-box" style="background:${randomHex};  "></div>
        <span class="hex-value">${randomHex}</span>`
        color.addEventListener("click",()=>copyColor(color,randomHex));
        container.appendChild(color);
    }
}

const copyColor=(elem, hexval)=>{
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexval).then(()=>{
        colorElement.innerText = "Copied";
        setTimeout(()=> colorElement.innerText=hexval,1000)
    }).catch(()=>alert("Failed to copy the color Code !"))
        
    
}
generatePalette()
refresh.addEventListener("click",generatePalette);