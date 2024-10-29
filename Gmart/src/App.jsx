// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Dropdowns from './Dropdowns';
import Carousel from './Carousel';
import PromoSection from './PromoSection';
import ProductList from './ProductList';
import Footer from './Footer.';
import SignIn from './SignIn';
const Home = () => (
    <div>
        <Dropdowns />
        <Carousel />
        <PromoSection />
        <ProductList />
    </div>
);

const SimplePage = ({ title }) => <h2>{title}</h2>;

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<SimplePage title="Shopping Cart" />} />
                <Route path="/groceries" element={<SimplePage title="Groceries" />} />
                <Route path="/home-lifestyle" element={<SimplePage title="Home & Lifestyle" />} />
                <Route path="/electronics" element={<SimplePage title="Electronics" />} />
                <Route path="/fashion" element={<SimplePage title="Fashion" />} />
                <Route path="/all-categories" element={<SimplePage title="All Categories" />} />
                <Route path="/Signin" element={<SignIn />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

