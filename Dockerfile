FROM node:latest as node
WORKDIR /app
LABEL Name=angularlearningproject Version=0.1
COPY . .
RUN npm install
CMD npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node  /app/dist/angularlearningproject /usr/share/nginx/html

