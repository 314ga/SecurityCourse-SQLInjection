<p align="center">
  <a href="" rel="noopener">
 <img src="https://raw.githubusercontent.com/314ga/SecurityCourse-SQLInjection/master/icon.png" alt="Project logo"></a>
</p>
<h3 align="center">SQL injection</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> Security in Computer Systems project - SQL injection vulnerability 
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

It is useful to design and follow a specific format when writing a problem statement. While there are several options

## 💡 Idea / Solution <a name = "idea"></a>

This section is used to describe potential solutions.

## 🚀 Future Scope <a name = "future_scope"></a>

Write about what you could not develop during the course of the Hackathon; and about what your project can achieve
in the future.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js, XAMPP and MySQL Workbench should be installed on the machine

```
Node.js -> https://nodejs.org/en/download/
XAMPP -> https://phpandmysql.com/extras/installing-xampp/
MySQL Workbench -> https://www.mysql.com/downloads/
```

### Create local MySQL database

Open XAMPP Control Panel and start MySQL Module database. Open MySQL Workbench and create database with tables using following script:
```
/backend/database.sql
```

### Start backend server

Open folder "backend/server" and run:
```
npm install
```
To start server:
```
node index.js
```

### Start front-end

Assuming backend server is running. Open folder "frontend/" and run:

```
npm install
```

To start front-end

```
npm start
```

## 🎈 Usage <a name="usage"></a>

The system is used to show successfull SQL injection attack

## ⛏️ Built With <a name = "tech_stack"></a>

- [MySQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [React](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@JakubPiga](https://github.com/314ga/)
- [@MariaFailli](https://github.com/maria4lexzy)

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

To successfully execute SQL injection attack following vultnerability was studied:

CVE-2018-3754 Base Score 8.8 HIGH
- [CVE-2018-3754](https://nvd.nist.gov/vuln/detail/CVE-2018-3754)

