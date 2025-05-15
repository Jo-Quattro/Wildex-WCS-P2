import "./App.css";
import "./font/MonaSans-Regular.ttf";
import { Outlet } from "react-router";
import BackButton from "./components/BackButton";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <BackButton />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
