import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage"
function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/search/:searchTerm"
                        element={
                            <div>
                                <div className="app__page">
                                    <Sidebar />
                                    <SearchPage />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <div>
                                <div className="app__page">
                                    <Sidebar />
                                    <RecommendedVideos />
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
