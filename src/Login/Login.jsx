import React, { useState, useContext } from "react";
import logo from "../assets/google.png";
import tagine from "../assets/tagine.png";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import Box from "@mui/material/Box";
import "../assets/Css/orelega-one.css";
import { loginClient } from "../Api/userApi";
import { UserContext } from "../Context/UserContext";

const schema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

export default function Login({ show, onClose }) {
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isValidate, setisValidate] = useState(false);
  const [errors, setErrors] = React.useState({});

  const handleClick = (e) => {
    e.preventDefault();
    if (isValidate) {
      loginClient(formData)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("tokenAuth", response.data.tokenAuth);
          if (!response.data.tokenAuth) {
            console.log({ message: " Please login to access this resource." });
          } else {
            setUser(response.data.user);
            onClose();
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    } else console.log("not valid");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    schema
      .validateAt(e.target.name, { [e.target.name]: e.target.value })
      .then(() => {
        setErrors({ ...errors, [e.target.name]: "" });
        setisValidate(true);
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
        setisValidate(false);
      });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "px solid #000",
    boxShadow: 26,
    pl: 2,
    borderRadius: "50px",
  };

  return (
    <div>
      <Modal open={show} onClose={onClose}>
        <Box sx={style}>
          <div className="flex space-x-6 ">
            <div className="grid pb-16">
              <div className="flex justify-between ">
                <h1
                  className="font-mono text-4xl font-black text-lime-600 pt-8 pl-4"
                  style={{ fontFamily: "Orelega One, cursive" }}
                >
                  Foody
                </h1>
                <h6 className="bg-white text-m hover:underline pt-10 pr-2">Create an account</h6>
              </div>
              <div className=" mt-20 flex flex-col space-y-6 ">
                <p className="ml-2 pl-2 font-sans text-sm text-gray-600/50">
                  Welcome back! please use your email and password to login
                </p>
                <div className="ml-3 ">
                  <h1 className="text-l ml-3 font-semibold pb-2">Email</h1>
                  <TextField
                    name="email"
                    className="ml-5 pl-3 shadow-lg rounded-xl bg-neutral-100 w-full h-14 "
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </div>
                <div className="ml-3">
                  <h1 className="text-l ml-3 font-semibold pb-2">Password</h1>
                  <TextField
                    name="password"
                    type="password"
                    className="ml-5 pl-3 shadow-lg rounded-xl bg-neutral-100 w-full h-14"
                    onChange={handleChange}
                    autoComplete="new-password"
                    value={formData.password}
                    error={!!errors.password}
                    helperText={errors.password}
                  />
                </div>
                <div className="flex ml-6 justify-between ">
                  <div className="flex hover:text-gray-500">
                    <input type="checkbox" className="mr-1.5 rounded border-transparent" id="remember" name="Remember for 14 days" />
                    <label className="font-sans text-xs font-medium" htmlFor="remember">
                      Remember for 14 days
                    </label>
                  </div>
                  <button className=" bg-white pl-8 text-xs hover:underline pr-2">Forgot password</button>
                </div>
                <div className="pl-4 flex pt-2 gap-2">
                  <div>
                    <button className="rounded-full bg-lime-600	hover:bg-lime-800 w-32 h-12 text-white" onClick={handleClick}>
                      Sign in
                    </button>
                  </div>
                  <div>
                    <img className="w-6 h-9 pt-2" src={logo} alt="Google" />
                  </div>
                </div>
              </div>
            </div>
            <img src={tagine} alt="Description of image" style={{ width: "50%", height: "95vh", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}