import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  //? CRUD: (GET-READ)
  const getTutorials = async () => {
    try {
      // destr on the air
      const { data } = await axios(url);

      console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  //? didmount
  useEffect(() => {
    getTutorials();
  }, []);

  // setTutorials(data)

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
