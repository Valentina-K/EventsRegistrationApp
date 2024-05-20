import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

export const RegistrationPage = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h1" component="h2" style={{ marginBottom: 20 }}>
        Event registration
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="name"
          label="Full name"
          type="text"
          variant="standard"
        />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="standard"
        />
        <TextField
          id="birthday"
          helperText="Date of birth"
          type="date"
          variant="standard"
        />
        <FormLabel
          id="radio-buttons-group-label"
          sx={{ fontSize: "1.5rem", fontWeight: "700" }}
        >
          Where did you hear about this event?
        </FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          defaultValue="social"
          name="radio-buttons-group"
          sx={{
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            value="social"
            control={<Radio />}
            label="Social media"
          />
          <FormControlLabel
            value="friends"
            control={<Radio />}
            label="Friends"
          />
          <FormControlLabel
            value="myself"
            control={<Radio />}
            label="Found myself"
          />
        </RadioGroup>
        <Button variant="contained" sx={{ width: "168px" }}>
          Register
        </Button>
      </Box>
    </Container>
  );
};
