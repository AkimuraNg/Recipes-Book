import React from 'react'
import Navbar from './navbar/navbar'
// import Modal from './Modal'

import meal from './data/Home page data/Item1.json'
import cocktail from './data/Home page data/Item2.json'
import recommend from './data/Home page data/recommend.json'

import { Link } from 'react-router-dom'

/*Home page view*/
const Home = () => {
    return (
        <div className="Home">
            <header>
                <Navbar />
            </header>
            <main className="wrapper">
                {/* Introduction*/}
                <section className="description">
                    <h1>Recipes Book</h1>
                    <p>Welcome to Recipes Book</p>
                </section>

                {/* Views */}
                <section className="view">
                    <div className="container-fluid">
                        <div className="row justify-content-evenly" >
                            {/* Recommend view */}
                            <div className="col-2 recommend">
                                <h3 style={{ marginTop: 12 }}>Recommend for You</h3>
                                {recommend.map(post => {
                                    return (
                                        <div className="card">
                                            <div className='card-body' key={post.id}>
                                                <img src={post.image} alt="recipe" className="image" style={{ cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#recipeModal"/>
                                                <h5 className="card-title">{post.title}</h5>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="col-7" >
                                {/*Cooking home view*/}
                                <section className="cooking" >
                                    <div className='titles'>
                                        <h3>Cooking Recipes</h3>
                                        <Link style={{ cursor: "pointer", textDecoration: "underline", color: "#B59F84" }} to="/cooking">See more</Link>
                                    </div>
                                    <div className="items">
                                        {meal.map(post => {
                                            return (
                                                <div className="card">
                                                    <div className='card-body' key={post.id}>
                                                        <img src={post.image} alt="recipe" className="image" />
                                                        <h5 className="card-title">{post.title}</h5>
                                                        <p className='card-text'>{post.desc}</p>
                                                        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#recipeModal">View recipe</button>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </section>

                                {/*Cocktail home view*/}
                                <section className="cocktail" >
                                    <div className='titles'>
                                        <h3>Cocktail Recipes</h3>
                                        <Link style={{ cursor: "pointer", textDecoration: "underline", color: "#B59F84" }} to="/cocktail">See more</Link>
                                    </div>
                                    <div className="items">
                                        {cocktail.map(post => {
                                            return (
                                                <div className="card">
                                                    <div className='card-body' key={post.id}>
                                                        <img src={post.image} alt="recipe" className="image" />
                                                        <h5 className="card-title">{post.title}</h5>
                                                        <p className='card-text'>{post.desc}</p>
                                                        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#recipeModal">View recipe</button>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="container-fluid">
                        <h3 style={{ color: 'white' }}>Copyrights 2022</h3>
                    </div>
                </footer>
            </main>

        </div>
    )
}

export default Home