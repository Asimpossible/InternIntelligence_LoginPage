import React from "react";
import "./Auth.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, database } from "../../config/firebase";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const [userName, setUserName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const container = document.querySelector(".container");
    const registerBtn = document.querySelector(".register-btn");
    const loginBtn = document.querySelector(".login-btn");

    registerBtn?.addEventListener("click", () => {
      container?.classList.add("active");
    });

    loginBtn?.addEventListener("click", () => {
      container?.classList.remove("active");
    });
  }, []);

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(database, "Users", user.uid), {
          email: user.email,
          userName: userName,
        });
      }
      toast.success(" User Registered Successfully!", {
        duration: 1700,
        style: {
          animation: "alternate",
          backgroundColor: "seagreen",
          color: "white",
        },
      });
      setUserName("");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      toast.error(` Error Occurred In Signing Up! ${error.message}`, {
        position: "bottom-center",
        duration: 1700,
        style: {
          animation: "alternate",
          backgroundColor: "red",
          color: "white",
        },
      });
      console.error("Signing Up Error:", error.message);
    }
  };

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(" User Logged In Successfully!", {
        duration: 1700,
        style: {
          animation: "alternate",
          backgroundColor: "seagreen",
          color: "white",
        },
      });
      navigate("/profile");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      toast.error(` Error Occurred In Signing In! ${error.message}`, {
        position: "bottom-center",
        duration: 1700,
        style: {
          animation: "alternate",
          backgroundColor: "red",
          color: "white",
        },
      });
      console.error("Signing In Error:", error.message);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <div className="form-box login">
          <form className="formDiv" onSubmit={signIn}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <p>or login with Google</p>
            <div className="social-icons">
              <a href="#">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form action="#" onSubmit={signUp}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <p>or register with social platforms</p>
            <div className="social-icons">
              <a href="#">
                <i className="bx bxl-google"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn">Register</button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
