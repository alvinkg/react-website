// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Navigation from './components/Navigation.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <index />
//   </React.StrictMode>,
// )


// import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  NoMatch,
  Sum
} from "./components";

ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sum" element={<Sum/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
    <Footer />
  </Router>,

);
document.getElementById("root")
