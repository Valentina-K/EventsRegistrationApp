import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function EventsCard(data) {
  const { title, description } = data.data;
  return (
    <Card sx={{ minWidth: 275, textAlign: "left", overflowY: "scroll" }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 16, fontWeight: 700 }}
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="text">Register</Button>
          <Button variant="text">View</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
