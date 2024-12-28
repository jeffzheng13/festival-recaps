import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-[url('../../public/rave-background.jpg')] flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 items-center">
        <Box>
          <Container>
            <Typography variant="h1" sx={{fontWeight: 500}}>WELCOME TO FESTIVAL RECAPS</Typography>
            <Link href="/raves"><Typography variant="subtitle1" className="hover:underline">Explore More →</Typography></Link>
          </Container>
        </Box>
      </div>
    </div>
  );
}
