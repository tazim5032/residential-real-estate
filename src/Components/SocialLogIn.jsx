import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";

const SocialLogIn = () => {
    const { googleLogIn, githubLogIn } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';
    const handleSocialLogin = (socialProvider) =>{
        socialProvider()
        .then(result =>{
           if(result.user){
               navigate(from);
           }
        })
    }
    return (
        <div>
            <div className="divider">Continue With</div>
            <div className="flex justify-around">
                <button onClick={() => handleSocialLogin(googleLogIn)}
                className='btn btn-primary btn-outline'>Google</button>
                <button onClick={() => handleSocialLogin(githubLogIn)}
                className='btn btn-secondary btn-outline'>GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogIn;