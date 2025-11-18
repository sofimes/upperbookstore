import React from "react";
import Main from "../components/home/Main";
import BookCollection from "../components/home/BookCollection";
import Authors from "../components/home/Authors";
import Book from "../components/home/Book";

const Home = () => {
  return (
    <div>
      <Main />
      <Book />
      <BookCollection />
      <Authors />
    </div>
  );
};

export default Home;
