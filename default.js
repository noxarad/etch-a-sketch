const grid = document.querySelector("#grid")
grid.style.height = `${window.innerHeight}px`
grid.style.width = `${window.innerHeight}px`
function gridGeneration(rows = 16) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            let pixel = document.createElement("div")
            pixel.setAttribute("class", "pixel")
            pixel.style.width = `${window.innerHeight / rows - 6}px`
            pixel.style.height = `${window.innerHeight / rows - 6}px`
            grid.appendChild(pixel)
        }
    }
    grid.addEventListener("mouseover", (e) => {
        if (e.target.className === "pixel") {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)} ${Math.floor(Math.random() * 256)})`
        }
    })
}
function customGeneration(){
    let inputRow = prompt("Please enter height:", "16")
    if (inputRow != null){
        parseInt(inputRow)
    }
    if (inputRow <= 100 && inputRow > 0){
       grid.innerHTML = ''
        row = inputRow
        gridGeneration(inputRow)
    }
}
window.onload = gridGeneration()
