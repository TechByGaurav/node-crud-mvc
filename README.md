# Node.js CRUD MVC Project

A clean and structured Node.js CRUD application implementing the **MVC (Model-View-Controller)** architecture. This project performs **Create, Read, Update, and Delete (CRUD)** operations with proper layering and maintainable code.

---

## 🚀 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **EJS / Handlebars / React (if used)**
* **MVC Architecture**

---

## 📂 Project Structure (MVC)

```
project/
│── controllers/
│     └── studentController.js
│── models/
│     └── Student.js
│── routes/
│     └── studentRoutes.js
│── views/
│     └── index.ejs
|     └── add.ejs
|     └── edit.ejs
|── public/
|   └──style.css 
│── app.js
│── package.json
```

### ✔ Model (Database Layer)

Defines MongoDB schema and structure.

### ✔ View (UI Layer)

Responsible for rendering UI templates.

### ✔ Controller (Logic Layer)

Handles request logic and interacts with the database.

---

## 🛠️ Features

### 🔹 Create

Add new records to MongoDB.

### 🔹 Read

Retrieve all or specific records.

### 🔹 Update

Modify existing data.

### 🔹 Delete

Remove records permanently.

---

## 🌐 API Endpoints

| Method     | Endpoint        | Description       |
| ---------- | --------------- | ----------------- |
| **POST**   | `/add`          | Create a student  |
| **GET**    | `/`             | Get all students  |
| **GET**    | `/edit/:id`     | Get student by ID |
| **POST**   | `/edit/:id`     | Update student    |
|**GET**     |  `/delete/:id`  | Delete student    |
 
---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/your-username/node-crud-mvc.git
cd node-crud-mvc
```

### 2. Install Dependencies

```
npm install
```

### 3. Configure MongoDB

In app.js file

```
mongoose.connect("mongodb://localhost:27017/studentDB");
```

### 4. Run the Server

```
nodemon app.js
```

Server will run at:

```
http://localhost:3000
```

---

## 🧪 Example API Test (Postman)

POST request:

```
http://localhost:3000/add
```

Body (JSON):

```
{
  "name": "Gaurav",
  "email": "gaurav@example.com",
  "course": "MERN"
}
```

---

## 🤝 Contributing

Pull requests are welcome. Follow MVC pattern and maintain clean code.

---

## 📜 License

MIT License.
