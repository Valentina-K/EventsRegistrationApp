import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ParticipantsCard from "../components/PartcipantsCard";

const particip = [
  { name: "John Due", email: "jphndue@MediaList.com" },
  { name: "John Due2", email: "jphndue@MediaList.com" },
  { name: "John Due3", email: "jphndue@MediaList.com" },
  { name: "John Due4", email: "jphndue@MediaList.com" },
  { name: "John Due5", email: "jphndue@MediaList.com" },
  { name: "John Due6", email: "jphndue@MediaList.com" },
  { name: "John Due7", email: "jphndue@MediaList.com" },
  { name: "John Due8", email: "jphndue@MediaList.com" },
  { name: "John Due9", email: "jphndue@MediaList.com" },
  { name: "John Due10", email: "jphndue@MediaList.com" },
  { name: "John Due11", email: "jphndue@MediaList.com" },
  { name: "John Due12", email: "jphndue@MediaList.com" },
];
export const ParticipantsPage = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h1" component="h2" style={{ marginBottom: 20 }}>
        participants
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {particip.map((item) => (
          <ParticipantsCard key={item.name} data={item} />
        ))}
      </Box>
    </Container>
  );
};
