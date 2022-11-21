import React from 'react'

const Modal = () => {
    return (
        <div className="modal fade" id="recipeModal" tabindex="-1" aria-labelledby='recipeModalLabel' aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content" style={{ background: "#FDF4E3" }}>
                    <div className="modal-header">
                        <h1 className="modal-title" id="recipeModalLabel">Recipe view Modal test</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={"https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg"} alt="body" />

                        <div className="container-fluid">
                            <div className="row justify-content-evenly" style={{ marginTop: 20 }}>
                                <div className="col">
                                    <h2 style={{ color: "#B59F84" }}>Ingredients</h2>
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
                                    <h2 style={{ color: "#B59F84" }}>How to Cook</h2>
                                    <p>Place the pumpkin in a large saucepan, cover with water and bring to the boil. 
                                    Cover with a lid and simmer for 15 mins or until tender. Drain pumpkin; let cool.
                                    \r\nHeat oven to 180C/160C fan/gas 4. 
                                    Roll out the pastry on a lightly floured surface and use it to line a 22cm loose-bottomed tart tin. 
                                    Chill for 15 mins. Line the pastry with baking parchment and baking beans, then bake for 15 mins. 
                                    Remove the beans and paper, and cook for a further 10 mins until the base is pale golden and biscuity. 
                                    Remove from the oven and allow to cool slightly.\r\nIncrease oven to 220C/200C fan/gas 7. 
                                    Push the cooled pumpkin through a sieve into a large bowl. 
                                    In a separate bowl, combine the sugar, salt, nutmeg and half the cinnamon. 
                                    Mix in the beaten eggs, melted butter and milk, then add to the pumpkin purée and stir to combine. 
                                    Pour into the tart shell and cook for 10 mins, then reduce the temperature to 180C/160C fan/gas 4.
                                     Continue to bake for 35-40 mins until the filling has just set.\r\nLeave to cool, then remove the pie from the tin. 
                                     Mix the remaining cinnamon with the icing sugar and dust over the pie. Serve chilled.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Modal