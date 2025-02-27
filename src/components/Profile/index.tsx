import React from "react";
import { auth, database } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaArrowRight } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface IDocSnapData {
  userName: string;
  email: string;
}

const Index: React.FC = () => {
  const [userDetails, setUserDetails] = React.useState<IDocSnapData>();
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(database, "Users", user?.uid as string);
      const docSnap = await getDoc(docRef);
      setUserDetails(docSnap.data() as IDocSnapData);
      console.log("DocSnap data:", docSnap.data());
    });
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success(" User Logged Out Successfully!", {
        duration: 1700,
        style: {
          animation: "alternate",
          backgroundColor: "seagreen",
          color: "white",
        },
      });
      navigate("/");
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
      console.error("Logging Out Error:", error);
    }
  };
  return (
    <>
      <Toaster />
      {userDetails ? (
        <div className="card max-w-[32rem] min-h-[28rem] flex flex-col justify-around px-5 py-16 bg-cyan-700 rounded-lg text-white shadow-lg shadow-emerald-950">
          <div className="title max-w-82 text-4xl max-xs:text-center">
            Welcome to your profile!
          </div>
          <div className="userName text-2xl">
            Username:
            <span className="ml-3 text-green-400 font-semibold italic">
              {userDetails.userName}
            </span>
          </div>
          <div className="email text-2xl">
            Email:
            <span className="ml-3 text-green-400 font-semibold italic">
              {userDetails.email}
            </span>
          </div>
          <div className="buttons flex items-center justify-between">
            <button
              className="flex items-center text-green-400 bg-white justify-center gap-3 border-none text-xl p-2 w-32 rounded-lg hover:text-white hover:bg-[#2e8b57] hover:transition-all hover:duration-300"
              onClick={() => navigate("/")}
            >
              <FaArrowRight />
              BACK
            </button>
            <button
              className="flex items-center text-green-400 bg-white justify-center gap-3 border-none text-xl p-2 w-32 rounded-lg hover:text-white hover:bg-[#2e8b57] hover:transition-all hover:duration-300"
              onClick={logOut}
            >
              <MdExitToApp className="" />
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Index;
