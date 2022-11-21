import React from "react";
import Navbar from "../navbar/navbar";
import items from "../data/cocktail.json";
import { useState } from "react";

const Cocktail = () => {
	const [item, setItem] = useState(items);
	const [filter, setFilter] = useState("");

	const itemToShow =
		filter.length === 0
			? item
			: item.filter((p) =>
					p.title.toLowerCase().includes(filter.toLowerCase())
			  );

	const handleChange = (e) => {
		setFilter(e.target.value);
	};

	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className="wrapper">
				{/* Intro */}
				<section className="description">
					<h1>Cocktail Recipes</h1>
					<p>This is a list of cocktail recipes</p>
				</section>

				<input value={filter} onChange={handleChange} />

				{/* Item list */}
				<section className="list">
					<div className="container-fluid">
						<div className="row justify-content-center">
							{itemToShow.map((post) => {
								return (
									<div className="card" key={post.id}>
										<div className="card-body">
											<h5 className="card-title">
												{post.title}
											</h5>
											<p className="card-text">
												{post.desc}
											</p>
											<button
												className="btn btn-secondary"
												data-bs-toggle="modal"
												data-bs-target="#recipeModal"
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

				<footer className="footer">
					<div className="container-fluid">
						<h3 style={{ color: "white" }}>Copyrights 2022</h3>
					</div>
				</footer>
			</main>
		</div>
	);
};

export default Cocktail;
