<h1 align="center">Astro SSR Test App</h1>
<div align="center">
   A simple app build with Astro SSR and Strapi CMS.
</div>
<br/>

## 🧞 Instructions

First you need to create 👇 (if it doesn't exist) in `/frontend` folder:

### `.env`

Replace values with yours, without `/` in the end (❗️❗️❗️)

```
PUBLIC_SERVER_URL="http://localhost:1337"
PUBLIC_CLIENT_URL="http://localhost:8080"
```

To run the server:

```
open terminal
yarn install (first time only)
cd backend
yarn development

go to http://localhost:1337/admin --> sign in (try to memorize your email/password ❗️)
```

To run the client:

```
open new terminal
yarn install (first time only)
cd frontend
yarn dev
```

Make sure that urls match ones in `.env`, if not replace them.
