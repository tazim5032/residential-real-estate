import UseAuth from "../Hook/UseAuth";

const SocialLogIn = () => {
    const { googleLogIn, githubLogIn } = UseAuth();
    return (
        <div>
            <div className="divider">Continue With</div>
            <div className="flex justify-around">
                <button onClick={() => googleLogIn()}
                className='btn btn-primary btn-outline'>Google</button>
                <button onClick={() => githubLogIn()}
                className='btn btn-secondary btn-outline'>GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogIn;