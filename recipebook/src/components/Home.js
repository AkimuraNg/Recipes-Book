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
                <div className="container-fluid view">
                    <div className="row justify-content-between" >
                        <div className="col-2" style={{border: "1px solid black", marginLeft: 20}}>
                            Recommend for You
                        </div>
                        <div className="col-9" >
                            {/*Cooking home view*/}
                            <section className="cooking" style={{border: "1px solid black"}}>
                                <h3>Cooking Recipes</h3>
                            </section>

                            {/*Cocktail home view*/}
                            <section className="cocktail" style={{border: "1px solid black"}}>
                                <h3>Cocktail Recipes</h3>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home