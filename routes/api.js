const express = require('express');
const router = express.Router();
const multer = require('multer')

const multerMiddleware = multer().any()

const welcome = require('../app/controllers/welcome');
const { createAssistantHandler, sendMessagesByNameHandler } = require('../app/controllers/assistant.controller');

// middleware


router.post("/assistant", multerMiddleware, createAssistantHandler)
router.post("/message", sendMessagesByNameHandler)


module.exports = router;