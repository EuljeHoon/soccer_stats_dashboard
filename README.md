# ⚽️ Soccer Stats Dashboard Backend

This is the **Django + PostgreSQL backend** for the Soccer Stats Dashboard project.  

It provides REST APIs for player data, team stats, and analytics, built using **Django REST Framework**.

---

## 🧱 Project Structure

```
soccer_stats_dashboard/
├── backend/          # Django project files (settings, urls, etc.)
├── manage.py         # Django management script
├── requirements.txt  # Python dependencies
├── .gitignore
└── .venv/            # Local virtual environment (excluded from Git)
```

---

## ⚙️ 1️⃣ Clone the Repository

```bash
git clone https://github.com/JehoonPark/soccer_stats_dashboard.git
cd soccer_stats_dashboard
```

---

## 🐍 2️⃣ Create and Activate Virtual Environment

### macOS / Linux

```bash
python -m venv .venv
source .venv/bin/activate
```

### Windows (PowerShell)

```bash
python -m venv .venv
.venv\Scripts\activate
```

After activation, your terminal prompt should start with `(venv)`.

---

## 📦 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

This installs Django, psycopg2, DRF, and all other dependencies.

---

## 🗄️ 4️⃣ Set Up PostgreSQL Database

### 1️⃣ Install PostgreSQL (if not installed)

- **macOS**: `brew install postgresql`
- **Ubuntu**: `sudo apt install postgresql postgresql-contrib`
- **Windows**: Download Installer

### 2️⃣ Start PostgreSQL

```bash
brew services start postgresql
```

### 3️⃣ Create Database and User

Run in terminal:

```bash
psql postgres
```

Then execute these SQL commands:

```sql
CREATE DATABASE soccer_stats_db;
CREATE USER soccer_user WITH PASSWORD 'soccerpass';
GRANT ALL PRIVILEGES ON DATABASE soccer_stats_db TO soccer_user;
\q
```

---

## ⚙️ 5️⃣ Configure Django Database Settings

Ensure the following is set in `backend/settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'soccer_stats_db',
        'USER': 'soccer_user',
        'PASSWORD': 'soccerpass',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

> **Note**: For better security, you can move these values to a `.env` file and use `python-dotenv`.

---

## 🔧 6️⃣ Apply Migrations and Create Admin User

```bash
python manage.py makemigrations (Not right now)
python manage.py migrate (Not right now)
```

---

## 🚀 7️⃣ Run the Server

```bash
python manage.py runserver
```

Visit:

👉 **http://127.0.0.1:8000/** - to see the Django welcome page.

**Admin page:**

👉 **http://127.0.0.1:8000/admin/** - Login using the superuser credentials you just created.

---

## 💻 8️⃣ (Optional) Test API Connection

You can test if the backend API works correctly by visiting:

👉 **http://127.0.0.1:8000/api/hello/**

**Expected output:**

```json
{"message": "Hello from Django!"}
```

---

## 🧠 Maintainer

**Jehoon Park**  
University of Minnesota Twin Cities  
📧 `jehoon.park0@gmail.com`  
💻 GitHub: [@JehoonPark](https://github.com/Euljehoon)

---

✅ **Now you're ready to develop!**
