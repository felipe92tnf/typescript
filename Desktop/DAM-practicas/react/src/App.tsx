import { useState } from "react";
import { DataTable } from "./components/DataTable";

type Estudiante = {
  id: string;
  nombre: string;
  edad: number;
};

function App() {
  const [editando, setEditando] = useState<Partial<Estudiante>>({});
  const estudiantes: Estudiante[] = [
    { id: "1", nombre: "Vicenta", edad: 20 },
    { id: "2", nombre: "Manolo", edad: 22 },
  ];

  return (
    <div>
      <h1>Tabla de estudiantes</h1>

      <DataTable
        data={estudiantes}
        columns={[
          { key: "nombre", label: "Nombre" },
          { key: "edad", label: "Edad" },
        ]}
      />
    </div>
  );
}

export default App;