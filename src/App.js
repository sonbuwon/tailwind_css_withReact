import "./App.css";
import Banner from "./components/Banner";
import FoodCategories from "./components/FoodCategories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Point from "./components/Point";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Point />
      <Header />
      <Banner />
      <FoodCategories />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}

export default App;
