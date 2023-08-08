import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import GetstartedPage from './pages/GetstartedPage.jsx';
import Feedback from './pages/Feedback.jsx';

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/getstarted" element={<GetstartedPage />} />
            <Route path="/feedback" element={<Feedback />} />
        </Routes>
    );
};

export default MyRoutes;