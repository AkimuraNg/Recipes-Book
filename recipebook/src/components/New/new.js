import React from 'react'
import Navbar from '../navbar/navbar'

const New = () => {
    return (
        <div className="newRecipe">
            <header>
                <Navbar />
            </header>



            <main className="wrapper">
                <section>
                    <h1>Add your new recipe here</h1>
                    <p>You can add your own recipe here</p>
                </section>

                <section>
                    <h2>Start adding your recipe</h2>
                    <button type='button' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newRecipeModal">
                        Click here to start
                    </button>
                </section>



                <footer className="footer">
                    <div className="container-fluid">
                        <h3 style={{ color: 'white' }}>Copyrights 2022</h3>
                    </div>
                </footer>


            </main>

            <div className="modal fade" id="newRecipeModal" tabindex="-1" aria-labelledby="newRecipeModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="newRecipeModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New