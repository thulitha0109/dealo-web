#!/bin/bash

# Stop on error
set -e

echo "Deploying Dealo..."

# Pull latest changes (optional, if you use git here)
# git pull origin main

# Build and start containers
docker-compose up -d --build

echo "Deployment success!"
