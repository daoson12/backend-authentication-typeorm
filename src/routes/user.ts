import {Router } from 'express'
import UserController from '../controller/UserController'
const checkJwt=require("../middlewares/checkJwt")
import { checkRole } from "../middlewares/checkRole";
 
  const router = Router()

  router.get('/get', UserController.listAll)
  router.get('/:id', UserController.getOneById)
  router.post('/', UserController.newUser)
  router.patch('/users/:id', [checkJwt, checkRole], UserController.editUser)
  router.delete('/users:id', [checkJwt, checkRole], UserController.deleteUser)
  
  export default router



