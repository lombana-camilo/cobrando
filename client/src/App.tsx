import { Route, Routes } from "react-router-dom";
import { CreateEmployee } from "./components/employees/CreateEmployee";
import EmployeesList from "./components/employees/EmployeesList";
import { UpdateEmployee } from "./components/employees/UpdateEmployee";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/empleados" element={<EmployeesList />} />
        <Route path="/empleados/new" element={<CreateEmployee />} />
        <Route path="/empleados/update" element={<UpdateEmployee />} />
      </Route>
    </Routes>
  );
}

export default App;
