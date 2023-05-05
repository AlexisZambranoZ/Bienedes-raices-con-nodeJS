
import Usuario from '../models/Usuario.js'
import { check, validationResult } from 'express-validator'


const formularioLogin = (req, resp) => {
    resp.render('auth/login', {
        pagina: "Iniciar Sesion"
    })
}

const formularioRegister = (req, resp) => {
    resp.render('auth/register', {
        pagina: "Crear Cuenta"
    })
}

const formularioForgetPassword = (req, resp) => {
    resp.render('auth/olvide-password', {
        pagina: "Recupera tu acceso a bienes raices"
    })
}
const registrar = async (req, resp) => {
    //Validacion
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req)
    await check('email').isEmail().withMessage('El E-mail no es valido').run(req)
    await check('password').isLength({ min: 6 }).withMessage('El password debe ser minimo de 6 caracteres').run(req)
    await check('repetir_password').equals(req.body.password).withMessage('Las contraseñas no son iguales').run(req)

    let resultado = validationResult(req)

    /* return resp.json(resultado.array()) */

    //Verificar que el resultado este vacio
    if (!resultado.isEmpty()) {
        //Errores
        return resp.render('auth/register', {
            pagina: "Crear Cuenta",
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    //Extraer los datos
    const {nombre,email,password} = req.body

    //Verificar que el usuario no este duplicado
    const existeUsuario = await Usuario.findOne({where: {email}})
    if(existeUsuario){
        return resp.render('auth/register', {
            pagina: "Crear Cuenta",
            errores: [{msg: "El usuario ya esta registrado"}],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    //Almacenar un usuario 
    await Usuario.create({
        nombre,
        email,
        password,
        token:123
    })
   
    console.log(existeUsuario);
    return
}

export {
    formularioLogin,
    formularioRegister,
    formularioForgetPassword,
    registrar
}