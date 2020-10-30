const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//define express path config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//handlebars setup
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
        title:'help',
        name:'nilesh'
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must enter the address'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {})=>{
        if(error){
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecastData)=>{
            if(error){
                return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
    
})

app.get('/product', (req, res)=>{
    if(!req.query.search){
        return res.send({
            error : 'You must provide search term'
        })
    }
    console.log(req.query.search)
    res.send({
        product : []
    })
})


app.get('/help/*', (req, res)=>{
    res.render('404',{
        title:'404',
        errorMessage:'Article Not Found',
        name:'Nilesh'        
    })
})

app.get( '*' , (req, res)=>{
    res.render('404',{
        title:'404',
        errorMessage:'Page Not Found',
        name:'Nilesh'        
    })
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
