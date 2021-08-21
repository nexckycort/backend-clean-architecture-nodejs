# Here we are getting our node as Base image
FROM node:14.17.5-alpine

# create user in the docker image
USER node

# Creating a new directory for app files and setting path in the container
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

# setting working directory in the container
WORKDIR /home/node/app

# grant permission of node project directory to node user
COPY --chown=node:node ./build .

# installing the dependencies into the container
RUN npm install

# container exposed network port number
EXPOSE 3000

# Ejecuta tu aplicación.
CMD [ "npm", "start" ]
