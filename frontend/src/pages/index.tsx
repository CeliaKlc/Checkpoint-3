import CardsFlags from "@/components/Cardsflags";
import Form from "@/components/Form";
import { Stack, Container } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={4}>
      <Container maxWidth="xl" disableGutters>
        <Form />
      </Container>
      
      <Container style={{ marginTop: "50px" }}>
        <CardsFlags />
      </Container>
    </Stack>
  );
}
