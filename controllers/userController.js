exports.getAllUsers=(req,res)=>{
    console.log('ACCEDIENDO A TODOS LOS USUARIOS')
}
exports.getUser=(req,res)=>{
    console.log(req.query.enabled)
    console.group('accediendo al usuario con id:'+req.params.id)
}

// Construyendo los métodos post, put, delete
// Empezaremos con userControllers.js

exports.createUser = (req, res) => {
    let data = req.body
    const { nombre, apellido, email, telefono } = data
    console.log(nombre, apellido, email, telefono)
}

exports.updateUser = (req, res) => {
    let data = req.body
    const { nombre, apellido, email, telefono } = data
    console.log(nombre, apellido, email, telefono)
    console.log(req.params.id)
    console.log(nombre, apellido, email, telefono)
}

exports.deleteUser = (req, res) => {
    console.log(req.params.id)
}