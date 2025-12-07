import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Individuals from '../Individuals/Individuals';
import History from '../History/History';
import Vital from '../Vital/Vital';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

function Main() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Individuals/>
      <History/>
      <Vital/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Main;
