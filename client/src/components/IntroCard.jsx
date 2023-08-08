import { Link } from "react-router-dom";

const IntroCard = () => {
    return (
        <div className="card intro-card">
            <h3>Leverage Artifificial intelligence to find the best fit for roles you're hiring</h3>
            <Link to="/getstarted" className="btn btn-outline-secondary">Get Started</Link>
        </div>
    );
};

export default IntroCard;