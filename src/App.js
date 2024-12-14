import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import AddPost from './Components/AddPost';
import Reels from './Components/Reels';
import Profile from './Components/Profile';
import Search from './Components/Search';


function App() {
  return (
    <BrowserRouter>
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <div class="container">
        <Link class="nav-link" to={"/"} 
                  >Instagram</Link>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav justify-content-center align-items-center mx-auto mt-2 mt-lg-0">
              <li class="nav-item">

                <Link class="nav-link" to={"/"} 
                  ><i class="bi bi-house"></i></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/Search"} 
                  ><i class="bi bi-search"></i>
                  </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/AddPost"} 
                  ><i class="bi bi-plus-circle"></i>
                  </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"Reels"} 
                  ><i class="bi bi-camera-reels"></i>
                  </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"Profile"} 
                  ><i class="bi bi-person-circle"></i>
                  </Link>
              </li>
             
           
            </ul>
          </div>
        </div>
      </nav>
      
      
      </div>
      

      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/AddPost" element={<AddPost />} />
        <Route path="/Reels" element={<Reels />} />
        <Route path="/Profile" element={<Profile />} />
        
      </Routes>
        </div>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
