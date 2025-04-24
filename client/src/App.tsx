import "./App.css";
import "./font/MonaSans-Regular.ttf";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
