import Navbar from "../components/Navbar.jsx";
import IntroCard from '../components/IntroCard.jsx';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="container custom-margin-homepage">
                <IntroCard />
            </div>
        </>
    );
};

export default HomePage;