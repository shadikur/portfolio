FROM node:latest

# Install git
RUN apt-get update && apt-get install -y git

# Set working directory
WORKDIR /app

# Clone the repository
RUN git clone https://github.com/shadikur/portfolio.git

# Set the working directory to the cloned repository
WORKDIR /app/portfolio

# Install dependencies
RUN npm install

# Build the project
RUN npm run build

# Install forever globally
RUN npm install -g serve

# Start the application using forever
CMD ["npm", "start"]