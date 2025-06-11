FROM node:20.11.1-alpine

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps && \
    npm install express googleapis google-auth-library dotenv @tanstack/react-query react-router-dom @radix-ui/react-tooltip @radix-ui/react-toast @radix-ui/react-slot @radix-ui/react-aspect-ratio @radix-ui/react-collapsible sonner

# Copy the rest of the application
COPY . .

# Create .env file with Google credentials
RUN echo "GOOGLE_SHEET_ID=${GOOGLE_SHEET_ID}" > .env && \
    echo "GOOGLE_CLIENT_EMAIL=${GOOGLE_CLIENT_EMAIL}" >> .env && \
    echo "GOOGLE_PRIVATE_KEY=${GOOGLE_PRIVATE_KEY}" >> .env

# Build the frontend
RUN npm run build

# Expose port
EXPOSE 80

# Start the Express server
CMD ["node", "server.js"] 