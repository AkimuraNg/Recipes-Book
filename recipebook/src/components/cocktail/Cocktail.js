import React from "react";
import items from "../data/cocktail.json";
import { useState } from "react";
import {Link} from "react-router-dom"

const CocktailItem = ({ item, setFilter }) => {
	let initialArr = [];
	for (let a = 1; a < 50; a++) {
		let c = `strIngredient${a}`;
		if (item[c]) {
			initialArr.push({
				id: a - 1,
				ingredient: item[c],
			});
		}
	}
	return (
		<>
			<button
				onClick={() => {
					setFilter("");
				}}
			>
				back
			</button>
			<div className="container-fluid">
				<main className="wrapper">
					<section className="header">
						<h1> {item.title} </h1>
						<img
							src={item.image}
							alt="recipe"
							style={{ width: "500px" }}
						/>
					</section>

					<section className="content" style={{ paddingTop: 80 }}>
						<div className="row justify-content-between">
							<div className="itemContent">
								<div className="col">
									<h3 style={{ color: "#6F5B3E" }}>
										Ingredients
									</h3>

									<div
										style={{
											textAlign: "left",
											padding: 40,
										}}
									>
										{initialArr.map((i) => {
											return (
												<p key={i.id}>{i.ingredient}</p>
											);
										})}
									</div>
								</div>

								<div className="col">
									<h3 style={{ color: "#6F5B3E" }}>
										Instruction
									</h3>
									<p
										style={{
											textAlign: "left",
											padding: 40,
										}}
									>
										{item.instruction}
									</p>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

const Cocktail = () => {
	const [item, setItem] = useState(items);
	const [filter, setFilter] = useState("");

	const itemToShow =
		filter.length === 0
			? item
			: item.filter((p) =>
					p.title.toLowerCase().includes(filter.toLowerCase())
			  );

	if (itemToShow.length > 1) {
		return (
			<div className="Cooking-view">
				<main className="wrapper">
					{/* Intro */}
					<section className="description">
						<h1>Cooking Recipes</h1>
						<p>
							This is a list of 50 cooking recipes that we come up
							with, these dishes can be the most favorite dish
							from the country of origin. Feel free to challenge
							yourself into making these.
						</p>
						<p>
							You can search for a recipe with the search bar
							below.
						</p>
					</section>

					<input
						value={filter}
						onChange={(event) => {
							setFilter(event.target.value);
						}}
						style={{ border: "none" }}
					/>

					{/* Item list */}
					<section className="list">
						<div className="container-fluid">
							<div className="row justify-content-center">
								{itemToShow.map((post) => {
									return (
										<div className="card" key={post.id}>
											<div className="card-body">
												<img
													src={post.image}
													alt="recipe"
													className="image"
													style={{
														cursor: "pointer",
													}}
												/>
												<h5 className="card-title">
													{post.title}
												</h5>
												<button
													className="btn btn-secondary"
													onClick={() =>
														setFilter(post.title)
													}
												>
													View recipe
												</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</section>
				</main>
			</div>
		);
	}

	return <CocktailItem item={itemToShow[0]} setFilter={setFilter} />;
};

export default Cocktail;
