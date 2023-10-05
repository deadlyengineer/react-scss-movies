import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import './styles.scss';
import { Navbar } from "./components/navbar";
import { MoviePage } from "./pages/movie";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;