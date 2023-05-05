import express from "express";
import {formularioForgetPassword, formularioLogin, formularioRegister, registrar } from '../controllers/usuarioController.js'

const router = express.Router()

router.get('/login', formularioLogin)
router.get('/register', formularioRegister)
router.post('/register', registrar)
router.get('/olvide-password', formularioForgetPassword)



export default router
