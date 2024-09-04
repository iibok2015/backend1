const express = require('express')

const restaurant = [
    {
        id:0, 
        name: "Woodshill"
    },
    {
        id:1,
        name: "Fiorellas"
    }
]
const app = express();
app.use(express.json());
let options = {
dotfiles: "ignore",
redirect: false
}
app.use(express.static('public', options))
app.get("/", (req,res)=>{
    //res.send('Hello World')
    let html = "<img src='img/IMG_2347.JPG'/>"
    let key ="<a href='.secret/key.txt'>secret</a>"
        res.send(html+key)
})
app.get("/restaurants", (req,res)=>{
    res.send(restaurant)
})
const port = 4000

app.listen(port, ()=>{
    console.log('listening on 4000')
})