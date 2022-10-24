import React from 'react'
import Navbar from '../navbar/navbar'

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
      </main>
    </div>
  )
}

export default Cooking