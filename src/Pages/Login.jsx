import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../Components/SocialLogIn";
import UseAuth from "../Hook/UseAuth";

const Login = () => {
    const { signInUser } = UseAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(from);
                }
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (

        <div className="bg-cyan-50 mx-[1%] md:mx[10%] lg:mx-[20%] rounded-xl">
            <h1 className="text-2xl text-center my-10 pt-6">Please Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email"
                        className="input input-bordered"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-600">Email is Required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password"
                        className="input input-bordered"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className="text-red-600">Password is Required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-black text-white font-bold text-xl">Login</button>
                </div>
            </form>
            <p className="text-center mt-4">Do not have an account
                <Link className="text-blue-600 font-bold" to="/register"> Register</Link> </p>
            <div className="md:w-3/4 lg:w-1/2 mx-auto pb-6">
                <SocialLogIn ></SocialLogIn>
            </div>

        </div>

    );
};

export default Login;