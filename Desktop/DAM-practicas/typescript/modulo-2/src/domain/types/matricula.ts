import { Asignatura } from "./asignatura";

export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivo: string;
}

export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;

/**
 * Genera un reporte textual según el estado de la matrícula.
 */
export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas`;

    case "SUSPENDIDA":
      return `Matrícula suspendida: ${estado.motivo}`;

    case "FINALIZADA":
      return `Matrícula finalizada con nota media ${estado.notaMedia}`;

    default: {
      const comprobacionExhaustiva: never = estado;
      throw new Error(`Estado no manejado: ${comprobacionExhaustiva}`);
    }
  }
}