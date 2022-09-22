const L = {
    getAllPar: () => JSON.parse(localStorage.getItem('allPar')),
    setAllPar: (allPar) => localStorage.setItem('allPar', JSON.stringify(allPar))
}




const creatTodo = (elem) => {
    const div = document.createElement('div');
    const divC = document.createElement('div');
    const input = document.createElement('input')
    const p = document.createElement('p')
    const btn = document.createElement('button')

    divC.ondblclick = function () {
        p.remove()
        const input = document.createElement('input')
        input.value = elem.value

        divC.appendChild(input);
        input.focus()

        input.onblur = function () {
            input.remove()
            p.textContent = input.value
            divC.appendChild(p)
            elem.value = input.value;
            L.setAllPar(person)
        }


    }

    btn.onclick = function () {
        div.remove()
        person = person.filter(el => el.id !== elem.id)
        L.setAllPar(person)
    }


    input.onclick = function () {
        input.checked ? packed.appendChild(div) : no_packed.appendChild(div)
        
        const findElem =   person.find(todo => todo.id === elem.id)
        findElem.packed = !findElem.packed;
        
        L.setAllPar(person)

    }

    p.textContent = elem.value
    input.type = 'checkbox'
    btn.textContent = 'X'
    input.checked = elem.packed;


    div.appendChild(input)
    divC.appendChild(p)
    div.appendChild(divC)
    div.appendChild(btn)
    

    return div
}

const choicePlace = (el) => {
    const div = creatTodo(el)
    el.packed ? packed.appendChild(div) : no_packed.appendChild(div)

}




const createNewTodo = () => {
    if (area.value.trim() == '') {

        modalError.classList.remove('invisible')
        modalError.classList.add('show')

        closemodal.onclick = function () {
            modalError.classList.add('invisible')
            modalError.classList.remove('show')
        }
        return;
    }

    const newTodo = {
        id: id(),
        value: area.value,
        packed: false
    }

    person.push(newTodo)
    choicePlace(newTodo)
    area.value = '';

L.setAllPar(person)
   
}




const local = (newTodo) => {

    let allPar = L.getAllPar()
    if (allPar == null) allPar = []
    allPar.push(newTodo)
    L.setAllPar(allPar)
}




button.addEventListener('click', createNewTodo)



const localData = L.getAllPar()
if(localData){
    localData.forEach(choicePlace)
} else {
    person.forEach(choicePlace)
}