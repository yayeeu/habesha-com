FROM node:20.11.1-alpine

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Create .env file with Google credentials
RUN echo "GOOGLE_SHEET_ID=${GOOGLE_SHEET_ID}" > .env && \
    echo "GOOGLE_CLIENT_EMAIL=${GOOGLE_CLIENT_EMAIL}" >> .env && \
    echo "GOOGLE_PRIVATE_KEY=${GOOGLE_PRIVATE_KEY}" >> .env

# Install additional required dependencies
RUN npm install googleapis google-auth-library @types/node @types/react @types/react-dom

# Expose ports for frontend and backend
EXPOSE 8080 3000

# Start both frontend and backend
CMD ["sh", "-c", "npm run dev & npm run server"]