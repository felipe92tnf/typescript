# 📘 TypeScript - Práctica 4

Este repositorio contiene el desarrollo de los módulos 1 y 2 de la práctica de TypeScript, centrados en el tipado estático, modelado de datos y arquitectura de acceso a datos mediante genéricos.

---

## 📂 Estructura del proyecto

```
typescript/
  modulo-1/
    src/
    dist/
    docs/
  modulo-2/
    src/
      domain/
        types/
      services/
    docs/
  README.md
```

---

## 🚀 Tecnologías utilizadas

* TypeScript
* Node.js
* tsx (ejecución en desarrollo)

---

## ⚙️ Configuración del entorno

Instalación de dependencias:

```
npm install
```

Ejecución del proyecto:

```
npx tsx src/index.ts
```

Compilación a JavaScript:

```
npx tsc
```

---

# 🧠 Módulo 1: Lógica y tipado básico

En este módulo se han implementado funciones matemáticas tipadas estrictamente:

* `calcularMedia`
* `calcularMediana`
* `filtrarAtipicos`

## Características principales

* Uso de tipos primitivos (`number[]`)
* Manejo de casos límite (`null`)
* Tipado de funciones
* Inferencia de tipos

---

# 🧠 Módulo 2: Modelado y arquitectura

Este módulo se centra en la creación de una arquitectura tipada y escalable.

---

## 🧩 Modelado de dominio

Se han definido interfaces para representar entidades del sistema:

* `Estudiante`
* `Asignatura`

Uso de `readonly` en identificadores para garantizar inmutabilidad.

---

## 🔀 Unión discriminada

Se ha implementado el tipo `EstadoMatricula`, que representa distintos estados del sistema:

* `ACTIVA`
* `SUSPENDIDA`
* `FINALIZADA`

Permite modelar estados válidos de forma segura y evitar estructuras ambiguas.

---

## 🔧 Servicio genérico

Se ha desarrollado un cliente de API simulado:

```ts
obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>>
```

### Características:

* Uso de genéricos para reutilización
* Tipado fuerte de respuestas
* Simulación de asincronía con `setTimeout`

---

## 📡 Respuesta API

Se ha definido una estructura estándar:

```ts
interface RespuestaAPI<T>
```

Permite mantener consistencia en las respuestas del sistema.

---

## 🧪 Testeo

Se han probado los endpoints simulados:

* `/estudiantes`
* `/asignaturas`

Verificación mediante ejecución en `index.ts`.

---

## 📄 Documentación técnica

Se incluye documentación detallada en:

```
modulo-2/docs/arquitectura.md
