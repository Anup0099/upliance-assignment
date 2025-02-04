import { use } from "react";
import { useAuth } from "../AuthContext";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  const { user, signInWithGoogle, logout } = useAuth() || {};
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error", error);
    }
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Uplance App
        </Typography>
        {user ? (
          <>
            <Typography sx={{ mr: 2 }}>Welcome, {user.displayName}</Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={signInWithGoogle}>
            Login with Google
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
