# 📧 AI Email Writer

An AI-powered Email Reply Generator built with **Spring Boot** and **Google Gemini API**. This application generates professional email replies based on the email content and selected tone.

---

## 🚀 Features

- ✨ Generate AI-powered email replies
- 🎯 Multiple reply tones
  - Professional
  - Friendly
  - Formal
  - Casual
- ⚡ Fast REST API using Spring Boot
- 🔒 Secure API key management using Environment Variables
- 🌐 Gemini AI Integration
- 📄 JSON-based API

---

## 🛠️ Tech Stack

### Backend
- Java 21
- Spring Boot 4
- Spring Web
- Spring WebFlux (WebClient)
- Maven

### AI
- Google Gemini API

### JSON
- Jackson

---

## 📂 Project Structure

```
src
├── main
│   ├── java
│   │   └── com.email.writer
│   │       ├── Controllers
│   │       ├── Services
│   │       ├── Entities
│   │       └── EmailWriterApplication.java
│   │
│   └── resources
│       └── application.properties
```

---

## ⚙️ Configuration

Create the following Environment Variables.

| Variable | Description |
|----------|-------------|
| GEMINI_KEY | Google Gemini API Key |
| GEMINI_URL | Gemini API Endpoint |

Example

```
GEMINI_KEY=YOUR_API_KEY

GEMINI_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
```

Your `application.properties`

```properties
spring.application.name=email-writer

gemini.api.key=${GEMINI_KEY}
gemini.api.url=${GEMINI_URL}
```

---

## ▶️ Running the Project

### Clone Repository

```bash
git clone https://github.com/yourusername/ai-email-writer.git
```

### Navigate

```bash
cd ai-email-writer
```

### Install Dependencies

```bash
mvn clean install
```

### Run

```bash
mvn spring-boot:run
```

---

## 📮 API Endpoint

### Generate Email Reply

**POST**

```
http://localhost:8080/api/email/generate
```

### Request

```json
{
  "emailContent": "Thank you for attending today's meeting. Please share your feedback.",
  "tone": "Professional"
}
```

### Response

```json
{
  "reply": "Thank you for your email. I appreciate the opportunity to provide my feedback..."
}
```

---

## 🔐 Security

This project **does not store API keys** inside the repository.

API credentials are managed using **Environment Variables**.

Never commit your API key to GitHub.

---

## 📈 Future Improvements

- User Authentication
- Email Templates
- Email History
- Multiple AI Models
- Multi-language Support
- Reply Length Options
- Frontend using React
- Docker Support
- Deployment on Render/Railway

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Rajvardhan Patil**

- Java Developer
- Spring Boot Developer
- AI Enthusiast

GitHub: [https://github.com/yourusername](https://github.com/rajpatil197/)
LinkedIn: www.linkedin.com/in/rajvardhan-patil-a80177256

---
