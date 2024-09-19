# Finora : Finance Tracker


## How to setup project

- Clone the project
- Create .env.local at root of the project
- Add below variables in .env.local file

```bash
AUTH_GOOGLE_ID // Oauth client id
AUTH_GOOGLE_SECRET // Oauth client secret
NEXTAUTH_SECRET // any secret string (could be anything)
MONGODB_URI // mongodb connection URI
```

- Now, run below command

```bash
npm i // to install dependencies
```

- Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

- Add Transaction: User can add transaction as income or expense
- Set Goal: User can set monthly goals to stay motivated
- Set Budget for categories: User can set budgets for diferent categories. App will notify if any cateogry expenses passes it's budget

- Goal and Budget Features are under development, which will surely get completed the next day
