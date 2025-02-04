import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import { Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import UserEditor from "./components/UserEditor";
function App() {
  return (
    <Router>
      <Container>
        <Stack direction="row" spacing={2} sx={{ my: 3 }}>
          <Button component={Link} to="/userForm" variant="contained">
            User Form
          </Button>
          <Button component={Link} to="/editor" variant="contained">
            Edit Bio
          </Button>
          <Button component={Link} to="/profile" variant="contained">
            User Profile
          </Button>
          <Button component={Link} to="/counter" variant="contained">
            Counter
          </Button>
        </Stack>

        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/userForm" element={<UserForm />} />
          <Route path="/editor" element={<UserEditor />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
