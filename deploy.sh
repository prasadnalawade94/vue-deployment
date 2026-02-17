#!/bin/bash

echo "Pull latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Deploying to nginx..."
cp -r dist/* /opt/homebrew/var/www/

echo "Deployment Done!"

