import { Paper, Typography,Box } from "@mui/material";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  return (
    <Paper sx={{ maxWidth: 600, mx: "auto", p: 3, mt: 4 }}>
      <Typography variant="h5">{user.name}'s Profile</Typography>
      <Typography variant="subtitle1">Email:{user.email}</Typography>
      <Typography variant="subtitle1">Phone:{user.phone}</Typography>
      <Typography variant="h5">Address:{user.address}</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Bio:
      </Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, borderRadius: 4 }}>
        <div dangerouslySetInnerHTML={{ __html: user.bio }} />
      </Box>
    </Paper>
  );
};
export default UserProfile;
