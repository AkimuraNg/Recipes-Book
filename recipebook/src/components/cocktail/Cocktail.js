import React from 'react'
import Navbar from '../navbar/navbar'

const Cocktail = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className='wrapper'>
        {/* Intro */}
        <section className='description'>
          <h1>Cocktail Recipes</h1>
          <p>This is a list of cocktail recipes</p>
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

export default Cocktail