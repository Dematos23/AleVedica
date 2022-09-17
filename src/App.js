import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./views/InicioView.js";
import Apta from "./views/AptaView.js";
import Historia from "./views/HistoriaView.js";
import Tecnicas from "./views/TecnicasView.js";
import Testimonios from "./views/TestimoniosView.js";
import ErrorView from "./views/ErrorView.js";
import Navegacion from "./components/Navegacion.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/eresapta" element={<Apta />}></Route>
        <Route path="/historia" element={<Historia />}></Route>
        <Route path="/tecnicas" element={<Tecnicas />}></Route>
        <Route path="/testimonios" element={<Testimonios />}></Route>
        <Route path="*" element={<ErrorView />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
