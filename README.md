# QuickPick Backend

This is the backend for QuickPick, built using **Node.js**, **Express**, and **MongoDB** with **TypeScript**.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (>= v16)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (local or cloud instance)
- **Git**

## Installation & Setup

### 1. Clone the Repository
Open the terminal (Command Prompt, Git Bash, or VS Code terminal). Navigate to the folder where you want to clone the project:
```sh
cd /path/to/your/destination-folder
```

Clone the repository:
```sh
git clone https://github.com/peeru142/quickpick--backend.git
cd quickpick--backend
```

### 2. Install Dependencies
```sh
npm install
```


### 3. Build the Project
If you are using TypeScript, compile the project:
```sh
npm run build
```

### 4. Start the Server

#### Development Mode (Hot Reload)
```sh
npm run dev
```

#### Production Mode
```sh
npm start
```

### 5. Test Authentication Routes in Postman
Use **Postman** or **cURL** to test the API endpoints.

- **Signup**: `POST http://localhost:5000/api/auth/signup`
- **Login**: `POST http://localhost:5000/api/auth/login`

### 6. Troubleshooting

- **Port Already in Use**: Run the following command to find and kill the process using port 5000:
  ```sh
  npx kill-port 5000
  ```
- **MongoDB Connection Error**: Ensure MongoDB is running locally or your cloud URI is correct.


