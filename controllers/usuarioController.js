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

export {
    formularioLogin,
    formularioRegister,
    formularioForgetPassword
}