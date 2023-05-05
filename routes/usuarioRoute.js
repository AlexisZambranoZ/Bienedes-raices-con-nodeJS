import express from "express";
import {formularioForgetPassword, formularioLogin, formularioRegister } from '../controllers/usuarioController.js'

const router = express.Router()

router.get('/login', formularioLogin)
router.get('/register', formularioRegister)
router.get('/olvide-password', formularioForgetPassword)



export default router
