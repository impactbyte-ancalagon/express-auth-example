const express = require('express')
const router = express.Router()
const isAuthenticated = require('../middlewares').isAuthenticated
const UserController = require('../controllers/UserController')

router
  .route('/')
  .get(isAuthenticated, UserController.getUsers)
  .post(UserController.createUser)

router
  .route('/:id')
  .get(isAuthenticated, UserController.getUserById)
  .patch(UserController.updateUserById)
  .delete(UserController.deleteUserById)

router.post('/login', UserController.login)

module.exports = router
