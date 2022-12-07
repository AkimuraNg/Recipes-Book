import React from "react";
import items from "../data/cooking.json";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cooking = () => {
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
    <div className="Cooking-view">

      <main className="wrapper">
        {/* Intro */}
        <section className="description">
          <h1>Cooking Recipes</h1>
          <p>This is a list of 50 cooking recipes that we come up with, these dishes can be the most favorite dish from the country of origin. Feel free to challenge yourself into making these.</p>
          <p>You can search for a recipe with the search bar below.</p>
        </section>

        <input value={filter} onChange={handleChange} style={{border: "none"}}/>

        {/* Item list */}
        <section className="list">
          <div className="container-fluid">
            <div className="row justify-content-center">
              {itemToShow.map((post) => {
                return (
                  <div className="card" key={post.id}>
                    <div
                      className="card-body"
                      key={post.id}
                    >
                      <img
                        src={post.image}
                        alt="recipe"
                        className="image"
                        style={{ cursor: "pointer" }}
                      />
                      <h5 className="card-title">
                        {post.title}
                      </h5>
                      <p className="card-text">
                        {post.category}
                      </p>
                      <Link
                        className="btn btn-secondary" to="/item">
                        View recipe
                      </Link>
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
};

export default Cooking;
