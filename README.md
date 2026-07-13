PaginaCape2026

Sitio web del Dr. Capeletti, desarrollado en Angular.

📋 Descripción

Este proyecto contiene el frontend del sitio web del Dr. Capeletti, con información profesional, servicios ofrecidos y datos de contacto.

🛠️ Stack técnico


Angular CLI v21.1.4
TypeScript
HTML5 / CSS3
Vitest para testing
Firebase Hosting para el deploy


📋 Requisitos previos


Node.js (versión LTS recomendada)
Angular CLI instalado globalmente:


bash  npm install -g @angular/cli

🚀 Instalación

bashgit clone https://github.com/EmanuelBertorello/PaginaCape2026.git
cd PaginaCape2026
npm install

💻 Desarrollo

Para levantar un servidor de desarrollo local:

bashng serve

Abrí tu navegador en http://localhost:4200/. La aplicación se recarga automáticamente cada vez que modificás algún archivo fuente.

🧩 Generar componentes

Angular CLI incluye herramientas de scaffolding. Por ejemplo, para generar un componente:

bashng generate component nombre-del-componente

Para ver todos los esquemas disponibles (components, directives, pipes, etc.):

bashng generate --help

🏗️ Build

Para compilar el proyecto:

bashng build

Los artefactos de build se guardan en dist/, optimizados para producción por defecto.

✅ Tests

Para ejecutar los tests unitarios con Vitest:

bashng test

☁️ Deploy

El proyecto se despliega mediante Firebase Hosting. Para deployar (con Firebase CLI ya configurado):

bashfirebase deploy

📁 Estructura del proyecto

PaginaCape2026/
├── src/              # Código fuente de la aplicación
├── public/           # Archivos públicos / estáticos
├── .firebase/        # Configuración de Firebase
├── firebase.json     # Configuración de hosting
└── angular.json      # Configuración de Angular CLI

👤 Autor

Desarrollado por Emanuel Bertorello
