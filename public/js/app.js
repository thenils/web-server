console.log("client side javascript is loaded")





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
constMessageOne = document.querySelector('#message-1')
constMessageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location = search.value
    constMessageOne.textContent = 'Fetching forecast'
    constMessageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            // console.log(data.error)
            
            constMessageOne.textContent = data.error
        }else{
            // console.log(data.location)
            // console.log(data.forecast)
            constMessageOne.textContent = data.location
            constMessageTwo.textContent = data.forecast
            
        }
    })
})
})