
# Blog Post API

## Overview
This is a RESTful API developed using Node.js and Express.js for managing blog posts. It supports basic CRUD operations without connecting to a database, using in-memory storage for demonstration purposes.

## Getting Started

### Prerequisites
- Node.js

### Installation
```bash
git clone <repository-url>
cd <repository-directory>
npm install
node server.js
```

## API Reference

### Endpoints

**Get All Posts**
- **GET** `/posts`
- **Success Response**: Code: 200 | Content: Array of posts

**Get Single Post**
- **GET** `/posts/:id`
- **URL Parameters**: Required: `id=[string]`
- **Success Response**: Code: 200 | Content: Post object
- **Error Response**: Code: 404 | Content: `{ error : "Post not found" }`

**Create New Post**
- **POST** `/posts`
- **Data Params**: Required: `date=[string]`, `title=[string]`, `body=[string]`
- **Success Response**: Code: 201 | Content: New post object
- **Error Response**: Code: 400 | Content: `{ error : "Missing fields" }`

**Update Post**
- **PUT** `/posts/:id`
- **URL Parameters**: Required: `id=[string]`
- **Data Params**: `date=[string]`, `title=[string]`, `body=[string]`
- **Success Response**: Code: 200 | Content: Updated post object
- **Error Response**: Code: 404 | Content: `{ error : "Post not found" }`

**Delete Post**
- **DELETE** `/posts/:id`
- **URL Parameters**: Required: `id=[string]`
- **Success Response**: Code: 204 | Content: None
- **Error Response**: Code: 404 | Content: `{ error : "Post not found" }`

## Testing
Use Postman or Thunder Client to test the API by sending requests to the specified URLs.
