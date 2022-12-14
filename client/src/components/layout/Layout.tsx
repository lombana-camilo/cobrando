import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Container sx={{ my: 10 }}>
        <Outlet />
      </Container>
    </>
  );
};
