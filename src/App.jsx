import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import About from './component/About';
import BlogDetails from './component/BlogsDetails';
import Create from './component/Create';
import NotFound from './component/NotFound';
import Contact from './component/Contact';
import Home from './component/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route>
        <Route path='/' index element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />
      </Route>
      <Route element={<Footer />} />
    </Route>
  )
);

function App() {
  // return (
  // <Router>
  //   <div className='h-screen'>
  //     <Navbar />
  //     <Routes>
  //       <Route exact path='/' element={<Home />} />
  //       <Route exact path='/about' element={<About />} />
  //       <Route exact path='/create' element={<Create />} />
  //       <Route exact path='/contact' element={<Contact />} />
  //       <Route path='/blogs/:id' element={<BlogDetails />} />
  //       <Route path='*' element={<NotFound />} />
  //     </Routes>
  //     <Footer />
  //   </div>
  // </Router>
  // );
  return <RouterProvider router={router} />;
}

export default App;
