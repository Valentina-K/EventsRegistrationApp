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
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="name" label="Full name" type="text" variant="filled" />
        <TextField id="email" label="Email" type="password" variant="filled" />
        <TextField
          id="birthday"
          label="Date of birth"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <Button variant="contained">Register</Button>
      </Box>
    </Container>
  );
};
