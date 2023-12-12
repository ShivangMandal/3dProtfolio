import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox =({text, link, btnText})=>(
    <div className='info-box'>
       <p className='font-medium sm:text-xl text-center'>{text}</p> 
        <Link className='neo-brutalism-white neo-btn' to={link}>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>

)

const renderContent={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center 
        neo-brutalism-red py-4 px-8 text-white mx-5'>
        
        Hi, I am <span className='font-semibold'>Shivang</span>👋
        <br/>
        A <span className='font-semibold'>Full Stack Developer</span> from India.

        </h1>
    ),    
    2:(
        <InfoBox
        text="Worked on many Projects and picked up many skills along the way"
        link="/about"
        btnText='Learn More'

        />

    ),
    3:(
        <InfoBox
        text="Led many projects to success, Curious about the impact?"
        link="/projects"
        btnText='view the impact!'

        />
    ),
    4:(
        <InfoBox
        text="Need a project done of looking for a dev? I'm just few keystrokes away!"
        link="/contact"
        btnText="Let's Talk!"

        />
    ),
    
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo