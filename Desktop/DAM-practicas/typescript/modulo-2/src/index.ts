console.log("index arrancó");
import { Estudiante } from "./domain/types/estudiante";
import { Asignatura } from "./domain/types/asignatura";
import { EstadoMatricula, generarReporte } from "./domain/types/matricula";
import { obtenerRecurso } from "./services/api-client";

async function main(): Promise<void> {
  const respuestaEstudiantes = await obtenerRecurso<Estudiante[]>("/estudiantes");
  console.log("Estudiantes:", respuestaEstudiantes);

  const respuestaAsignaturas = await obtenerRecurso<Asignatura[]>("/asignaturas");
  console.log("Asignaturas:", respuestaAsignaturas);

  const estado1: EstadoMatricula = {
    tipo: "ACTIVA",
    asignaturas: respuestaAsignaturas.datos
  };

  const estado2: EstadoMatricula = {
    tipo: "SUSPENDIDA",
    motivo: "Impago de tasas"
  };

  const estado3: EstadoMatricula = {
    tipo: "FINALIZADA",
    notaMedia: 8.7
  };

  console.log(generarReporte(estado1));
  console.log(generarReporte(estado2));
  console.log(generarReporte(estado3));
}

main().catch((error) => {
  console.error("Error en la ejecución:", error);
});