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
RUN echo "VITE_GOOGLE_SHEET_ID=${VITE_GOOGLE_SHEET_ID}" > .env && \
    echo "VITE_GOOGLE_CLIENT_EMAIL=${VITE_GOOGLE_CLIENT_EMAIL}" >> .env && \
    echo "VITE_GOOGLE_PRIVATE_KEY=${VITE_GOOGLE_PRIVATE_KEY}" >> .env

# Build the frontend
RUN npm run build

# Expose port
EXPOSE 3000

# Start the Express server
CMD ["node", "server.js"] 