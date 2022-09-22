
let index=0;

function createImageAndAddIcon(){
    if (index>data.length-1) return button.remove()
    const img= document.createElement('img')
    img.src=data[index++].src
    cont.appendChild(img)

}

function addTwoImages(){
    createImageAndAddIcon()
    createImageAndAddIcon()
    
}

addTwoImages()

button.addEventListener('click', addTwoImages)

