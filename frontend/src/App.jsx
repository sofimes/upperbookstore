import { useState } from "react";
import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
