import { ok } from "../domain/types/prueba";
console.log(ok);
import { RespuestaAPI } from "../domain/types/api-response";
import { Estudiante } from "../domain/types/estudiante";
import { Asignatura } from "../domain/types/asignatura";

/**
 * Simula una llamada asíncrona a una base de datos o API.
 */
export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      // ---------- ENDPOINT: ESTUDIANTES ----------
      if (endpoint === "/estudiantes") {
        const estudiantes: Estudiante[] = [
          {
            id: "EST-001",
            nombreCompleto: "Laura Gómez",
            email: "laura@universidad.com",
            activo: true,
          },
          {
            id: "EST-002",
            nombreCompleto: "Carlos Pérez",
            email: "carlos@universidad.com",
            activo: false,
          },
        ];

        resolve({
          codigoEstado: 200,
          exito: true,
          datos: estudiantes as unknown as T,
        });

        return;
      }

      // ---------- ENDPOINT: ASIGNATURAS ----------
      if (endpoint === "/asignaturas") {
        const asignaturas: Asignatura[] = [
          {
            id: "ASG-001",
            nombre: "Matemáticas",
            creditos: 6,
            profesor: "Dr. García",
          },
          {
            id: "ASG-002",
            nombre: "Programación",
            creditos: 8,
            profesor: "Dra. López",
          },
        ];

        resolve({
          codigoEstado: 200,
          exito: true,
          datos: asignaturas as unknown as T,
        });

        return;
      }

      // ---------- ERROR ----------
      resolve({
        codigoEstado: 404,
        exito: false,
        datos: null as unknown as T,
        errores: ["Endpoint no encontrado"],
      });

    }, 1000); // Simula delay de red
  });
}