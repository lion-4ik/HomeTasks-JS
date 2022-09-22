const paint = element => {
    cont.innerHTML += `<img src=${element.src}>`
    cont.innerHTML += `<p> Подается:${element.course}</p>`
    cont.innerHTML += `<p> Цена:${element.price}грн</p>`
}
const renderImages = (array) => {

    array.sort((a, b) => a.price - b.price).forEach(paint)
}


renderImages(data)


const selects = document.querySelectorAll('.select')
const selector1 = localStorage.getItem('selector1')
const selector2 = localStorage.getItem('selector2')

    selector1 &&  (selects[0].value = selector1)
    selector2 && ( selects[1].value = selector2)



const renderHtml = ()=>{
    cont.innerHTML = ''
    data.forEach(elem => {
        const course = selects[0].value == -1 ? true : elem.course === selects[0].value;
        let price = selects[1].value == -1; //? true//: elem.price  <= (+selects[1].value);

        if (price === false) {
            const limit = selects[1].value.split(' ');
            const max = limit[1] === 'infinity' ? Infinity : limit[1]
            price = elem.price >= limit[0] && elem.price <= max;

        }

        if (course && price) paint(elem)    
        localStorage.setItem('selector1', selects[0].value)
        localStorage.setItem('selector2', selects[1].value)
})
}
        

renderHtml()

selects.forEach(select => select.addEventListener('change', renderHtml))


const theme = document.getElementById('theme')

localStorage.setItem('color', theme.textContent)
localStorage.setItem('buttonColor', 'white')

const colorOfBody = localStorage.getItem('color')
const colorOfButton = localStorage.getItem('buttonColor')

function changeTheme() {

    document.body.style.backgroundColor = colorOfBody
    this.style.backgroundColor = colorOfBody
    this.style.color = colorOfButton
}

const sendValue = () => {
    localStorage.setItem('text', input1.value)
}


theme.addEventListener('click', changeTheme)
input1.addEventListener('change', sendValue)

input1.value = localStorage.getItem('text')



