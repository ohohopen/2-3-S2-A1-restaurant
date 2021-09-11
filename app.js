const express = require("express");
const exphbs = require("express-handlebars");
const restaurant = require("./restaurant.json");
const app = express();
const port = 3000;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.get("/", (req, res) => {
	res.render("index", { restaurantList: restaurant.results });
});
app.get("/restaurants/:id", (req, res) => {
	const restaurantPick = restaurant.results.find(
		(item) => item.id === Number(req.params.id)
	);
	res.render("show", { restaurantSingle: restaurantPick });
});
app.get("/search", (req, res) => {
	const keywordInput = req.query.keyword;
	const searchItem = restaurant.results.filter(
		(item) =>
			item.name.toLowerCase().includes(keywordInput) ||
			item.category.toLowerCase().includes(keywordInput)
	);
	res.render("index", { restaurantList: searchItem, keyword: keywordInput });
});
app.listen(port, () => {
	console.log(port);
});
