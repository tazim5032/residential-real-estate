import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";

const Register = () => {

    const { createUser } = UseAuth();
    //console.log(createUser);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <h1 className="text-2xl text-center my-10">Please Register</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Full Name"
                        className="input input-bordered"
                        {...register("fullName", { required: true })}
                    />
                    {errors.fullName && <span className="text-red-600">Full Name is Required</span>}
                </div>

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
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL"
                        className="input input-bordered"
                        {...register("photo", { required: true })}
                    />
                    {errors.photo && <span className="text-red-600">Photo URL is Required</span>}
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
                    <button className="btn bg-black text-white font-bold text-xl">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Already have an account?
                <Link className="text-blue-600 font-bold" to="/login"> Login</Link> </p>
        </div>
    );
};

export default Register;