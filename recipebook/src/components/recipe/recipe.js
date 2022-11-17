import React from 'react'
import Navbar from '../navbar/navbar'
import headImage from './pumppie.png'

const Recipe = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main className="wrapper">
                <section className="headImage" style={{marginTop: 32}}>
                    <h1 style={{color: "#B59F84"}}>Pumpkin Pie</h1>
                    <p style={{marginTop: 20}}>Description</p>
                    <img src={headImage} alt="header" className="headerImage"/>
                </section>

                <section className="content" style={{ marginTop: 100 }}>
                    <div className="container-fluid">
                        <div className="row justify-content-evenly howTo">
                            <div className="col">
                                <h2 style={{color: "#B59F84"}}>Ingredients</h2>
                                <p>
                                    750g Pumpkin <br />
                                    350g Shortcrust Pastry<br />
                                    Dusting Plain Flour<br />
                                    140g Caster Sugar<br />
                                    ½ tsp Salt<br />
                                    ½ tsp Nutmeg<br />
                                    1 tsp Cinnamon<br />
                                    2 Beaten Eggs<br />
                                    25g Butter<br />
                                    175g Milk<br />
                                    1 tblsp Icing Sugar</p>
                            </div>

                            <div className="col">
                                <h2 style={{color: "#B59F84"}}>How to Cook</h2>
                                <p>In a separate bowl, combine the sugar, salt, nutmeg and half the cinnamon. <br/>
                                    Mix in the beaten eggs, melted butter and milk, then add to the pumpkin purée and stir to combine. <br/>
                                    Pour into the tart shell and cook for 10 mins, then reduce the temperature to 180C/160C fan/gas 4. <br/>
                                    Continue to bake for 35-40 mins until the filling has just set. Leave to cool, then remove the pie from the tin.</p>
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

export default Recipe