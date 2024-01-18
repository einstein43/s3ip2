# docker build -t golfcaddy_api .
# docker run -p 3001:3000 golfcaddy_api

FROM node:18.18-alpine

RUN mkdir -p /app

# Create app directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

COPY prisma ./prisma/

# Install dependencies
RUN npm install

RUN npx prisma generate

# Copy all files
COPY . .

# Expose port 3000
EXPOSE 3001

# Run app
CMD npm run dev