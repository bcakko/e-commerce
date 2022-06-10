import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CollectionPage from "./pages/CollectionPage";
import DetailsPage from "./pages/DetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useSelector } from "react-redux"
import { RootState } from "./types/RootState.types"

function App() {

  const isLoggedIn = useSelector(
    (state: RootState) => state.user.isLoggedIn
  );

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={isLoggedIn ? <Navigate replace to="/"/> : <AuthPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route
          path="/collection/:mainCategory/:subCategory/:page"
          element={<CollectionPage />}
        />
        <Route path="/detail/:mainCategory/:id" element={<DetailsPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
