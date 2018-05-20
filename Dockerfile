FROM node:carbon

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# ENV NODE_ENV production
# ENV PORT 8080

RUN npm install --only=production
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# EXPOSE $PORT
CMD [ "npm", "run", "start:server:prod" ]
