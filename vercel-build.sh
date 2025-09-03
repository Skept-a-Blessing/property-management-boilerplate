#!/bin/bash
echo "Starting Vercel build..."
npm install
npx next build
echo "Build completed successfully"
