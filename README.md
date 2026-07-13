# Focus | Panel personal de productividad

Aplicación web personal de productividad construida con Next.js, TypeScript y Tailwind CSS para organizar calendario, tareas, sesiones de enfoque y resúmenes de la jornada desde un solo lugar.

## Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- Vercel
- Google Calendar API

## Características

- Reloj y fecha actual en America/Lima
- Agenda diaria
- Resumen de eventos y tareas
- Pomodoro persistente en localStorage
- Gestión básica de tareas con prioridad y estado
- Endpoint interno para eventos del calendario
- Diseño responsive claro/oscuro

## Configuración local

1. Instala dependencias:
   ```bash
   pnpm install
   ```

2. Copia las variables de entorno:
   ```bash
   cp .env.example .env.local
   ```

3. Completa los valores de Google Calendar y autenticación.

4. Inicia el proyecto:
   ```bash
   pnpm dev
   ```

## Variables de entorno

Crea un archivo .env.local con:

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
GOOGLE_CALENDAR_ID=primary
APP_TIMEZONE=America/Lima
AUTHORIZED_EMAIL=
```

## Google Calendar

Para activar la integración con Google Calendar:

1. Crea un proyecto en Google Cloud Console.
2. Habilita la API de Google Calendar.
3. Crea credenciales OAuth 2.0.
4. Genera un refresh token autorizado para la cuenta.
5. Define las variables de entorno anteriores.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. Importa el proyecto en Vercel.
3. Configura las variables de entorno en el panel de Vercel.
4. Conecta el dominio focus.ysaccroncal.dev.
5. Añade el registro DNS que Vercel indique.

## Notas

- El endpoint de eventos usa una respuesta de respaldo con datos de ejemplo cuando faltan credenciales o la API falla.
- La app no expone secretos en el frontend.
- La autenticación personal se puede reforzar con la variable AUTHORIZED_EMAIL en un futuro.

---

Hecho con enfoque por Ysacc Roncal.
