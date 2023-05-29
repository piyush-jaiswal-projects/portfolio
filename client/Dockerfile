FROM node:18-alpine

# Working Directory
WORKDIR /app

# Copy src destination
COPY . .

# BUILD
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
RUN npm run build

#RUN
ENV NODE_ENV=production
EXPOSE 7210
CMD ["npm", "start"]