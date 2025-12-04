# 🏨 Le Mans Hotel Management System - Backend

Spring Boot backend for the Le Mans Hotel Management application.

## 🚀 Quick Start

### Prerequisites

- JDK 17+
- Maven (included via wrapper)
- MySQL Server running on localhost:3306

### Database Setup

Create the MySQL database:
```sql
CREATE DATABASE test_db;
```

Update credentials in `src/main/resources/application.properties` if needed:
```properties
spring.datasource.username=root
spring.datasource.password=1994
```

### Running the Backend

**Using the quick start script:**
```powershell
.\start-backend.ps1
```

**Or manually:**
```powershell
.\mvnw.cmd spring-boot:run
```

## 🔗 Endpoints

- Base URL: http://localhost:8080
- Swagger UI: http://localhost:8080/swagger-ui.html
- API Docs: http://localhost:8080/v3/api-docs

## 📋 Available APIs

### Authentication (`/auth`)
- POST `/auth/login` - User login
- POST `/auth/register` - User registration

### Admin - Rooms (`/admin/rooms`)
- GET `/admin/rooms` - Get all rooms
- POST `/admin/rooms` - Add new room
- PUT `/admin/rooms/{id}` - Update room
- DELETE `/admin/rooms/{id}` - Delete room

### Admin - Bookings (`/admin/bookings`)
- GET `/admin/bookings` - Get all bookings
- PUT `/admin/bookings/{id}` - Update booking status

### Admin - Offers (`/admin/offers`)
- GET `/admin/offers` - Get all offers
- POST `/admin/offers/add` - Create offer
- DELETE `/admin/offers/{id}` - Delete offer

### User - Rooms (`/user/rooms`)
- GET `/user/rooms` - Get available rooms
- GET `/user/rooms/{id}` - Get room details

### User - Bookings (`/user/bookings`)
- POST `/user/bookings` - Create booking
- GET `/user/bookings` - Get user bookings
- PUT `/user/bookings/{id}/cancel` - Cancel booking

### AI Chatbot (`/api/ai`)
- POST `/api/ai/admin` - Admin AI assistant
- POST `/api/ai/user` - User AI assistant

## 🛠️ Tech Stack

- Spring Boot 3.2.5
- Spring Security + JWT Authentication
- Spring Data JPA
- MySQL Database
- Lombok
- SpringDoc OpenAPI
- Spring Mail

## 📁 Project Structure

```
src/
├── main/
│   ├── java/com/example/le_mans_hotel/
│   │   ├── ai/               # AI chatbot controllers
│   │   ├── controller/       # REST API controllers
│   │   ├── model/            # JPA entities
│   │   ├── repository/       # Data repositories
│   │   ├── service/          # Business logic
│   │   └── security/         # Security & JWT config
│   └── resources/
│       └── application.properties
└── test/
```

## 🔐 Security

JWT-based authentication is implemented. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 💡 Development Tips

- Backend auto-reloads with Spring Boot DevTools
- SQL queries are logged to console (check application.properties)
- Use Swagger UI for testing endpoints
- CORS is configured to work with the Angular frontend
