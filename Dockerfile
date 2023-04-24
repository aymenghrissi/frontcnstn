# Stage 1: Build the Angular application
#FROM node:latest as node
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build --configuration production

# Stage 2: Serve the Angular application with NGINX
#FROM nginx:alpine
#COPY --from=node /app/dist/frontendcnstn /usr/share/nginx/html
#EXPOSE 4200
#CMD ["nginx", "-g", "daemon off;"]


#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/frontendcnstn /usr/share/nginx/html
