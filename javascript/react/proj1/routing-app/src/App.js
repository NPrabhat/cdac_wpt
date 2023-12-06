import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Menu } from "./Menu";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu/>}>
                <Route index element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="services" element={<Services/>} />
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
