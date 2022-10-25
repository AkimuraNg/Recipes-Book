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