import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvList from "./pages/TvList";
import CategoriesPage from "./pages/CategoriesPage";
import SingleMoviePage from "./pages/SingleMoviePage";
import SingleTvPage from "./pages/SingleTvPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tvlist" element={<TvList />} />
        <Route path="/categories/:category" element={<CategoriesPage />} />
        <Route path="/films/:id" element={<SingleMoviePage />} />
        <Route path="/series/:id" element={<SingleTvPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
