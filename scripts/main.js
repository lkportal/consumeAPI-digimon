const ListDg_html = document.getElementById('lisdg')
let quantidade = 10 
function createelements({name,img,level}){

    const div = document.createElement('div')
    div.classList.add('cont-main')
    const div2 = document.createElement('div')
    div2.classList.add('cont-item')
    const div3 = document.createElement('div')
    div3.classList.add('cont-head')
    const imgs = document.createElement('img')
    imgs.classList.add('img')
    imgs.setAttribute('src',img)
    const ul = document.createElement('ul')
    ul.classList.add('list')
    const li =document.createElement('li')
    li.classList.add('li')
    li.innerHTML = `<strong>Nome</strong>:${name}`
    const li2 =document.createElement('li')
    li2.classList.add('li')
    li2.innerHTML = `<strong>Nivel</strong>:${level}`
    div.appendChild(div2)
    div.appendChild(div3)
    div2.appendChild(imgs)
    div3.appendChild(ul)
    ul.appendChild(li)
    ul.appendChild(li2)
    document.body.appendChild(div)

}


const btns = document.getElementById('btn')
 
 async function coletaDados () {
     const outPut = document.getElementById('output').value
     console.log(outPut)
   return quantidade = outPut
}

btns.addEventListener('click',coletaDados)
 




  
function  ListDigimon(props){
    
    return createelements(props)
}



Apifecth
    .then(list => {
        const limite = list.slice(0,quantidade)
        limite.map(e =>{
          return ListDg_html.innerHTML += ListDigimon(e);
        })
    })

