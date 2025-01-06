import React, { ReactNode } from "react";
import Header from "@/components/Header";
import { Container } from "@mui/material";

// Définir les props pour accepter du contenu
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: "20px" }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
