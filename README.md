# streamifyFlow Backend

This is the backend for the streamifyFlow project.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Create a `.env` file in the `backend/` directory with the following variables:
   ```
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure

- `src/server.js` - Entry point for the Express server
- `src/lib/db.js` - MongoDB connection logic
- `src/models/User.js` - User model
- `src/controllers/auth.controller.js` - Authentication controllers
- `src/routes/auth.route.js` - Authentication routes

## API Endpoints

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout

---
