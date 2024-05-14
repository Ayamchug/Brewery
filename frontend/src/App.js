import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignupComponent from './components/SignupComponent';
import LoginComponent from './components/LoginComponent';
import SearchComponent from './components/SearchComponent';
import BreweryPageComponent from './components/BreweryPageComponent';
import ReviewComponent from './components/ReviewComponent';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/signup" element={<SignupComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/search" element={<SearchComponent />} />
                    <Route path="/brewery/:id" element={<BreweryPageComponent />}>
                        <Route index element={<ReviewComponent />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;