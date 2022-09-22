
const collectionIMG = document.querySelectorAll('.cont img')

let count = 1

//!
//?
//*




const changeCollectionsIMG = () => {
    
    collectionIMG[0].src = data[count === 0 ? data.length-1 : count-1].src //0 -1
    collectionIMG[1].src = data[count].src
    collectionIMG[2].src = data[count === data.length-1 ? 0 : count+1].src
    collectionIMG[3].src = data[count === data.length-2? 0 : count === data.length-1? 1 : count+2].src
    
}


plus.addEventListener('click', ()=>{
    count++ //1
    

    if (count>=data.length) {
        count=0;
    }

    changeCollectionsIMG()
    img.src=data[count].src
     
    
})

minus.addEventListener('click',()=>{
    count--

    if (count<0){
        count=data.length-1
    }
   
    changeCollectionsIMG()
    img.src=data[count].src
})
