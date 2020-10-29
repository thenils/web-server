const path = require('path')
const express = require('express')
const app = express()

//define express path config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

//handlebars setup
app.set('view engine','hbs')
app.set('views', viewsPath)

console.log(__dirname)
// console.log(path.join(__dirname, '../../public'))


// setup static directory
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title:"weather-app",
        name: "nilesh"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        name: 'nilesh'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        message:'help'
    })
})

app.get('/weather', (req, res)=>{
    res.send('weather of the day')
})
app.listen(3000, ()=>{
    console.log('Server is running....')
})



//previous used code
// app.get('', (req, res) => {
//     res.send("Hello I am Nilesh ")
// })

// app.get('/help', (req, res)=>{
//     res.send("Help page put your thoughts here!")
// })

// app.get('/about', (req, res)=>{
//     res.send("About")
// })