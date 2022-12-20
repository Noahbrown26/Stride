import React from 'react';
//import { Box } from '@mui/material';
//import Exercises from '../components/Exercises';
//import SearchExercises from '../components/SearchExercises';
//import HeroBanner from '../components/HeroBanner';

const Home = () => {
  //const [exercises, setExercises] = useState([]);
  //const [bodyPart, setBodyPart] = useState('all');
  
  return (
    <section className="hero-image">
      <div className="container mx-auto flex px-10  md:flex-row flex-col items-center py-56">
            <div className="lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium">
                Become a,
                <br className="hidden lg:inline-block" /> Brand New You
                
              </h1>
              <p className="mb-8 leading-relaxed poppins-300 text-gray-400 w-3/6">
                Find new workouts, create a routine, 
                <br className="hidden lg:inline-block" /> become the beast that you were made 
                to be.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white indigo-bg border-0 py-2 px-6 focus:outline-none hover:bg-green-600 light-shadow rounded-full text-lg">
                  login
                </a>
                <a
                  href="#contact"
                  className="ml-4 inline-flex text-gray-400 border-gray-400 border-2 py-2 px-6 hover:text-white hover:bg-gray-600 hover:border-gray-600 rounded-full text-lg">
                  sign up
                </a>
              </div>
            </div>
          </div>
    </section>
    
    

    //<Box>
    //  <HeroBanner />
      //<SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      //<Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    //</Box>

  );
};

export default Home;

