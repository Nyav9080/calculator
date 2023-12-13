import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
 import Calc from './component/Calc';
 import Footer from './component/Footer';
 import About from './component/About';
 import Contact from './component/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './component/Test';

function App() {
  return (
    <div>
      <NavBar/>
       <Calc/>
      <Footer/>
      <About/>
      <Contact/>
      <Test/> 
    </div>
  );
}

export default App;
