FROM node:18 AS build

WORKDIR /app

COPY /BudgetBuddy_frontend/package*.json ./

RUN npm install

COPY /BudgetBuddy_frontend ./

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

