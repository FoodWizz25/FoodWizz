# 🍔 FoodWizz – Autenticación y Módulos en Desarrollo

**FoodWizz** es una página web enfocada en la gestión y experiencia de pedidos para foodtrucks y pequeños negocios. Actualmente incluye una interfaz moderna de **Login** y **Sign Up**, y se están integrando módulos adicionales como gestión de inventario, control de pedidos y panel administrativo.

> 🔗 **Demo**: Puedes ver la versión en vivo aquí: [FoodWizz - Vista en vivo](https://foodwizz25.github.io/FoodWizz/public/FoodWizz.html)
> 🖼️ **Capturas**: *(agrega imágenes en `/docs` y enlázalas aquí)*

---

## ✨ Características principales

* **Autenticación**: Pantallas de **Login** y **Sign Up** con UI moderna.
* **Mostrar/Ocultar contraseña** con icono de ojo.
* **Animación con overlay**: transición fluida entre Login y Sign Up.
* **Responsive**: diseño adaptable a dispositivos móviles y escritorio.
* **Tecnologías simples**: HTML, CSS y JavaScript (vanilla), sin frameworks.

> **En integración** (roadmap):
> * [ ] **Gestión de inventario** (productos, stock, alertas).
> * [ ] **Módulo de órdenes** (creación, estados, historial).
> * [ ] **Panel de administración** (tablero con métricas básicas).
> * [ ] **Roles y permisos** (admin, operador, lector).
> * [ ] **Integración con pasarela de pago** (definir proveedor).
> * [ ] **Notificaciones** (email/in-app).

---

## 🧩 Stack técnico

* **Frontend**: HTML5, CSS3, JavaScript (ES6)
* **UI**: Google Fonts (**Poppins**), **Remix Icon** (CDN)
* **Deploy**: GitHub Pages / Vercel / Netlify (estático)

> Si agregas backend más adelante, documenta aquí tu API (endpoints, auth, variables de entorno, etc.).

---

## 📁 Estructura del repositorio

```
FoodWizz/
│
├── public/
│   └── FoodWizz.html
├── css/
├── js/
└── assets/
```

## 🚀 Inicio rápido (local)

1. **Clona** el repo:

   ```bash
   git clone https://github.com/<tu-usuario>/<tu-repo>.git
   cd <tu-repo>
   ```
2. **Abre `index.html`** en el navegador o usa un servidor estático:

   ```bash
   # Opción Node (http-server)
   npm i -g http-server
   http-server -o
   ```

---

## 🧪 Accesibilidad

* `label[for]` asociado a cada `input`.
* Estados `:focus` visibles para teclado.
* Contraste de color conforme a WCAG AA.
* Textos e iconos con `aria-label` o `title` cuando aplique.

---

## 🧭 Roadmap detallado

* **Inventario**

  * [ ] CRUD de productos
  * [ ] Gestión de lotes/unidades y mínimos de stock
  * [ ] Filtros y búsqueda rápida
* **Órdenes**

  * [ ] Estados (pendiente, preparando, listo, entregado)
  * [ ] Impresión de tickets (opcional)
  * [ ] Historial y reportes básicos (CSV)
* **Panel**

  * [ ] Métricas: ventas del día, TOP productos, tiempos
  * [ ] Gráficas (Recharts/Chart.js opcional)
* **Auth**

  * [ ] Validación en frontend
  * [ ] Integración con backend/JWT (futuro)

---

## 🏁 Deploy

### GitHub Pages

1. Sube a `main` y ve a **Settings → Pages**.
2. En *Source*, elige `Deploy from a branch` y selecciona `main` + `/ (root)`.
3. Guarda y pega la URL en la sección **Demo**.

### Vercel / Netlify

* Importa el repo y despliega como **static site**. No requiere build.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Crea un issue con la propuesta.
2. Haz fork y crea una rama `feat/tu-feature`.
3. Abre un Pull Request con descripción clara y capturas si aplica.

---

## 🧰 Scripts útiles

```bash
# Linter (si agregas ESLint/Prettier más adelante)
npm run lint
npm run format
```

---

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## 🙌 Agradecimientos

* Iconos por **Remix Icon**
* Tipografías por **Google Fonts** (Poppins)

---

## 📣 Notas

Si estás evaluando este proyecto, recuerda que **FoodWizz** está en evolución. Cualquier feedback o idea será bienvenida en la pestaña de *Issues* del repositorio.