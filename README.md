# Minimal Gatsby Apollo Prisma App

- Gatsby
- Apollo Client
- GraphQL Yoga server
- Prisma DB
- JWT Authentication

This demo app pulls in static data- from a headless CMS, or in this case markdown files- and statically renders
as a gatsby site. It then hydrates on page load to become a dynamic fullstack app with a GraphQL server, database, protected routes, and authentication.

## Installation

**Frontend**

`cd frontend && npm install && gatsby develop`

**Backend**

`cd backend && npm install`

Install prisma CLI globally if not already, and sign in to prisma account

`prisma login`

`prisma deploy`

Select 'demo server' option

`npm start`
