#сборка реакт приложения 
#готовому образу даем имя build 
FROM node:22-alpine AS build

#рабочая директория внутри контейнера
WORKDIR /app

#копируем только json файлы если зависимости не менялись, Docker не пересоберёт слой
COPY package*.json ./
#устанавливаем зависимости внутри контейнера.
#npm ci - чистая установка строго по lock-файлу, быстрее и надёжнее npm install
RUN npm ci

#копируем все остальное
COPY . .
#собираем статику: TypeScript → JavaScript, React → HTML/CSS/JS.
#результат окажется в /app/dist.
RUN npm run build


#отдача статики через nginx
FROM nginx:alpine


#копируем готовую статику из первой стадии в стандартную папку Nginx
COPY --from=build /app/dist /usr/share/nginx/html
#копируем наш конфиг Nginx поверх дефолтного
#в нём описано как отдавать статику и как проксировать /api/ на backend.
COPY nginx.conf /etc/nginx/conf.d/default.conf

#слушаем порт 80
EXPOSE 80

#команда запуска nginx на переднем плане при старте контейнера
#daemon off обязателен, иначе контейнер сразу завершится
CMD ["nginx", "-g", "daemon off;"]
