img.src = data[0].src
p.textContent = data[0].text

cont.addEventListener('click', changeImage)

function changeImage(e) {
   const slot = e.target.slot;
   img.src = data[slot].src
   p.textContent = data[slot].text

}