/*
const http=require('http')
const server=http.createServer((request,Response)=>{
  if(request.url=='/'&& request.method=='GET')
  Response.end(JSON.stringify({"message":"ACCEDIENDO AL SERVIDOR"}))

  }
)
const port=5000
const host="localhost"

server.listen(port,host,()=>{
  console.log(`servidor ejecutandose en ://${port}:${host}`)
  
})
*/
const express=require('express')
const app=express()
const useRouter=require('./routers/userRouters')
const morgan=require('morgan')
const userLogin=require('./middlewares/userLogin')
const path=require('path')

app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
  const data={
    "title":"Titulo de la pagina",
    "message":"Bienvenido a mi sitio web",
    "showMessage":true,
    "items":[1,2,3,4,5]
  }

  res.render('index',data)

})

app.use('/users',useRouter)
app.use(morgan('dev'))
app.use(userLogin)


app.get('/usuario/:id', (req, res) => {
  res.send("Accediendo usuario con Id: " + req.params.id);
});


app.listen(3000,()=>{
  console.log('aplicacion con express ejecutandose en el puerto 3000')
}) 