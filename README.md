# Article Preview Component

Implementación del reto **Article Preview Component** de Frontend Mentor, desarrollada con React, TypeScript, Vite, Tailwind CSS y animaciones con GSAP.

La interfaz muestra una tarjeta de artículo con diseño responsive y un flujo de compartido adaptado para mobile y desktop.

## Demo en vivo

- https://article-preview-component-figma.vercel.app?_vercel_share=YJQxzMDlhXr512QlvklaOXICyBf2amEi

## Características

- Diseño responsive para móvil, tablet y escritorio.
- Componente de tarjeta con imagen, título, descripción y datos del autor.
- Botón de compartir con comportamiento distinto según el tamaño de pantalla:
  - En mobile, reemplaza temporalmente la información del perfil por accesos a redes.
  - En desktop, muestra un tooltip flotante con opciones de compartir.
- Animaciones de entrada y transiciones de estado con GSAP.
- Pruebas unitarias con Vitest y Testing Library.

## Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- GSAP + @gsap/react
- ESLint
- Vitest + @testing-library/react + @testing-library/jest-dom

## Estructura del proyecto

```text
src/
	components/
		card/
			Card.tsx
			Card.test.tsx
		profile/
			Profile.tsx
			Profile.test.tsx
		tooltip/
			Tooltip.tsx
			Tooltip.test.tsx
	assets/
	test/
		setup.ts
	App.tsx
	main.tsx
```

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación y uso

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el entorno de desarrollo:

```bash
npm run dev
```

3. Abre en tu navegador la URL que muestra Vite (normalmente http://localhost:5173).

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: compila TypeScript y genera el build de producción.
- `npm run preview`: previsualiza el build generado.
- `npm run lint`: ejecuta ESLint.
- `npm run test`: ejecuta las pruebas con Vitest.

## Pruebas

Las pruebas cubren principalmente:

- Renderizado correcto de contenido en `Card`.
- Estados y comportamiento de interacción en `Profile`.
- Renderizado condicional del tooltip en `Tooltip`.

Para correrlas:

```bash
npm run test
```

## Notas de implementación

- Se usa `gsap.matchMedia()` para adaptar animaciones al tipo de dispositivo.
- El tooltip se renderiza solo cuando el estado de compartir está activo.
- Los tests mockean GSAP para evitar dependencia de animaciones reales durante la ejecución.

## Posibles mejoras

- Añadir pruebas de integración para el flujo completo de compartir entre breakpoints.
- Incluir modo test con cobertura (`vitest --coverage`).
- Publicar una demo en Vercel o Netlify.

## Autor

Desarrollado como práctica de maquetación/interacción a partir de un challenge de Frontend Mentor.
