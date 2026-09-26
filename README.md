# GameZone — Semana 7

Proyecto eCommerce de videojuegos desarrollado para **Desarrollo Frontend I (PFY2201)**, actividad **“Construyendo componentes funcionales en React para un eCommerce interactivo”**.

Esta versión continúa el proyecto GameZone trabajado en semanas anteriores y lo implementa con **React + Vite**, utilizando componentes funcionales, props, estado, Hooks, eventos de React y renderizado condicional.

## Tecnologías utilizadas

- React
- Vite
- JavaScript (ES Modules)
- CSS3
- `localStorage`
- ESLint
- Git y GitHub

## Funcionalidades implementadas

- Catálogo de videojuegos con:
  - nombre;
  - categoría;
  - descripción;
  - imagen;
  - precio normal;
  - precio oferta.
- Navbar responsive con:
  - enlace a Inicio;
  - enlace a Destacados;
  - menú desplegable de Productos;
  - categorías Aventura, Carreras y Deportes;
  - contador de productos del carrito;
  - menú hamburguesa en dispositivos móviles.
- Carrusel de videojuegos destacados con:
  - avance automático;
  - botones anterior y siguiente;
  - indicadores;
  - animación horizontal.
- Búsqueda dinámica por nombre o categoría mediante `onChange`.
- Filtro de productos por categoría.
- Carrito de compras con:
  - agregar productos;
  - agregar el mismo producto varias veces como entradas independientes;
  - eliminar una entrada específica;
  - contador total de productos;
  - cálculo dinámico del precio total.
- Persistencia del carrito mediante `localStorage` y `useEffect`.
- Toast de confirmación al agregar o eliminar un producto.
- Modal React de detalles con:
  - imagen;
  - categoría;
  - nombre;
  - descripción;
  - precio normal;
  - precio oferta;
  - botón para agregar al carrito;
  - cierre mediante botón, `Esc` o clic en el fondo.
- Renderizado condicional para:
  - carrito vacío;
  - búsquedas sin resultados;
  - navbar móvil;
  - submenú de productos;
  - notificaciones;
  - modal.
- Diseño responsive para escritorio, tablet y móvil.
- Mejoras de accesibilidad mediante atributos ARIA, etiquetas descriptivas y estados accesibles.

## Estructura principal

