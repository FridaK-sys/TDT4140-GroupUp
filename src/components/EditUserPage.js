import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
export default function EditUserInfo(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleOpen}>
        Rediger info
      </Button>
      <Modal
        className="edit-modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          item
          xs="auto"
          margin="auto"
          alignItems="center"
          justifyContent="center"
          sm="auto"
          md="auto"
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <EditIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Rediger info
            </Typography>
            <Box
              component="form"
              noValidate
              //onSubmit={handleRegister}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="biography"
                label="Biography"
                name="biography"
                autoFocus
                multiline={true}
                defaultValue={props.bio}
              />
              <TextField
                margin="normal"
                fullWidth
                name="interesser"
                label="interesser"
                id="interesser"
                multiline={true}
                defaultValue={props.interests}
              />

              <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Lagre
              </Button>
              <Grid container></Grid>
            </Box>
          </Box>
        </Grid>
      </Modal>
    </div>
  );
}
