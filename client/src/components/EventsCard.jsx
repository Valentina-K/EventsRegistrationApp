import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function EventsCard(data) {
  const { title, description, _id } = data.data;
  const path = `/participants/${_id}`;
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
          <Button variant="text">
            <Link to="/registration">Register</Link>
          </Button>
          <Button variant="text">
            <Link to={path}>View</Link>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
