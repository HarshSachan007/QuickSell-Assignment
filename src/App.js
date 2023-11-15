import React, { useEffect } from "react";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";
// import Card from './components/Card/Card';
import DashBoard from "./components/DashView/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "./Actions/DataAction";
import Loading from "./components/Loading/Loading";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment/"
        );
        dispatch(fetchAllData(data));
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <TopNav/>
      <hr style={{marginTop : "10px"}} />
      <DashView/>
    </div>
  ) : <Loading/>
};

export default App;
