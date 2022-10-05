import { useQuery, useMutation } from "@apollo/client";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  deleteEmpleadoMutation,
  Empleados,
  getEmpleadosQuery,
} from "../../queries/employee";

function EmployeesList() {
  const { loading, error, data } = useQuery<Empleados>(getEmpleadosQuery);
  const [deleteEmpleado] = useMutation(deleteEmpleadoMutation);

  const onDelete = async (codigo: number) => {
    try {
      deleteEmpleado({
        variables: { input: { codigo } },
        refetchQueries: [getEmpleadosQuery],
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (error) return <span>Error</span>;
  return loading ? (
    <span>Loading...</span>
  ) : (
    <Paper elevation={4} sx={{ padding: "40px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{fontWeight:"bold"}}>
              <TableCell>Codigo</TableCell>
              <TableCell>Nif</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido1</TableCell>
              <TableCell>Apellido2</TableCell>
              <TableCell>Codigo_Depto</TableCell>
              <TableCell>UPDATE</TableCell>
              <TableCell>DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.empleados.map((emp, key) => (
                <TableRow key={key}>
                  <TableCell>{emp.codigo}</TableCell>
                  <TableCell>{emp.nif}</TableCell>
                  <TableCell>{emp.nombre}</TableCell>
                  <TableCell>{emp.apellido1}</TableCell>
                  <TableCell>{emp.apellido2}</TableCell>
                  <TableCell>{emp.codigo_departamento.codigo}</TableCell>
                  <TableCell>
                    <Link to="/empleados/update" state={{ empleado: emp }}>
                      Update
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button color="error" onClick={() => onDelete(emp.codigo)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default EmployeesList;
