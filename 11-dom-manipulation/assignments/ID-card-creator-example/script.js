let name = document.querySelector('#name') //*
let nameInfo = document.createElement('div') //*
let id = document.querySelector('#id')
let idInfo = document.createElement('div')
let button = document.querySelector('button')
let address = document.querySelector('#address')
let addressInfo = document.createElement('div')
let Fact = document.querySelector('#Fact')
let FactInfo = document.createElement('div')

function handleSubmit(e){
     
    nameInfo.innerText=`${name.value}` //*
    idInfo.innerText= `${id.value}`
   addressInfo.innerText=`${address.value}`
   FactInfo.innerText=`${Fact.value}`


    let info = document.querySelector('.info')
    

    info.appendChild(nameInfo) //*
    info.appendChild(idInfo)
    info.appendChild(addressInfo)
    info.appendChild(FactInfo)
}

button.addEventListener('click',handleSubmit)

document.addEventListener('keypress', e=>{
    if(e.key==='Enter'){
        handleSubmit(e)
    }
} )



