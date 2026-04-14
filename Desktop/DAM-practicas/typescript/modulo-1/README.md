# Módulo 1 - TypeScript

## Descripción

Este módulo implementa funciones de análisis estadístico utilizando TypeScript, aplicando tipado estático estricto.

## Funciones implementadas

* calcularMedia
* calcularMediana
* filtrarAtipicos

## Tecnologías utilizadas

* TypeScript
* Node.js
* tsx

## Ejecución

Para ejecutar el proyecto:

```
npx tsx src/index.ts
```

## Compilación

Para generar JavaScript:

```
npx tsc
```

Los archivos compilados se encuentran en la carpeta `dist/`.

## Conceptos aplicados

* Tipado estático
* Inferencia de tipos
* Tipos unión (`number | null`)
* Configuración con `tsconfig.json`
* Organización de proyecto (`src` / `dist`)

## Casos límite

Las funciones contemplan escenarios donde:

- El array está vacío → devuelve `null`
- Se evita división por cero
- Se validan los datos antes de operar