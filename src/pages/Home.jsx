import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    // destr on the air
    const { data } = await axios(url);
    
    console.log(data);
    setTutorials(data)
  };
    //? didmount 
    useEffect(() => {
      getTutorials();
    }, [])
    
    // setTutorials(data)


  return (
    <>
      <AddTutorial />
      <TutorialList tutorials = {tutorials}/>
    </>
  );
};

export default Home;
