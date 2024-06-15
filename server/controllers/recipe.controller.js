const Recipe = require("../models/recipe.model.js");

exports.uploadRecipe = (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Content can not be empty" });
    }

    // Log input untuk debugging
    console.log('Received body:', req.body);
    console.log('Received file:', req.file);

    const recipe = new Recipe({
        publisher: req.body.publisher,
        thumbnail: req.file ? req.file.path : null, // pastikan file diterima
        bahanmasak: req.body.bahanmasak,
        caramasak: req.body.caramasak,
        porsi: req.body.porsi,
        waktu: req.body.waktu,
        kategori: req.body.kategori,
        tags: req.body.tags,
        judul: req.body.judul,
        description: req.body.description
    });

    Recipe.create(recipe, (err, data) => {
        if (err) {
            console.error("Error: ", err);
            return res.status(500).json({
                message: err.message || "Some error occurred while creating the Recipe."
            });
        } else {
            return res.status(200).json({ message: "Recipe uploaded successfully", data });
        }
    });
};
