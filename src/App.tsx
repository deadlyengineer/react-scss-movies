import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import './styles.scss';
import { Navbar } from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;