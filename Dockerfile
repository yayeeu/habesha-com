FROM node:20.11.1-alpine

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Create .env file
#RUN echo "VITE_API_URL=/api" > .env

# Expose port
EXPOSE 8080

# Start the app
CMD ["npm", "run", "dev", "--", "--host"]