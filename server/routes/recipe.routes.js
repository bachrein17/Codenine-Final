// recipe.routes.js
const express = require('express');
const multer = require('multer');
const recipes = require("../controllers/recipe.controller.js");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('thumbnail'), recipes.uploadRecipe);

module.exports = router;
