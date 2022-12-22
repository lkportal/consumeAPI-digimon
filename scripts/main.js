const ListDg_html = document.getElementById('lisdg')

function  ListDigimon(props){
    return(`
    
    <div class="cont-main">
            <img src=${props.img} alt="">
            <ul class="list">
                <li>${props.name}</li>
                <li>${props.level}</li>
            </ul>
        </div>
    
    `)
}
Apifecth
    .then(list => {
        const limite = list.slice(0,10)
        limite.map(e =>{
            return ListDg_html.innerHTML += ListDigimon(e)
        })
    })

