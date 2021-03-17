import React from 'react'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'
import { InfoSection } from '../../component/index'
const Home = () => {
    return (
        <>
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>  
          <InfoSection {...homeObjThree}/> 
          <InfoSection {...homeObjFour}/>  
        </>
    )
}

export default Home
