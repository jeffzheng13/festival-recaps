import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url('../../public/rave-background.jpg')] flex items-center justify-center">
      <div className="items-center">
        <Box>
          <Container>
            <Typography variant="h1" sx={{fontWeight: 500}}>WELCOME TO FESTIVAL RECAPS</Typography>
            <Typography variant="subtitle1">Learn More →</Typography>
          </Container>
        </Box>
      </div>
    </div>
  );
}
