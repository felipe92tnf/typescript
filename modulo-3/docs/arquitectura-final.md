# Arquitectura final - Módulo 3

## Uso de genéricos

Se ha implementado un componente `DataTable<T>` que permite renderizar tablas reutilizables para distintos tipos de datos sin perder seguridad de tipos.

## Tipado de props

Las props del componente están tipadas de forma estricta, lo que permite detectar errores durante el desarrollo si se pasa una estructura de datos incorrecta.

## Tipos de utilidad

Se ha utilizado `Partial<T>` para modelar un estado de edición parcial, permitiendo manejar formularios incompletos sin romper el sistema de tipos.

## Librerías externas

Se ha integrado la librería `date-fns` para el cálculo de fechas mediante una función utilitaria tipada estrictamente.

## Análisis exhaustivo con never

En el módulo anterior se ha mejorado la función `generarReporte` utilizando `never` en el bloque `default`, asegurando que cualquier nuevo estado añadido a la unión discriminada deba ser gestionado explícitamente.

## Comparación con JavaScript

Si este proyecto se hubiera desarrollado en JavaScript sin TypeScript, habría mayor riesgo de errores en tiempo de ejecución, especialmente en:
- paso de props incorrectas
- manejo de estados complejos
- estructuras de datos incompletas
- integraciones con librerías externas

Con TypeScript se consigue una arquitectura más robusta, mantenible y segura.