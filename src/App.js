import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router";
import Sidebar from './Components/Sidebar/Sidebar';
import Product from './Components/Pages/Product';
import { products } from "./assets/all_products";
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='' element={<Main/>}/>
        <Route path='/product/:id' element={<Product products={products} />}/>
      </Routes>
    </div>
  );
}

export default App;
