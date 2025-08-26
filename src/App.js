import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MainSection from './components/MainSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import CoursesDetail from './components/CoursesDetail';
import Events from './components/Events';
import Pricing from './components/Pricing';
import Trainer from './components/Trainer';
import Login from './components/Login';
import Signup from './components/Signup';
import { ToastContainer} from "react-toastify"
import Fact from './components/Fact';
import Frature from './components/Frature';
import Menu from './components/Menu';
import Teammm from './components/Teammm';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
    });
  }, []);
  return (
   <>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<MainSection/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Fact' element={<Fact/>}></Route>
    <Route path='/Frature' element={<Frature/>}></Route>
    <Route path='/Menu' element={<Menu/>}></Route>
    <Route path='/Teammm' element={<Teammm/>}></Route>
    <Route path='/Testimonial' element={<Testimonial/>}></Route>
    <Route path='/Blog' element={<Blog/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Courses' element={<Courses/>}></Route>
    <Route path='/CoursesDetail' element={<CoursesDetail/>}></Route>
    <Route path='/Events' element={<Events/>}></Route>
    <Route path='/Pricing' element={<Pricing/>}></Route>
    <Route path='/Trainer' element={<Trainer/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    </Route>
   </Routes>
   <ToastContainer/>
   </>
  );
}

export default App;
