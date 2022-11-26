FROM node:16

# Create app directory
WORKDIR /usr/src/app/frontend

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# copy source code into the image
COPY next.config.js ./next.config.js

CMD ["yarn", "dev"]