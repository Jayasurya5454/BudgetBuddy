FROM node:18 AS build
WORKDIR /app
COPY /BudgetBuddy_backend/package*.json ./


RUN npm install

COPY /BudgetBuddy_backend ./

CMD ["npm", "start"]
