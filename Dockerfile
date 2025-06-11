FROM node:20.11.1-alpine

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Create credentials directory
RUN mkdir -p /app/credentials

# Copy the rest of the application
COPY . .

# Create .env file
RUN echo "GOOGLE_SHEET_ID=${GOOGLE_SHEET_ID}" > .env && \
    echo "GOOGLE_CLIENT_EMAIL=${GOOGLE_CLIENT_EMAIL}" >> .env && \
    echo "GOOGLE_PRIVATE_KEY=${GOOGLE_PRIVATE_KEY}" >> .env

# Expose port
EXPOSE 8080

# Start the app
CMD ["npm", "run", "dev", "--", "--host"]