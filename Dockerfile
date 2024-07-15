# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy wait-for-it.sh script
COPY wait-for-it.sh /usr/src/app/

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application with wait-for-it
CMD ["./wait-for-it.sh", "postgres:5432", "--", "npm", "start"]
