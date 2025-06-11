FROM node:18.19.1-alpine

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

# Build the frontend
RUN npm run build

# Expose port
EXPOSE 3000

# Start the Express server
CMD ["node", "server.js"] 