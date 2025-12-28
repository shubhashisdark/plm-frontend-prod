import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import Hero from '../pages/Hero'
import FeaturedProperties from '../pages/FeaturedProperties'
import PropertyCategories from '../pages/PropertyCategories'
import HowItWorks from '../pages/HowItWorks'
import WhyChooseUs from '../pages/WhyChooseUs'
import RecentlyAddedProperties from '../pages/RecentlyAddedProperties'
import Testimonials from '../pages/Testimonials'
import CallToAction from '../pages/CallToAction.jsx'

const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <FeaturedProperties />
    <PropertyCategories />
    <RecentlyAddedProperties />
    <HowItWorks />
    <WhyChooseUs />
    <Testimonials />
    <CallToAction />
    <Footer />
    </>
  )
}

export default HomePage