let identificacion = prompt('Ingrese su ID')
let contrasenia = prompt('Ingrese su contraseña')

if(identificacion == 'admin' && contrasenia == 1234){
    alert('Bienvenido ' + identificacion)
}else{
    alert('Error, usuario no encontrado ')
}