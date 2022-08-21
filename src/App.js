import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvList from "./pages/TvList";
import CategoriesPage from "./pages/CategoriesPage";
import SingleMoviePage from "./pages/SingleMoviePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tvlist" element={<TvList />} />
        <Route path="/categories/:category" element={<CategoriesPage />} />
        <Route path="/films/:id" element={<SingleMoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
