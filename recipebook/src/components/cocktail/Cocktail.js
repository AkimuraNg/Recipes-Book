import React from 'react'
import Navbar from '../navbar/navbar'

const Cocktail = () => {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
        <main className='wrapper'>
        {/* Intro */}
        <section className='description'>
          <h1>Cocktail Recipes</h1>
          <p>This is a list of cocktail recipes</p>
        </section>
      </main>
    </div>
  )
}

export default Cocktail