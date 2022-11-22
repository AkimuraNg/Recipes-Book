import React from "react";
import Navbar from "../navbar/navbar";
import { useState, useEffect } from "react";
import mealService from "../../services/recipe";

const New = () => {
	const [recipes, setRecipes] = useState([]);
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [howToMake, setHowToMake] = useState("");

	useEffect(() => {
		mealService.getAll().then((meals) => {
			setRecipes(meals);
		});
	}, []);

	const submitting = () => {
		const newRecipe = {
			name,
			category,
			ingredients,
			howToMake,
		};

		mealService.create(newRecipe).then((responseData) => {
			setRecipes(recipes.concat(responseData));
			setName("");
			setCategory("");
			setIngredients("");
			setHowToMake("");
		});
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};
	const handleIngredientsChange = (event) => {
		console.log(ingredients);
		setIngredients(event.target.value);
	};
	const handleHowToMakeChange = (event) => {
		setHowToMake(event.target.value);
	};

	const deleteRecipe = (id) => {
		const toDelete = recipes.find((p) => p.id === id);
		const ok = window.confirm(`Delete ${toDelete.name}`);
		if (ok) {
			mealService.remove(id).then(() => {
				setRecipes(recipes.filter((p) => p.id !== id));
			});
		}
	};

	return (
		<div className="newRecipe">
			<header>
				<Navbar />
			</header>

			<main className="wrapper">
				<section>
					<h1>Add your new recipe here</h1>
					<p>You can add your own recipe here</p>
				</section>

				<section>
					<h2>Start adding your recipe</h2>
					<button
						type="button"
						className="btn btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#newRecipeModal"
					>
						Click here to start
					</button>
				</section>
			</main>

			<div
				className="modal fade"
				id="newRecipeModal"
				tabindex="-1"
				aria-labelledby="newRecipeModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-fullscreen">
					<div className="modal-content">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="newRecipeModalLabel"
							>
								Create your recipe
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>

						<div className="modal-body">
							<div className="mb-3">
								<label for="itemName" className="form-label">
									Meal / Drink Name
								</label>
								<input
									type="text"
									className="form-control"
									id="itemName"
									placeholder="Meal Name"
									onChange={handleNameChange}
								/>
							</div>
							<div className="mb-3">
								<label
									for="itemCategory"
									className="form-label"
								>
									Category
								</label>
								<input
									type="text"
									className="form-control"
									id="itemCategory"
									placeholder="Category"
									onChange={handleCategoryChange}
								/>
							</div>
							<div className="mb-3">
								<label for="ingredients" className="form-label">
									Ingredients
								</label>
								<textarea
									type="text"
									className="form-control"
									id="ingredients"
									placeholder="Ingredients"
									rows="10"
									onChange={handleIngredientsChange}
								/>
							</div>
							<div className="mb-3">
								<label for="process" className="form-label">
									How to Make
								</label>
								<textarea
									type="text"
									className="form-control"
									id="process"
									rows="10"
									onChange={handleHowToMakeChange}
								/>
							</div>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={submitting}
							>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>

			<section className="list">
				<div className="container-fluid">
					<div className="row justify-content-center">
						{recipes.map((post) => {
							return (
								<div className="card" key={post.id}>
									<div className="card-body">
										<p className="card-text">{post.name}</p>
										<button>View recipe</button>
										<button onClick={() => deleteRecipe(post.id)}>
											Delete
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default New;
