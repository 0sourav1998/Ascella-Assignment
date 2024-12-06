import React, { useState } from "react";
import axios from "axios"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`,formData);
      if(response && response.data.success){
        localStorage.setItem("token",response.data.token);
        navigate("/")
        toast.success(response.data.message)
      }
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="heading">Login</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="fields">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="input"
            required
          />
        </div>

        <div className="fields">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            className="input"
            required
          />
        </div>

        <button type="submit" className="btn">
          {
            loading ? "Loading" : "Login"
          }
        </button>
      </form>
    </div>
  );
};

export default Login;
