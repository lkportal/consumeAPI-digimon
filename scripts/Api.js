const url = 'https://digimon-api.vercel.app/api/digimon'

 const Apifecth = fetch(url)
    .then( response => response.json())
    