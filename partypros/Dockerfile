FROM node:alpine

WORKDIR '/app'

COPY package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build


FROM nginx

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html

# RUN rm /etc/nginx/conf.d/default.conf
# COPY ./nginx/default.conf /etc/nginx/conf.d

EXPOSE 3000


CMD ["nginx", "-g", "daemon off;"]