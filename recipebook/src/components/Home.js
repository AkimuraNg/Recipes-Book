import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import meal from './data/Home page data/Item1.json'
import cocktail from './data/Home page data/Item2.json'
import recommend from './data/Home page data/recommend.json'

import { Link } from 'react-router-dom'

/*Home page view*/
const Home = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    const Vsettings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };


    return (
        <div className="Home">

            <main className="wrapper">
                {/* Introduction*/}
                <section className="description">
                    <h1>Recipes Book</h1>
                    <p>Welcome to Recipes Book</p>
                </section>

                {/* Views */}
                <section className="view">
                    <div className="container-fluid">
                        <div className="row justify-content-evenly" >
                            {/* Recommend view */}
                            <div className="col-2 recommend">
                                <h3 style={{ marginTop: 12 }}>Recommend for You</h3>
                                <Slider {...Vsettings}>
                                    {recommend.map(post => {
                                        return (
                                            <div className="card">
                                                <div className='card-body' key={post.id}>
                                                    <img src={post.image} alt="recipe" className="image" style={{ cursor: 'pointer' }}/>
                                                    <h5 className="card-title" style={{ marginTop: 4 }}>{post.title}</h5>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>

                            <div className="col-7" >
                                {/*Cooking home view*/}
                                <section className="cooking" >
                                    <div className='titles'>
                                        <h3>Cooking Recipes</h3>
                                        <Link style={{ cursor: "pointer", textDecoration: "underline", color: "#B59F84" }} to="/cooking">See more</Link>
                                    </div>
                                    <div className="items">
                                        <Slider {...settings}>
                                            {meal.map(post => {
                                                return (
                                                    <div className="card">
                                                        <div className='card-body' key={post.id}>
                                                            <img src={post.image} alt="recipe" className="image" />
                                                            <h5 className="card-title">{post.title}</h5>
                                                            <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#recipeModal">View recipe</button>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Slider>
                                    </div>
                                </section>

                                {/*Cocktail home view*/}
                                <section className="cocktail" >
                                    <div className='titles'>
                                        <h3>Cocktail Recipes</h3>
                                        <Link style={{ cursor: "pointer", textDecoration: "underline", color: "#B59F84" }} to="/cocktail">See more</Link>
                                    </div>
                                    <div className="items">
                                        <Slider {...settings}>
                                            {cocktail.map(post => {
                                                return (
                                                    <div className="card">
                                                        <div className='card-body' key={post.id}>
                                                            <img src={post.image} alt="recipe" className="image" />
                                                            <h5 className="card-title">{post.title}</h5>
                                                            <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#recipeModal">View recipe</button>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Slider>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Home