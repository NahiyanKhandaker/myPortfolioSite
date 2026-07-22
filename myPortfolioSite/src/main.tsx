import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header.tsx'
import Home from './App.tsx'
import About from './pages/about.tsx'
import ProjectPage from './pages/projects.tsx'   
import Footer from './components/footer.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app-layout">
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectPage />} />  
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)