FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#  Vite default port 5173 
EXPOSE 8080

# Run the development server
CMD ["npm", "run", "dev", "--", "--host"]
