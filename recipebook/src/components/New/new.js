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
            </main>

            <div className="modal fade" id="newRecipeModal" tabindex="-1" aria-labelledby="newRecipeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="newRecipeModalLabel">Create your recipe</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                        <div className="modal-body">

                            <div className="mb-3">
                                <label for="itemName" className="form-label">Meal / Drink Name</label>
                                <input type="text" className="form-control" id="itemName" placeholder="Chow Mein" />
                            </div>
                            <div className="mb-3">
                                <label for="itemCategory" className="form-label">Category</label>
                                <input type="text" className="form-control" id="itemCategory" placeholder="Chow Mein" />
                            </div>
                            <div className="mb-3">
                                <label for="ingredients" className="form-label">Ingredients</label>
                                <textarea type="text" className="form-control" id="ingredients" placeholder="Chow Mein" rows="10" />
                            </div>
                            <div className="mb-3">
                                <label for="process" className="form-label">How to Make</label>
                                <textarea type="text" className="form-control" id="process" placeholder="Chow Mein" rows="10" />
                            </div>
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