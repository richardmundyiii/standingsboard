import { Box, Container, Typography } from "@mui/material";
import DivisionalCard from "../DivisionCard/DivisionCard";

export default function Board() {
  return (
    <>
      <Container>
        <Typography variant="h1">Board</Typography>
        <Box className="americanLeague">
          <DivisionalCard />
          <DivisionalCard />
          <DivisionalCard />
        </Box>
        <Box className="nationalLeague">
          <DivisionalCard />
          <DivisionalCard />
          <DivisionalCard />
        </Box>
      </Container>
    </>
  );
}
