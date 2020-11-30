import "./App.css";
import NavBar from "./components/nav_bar/NavBar";
import ExplanationPage from "./pages/ExplanationPage";
import MainPage from "./pages/main_page/MainPage";
import PhoneScreenPage from "./pages/main_page/PhoneScreenPage";
import Divider from "@material-ui/core/Divider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Divider />
      <PhoneScreenPage />
      <Divider />

      <ExplanationPage />
    </div>
  );
}

export default App;
