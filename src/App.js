import "./App.css";
import NavBar from "./components/nav_bar/NavBar";
import ExplanationPage from "./pages/ExplanationPage";
import MainPage from "./pages/main_page/MainPage";
import PhoneScreenPage from "./pages/main_page/PhoneScreenPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <PhoneScreenPage />
      <ExplanationPage />
    </div>
  );
}

export default App;
