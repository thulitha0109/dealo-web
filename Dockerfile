# Stage 1: Builder
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Runner
FROM node:22-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

# Copy package.json and server files
COPY package*.json ./
COPY server ./server

# Install ONLY production dependencies
RUN npm install --only=production

# Copy built assets from builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Set ownership to node user
RUN chown -R node:node /usr/src/app

# Switch to non-root user
USER node

# Expose port
EXPOSE 5000

# Start server
CMD ["npm", "run", "start"]
