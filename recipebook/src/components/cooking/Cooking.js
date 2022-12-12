import React from "react";
import items from "../data/cooking.json";
import { useState } from "react";
import Item from "../Item";

const Cooking = () => {
	const [filter, setFilter] = useState("");

	const itemToShow =
		filter.length === 0
			? items
			: items.filter((p) =>
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

	if (itemToShow.length === 0) {
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

					<div> Sorry there is no matching</div>
				</main>
			</div>
		);
	}

	return <Item item={itemToShow[0]} setFilter={setFilter} />;
};

export default Cooking;
