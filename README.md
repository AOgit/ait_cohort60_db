# 🗄️ Database Course — AIT TR GmbH (Cohort 60)

Lecture notes, labs, and homework assignments from the **Databases** course at [AIT TR GmbH](https://ait-tr.de/).  
The course covers both **relational databases (PostgreSQL)** and **document-oriented databases (MongoDB)**.

---

## 📁 Repository Structure

```
ait-cohort60-db/
├── lecture_01/          # PostgreSQL — SQL basics
│   └── lab.txt
├── lecture_02/          # PostgreSQL — Advanced queries & aggregations
│   ├── lab.md
│   ├── task1.png
│   └── taks2.md
├── lecture_04/          # MongoDB — CRUD, indexes, aggregation pipeline
│   ├── playground-1.mongodb.js
│   └── hw_db_04.mongodb.js
└── lecture_05/          # MongoDB — Advanced operations, $lookup, arrays
    ├── lesson_05.mongodb.js
    ├── lab_05.mongodb.js
    └── hw_05.mongodb.js
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **PostgreSQL** | Relational database (lectures 01–02) |
| **MongoDB** | Document-oriented database (lectures 04–05) |
| **MongoDB for VS Code** | `.mongodb.js` playground files |
| **SQL** | Query language for PostgreSQL |
| **MQL** | MongoDB Query Language |

---

## 📚 Lectures

### Lecture 01 — PostgreSQL: SQL Basics

> File: `lecture_01/lab.txt`

Introduction to relational databases and PostgreSQL. Working with users, databases, tables, and basic data manipulation.

**Topics covered:**
- `CREATE USER` / `CREATE DATABASE` — creating users and databases
- `CREATE TABLE` with `PRIMARY KEY`, `VARCHAR`, `INTEGER`, `SERIAL`
- `INSERT INTO` — adding single and multiple rows
- `SELECT` with `WHERE`, `ORDER BY`, `DISTINCT`
- `UPDATE` — modifying existing records
- `DELETE` / `TRUNCATE` — deleting records
- `COUNT(*)` — counting rows
- Filtering with `AND` / `OR` conditions

**Example — students table:**
```sql
CREATE TABLE students (
  id     SERIAL PRIMARY KEY,
  name   VARCHAR(80),
  age    INTEGER,
  hobby  VARCHAR(80)
);
```

---

### Lecture 02 — PostgreSQL: Advanced Queries & Aggregations

> Files: `lecture_02/lab.md`, `lecture_02/taks2.md`

Working with a more complex `employees` table. Deep dive into aggregation functions, grouping, filtering, and string operations.

**Topics covered:**
- `GROUP BY` with `COUNT`, `AVG`, `MIN`, `MAX`
- `HAVING` — filtering grouped results
- `BETWEEN` — range filtering
- `LIKE` — pattern matching
- `CONCAT` / `||` — string concatenation with aliases (`AS`)
- `ORDER BY` + `LIMIT` — sorting and pagination
- `EXTRACT(YEAR FROM ...)` — date functions
- `IS NULL` / `IS NOT NULL` — null checks
- `IN (...)` — filtering by list of values

**Example — aggregate query:**
```sql
SELECT job_title, AVG(salary)
FROM employees
GROUP BY job_title;
```

---

### Lecture 04 — MongoDB: CRUD, Indexes & Aggregation Pipeline

> Files: `lecture_04/playground-1.mongodb.js`, `lecture_04/hw_db_04.mongodb.js`

Introduction to MongoDB. Creating databases and collections, working with documents, operators, and indexes.

**Topics covered:**
- `use()` — selecting a database
- `createCollection()` — creating a collection
- `insertOne` / `insertMany` — adding documents
- `find` / `findOne` — querying documents
- `updateOne` / `updateMany` with `$set`, `$mul`, `$unset`
- `deleteOne` / `deleteMany` — deleting documents
- `$gt`, `$lt`, `$gte`, `$lte` — comparison operators
- `$and`, `$or` — logical operators
- `$exists` — field existence check
- `$push` — adding elements to arrays
- `createIndex` — creating indexes (incl. unique)
- `countDocuments` — counting documents
- `.sort()`, `.limit()` — sorting and pagination
- `aggregate` with `$match`, `$lookup`, `$project`

**Main collection — `shop.products`:**
```javascript
db.products.insertOne({
  name: "Iphone 16 pro max",
  price: 1300,
  category: "phone"
});
```

**Homework — `lesson_04.drinks`** (10 beverages with tags):
```javascript
// Find the 3 cheapest drinks
db.drinks.find().sort({ price: 1 }).limit(3);

// Find drinks tagged both 'strong' AND 'cocktail'
db.drinks.find({
  $and: [{ tags: { $eq: "strong" } }, { tags: { $eq: "cocktail" } }]
}, { name: 1, _id: 0 });
```

---

### Lecture 05 — MongoDB: Advanced Operations

> Files: `lecture_05/lesson_05.mongodb.js`, `lecture_05/lab_05.mongodb.js`, `lecture_05/hw_05.mongodb.js`

Advanced MongoDB — working with nested documents, arrays, relationships between collections via `$lookup`, and the aggregation pipeline.

**Topics covered:**
- Nested documents (`details: { brand, model }`)
- Array operations: `$push`, `$unset` on arrays
- `$lookup` — joining two collections (SQL-style JOIN)
- `$project` — controlling output fields
- `.sort()` + `.find()` with complex filters
- `createIndex` with `unique: true`
- Multi-collection workflows (`products`, `orders`, `users`, `customers`)

**Example — `$lookup` (joining orders with users):**
```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_pass",
      foreignField: "pass",
      as: "user_info"
    }
  },
  {
    $project: { _id: 0, "user_info._id": 0 }
  }
]);
```

---

## 🚀 Getting Started

### PostgreSQL

```bash
# Connect to PostgreSQL
psql -U postgres

# Run a .sql file
psql -U postgres -f lecture_01/lab.txt
```

### MongoDB

Open `.mongodb.js` files directly in **VS Code** with the [MongoDB for VS Code](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode) extension and run them via the playground.

```bash
# Or connect via mongosh
mongosh

# Select a database
use shop
```

---

## 📖 Course

**AIT TR GmbH** — IT courses for career changers  
🌐 [https://ait-tr.de](https://ait-tr.de)
