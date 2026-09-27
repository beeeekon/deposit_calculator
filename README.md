# Deposit Calculator

Веб-приложение «Калькулятор вклада» с расчётом капитализации процентов.

**Стек:**
- Backend: Java 25, Spring Boot 4, BigDecimal, Jakarta Validation, Swagger
- Frontend: React 19, TypeScript, Vite
- Инфраструктура: Docker, Docker Compose, Nginx

---

## Запуск

### 1. Что установить

Единственное требование - **Docker Desktop**.

- **Windows / macOS:** скачать с [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/) и установить. После установки запустить - в трее (правый нижний угол) должна появиться **зелёная иконка кита**.
- **Linux:** установить `docker` и `docker compose` через пакетный менеджер дистрибутива.

Проверить, что Docker работает:
```bash
docker --version
docker compose version
```
Обе команды должны вывести номера версий.

### 2. Склонировать репозиторий

Открыть терминал (Windows PowerShell, macOS Terminal или Linux Bash) и выполнить:

```bash
git clone https://github.com/beeeekon/deposit_calculator.git
```

Появится папка `deposit_calculator`. Перейти в неё:

```bash
cd deposit_calculator
```

Убедиться, что **в корне** есть папки `backend/`, `frontend/` и файл `docker-compose.yml`:

```bash
# Windows PowerShell
dir

# macOS / Linux
ls
```

### 3. Запустить приложение

В корне проекта выполнить:

```bash
docker compose up --build
```

Должны запуститься два контейнера: `deposit-backend` и `deposit-frontend`.

В терминале должно быть:

```
deposit-backend  | Started DepositCalculatorApplication in X seconds
deposit-frontend | Configuration complete; ready for start up
```

### 4. Открыть в браузере

Перейти по адресу:

```
http://localhost/
```

### 5. Остановить

В терминале, где запущен `docker compose`, нажать **`Ctrl+C`**.

Или в другом терминале, из корня проекта:

```bash
docker compose down
```
