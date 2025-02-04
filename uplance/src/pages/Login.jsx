import { Box, Button, Typography } from "@mui/material";
import { signInWithGoogle } from "../firebase";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        mt: 5,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      <Button variant="contained" color="primary" onClick={signInWithGoogle}>
        Sign In With Google
      </Button>
    </Box>
  );
};

export default Login;
