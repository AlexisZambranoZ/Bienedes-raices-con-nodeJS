const formularioLogin = (req, resp) => {
    resp.render('auth/login', {
     
    })
}

const formularioRegister = (req, resp) => {
    resp.render('auth/register', {
     
    })
}

export {
    formularioLogin,
    formularioRegister
}