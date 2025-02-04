import { Typography, Box, Button, TextField, Grid } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserBio, setUserData } from "../redux/userSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "code-block"],
  ],
};

const UserEditor = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    bio: user.bio,
  });
  const handleSave = () => {
    dispatch(setUserData(formData));
    alert("User data saved successfully!");
  };
  const handleChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
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
      <Typography variant="h6">Name</Typography>
      <ReactQuill
        value={formData.name}
        onChange={handleChange("name")}
        modules={quillModules}
      />
      <Typography variant="h6" mt={2}>
        Email
      </Typography>
      <ReactQuill
        value={formData.email}
        onChange={handleChange("email")}
        modules={quillModules}
      />
      <Typography variant="h6" mt={2}>
        Phone
      </Typography>
      <ReactQuill
        value={formData.phone}
        onChange={handleChange("phone")}
        modules={quillModules}
      />

      <Typography variant="h6" mt={2}>
        Address
      </Typography>
      <ReactQuill
        value={formData.address}
        onChange={handleChange("address")}
        modules={quillModules}
      />
      <Typography variant="h6" mt={2}>
        Bio
      </Typography>
      <ReactQuill
        value={formData.bio}
        onChange={handleChange("bio")}
        modules={quillModules}
      />

      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Box>
  );
};

export default UserEditor;
