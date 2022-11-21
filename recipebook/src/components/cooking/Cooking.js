import React from 'react'
import Navbar from '../navbar/navbar'
import items from '../data/cooking.json'


const Cooking = () => {
  return (
    <div className='Cooking-view'>
      <header>
        <Navbar />
      </header>
      <main className='wrapper'>
        {/* Intro */}
        <section className='description'>
          <h1>Cooking Recipes</h1>
          <p>This is a list of cooking recipes</p>
        </section>

        {/* Item list */}
        <section className="list">
          <div className="container-fluid">
            <div className="row justify-content-center">
              {items.map(post => {
                return (
                  <div className="card">
                    <div className='card-body' key={post.id}>
                      <img src={post.image} alt="recipe" className="image" style={{cursor: 'pointer'}}/>
                      <h5 className="card-title">{post.title}</h5>
                      <p className='card-text'>{post.desc}</p>
                      <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#recipeModal">View recipe</button>
                    </div>
                  </div>
                )
              })}
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

export default Cooking