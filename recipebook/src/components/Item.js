const Item = ({ item, setFilter }) => {
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
			<div className="container-fluid">
				<main className="wrapper">
					<section className="header" style={{ paddingTop: 40 }}>
						<button
							className=" btn btn-secondary"
							style={{ width: 100 }}
							onClick={() => {
								setFilter("");
							}}
						>
							Return
						</button>
						<h1> {item.title} </h1>
						<img
							src={item.image}
							alt="recipe"
							className="headerImage"
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
											textAlign: "center",
											padding: 40,
										}}
									>
										{initialArr.map((i) => {
											return (
												<p
													key={i.id}
													style={{ fontSize: 20 }}
												>
													{i.ingredient}
												</p>
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
											fontSize: 20,
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

export default Item;
