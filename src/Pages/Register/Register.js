import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { AuthContext } from '../../contexts/AuthProvider';
import './Register.css';

const Register = () => {

  const [userType,setUserType] = useState('buyer');

  const [isSpinnerShow, setIsSpinnerShow] = useState(false);

    const { createUser, googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();
        setIsSpinnerShow(true);
        const form = event.target;
        console.log('inside registration',form)
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        const user = { email, name, userType };
        console.log(email, password, name, userType);

        createUser(email, password)
        .then((result) => {

            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((err) => console.error(err))
            navigate(from, { replace: true });
        })
        .catch((err) => console.error(err));
    };

    const handleSignInWithGoogle = () => {
        googleSignIn()
        .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
            console.log(user);
        })
        .catch((error) => console.error(error));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register Here</h1>
            </div>
            <div className="card  w-full  shadow-2xl bg-base-100 py-6">
              <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"

                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="your password"
                    className="input input-bordered"
                    required
                  />
                </div>


                <div>
                  <label for="pet-select">Choose Your Role:</label>
                    <br /> 
                  <select className="select-field-reg" onChange={(e)=>setUserType(e.target.value)} name="choice">
                    <option value="buyer" selected>Buyer</option>
                    <option value="seller" >Seller </option>
                  </select>
                </div>


                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                  {isSpinnerShow ? <BeatLoader color="#ffffff" /> : "Register"}
                  </button>
                </div>
                <p className="text-center">Or login with</p>
                <button
                  onClick={handleSignInWithGoogle}
                  className="btn btn-accent text-white"
                >
                  Google
                </button>
              </form>
              <p className="text-center">
                Already have an account?
                <Link to="/login" className="text-orange-600 font-bold">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
    );
};

export default Register;