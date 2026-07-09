# Gharkul (AI-Powered Society Management Platform)

## 📌 Overview

**Gharkul** is an AI-powered society management platform designed to simplify apartment operations by automating maintenance bill processing, resident communication, and society administration.

The platform helps housing societies manage residents, maintenance bills, financial records, and notifications through a centralized digital dashboard.

Using **AI-powered document extraction**, Gharkul can scan maintenance bills, automatically extract important information, store it securely, and notify residents instantly.

---

# 🚀 Key Features

## 🤖 AI Maintenance Bill Scanner

Transform traditional paper bills into structured digital records.

### Automatically extracts:

- 👤 Resident Name
- 🏠 Flat Number
- 🧾 Bill Number
- 📅 Billing Month
- 💰 Total Amount
- 📊 Individual Charge Breakdown

Example:

```
Maintenance Charges     ₹1175
Sinking Fund             ₹26
Repair Fund              ₹78
Insurance                ₹66
```

Powered by **Groq AI Vision**.

---

# 👨‍💼 Admin Dashboard

A centralized control panel for society administrators.

Features:

- Upload and scan maintenance bills
- Manage resident information
- View financial summaries
- Monitor bill records
- Send resident notifications
- Quick society management actions

---

# 👤 Resident Dashboard

A simple portal for residents.

Residents can:

- View latest maintenance bills
- Check payment details
- View item-wise bill breakdown
- Access society updates

---

# 📧 Smart Email Notifications

Integrated with **Resend API** to provide automated communication.

Use cases:

- Maintenance bill notifications
- Payment reminders
- Society announcements

---

# 🧠 AI Society Intelligence (Future Module)

Planned AI analytics feature:

### Society Health Score

AI analyzes:

- Maintenance collection efficiency
- Pending complaints
- Expense trends
- Repair costs

and generates actionable insights.

Example:

> "Collection efficiency is excellent, but repair expenses increased this month. Consider reviewing maintenance costs."

---

# 🏗️ System Architecture

```
                Maintenance Bill Image
                         |
                         ↓
                  Groq AI Vision
                         |
                         ↓
              Extract Structured Data
                         |
                         ↓
                  Supabase Database
                         |
             -----------------------
             |                     |
             ↓                     ↓
       Admin Dashboard       Resident Dashboard
             |
             ↓
       Resend Email Service
             |
             ↓
        Resident Notification
```

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React

## Backend

- Node.js
- Express.js
- REST API

## Database & Storage

- Supabase PostgreSQL
- Supabase Storage

## Artificial Intelligence

- Groq Vision API

## Communication

- Resend Email API

---

# 📂 Project Structure

```
Gharkul

├── frontend
│   ├── React Application
│   ├── Components
│   ├── Pages
│   └── Supabase Integration
│
└── backend
    ├── Express Server
    └── Resend Email Service
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Backend Setup

```bash
cd backend

npm install

npm start
```

---

# 🔐 Environment Variables

## Frontend

Create `.env`

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

---

## Backend

Create `.env`

```
RESEND_API_KEY=
```

---

# 🔮 Future Enhancements

- 💳 Online maintenance payment integration
- 📱 Mobile application
- 📝 Complaint management system
- 🔔 Automated reminders
- 📈 AI-based financial forecasting
- 🏢 Multi-society support
- 📊 Advanced analytics dashboard

---

# 🎯 Vision

Gharkul aims to modernize residential society management by combining **Artificial Intelligence, automation, and digital communication** into one simple platform.

---

## 👨‍💻 Developer

Built as an AI-powered Society Management MVP.