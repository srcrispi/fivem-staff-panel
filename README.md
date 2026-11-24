# FiveM Staff Panel

Panel de administración para el equipo staff de un servidor FiveM.

## Características

- Login con usuarios (admin / admin123 y mod / mod123)
- Departamentos (crear, editar, eliminar)
- Rangos con permisos y nivel
- Anuncios
- Lista de staff
- Base de datos **Neon PostgreSQL** + Prisma
- Validaciones con Zod
- UI dark moderna

## Setup

1. Crea un proyecto en [Neon](https://neon.tech) y copia la `DATABASE_URL`.
2. Añade la variable de entorno:

```bash
DATABASE_URL="postgresql://..."
```

3. Instala y prepara la DB:

```bash
npm install
npx prisma db push
npx tsx prisma/seed.ts
```

4. Desarrollo:

```bash
npm run dev
```

## Deploy en Vercel

1. Conecta el repo a Vercel.
2. Añade la variable de entorno `DATABASE_URL` con tu connection string de Neon.
3. Deploy.

## Credenciales demo

| Usuario | Contraseña | Rol        |
|---------|------------|------------|
| admin   | admin123   | owner      |
| mod     | mod123     | moderator  |
