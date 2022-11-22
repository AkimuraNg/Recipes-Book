require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const Meal = require("./models/meal");

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
	response.send("<h1>Home Page</h1>");
});

app.get("/api/recipes", (request, response) => {
	Meal.find({}).then((meal) => {
		response.json(meal);
	});
});

app.get("/api/recipes/:id", (request, response, next) => {
	Meal.findById(request.params.id)
		.then((meal) => {
			if (meal) {
				response.json(meal);
			} else {
				response.status(404).end();
			}
		})
		.catch((error) => next(error));
});

app.post("/api/recipes", (request, response, next) => {
	const data = request.body;

	const meal = new Meal({
		name: data.name,
		category: data.category,
		ingredients: data.ingredients,
		howToMake: data.howToMake,
	});

	meal.save()
		.then((savedMeal) => {
			response.json(savedMeal);
		})
		.catch((error) => {
			next(error);
		});
});

app.delete("/api/recipes/:id", (request, response, next) => {
	Meal.findByIdAndRemove(request.params.id)
		.then(() => {
			response.status(204).end();
		})
		.catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
	console.error(error.message);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
