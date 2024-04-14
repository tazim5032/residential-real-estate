import UseAuth from "../Hook/UseAuth";

const SocialLogIn = () => {
    const { googleLogIn } = UseAuth();
    return (
        <div>
            <div className="divider">Continue With</div>
            <div>
                <button onClick={() => googleLogIn()}
                className='btn btn-primary btn-outline'>Google</button>
            </div>
        </div>
    );
};

export default SocialLogIn;