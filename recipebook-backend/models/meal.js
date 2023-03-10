const mongoose = require("mongoose");

// const url = process.env.MONGODB_URL;
const url =
	"mongodb+srv://quangtricao:123@cluster0.kvzjilt.mongodb.net/mealDB?retryWrites=true&w=majority";

console.log("connecting to", url);

mongoose
	.connect(url)
	.then(() => {
		console.log("connected to MongoDB");
	})
	.catch((error) => {
		console.log("error connecting to MongoDB:", error.message);
	});

const mealSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is missing"],
	},
	description: {},
	image: {},
	ingredients: {},
	howToCook: {},
});

mealSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model("Meal", mealSchema);
