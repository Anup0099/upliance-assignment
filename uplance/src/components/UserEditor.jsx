import { Typography,Box,Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserBio } from "../redux/userSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UserEditor = () => {
  const dispatch = useDispatch();
  const userBio = useSelector((state) => state.user.bio);
  const [bio, setBio] = useState(userBio);
  const handleChange = () => {
    dispatch(setUserBio(bio));
    alert("Bio saved successfully!");
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
        Edit Bio
      </Typography>
      <ReactQuill value={bio} onChange={setBio} />
      <Button variant="contained" color="primary" onClick={handleChange}>
        Save
      </Button>
    </Box>
  );
};

export default UserEditor;
