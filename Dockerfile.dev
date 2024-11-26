# Use the official Node.js image as the base image
FROM node:22.11.0

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files (after installing dependencies)
COPY . .

# Expose the port the app runs on (default is 3000 for development mode)
EXPOSE 3000

# Use development environment
ENV NODE_ENV=development

# Command to start the application in development mode
CMD ["npm", "run", "dev"]
