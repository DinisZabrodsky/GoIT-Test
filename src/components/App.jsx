import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';

const Header = lazy(() => import('../components/Header/Header'))
const Home = lazy(() => import('../pages/Home'))
const Cars = lazy(() => import('../pages/Cars'))
const Favorite = lazy(() => import('../pages/FavoritePage'))

// import './App.scss'

export const App = () => {
  return <>
  
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path="cars" element={<Cars/>}/>
        <Route path="favorites" element={<Favorite/>}/>
      </Route>
    </Routes>
  </>
};
