const addText = ()=>{
    person.forEach(el=>{
        const p = document.createElement('p')
        p.innerHTML+=el.value
        cont.appendChild(p)
    })
}
addText()

const creatP = el => {
    const p = document.createElement('p')
    p.innerHTML+=el.value
    cont.appendChild(p)
}


function filterValues  ({target}){
    cont.innerHTML='';
     person
        .forEach(item => {
          //  if(item.value.toLocaleLowerCase().includes(target.value.toLocaleLowerCase())) creatP(item)
        if (item.value.toLocaleLowerCase().indexOf(target.value.toLocaleLowerCase()) == 0) creatP(item)
        })
    
    
    // .filter(item=>item.value.toLocaleLowerCase().includes(target.value.toLocaleLowerCase()))
    // .forEach(creatP)

    if (cont.children.length == 0 ) {
        cont.innerHTML = 'some text'
    }
}

search.addEventListener('input', filterValues)


//indexOf