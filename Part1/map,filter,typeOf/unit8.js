//* Task 1

a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]

function t1 (){
    let a1_res=a1.map(el=>el*2)
    console.log(a1_res)
}
t1()


//* Task 2

a2= [2,3,4,5,10,11,12]

function t2 (){
    let a2_res=a2.map(el=>Math.pow(el,2))
    console.log(a2_res)
}
t2()

//* Task3 

a3 = [4,"3",6,7,"12",34,"56",78,90,11]

function t3 (){
    let a3_res=a3.map(el=>+el)
    console.log(a3_res)
}
t3()

//* Task 4 

a4 = [4,"3",6,7,"12",34,"56",78,90,11]

function t4 (){
    let a4_res=[]
    a4.map(el=> {
       if (typeof el === "number") {
        a4_res.push(el)
       }
    })
    console.log(a4_res)
}
t4()

//* Task 5

b1 = [3, 14, 15, 92]

function t5 (){
    let  b1_res=b1.filter(item=>item%2==0)
    console.log(b1_res)
}

t5()

//* Task 6 

b6 = [3, 14, 15, 92, "6", "5", "hello", 32]

function t6 (){
    let b6_res=b6.filter(item=>typeof item === 'number')
    console.log(b6_res)
}

t6()


//* Task 7

b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]

function t7(){
    let b7_res=b7.filter(item=>typeof item === 'string' && item.length>3)
    console.log(b7_res)
}

t7()

//* Task 8 

b8 = [3, 14, 15, 92, "6", "5", "hello", 32]

function t8(){
    let b8_res=[]
    b8.filter((item,index)=>{
        if (item % 2 == 0) b8_res.push(index)
    })
    console.log(b8_res)
}

t8()

//* Task 9 

b9 = [3, "hello", 4, "world", 5, "hi"]

function t9(){
    let b9_num=[]
    let b9_string=[]

    b9.filter(item=>{
        if (typeof item === 'number') b9_num.push(item)
        if (typeof item === 'string') b9_string.push(item)
    })
    console.log(b9_num)
    console.log(b9_string)
}

t9()

//* Task 10

b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]

function t10(){
    let b10_res=[]
    b10.filter(item=>{
        item.forEach(element => {
            if (element == 3) b10_res.push(item)
        });
    })
    console.log(b10_res)
}

t10()