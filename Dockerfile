FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

ENV NODE_ENV production
ENV PORT 3000

# Bundle app source
COPY server/ server/
COPY public/ public/

RUN npm install --only=production
# If you are building your code for production
# RUN npm install --only=production

EXPOSE $PORT
CMD [ 'npm', 'run', 'start:server:prod' ]
