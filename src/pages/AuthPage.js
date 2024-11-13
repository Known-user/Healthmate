import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { FiPhone, FiUser } from 'react-icons/fi';
import poster from "../Images/logo7.jpeg";
import { toast } from 'react-hot-toast'; // Import react-hot-toast for notifications
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    phone: '',
    otp: '',
    name: '',
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhoneNumber = (phone) => {
    // Check if phone number is exactly 10 digits
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { phone } = formData;

    // Trim the phone number to ignore leading/trailing spaces
    const trimmedPhone = phone.trim();

    // Validate phone number before making the login API call
    if (!trimmedPhone) {
      toast.error('Phone number is required.');
      return;
    }

    if (!validatePhoneNumber(trimmedPhone)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: trimmedPhone,
        }),
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        // Show success notification using react-hot-toast
        toast.success(data.message); // Display the message from the response
        // Show OTP field after login success
        setShowOtp(true);
      } else {
        setErrorMessage(data.error || 'Login failed.');
        toast.error(data.error || 'Login failed.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while logging in.');
      toast.error('An error occurred while logging in.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    const { phone, otp } = formData;

    if (!otp) {
      toast.error('OTP is required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/user/verifyOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          otp,
        }),
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        // Handle successful OTP verification (e.g., redirect or store user data)
        toast.success("Logged In");
        dispatch({
          type: 'IS_LOGGED_IN',
          payload: 'true',
        });
        // Redirect to the home page
        navigate('/');
      } else {
        setErrorMessage(data.error || 'OTP verification failed.');
        toast.error(data.error || 'OTP verification failed.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while verifying OTP.');
      toast.error('An error occurred while verifying OTP.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Trim the phone number to ignore leading/trailing spaces
    const trimmedPhone = formData.phone.trim();

    // Validate phone number before making the login API call
    if (!trimmedPhone) {
      toast.error('Phone number is required.');
      return;
    }

    if (!validatePhoneNumber(trimmedPhone)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Sign Up Successfull');
        console.log('Sign Up Successful:', data);
      } else {
        setErrorMessage(data.error || 'Sign Up failed.');
        toast.error(data.error || 'Sign Up failed.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while signing up.');
      toast.error('An error occurred while signing up.');
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#020410] font-poppins flex items-center justify-center">
      <div className="absolute w-full h-full bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${poster})` }}></div>

      <div className="absolute w-full h-full bg-cover bg-center rounded-lg shadow-xl"
        style={{ backgroundImage: `url(${poster})` }}>
        <div className="absolute w-full h-full bg-black opacity-40"></div>
      </div>

      <div className="relative flex w-[80%] h-[600px] rounded-lg overflow-hidden">
        {/* Left Content */}
        <div className="w-1/2 h-full bg-transparent p-12 flex flex-col justify-between text-[#f0f0f0]">
          <h2 className="text-4xl font-bold flex items-center space-x-3">
            <FiUser className="text-5xl" /> <span className="text-[#27ceac]">HealthMate</span>
          </h2>
          <div className="space-y-8">
            <h2 className="text-5xl font-semibold">Welcome to HealthMate! <br /><span className="text-3xl">Your Trusted Pharmacy.</span></h2>
            <p className="text-lg">We're dedicated to delivering high-quality health products and services directly to your doorstep.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:scale-110 transition transform"><FaFacebook size={28} className="text-[#e4e4e4]" /></a>
              <a href="#" className="hover:scale-110 transition transform"><FaInstagram size={28} className="text-[#e4e4e4]" /></a>
              <a href="#" className="hover:scale-110 transition transform"><FaLinkedin size={28} className="text-[#e4e4e4]" /></a>
              <a href="#" className="hover:scale-110 transition transform"><FaDribbble size={28} className="text-[#e4e4e4]" /></a>
            </div>
          </div>
        </div>

        {/* Right Box - Login/Signup */}
        <div className="w-1/2 h-full bg-transparent backdrop-blur-lg relative">
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-transform duration-500 ease-in-out transform ${isLogin ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          >
            <h2 className="text-white text-4xl font-semibold text-center">Login</h2>
            <form onSubmit={showOtp ? handleVerifyOtp : handleLogin} className="space-y-8 mt-10 w-full max-w-[380px]">
              <div className="relative w-full h-[55px] border-b-2 border-gray-300 my-8">
                <span className="absolute top-[15px] right-0 text-[22px] text-gray-300">
                  <FiPhone />
                </span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-full bg-transparent border-none outline-none text-[18px] text-gray-300 pr-7 peer"
                />
                <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[18px] font-medium text-gray-300 pointer-events-none transition-all duration-500 ease-in-out peer-focus:top-[-5px] peer-focus:text-white peer-valid:top-[-5px] peer-valid:text-white">
                  Phone Number
                </label>
              </div>

              {showOtp && (
                <div className="relative w-full h-[55px] border-b-2 border-gray-300 my-8">
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    required
                    className="w-full h-full bg-transparent border-none outline-none text-[18px] text-gray-300 pr-7 peer"
                  />
                  <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[18px] font-medium text-gray-300 pointer-events-none transition-all duration-500 ease-in-out peer-focus:top-[-5px] peer-focus:text-white peer-valid:top-[-5px] peer-valid:text-white">
                    Enter OTP
                  </label>
                </div>
              )}


              <button
                type="submit"
                className="w-full py-3 bg-[#27ceac] rounded-lg text-[#f0f0f0] font-semibold shadow-xl"
              >
                {showOtp ? 'Verify OTP' : 'Login'}
              </button>

              <p className="text-center text-[#f0f0f0] mt-6 text-lg">Don't have an account?<br /><a href="#" className="text-lg text-[#27ceac]" onClick={() => setIsLogin(false)}>Sign Up</a></p>
            </form>
          </div>

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-transform duration-500 ease-in-out transform ${!isLogin ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <h2 className="text-white text-4xl font-semibold text-center">Sign Up</h2>
            <form onSubmit={handleSignUp} className="space-y-8 mt-10 w-full max-w-[380px]">
              {/* Name */}
              <div className="relative w-full h-[55px] border-b-2 border-gray-300 my-8">
                <span className="absolute top-[15px] right-0 text-[22px] text-gray-300">
                  <FiUser />
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-full bg-transparent border-none outline-none text-[18px] text-gray-300 pr-7 peer"
                />
                <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[18px] font-medium text-gray-300 pointer-events-none transition-all duration-500 ease-in-out peer-focus:top-[-5px] peer-focus:text-white peer-valid:top-[-5px] peer-valid:text-white">
                  Name
                </label>
              </div>

              <div className="relative w-full h-[55px] border-b-2 border-gray-300 my-8">
                <span className="absolute top-[15px] right-0 text-[22px] text-gray-300">
                  <FiPhone />
                </span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-full bg-transparent border-none outline-none text-[18px] text-gray-300 pr-7 peer"
                />
                <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[18px] font-medium text-gray-300 pointer-events-none transition-all duration-500 ease-in-out peer-focus:top-[-5px] peer-focus:text-white peer-valid:top-[-5px] peer-valid:text-white">
                  Phone Number
                </label>
              </div>

              {/* Email (Optional) */}
              <div className="relative w-full h-[55px] border-b-2 border-gray-300 my-8">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-full bg-transparent border-none outline-none text-[18px] text-gray-300 pr-7 peer"
                />
                <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[18px] font-medium text-gray-300 pointer-events-none transition-all duration-500 ease-in-out peer-focus:top-[-5px] peer-focus:text-white peer-valid:top-[-5px] peer-valid:text-white">
                  Email (Optional)
                </label>
              </div>


              <button
                type="submit"
                className="w-full py-3 bg-[#27ceac] rounded-lg text-[#f0f0f0] font-semibold shadow-xl"
              >
                Sign Up
              </button>

              <p className="text-center text-[#f0f0f0] mt-6 text-lg">Already have an account?<br /><a href="#" className="text-lg text-[#27ceac]" onClick={() => setIsLogin(true)}>Login</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;


