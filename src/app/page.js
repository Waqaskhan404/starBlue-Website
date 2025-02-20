import Facts from '@/components/Facts';
import HeroSlider from '@/components/HeroSlider';
import NavBar from '@/components/NavBar';
import PlantCategories from '@/components/PlantCategories';
import ProjectSection from '@/components/ProjectSection';
import SquareWithRulerIcon from '@/components/SquareWithRulerIcon';
import React from 'react'

const Home = () => {
  return (

    <div className='mt-3'>
      <HeroSlider/>
      <SquareWithRulerIcon/>
      <Facts/>
      <PlantCategories/>
      <ProjectSection/>
    </div>
  )
}

export default Home;