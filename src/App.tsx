import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/favourites" element={<HomePage />} />
        <Route path="/cart" element={<HomePage />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;