```text
PFY2201_Semana7_GameZone/
├── capturas/
├── public/
│   ├── img/
│   │   ├── minecraft.jpg
│   │   ├── forza-horizon-5.jpg
│   │   └── ea-sports-fc-26.jpg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Carousel.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductModal.jsx
│   │   ├── Cart.jsx
│   │   └── CartTotal.jsx
│   ├── data/
│   │   └── products.js
│   ├── utils/
│   │   └── format.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Componentes y conceptos de React

### Estado y Hooks

Se utiliza `useState` para gestionar:

- carrito de compras;
- búsqueda;
- categoría activa;
- menú hamburguesa;
- submenú de productos;
- diapositiva activa del carrusel;
- notificaciones;
- producto seleccionado en el modal.

Se utiliza `useEffect` para:

- persistir el carrito en `localStorage`;
- controlar el cambio automático del carrusel;
- cerrar automáticamente las notificaciones;
- gestionar el comportamiento del modal.

### Props

Los componentes reciben información y funciones mediante props para mantener una estructura modular y reutilizable. Por ejemplo:

- `ProductList` recibe los productos filtrados.
- `ProductCard` recibe el producto y las acciones para agregar o ver detalles.
- `Cart` recibe el contenido del carrito y la función de eliminación.
- `Navbar` recibe la cantidad de productos y la función de filtrado por categoría.

### Eventos React

Entre los eventos utilizados se encuentran:

- `onClick`;
- `onChange`;
- `onMouseDown`;
- eventos de teclado para cerrar el modal con `Escape`.

### Métodos de arreglos

- `.map()` para renderizar productos, categorías, diapositivas y elementos del carrito.
- `.filter()` para filtrar el catálogo y eliminar elementos específicos del carrito.
- `.reduce()` para calcular el precio total del carrito.

## Relación con los criterios de evaluación

| Criterio | Implementación en GameZone |
| --- | --- |
| 1. Listado de productos | Cada producto presenta nombre, precio normal, precio oferta, descripción e imagen. |
| 2. Carrito de compras | Permite agregar y eliminar productos, muestra cantidad total y calcula el precio total dinámicamente. |
| 3. Componentes funcionales | La aplicación está dividida en componentes funcionales reutilizables dentro de `src/components/`. |
| 4. Eventos | Se utilizan eventos React como `onClick`, `onChange` y `onMouseDown`. |
| 5. Renderizado condicional | Se muestran estados diferentes para carrito vacío, búsquedas sin resultados, menú, notificaciones y modal. |
| 6. Organización del código | Se utilizan funciones reutilizables, nombres claros, comentarios JSDoc y utilidades como `formatPrice`. |
| 7. GitHub, documentación y evidencias | El proyecto incluye este README y una carpeta `capturas/` con evidencias de las funcionalidades. Los enlaces se completan al publicar el repositorio y GitHub Pages. |

## Evidencias

Las evidencias se encuentran en la carpeta [`capturas/`](./capturas/).

| Archivo | Evidencia |
| --- | --- |
| `01-Chrome-Catalogo-Carrito-Vacio.png` | Catálogo y carrito vacío. |
| `02-Chrome-Carrito-Producto.png` | Producto agregado al carrito. |
| `03-Chrome-LocalStorage-Persistencia.png` | Persistencia del carrito después de recargar. |
| `04-Chrome-Carrito-Eliminar.png` | Carrito vacío después de eliminar. |
| `05-Chrome-Busqueda-OnChange.png` | Búsqueda dinámica mediante `onChange`. |
| `06-Chrome-Categoria-Deportes.png` | Filtrado por categoría. |
| `07-Chrome-Carrito-Multiples-Productos.png` | Producto agregado varias veces como entradas independientes. |
| `08-Chrome-Carrito-Eliminar-Individual.png` | Eliminación de una entrada sin afectar a las demás. |
| `09-Chrome-Renderizado-Condicional.png` | Mensaje cuando no existen resultados. |
| `11-Chrome-Mobile-Carrusel.png` | Carrusel y diseño responsive en móvil. |
| `13-Chrome-Navbar-Dropdown.png` | Navbar final y dropdown de productos. |
| `14-Chrome-Toast-Carrito.png` | Toast de confirmación y carrito actualizado. |
| `15-Chrome-Modal-Detalles.png` | Modal React con detalles del producto. |
| `16-Chrome-Mobile-Navbar-Final.png` | Navbar final, hamburguesa y dropdown en móvil. |

## Instalación y ejecución

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Validar el código:

```bash
npm run lint
```

Generar la versión de producción:

```bash
npm run build
```

Previsualizar la compilación:

```bash
npm run preview
```

> En PowerShell, si la política de ejecución bloquea `npm.ps1`, se pueden utilizar los mismos comandos con `npm.cmd`, por ejemplo: `npm.cmd run dev`.

## Despliegue en GitHub Pages

El proyecto utiliza rutas compatibles con GitHub Pages y contiene un script de despliegue a la rama `gh-pages`.

Después de crear el repositorio, configurar el remoto y subir la rama principal:

```bash
npm run deploy
```

En PowerShell:

```powershell
npm.cmd run deploy
```

El script genera primero `dist/` y luego publica su contenido en la rama `gh-pages`.

En GitHub se debe comprobar en **Settings > Pages** que el sitio esté configurado para publicarse desde la rama `gh-pages`.

## Enlaces de entrega

- **Repositorio GitHub:** https://github.com/frankcoral/frontend-semana-7
- **GitHub Pages:** https://frankcoral.github.io/frontend-semana-7/

## Validaciones finales

Antes de entregar se recomienda comprobar:

```bash
npm run lint
npm run build
```

y verificar manualmente:

- navbar y dropdown;
- carrusel;
- búsqueda;
- filtros;
- agregar y eliminar productos;
- contador y total;
- persistencia con `localStorage`;
- toast;
- modal;
- comportamiento responsive.
