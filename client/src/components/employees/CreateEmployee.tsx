import { useQuery, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf, number } from "zod";
import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Departamentos, getDepartamentosQuery } from "../../queries/department";
import { createEmpleadoMutation } from "../../queries/employee";
import { useNavigate } from "react-router-dom";

export const CreateEmployee = () => {
  // Zod Schema
  const createEmployeeSchema = object({
    nif: string().min(1, "Nif is required"),
    nombre: string().min(1, "Nombre is required"),
    apellido1: string().min(1, "Apellido1 is required"),
    apellido2: string().min(1, "Apellido2 is required"),
    codigo_departamento: number().min(1, "Codigo dep is required"),
  });
  type CreateEmployeeType = TypeOf<typeof createEmployeeSchema>;

  // Getting departments
  const { loading, error, data } = useQuery<Departamentos>(
    getDepartamentosQuery
  );
  // Create Employee Mutation
  const [createEmpleado, { error: errorCreate, data: dataCreate }] =
    useMutation(createEmpleadoMutation);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateEmployeeType>({
    resolver: zodResolver(createEmployeeSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (values: CreateEmployeeType) => {
    console.log({ errorCreate });
    console.log({ dataCreate });
    try {
      const emp = await createEmpleado({
        variables: {
          input: {
            nif: values.nif,
            nombre: values.nombre,
            apellido1: values.apellido1,
            apellido2: values.apellido2,
            codigo_departamento: values.codigo_departamento,
          },
        },
      });
      console.log({ emp });
      navigate("/empleados");
    } catch (e: any) {
      console.log(e);
    }
  };

  if (error) return <span>Error</span>;
  return loading ? (
    <span>Loading...</span>
  ) : (
    <Container maxWidth="md">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Create new Employee
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="nif"
            autoFocus
            fullWidth
            required
            {...register("nif")}
            error={!!errors.nif}
            helperText={errors.nif?.message}
          />
          <TextField
            label="nombre"
            fullWidth
            required
            {...register("nombre")}
            error={!!errors.nombre}
            helperText={errors.nombre?.message}
          />
          <TextField
            label="apellido1"
            fullWidth
            required
            {...register("apellido1")}
            error={!!errors.apellido1}
            helperText={errors.apellido1?.message}
          />
          <TextField
            label="apellido2"
            fullWidth
            required
            {...register("apellido2")}
            error={!!errors.apellido2}
            helperText={errors.apellido2?.message}
          />
          <InputLabel>codigo_departamento</InputLabel>
          <Select {...register("codigo_departamento")}>
            {data &&
              data.departamentos.map((dep) => (
                <MenuItem value={dep.codigo}>{dep.codigo}</MenuItem>
              ))}
          </Select>
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};
