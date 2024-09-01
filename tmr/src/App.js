import './App.css';
import NavBar  from './Components/Navbar';
import MainContent from './Components/Main';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,Route,Router,Routes } from "react-router-dom";
import SideNav from './Components/SideBar';
import Item from './Components/ItemsList';
import  data from "./Components/Constants/Listitems"
function RootParent(){
   return(
    <div className='flex'>
      <SideNav></SideNav>
      <Item data={data}></Item>
    </div>
   )
}
function App() {
  return (
    <>
     <NavBar/>
    <BrowserRouter>
   
      <Routes>
        <Route element={<MainContent></MainContent>} path='/'></Route>
        <Route element={<RootParent></RootParent>} path='/shop'></Route>
      </Routes>
      <Routes>
        
      </Routes>
   
    </BrowserRouter>
    </>
  );
}

export default App;
