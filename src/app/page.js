import Facts from '@/components/Facts';
import HeroSlider from '@/components/HeroSlider';
import IndoorPlants from '@/components/IndoorPlants';
import PlantCategories from '@/components/PlantCategories';
import ProjectSection from '@/components/ProjectSection';
import QuickEnquiry from '@/components/QuickEnquiry';
import React from 'react'

const Home = () => {
  return (

    <div className='mt-3'>
      <HeroSlider/>
      <Facts/>
      <PlantCategories/>
      <ProjectSection/>
      <QuickEnquiry/>
      <IndoorPlants/>
    </div>
  )
}

export default Home;