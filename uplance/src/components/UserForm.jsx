import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setUserData, ressetUserData,setUserBio  } from "../redux/userSlice";
import { useBeforeUnload } from "react-use";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    address: user.address,
    phone: user.phone,
    bio: user.bio, 
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      bio: user.bio, 
    });
  }, [user]);

  // Warn before closing if there are unsaved changes
  useBeforeUnload(
    hasUnsavedChanges,
    "You have unsaved changes. Are you sure you want to leave?"
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setHasUnsavedChanges(true);
  };

  const handleBioChange = (value) => {
    setFormData({ ...formData, bio: value });
    setHasUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserData(formData));
    setHasUnsavedChanges(false);
    alert("User data saved successfully!");
  };

  const handleReset = () => {
    dispatch(ressetUserData());
    setHasUnsavedChanges(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          User Form
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          User ID: <strong>{user.id}</strong>
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            {/* Bio Field using React Quill */}
            <Grid item xs={12}>
              <Typography variant="h6">Bio</Typography>
              <ReactQuill value={formData.bio} onChange={handleBioChange} />
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handleReset}
                variant="contained"
                color="secondary"
                fullWidth
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UserForm;
