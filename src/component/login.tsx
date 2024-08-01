import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../common/Modal";
import { login } from "../redux/actions";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const loginData: any = useSelector((state) => state);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLoginEmail, setUserLoginEmail] = useState("");
  const [userLoginPassword, setUserLoginPassword] = useState("");
  const [error, serError] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const details = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUserLoginEmail(userData?.email)
      setUserLoginPassword(userData?.password)
      console.log("value of ", userData);
      if (userData?.isLoggedIn == true) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }else{
      
    }
    
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
    if (
      userLoginEmail == email &&
      userLoginPassword == password &&
      email !== "" &&
      password !== ""
    ) {
      dispatch(login(email, password));
      const userDetails = {email, password, loggedIn:true}
      localStorage.setItem("userAuth", JSON.stringify(userDetails));
      navigate("/dashboard");
    } else {
      setIsModalOpen(true);
      serError("User not found, need to signup");
    }
  };

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-700">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign In
          </button>

          <div className="text-sm">
            <button
              type="button"
              onClick={handleCreateAccount}
              className="font-medium text-blue-600 hover:text-blue-500 flex items-end justify-end"
            >
              Create account
            </button>
          </div>
        </form>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          children={error}
        />
      </div>
    </div>
  );
};

export default Login;
