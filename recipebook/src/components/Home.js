import React from 'react'
import Navbar from './navbar/navbar'
import './Home.css'

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
                
                {/*Cooking home view*/}
                <section className="cooking">
                    <h3>Cooking Recipes</h3>
                </section>

                {/*Cocktail home view*/}
                <section className="cocktail">
                    <h3>Cocktail Recipes</h3>
                </section>
            </main>
        </div>
    )
}

export default Home