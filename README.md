# Control de Registros

## Descripción
Este proyecto es una aplicación web diseñada para registrar, visualizar y gestionar diferentes tipos de registros, como gastos o ingresos.  
Permite agregar datos mediante un formulario, mostrarlos en una tabla dinámica, eliminarlos cuando sea necesario y calcular el balance automáticamente.  
El objetivo principal es ofrecer una herramienta sencilla y práctica para organizar información de forma clara.

## Autor
- **Nombre:** Jhonni Cala Fajardo  
- **Fecha de creación:** 09/12/2025  

## Estructura del proyecto
- **index.html** — Contiene toda la estructura visual de la página (formulario, tabla, botones).  
- **styles.css** — Aplica los estilos, colores, tamaños, organización visual y diseño responsivo.  
- **script.js** — Controla toda la lógica: validación de datos, agregar/eliminar registros, actualización del balance y manejo de eventos.  


## Tecnologías utilizadas
- **HTML5** — Para la estructura de la página.  
- **CSS** — Para los estilos y diseño visual.  
- **JavaScript (ES6+)** — Para la lógica y funciones interactivas.  
- **Git y GitHub** — Para control de versiones y publicación del proyecto.
## 🚀 Instrucciones de Uso

1. Agregar un Registro
Descripción: Escribe qué es el gasto/ingreso (ej: "Salario", "Supermercado")

Monto: Ingresa la cantidad (ej: 1500)

Categoría: Selecciona una opción del menú desplegable

Urgente: Marca la casilla si es necesario

Haz clic en el botón "Agregar"

2. Visualizar Registros
Todos los registros aparecerán automáticamente en la tabla

Cada fila muestra:

✅ Descripción

💰 Monto formateado

🏷️ Categoría

⚡ Urgencia ("Sí" o "No")

🗑️ Botón para eliminar

3. Gestionar Registros
Eliminar: Haz clic en el botón "Eliminar" junto a cualquier registro

Balance automático: El total se actualiza en tiempo real

Limpiar formulario: Usa el botón "Limpiar" para vaciar todos los campos

4. Interpretar el Balance
🟢 Verde: Balance positivo (ingresos > gastos)

🔴 Rojo: Balance negativo (gastos > ingresos)

Mensaje: "Balance actual: $X"

### **📥 Clonar y Ejecutar Localmente**

#### **Opción 1: Abrir directamente**
1. Descarga los archivos del proyecto
2. Abre `index.html` en tu navegador favorito (Chrome, Firefox, Edge, etc.)
3. ¡Listo! La aplicación está funcionando

#### **Opción 2: Usando Git**
bash
# Clonar el repositorio
git clone https://github.com/ezelomer/Control-Registros.git

# Navegar al directorio del proyecto
cd Control-Registros

# Abrir en el navegador
# En Windows:
start index.html

# En macOS:
open index.html

# En Linux:
xdg-open index.html

## 🤝 Contribuciones

### **¿Cómo contribuir?**

Si deseas contribuir al proyecto:

#### **Pasos básicos:**
1. **Haz un fork** del repositorio
2. **Clona tu fork** localmente:
  
Crea una rama para tu funcionalidad:

bash
git checkout -b feature/nueva-funcionalidad
Realiza tus cambios y haz commit:

bash
git add .
git commit -m "feat: añade [descripción de la funcionalidad]"
Sube los cambios a tu fork:

bash
git push origin feature/nueva-funcionalidad


<img width="1602" height="831" alt="Captura de pantalla 2025-12-09 201252" src="https://github.com/user-attachments/assets/70bf9ecf-2e44-496c-ae64-abca6e78577a" />
<img width="1839" height="886" alt="Captura de pantalla 2025-12-09 201326" src="https://github.com/user-attachments/assets/2d8ee74b-1c51-4f45-8319-0e50219947aa" />


