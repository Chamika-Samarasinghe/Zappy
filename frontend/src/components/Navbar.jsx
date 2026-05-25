import useAuthUser from "../hooks/useAuthUser";
import { Link, useLocation } from "react-router";
import { BellIcon, LogOutIcon, Zap } from "lucide-react";
import ThemeSelector from "./ThemeSelector.jsx";
import useLogout from "../hooks/useLogout.js";
import AvatarImage from "./AvatarImage.jsx";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");

  

  const {logoutmutation} = useLogout()

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {/* LOGO - ONLY IN  THE CHAT PAGE */}
          {isChatPage && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <Zap className="size-9 text-primary" />
                <span
                  className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r
                    from-primary to-secondary tracking-wider"
                >
                  Zappy
                </span>
              </Link>
            </div>
          )}

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link to={"/notifications"}>
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
            <ThemeSelector />

            <div className="avatar">
              <div className="w-9 rounded-full">
                <AvatarImage src={authUser?.profilePic} alt={authUser?.fullName || "User Avatar"} />
              </div>
            </div>
            {/* LOGOUT BUTTON */}
            <button
              className="btn btn-ghost btn-circle"
              onClick={logoutmutation}
            >
              <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
