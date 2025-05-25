# LoanLens Client

An Angular 19 frontend that allows users to check their loan eligibility with a responsive, modern UI.

---

## 📥 Clone the Repository

```bash
git clone https://github.com/Hirushan-N/loanlens-client.git
cd LoanLens_Client
```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## ⚙️ Check API Environment

Ensure the `environment.ts` file contains your API URL:

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5249/api'
};
```

Update the URL if your API is hosted elsewhere.

---

## ▶️ Run the Application

```bash
ng serve
```

Open your browser at:

```
http://localhost:4200
```

---

## 🧪 Test Functionality

1. Fill the form fields with valid values.
2. Press **Enter** or click **Check Eligibility**.
3. See the eligibility result, EMI, and risk classification.

---

## 🔗 Related API Repo

Make sure the API is running before starting the client:

**API Repo →** [LoanLens_Backend](https://github.com/Hirushan-N/LoanLens_Backend)
