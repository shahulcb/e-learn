import React from "react";
import "./account.css";
import { MdDashboard, MdLogout } from "react-icons/md";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  const logouthandler = () => {
    localStorage.clear();
    setIsAuth(false);
    setUser(null);
    toast.success("Logged out");
    navigate("/login");
  };
  return (
    <div>
      <div className="profile">
        <h2>My Profile</h2>
        <div className="profile-info">
          <p>
            <strong>Name - {user?.name} </strong>
          </p>
          <p>
            <strong>Email - {user?.email} </strong>
          </p>
          <div style={{ display: "flex", gap: "5px" }}>
            <button
              className="common-btn"
              onClick={() => navigate(`/${user._id}/dashboard`)}
            >
              <MdDashboard /> Dashboard
            </button>
            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="common-btn"
              >
                <MdDashboard />
                Admin Dashboard
              </button>
            )}
          </div>
          <button
            className="common-btn"
            style={{ backgroundColor: "#FF674D" }}
            onClickCapture={logouthandler}
          >
            <MdLogout /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
