# GrassGo CRUD Operations

## Set Up
Register for a MongoDB Atlas account
An ".env.local" file is neeeded. Specifically, you need to fill the following variables:
```bash
DOMAIN_URL= # The domain of the website (for development: "http://localhost:3000")

DB_USER= # MongoDB Atlas username
DB_PASS= # MongoDB Atlas password
DB_URI= # MongoDB Atlas URI

SALT_WF= # Any number for a Salt Work Factor for hashing

ENC_KEY= # Encryption Key (32 byte)
ENC_IV= # Encryption IV (16 byte)
```

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
