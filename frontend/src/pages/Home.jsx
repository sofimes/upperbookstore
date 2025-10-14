import React from "react";
import Main from "../components/home/Main";
import BookCollection from "../components/home/BookCollection";
import Authors from "../components/home/Authors";

const Home = () => {
  return (
    <div>
      <Main />
      <BookCollection />
      <Authors />
    </div>
  );
};

export default Home;
