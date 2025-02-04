import { Typography, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice";

// Function to remove HTML tags
const removeHtmlTags = (html) => {
  return html.replace(/<[^>]+>/g, ""); // This will remove anything that is between < and >
};

const UserEditor = ({resetForm}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // Initialize formData and remove any HTML tags from user data
  const [formData, setFormData] = useState({
    name: removeHtmlTags(user.name),
    email: removeHtmlTags(user.email),
    phone: removeHtmlTags(user.phone),
    address: removeHtmlTags(user.address),
    bio: removeHtmlTags(user.bio),
  });
  const resetUserData = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  const handleSave = () => {
    dispatch(setUserData(formData));
    alert("User data saved successfully!");
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" mb={2}>
        Edit User Details
      </Typography>

      {/* Name Field */}
      <Typography variant="h6">Name</Typography>
      <TextField
        fullWidth
        value={formData.name}
        onChange={handleChange("name")}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      {/* Email Field */}
      <Typography variant="h6" mt={2}>
        Email
      </Typography>
      <TextField
        fullWidth
        value={formData.email}
        onChange={handleChange("email")}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      {/* Phone Field */}
      <Typography variant="h6" mt={2}>
        Phone
      </Typography>
      <TextField
        fullWidth
        value={formData.phone}
        onChange={handleChange("phone")}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      {/* Address Field */}
      <Typography variant="h6" mt={2}>
        Address
      </Typography>
      <TextField
        fullWidth
        value={formData.address}
        onChange={handleChange("address")}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      {/* Bio Field */}
      <Typography variant="h6" mt={2}>
        Bio
      </Typography>
      <TextField
        fullWidth
        value={formData.bio}
        onChange={handleChange("bio")}
        variant="outlined"
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />

      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Box>
  );
};

export default UserEditor;
