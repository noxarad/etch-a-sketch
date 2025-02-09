const grid = document.querySelector("#grid")
grid.style.height = `${window.innerHeight}px`
grid.style.width = `${window.innerHeight}px`
for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        let pixel = document.createElement("div")
        pixel.setAttribute("class","pixel")
        pixel.style.width = `${window.innerHeight / 16 - 6}px`
        pixel.style.height = `${window.innerHeight / 16 - 6}px`
        grid.appendChild(pixel)
    }
}
grid.addEventListener("mouseover", (e) => {
    if (e.target.className === "pixel"){
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)})`
    }
})