# Google Forms Lite Clone

## Test Task Requirements

See the original task description here:

[Task Requirements](./test-task-requirements.md)

---

## Prerequisites

Make sure you have installed:

- Node.js >= 18
- npm >= 9

Check your versions:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/AsieievKostiantyn/Test-Task-Google-Forms-Lite-Clone.git
cd Test-Task-Google-Forms-Lite-Clone
```

Install root dependencies:

```bash
npm install
```

Install dependencies for both applications:

```bash
cd client
npm install
cd ../server
npm install
cd ..
```

---

## Running the Project

Run both client and server simultaneously from the root directory:

```bash
    npm run dev
```

Expected default behavior:

- Client runs via Vite (default: http://localhost:5173
  )

- Server runs on http://localhost:4000
  (Apollo GraphQL)

---

## Running Apps Separately (Optional)

Start server only

```bash
cd server
npm run dev
```

Start client only

```bash
cd client
npm run dev
```
