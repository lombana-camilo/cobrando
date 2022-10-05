import { AppBar, Link, Stack, Toolbar } from "@mui/material";

function NavBar() {
  return (
    <AppBar color="primary" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" spacing={3}>
          <Link href="/empleados" color="inherit" underline="hover">
            List of Employees
          </Link>
          <Link href="/empleados/new" underline="hover" color="inherit">
            Create Employee
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
