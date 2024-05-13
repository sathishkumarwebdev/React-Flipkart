import login_img_c4a81e from "../assets/login_img_c4a81e.png";
import { useState } from "react";
import { NavBar } from "../Components/NavBar";
import {Link} from "react-router-dom"
export function NewLogin() {
  //hooks
  const [phoneNumber, setPhoneNumber] = useState("");
  //   const [userName, setUserName] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [trigger, setTrigger] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  //   // functions handle
  //   const handleUserName = (e) => {
  //     setUserName(e.target.value);
  //   };
  //   const handlePassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  //   //data fetch

  //   async function handleLogin(userName, password) {
  //     setTrigger(true);
  //     try {
  //       const respose = await fetch("https://dummyjson.com/auth/login", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           username: userName,
  //           password: password,
  //         }),
  //       });
  //       const result = await respose.json();

  //       if (result?.token) {
  //         localStorage.setItem("token", result.token);
  //         setTrigger(false);
  //         setAuthentication(true);
  //       } else {
  //         setTrigger(false);
  //         alert(result.message);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  return (
    <>
      <NavBar />
      <div className="login-conatiner">
        <div className="login-content">
          <span>Looks like you're new here!</span>
          <p>Sign up with your mobile number to get started</p>
          <div>
            <img src={login_img_c4a81e} alt="pic" />
          </div>
        </div>
        <div className="login-box">
          <div className="login-input">
            <div className="login-text-box">
              <input
                type="text"
                placeholder="Enter Phone number"
                value={phoneNumber}
                onChange={handlePhoneNumber}
              />
            </div>
            {/* <div className="login-text-box">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePassword}
              />
            </div> */}

            <button>CONTINUE</button>
            <div className="existing-user">
              <Link to={"/Login"}>Existing User? Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
