import React, { useState } from 'react';
//import { Box } from '@mui/material';

//import Exercises from '../components/Exercises';
//import SearchExercises from '../components/SearchExercises';
//import HeroBanner from '../components/HeroBanner';

const Home = () => {
  //const [exercises, setExercises] = useState([]);
  //const [bodyPart, setBodyPart] = useState('all');

  return (
    <h1>testing</h1>
    
    

    //<Box>
    //  <HeroBanner />
      //<SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      //<Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    //</Box>

  );
};

function MyComponent() {
  const myStyles = {
    backgroundImage: "url(https://i.postimg.cc/1zc0BHNQ/Home-page-stride-01.jpg)",
    height: "100vh",
    backgroundSize: "cover"
  };

  return <div style={myStyles}>{/* content goes here */}</div>;
}

export default Home;

