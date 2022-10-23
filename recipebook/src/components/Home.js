import React from 'react'
import Navbar from './navbar/navbar'
import './Home.css'
import recipe from './data/recipe.json'
import recommend from './data/recommend.json'

/*Home page view*/
const Home = () => {
    return (
        <div className="Home">
            <header>
                <Navbar />
            </header>
            <main className="wrapper">
                {/*Introduction*/}
                <section className="description">
                    <h1>Recipes Book</h1>
                    <p>Welcome to Recipes Book</p>
                </section>
                <div className="container-fluid view">
                    <div className="row justify-content-evenly" >
                        <div className="col-2 recommend">
                            <h3 style={{ marginTop: 12 }}>Recommend for You</h3>
                            {recommend.map(post => {
                                return (
                                    <div className="card">
                                        <div className='card-body' key={post.id}>
                                            <img src={post.image} alt="recipe" />
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className='card-text'>{post.desc}</p>
                                            <a href="#" className="btn btn-secondary">{post.links}</a>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="col-7" >
                            {/*Cooking home view*/}
                            <section className="cooking" style={{ border: "1px solid black" }}>
                                <div className='titles'>
                                    <h3>Cocktail Recipes</h3>
                                    <p style={{ marginTop: 8, cursor: "pointer", textDecoration: "underline" }}>See more</p>
                                </div>
                                <div className="items">
                                    {recipe.map(post => {
                                        return (
                                            <div className="card">
                                                <div className='card-body' key={post.id}>
                                                    <img src={post.image} alt="recipe" />
                                                    <h5 className="card-title">{post.title}</h5>
                                                    <p className='card-text'>{post.desc}</p>
                                                    <a href="#" className="btn btn-secondary">{post.links}</a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>

                            {/*Cocktail home view*/}
                            <section className="cocktail" style={{ border: "1px solid black" }}>
                                <div className='titles'>
                                    <h3>Cocktail Recipes</h3>
                                    <p style={{ marginTop: 8, cursor: "pointer", textDecoration: "underline" }}>See more</p>
                                </div>
                                <div className="items">
                                    {recipe.map(post => {
                                        return (
                                            <div className="card">
                                                <div className='card-body' key={post.id}>
                                                    <img src={post.image} alt="recipe" />
                                                    <h5 className="card-title">{post.title}</h5>
                                                    <p className='card-text'>{post.desc}</p>
                                                    <a href="#" className="btn btn-secondary">{post.links}</a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                {/* <footer className="footer">
                    <div className="container-fluid">
                        
                    </div>
                </footer> */}
            </main>
        </div>
    )
}

export default Home