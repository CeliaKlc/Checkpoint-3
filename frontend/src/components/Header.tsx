import { Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <Stack spacing={0} sx={{ padding: 2, backgroundColor: '#f01759'}} component="header">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>Checkpoint : frontend</Typography>
        < Link href="/">Countries</Link>
        </Stack>
    </Stack>
  );
}
