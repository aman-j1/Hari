// src/hooks/useRequireAuth.js
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import { AuthContext } from "../Context/authContext";

export const useRequireAuth = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const requireAuth = (callback) => {
        if (!user) {
            Toastify({
                text: "Please login to continue.",
                duration: 2000,
                gravity: "top",
                position: "center",
                backgroundColor: "#f44336",
            }).showToast();
            navigate("/login");
        } else {
            callback();
        }
    };

    return requireAuth;
};
