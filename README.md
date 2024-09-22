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
- Set Budget for categories: User can set budgets. App will notify if any cateogry expenses passes it's budget
- Filteration: User can filter transactions by selecting month and year
- Metrics: User can view multiple metrics such as total expenses, income, current balance and mini budget notification on the dashboard
- Google: User can simply sign in using Google account
