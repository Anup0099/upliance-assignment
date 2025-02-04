import { Paper, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <Paper sx={{ maxWidth: 600, mx: "auto", p: 3, mt: 4 }}>
     <Typography variant="h5" gutterBottom>
      <strong>Profile</strong>  <div dangerouslySetInnerHTML={{ __html: `${user.name}` }} />
      </Typography>
      
      {/* Email Section */}
      <Typography variant="subtitle1" gutterBottom>
        <strong>Email:</strong> <div dangerouslySetInnerHTML={{ __html: user.email }} />
      </Typography>

      {/* Phone Section */}
      <Typography variant="subtitle1" gutterBottom>
        <strong>Phone:</strong> <div dangerouslySetInnerHTML={{ __html: user.phone }} />
      </Typography>

      {/* Address Section */}
      <Typography variant="h6" gutterBottom>
        <strong>Address:</strong> <div dangerouslySetInnerHTML={{ __html: user.address }} />
      </Typography>

      {/* Bio Section */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        <strong>Bio:</strong>
      </Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, borderRadius: 4 }}>
        <div dangerouslySetInnerHTML={{ __html: user.bio }} />
      </Box>
    </Paper>
  );
};

export default UserProfile;
