// recipe.model.js
const sql = require("../config/db.config.js");

const Recipe = function(recipe) {
    this.publisher = recipe.publisher;
    this.thumbnail = recipe.thumbnail;
    this.bahanmasak = JSON.stringify(recipe.bahanmasak);
    this.caramasak = JSON.stringify(recipe.caramasak);
    this.porsi = recipe.porsi;
    this.waktu = recipe.waktu;
    this.kategori = recipe.kategori;
    this.tags = JSON.stringify(recipe.tags);
    this.judul = recipe.judul;
    this.description = recipe.description;
};

Recipe.create = (newRecipe, result) => {
    sql.query("INSERT INTO recipes SET ?", newRecipe, (err, res) => {
        if (err) {
            console.error("error: ", err);
            result(err, null);
            return;
        }

        console.log("created recipe: ", { id: res.insertId, ...newRecipe });
        result(null, { id: res.insertId, ...newRecipe });
    });
};

module.exports = Recipe;
