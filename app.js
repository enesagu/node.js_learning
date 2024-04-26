import express from "express"

const app = express()
const port = 3000

// ejs template engine
app.set('view engine','ejs')

// static files middleware
app.use(express.static('public'));

app.get("/", (req, res) => {  //forwarding index page
    res.render("index")
})

app.get("/about", (req, res) => {  //forwarding index page
    res.render("about")
})

app.listen(port, ()=> {
    console.log(`Application running on port: ${port}`)
})