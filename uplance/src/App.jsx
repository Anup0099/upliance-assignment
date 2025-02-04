import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoutes";

import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import UserProfile from "./components/UserProfile";
import UserEditor from "./components/UserEditor";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";

function App() {
  return (
    
      <Router>
        <Navbar />
        <Container>
          {/* Navigation Buttons (Visible Always) */}
          <Stack direction="row" spacing={2} sx={{ my: 3 }}>
            <Button component={Link} to="/userForm" variant="contained">
              User Form
            </Button>
            <Button component={Link} to="/editor" variant="contained">
              Edit User
            </Button>
            <Button component={Link} to="/profile" variant="contained">
              User Profile
            </Button>
            <Button component={Link} to="/counter" variant="contained">
              Counter
            </Button>
          </Stack>

          {/* Route Definitions */}
          <Routes>
            {/* Public Route: Only accessible when NOT logged in */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />

            {/* Private Routes: Accessible only when logged in */}
            <Route
              path="/userForm"
              element={
                <PrivateRoute>
                  <UserForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/editor"
              element={
                <PrivateRoute>
                  <UserEditor />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/counter"
              element={
                <PrivateRoute>
                  <Counter />
                </PrivateRoute>
              }
            />
          </Routes>
        </Container>
      </Router>
   
  );
}

export default App;
