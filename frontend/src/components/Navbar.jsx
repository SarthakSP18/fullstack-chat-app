import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSettingsClick = () => {
    if (location.pathname === "/settings") {
      navigate(-1); // go back
    } else {
      navigate("/settings");
    }
  };

  const handleLogout = () => {
    toast.custom((t) => (
      <div
        className={`${t.visible ? "animate-enter" : "animate-leave"
          } bg-base-100 border border-base-300 rounded-lg shadow-lg p-4 flex flex-col gap-3`}
      >
        <p className="text-sm font-medium">Are you sure you want to logout?</p>

        <div className="flex justify-end gap-2">
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>

          <button
            className="btn btn-sm btn-error"
            onClick={() => {
              toast.dismiss(t.id);
              logout();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    ));
  };

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chat App By SP & AS</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSettingsClick}
              className="btn btn-sm gap-2 transition-colors"
            >

              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </button>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={handleLogout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
