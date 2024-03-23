Dockerfile
# Use official Node.js image as base
FROM node:14

# Set working directory in container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 80
EXPOSE 80

# Command to run the application
CMD ["node", "script.js"]
