import { useContext } from "react";
import { RegisterContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import SignupPage from "./SignupPage.jsx";
import Spinner from "../components/Spinner";
import LoginPage from "./LoginPage";

const Feedback = () => {
    // const { message } = useContext(RegisterContext);
    return (
        <>
            {/* {
                message
            } */}
        </>
    );
};

export default Feedback;