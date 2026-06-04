# Frontend Mentor - Solución del Time Tracking Dashboard

Esta es mi solución al desafío **Time Tracking Dashboard** de Frontend Mentor. Este proyecto se centra en la construcción de un dashboard completamente responsive que muestra estadísticas de seguimiento del tiempo en diferentes periodos utilizando datos dinámicos cargados desde un archivo JSON.

Este desafío fue una excelente oportunidad para practicar layouts responsivos, JavaScript asíncrono, manipulación del DOM, renderizado dinámico, reutilización de funciones, personalización de Tailwind CSS y despliegue de aplicaciones estáticas utilizando Vite y GitHub Pages.

---

## Tabla de contenidos

* [Descripción general](#descripción-general)
* [El desafío](#el-desafío)
* [Diseño](#diseño)
* [Enlaces](#enlaces)
* [Mi proceso](#mi-proceso)
* [Tecnologías utilizadas](#tecnologías-utilizadas)
* [Lo que aprendí](#lo-que-aprendí)

---

## Descripción general

Este proyecto es un dashboard responsivo de seguimiento del tiempo que permite a los usuarios cambiar entre reportes diarios, semanales y mensuales.

El dashboard carga dinámicamente los datos de actividades desde un archivo JSON y actualiza la interfaz según el periodo seleccionado sin necesidad de recargar la página.

El diseño se adapta perfectamente a dispositivos de escritorio, tablet y móviles utilizando un enfoque **mobile-first** y las utilidades responsivas proporcionadas por Tailwind CSS.

Todas las tarjetas de actividades son generadas dinámicamente mediante JavaScript, reduciendo la duplicación de código y mejorando la mantenibilidad del proyecto.

---

## El desafío

Los usuarios deben poder:

* Visualizar el diseño óptimo según el tamaño de pantalla de su dispositivo.
* Cambiar entre reportes diarios, semanales y mensuales.
* Ver las horas actuales y las horas del periodo anterior para cada actividad.
* Visualizar estados *hover* y *focus* en los elementos interactivos.
* Disfrutar de una experiencia responsive en dispositivos de escritorio, tablet y móviles.
* Interactuar con tarjetas generadas dinámicamente.
* Visualizar datos cargados de forma asíncrona desde una fuente JSON.

---

## Diseño

### Diseño para escritorio

<img src="./design/desktop-design.jpg" alt="Vista previa del diseño de escritorio" width="700">

### Estados activos

<img src="./design/active-states.jpg" alt="Vista previa de estados activos" width="700">

### Diseño para móviles

<img src="./design/mobile-design.jpg" alt="Vista previa del diseño móvil" width="250">

---

## Enlaces

* URL de la solución: [Repositorio en GitHub](https://github.com/mlopezl/time-tracking-dashboard-challenge)
* Sitio en vivo: [Demo en línea](https://mlopezl.github.io/time-tracking-dashboard-challenge/)

---

## Mi proceso

* Estructuré la interfaz utilizando elementos semánticos de **HTML5** como `main`, `section`, `article` y `header`.

* Seguí un enfoque **mobile-first**, mejorando progresivamente el diseño mediante puntos de ruptura responsivos.

* Construí layouts responsivos utilizando **Flexbox** y clases utilitarias de Tailwind CSS.

* Personalicé Tailwind CSS mediante variables de tema para colores y tipografía.

* Creé clases reutilizables para los fondos de las diferentes categorías de actividades.

* Cargué los datos del dashboard de forma asíncrona utilizando la Fetch API.

* Implementé programación asíncrona utilizando:

  * `async`
  * `await`
  * `try...catch`

* Generé dinámicamente las tarjetas de actividades mediante manipulación del DOM.

* Refactoricé código repetitivo creando una función reutilizable llamada `renderActivities()`.

* Añadí event listeners para actualizar el dashboard cuando el usuario cambia entre periodos de tiempo.

* Gestioné el estado de la aplicación mediante variables de JavaScript y renderizado dinámico.

* Organicé los recursos estáticos y archivos JSON para asegurar la compatibilidad con el proceso de build de Vite.

* Desplegué la versión de producción utilizando GitHub Pages.

---

## Tecnologías utilizadas

* HTML5
* Tailwind CSS v4
* JavaScript (ES6+)
* Flexbox
* Variables CSS (Custom Properties)
* Principios de diseño responsivo
* Flujo de trabajo Mobile-first
* Manipulación del DOM
* Event Listeners
* Fetch API
* Async/Await
* Manejo de datos JSON
* Template Literals
* Renderizado dinámico
* Vite
* GitHub Pages

---

## Lo que aprendí

* Construir interfaces tipo dashboard responsivas utilizando HTML5 semántico.
* Crear layouts de manera eficiente mediante clases utilitarias de Tailwind CSS.
* Personalizar Tailwind CSS utilizando variables de tema.
* Cargar datos externos desde archivos JSON mediante la Fetch API.
* Trabajar con JavaScript asíncrono utilizando `async` y `await`.
* Manejar errores de peticiones mediante `try...catch`.
* Generar componentes dinámicamente utilizando template literals.
* Manipular el DOM de manera eficiente mediante `innerHTML`.
* Refactorizar código repetitivo creando funciones reutilizables.
* Gestionar el estado de una aplicación en función de las interacciones del usuario.
* Utilizar event listeners para actualizar dinámicamente la interfaz.
* Comprender cómo Vite gestiona los recursos estáticos y el proceso de build.
* Organizar recursos del proyecto utilizando el directorio `public`.
* Desplegar aplicaciones frontend estáticas utilizando GitHub Pages.
* Mejorar la mantenibilidad del código mediante funciones reutilizables y una estructura más limpia.
