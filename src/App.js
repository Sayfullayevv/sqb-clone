import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router";
import Sidebar from './Components/Sidebar/Sidebar';
import Product from './Components/Pages/Product';
import { products } from "./assets/all_products";
import Main from './Components/Main/Main';
import Feedbacks from './Components/Feedbacks';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='' element={<Main/>}/>
        <Route path='/product/:id' element={<Product products={products} />}/>
        <Route path="/admin/fdbacks/" element={<Feedbacks/>}/>
      </Routes>
    </div>
  );
}

export default App;
