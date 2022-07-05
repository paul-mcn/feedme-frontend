import React from 'react'
import Header from './components/nav/Header'
import OrganiseMyMealsApp from './pages/home-page/index.jsx'
import MealPage from './pages/meals-page'
import CreateMealPage from './pages/create-meal-page'
import AboutPage from './pages/about-page'
import ErrorPage from './pages/error-page'
import Footer from './components/nav/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App relative">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<OrganiseMyMealsApp />} />
          <Route path="/meals" element={<MealPage />} />
          <Route path="/meals/create-meal" element={<CreateMealPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
