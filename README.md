# Delilah Resto 2.0

>Reinvención de la API de gestión de pedidos.

Este proyecto representa una nueva versión del Delilah Resto. La decisión de volver a abordar este proyecto surge de mi evolución y crecimiento como desarrollador. Durante este tiempo, he adquirido nuevas habilidades, aprendido sobre tecnologías emergentes y adoptado mejores prácticas que deseaba aplicar en esta versión.

Aunque originalmente la idea proviene de un proyecto de Acámica, esta versión es una manifestación independiente y personal.

## Características principales de la API:

- Usuarios: Permiten registrar y gestionar sus propias órdenes, visualizar productos y hacer seguimiento de sus pedidos.
- Administradores: Tienen la capacidad de gestionar la información de manera integral. Desde agregar o eliminar productos, hasta modificar métodos de pago y más.

## Documentación:
La documentación de la API se ha realizado utilizando Swagger y se puede acceder a través del siguiente enlace cuando el servidor está en ejecución:

**[Acceder a la documentación](http://localhost:4000/api-docs)**

## Tecnologias y dependencias utilizadas:

- **Node.js**: v18.16.1
- **Dotenv**: v16.3.1
- **Express**: v4.18.2
- **Bcrypt**: v5.1.1
- **Nodemon**: v3.0.1
- **Cors**: v2.8.5
- **JsonWebToken**: v9.0.2
- **SwaggerJSDoc**: v6.2.8
- **SwaggerUiExpress**: v5.0.0
- **Yamljs**: v0.3.0
- **Herramientas de Prueba**: Postman para el manejo de endpoints
- **Herramientas de Documentación**: Swagger

# Instalacion del proyecto

## 1) Clonar el repositorio del proyecto desde github

Usa el siguiente comando en la terminal:

`git clone https://github.com/erdini1/delilah-resto2.0.git`

## 2) Instalar dependencias

Dentro de la carpeta del proyecto: `npm install`

## 3) Configuración de variables de entorno
1) Crea un archivo `.env` en la raíz del proyecto.
2) Añade las variables de entorno necesarias (e.g., `PORT`, `SECRETKEY`).

## 4) Iniciar el servidor

Ejecuta el proyecto con: `npm run dev` o `npm start`

## Estado

El proyecto ha concluido su primer sprint.

## Próximos Pasos

- Integrar base de datos
