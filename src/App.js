import { useState, useEffect } from "react";
import TitleContainer from "./components/TitleContainer";
import Overview from "./components/Overview";
import ImageContainer from "./components/ImageContainer";
import "./styles.css";
import Axios from "axios";

export default function App() {
  const [data, setData] = useState({});
  const apiHandler = async () => {
    const response = await Axios.get(
      "https://www.whenisthenextmcufilm.com/api"
    );
    setData(response.data);
  };
  useEffect(() => {
    apiHandler();
  }, []);
  return (
    <div>
      <TitleContainer data={data} />
      <ImageContainer data={data} />
      <Overview data={data} />
    </div>
  );
}
