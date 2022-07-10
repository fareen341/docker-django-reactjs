import { Navigate, useNavigate } from "react-router-dom";



const Protected = ({ isLoggedIn, children }) => {
    let navigate = useNavigate();
    if (isLoggedIn=="  ") {
        return navigate('/')
    }
    return navigate('/account')
};
export default Protected;