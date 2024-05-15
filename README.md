# Digital Assistant Service

## Introduction

The Digital Assistant Service is a Node.js and MongoDB application that provides two APIs for managing a digital assistant:

1. Define a name and text response string for a digital assistant.
2. Send a text message to the named assistant and receive the defined string.

The project can be run locally for development and testing purposes, as well as hosted on a remote server.

## Setup

### Locally

1. **Clone the Repository**:
```
git clone https://github.com/SK-Subroto/digital-assistant-service-backend.git
```
2. **Navigate to Project Directory**:
```
cd digital-assistant-service
```

3. **Install Dependencies**:
```
npm install
```

4. **Run the Server**:
```
npm start
```

**Local Server**: 
-The server will start running locally at http://localhost:5000.

**Remote Server**:
- [https://digital-assistant-service-backend.onrender.com/](https://digital-assistant-service-backend.onrender.com/)

## API Usage

### Assistant API

- **Live Endpoint**: [https://digital-assistant-service-backend.onrender.com/api/v1/assistant](https://digital-assistant-service-backend.onrender.com/api/v1/assistant)
- **Local Endpoint**: [http://localhost:5000/api/v1/assistant](http://localhost:5000/api/v1/assistant)
- **Method**: POST
- **Request Body** (JSON):
```
{
 "name": "Subroto",
 "text": "Hello, How can I help you today?"
}
```

### Message API

- **Live Endpoint**: [https://digital-assistant-service-backend.onrender.com/api/v1/message](https://digital-assistant-service-backend.onrender.com/api/v1/message)
- **Local Endpoint**: [http://localhost:5000/api/v1/message](http://localhost:5000/api/v1/message)
- **Method**: POST
- **Request Body** (JSON):
```
{
  "name": "Subroto",
  "message": "Hello"
}
```