# используем образ с java 25
FROM eclipse-temurin:25-jre

# рабочая директория внутри контейнера
WORKDIR /app

# копируем собранный jar
COPY target/deposit_calculator-0.0.1-SNAPSHOT.jar app.jar

# открываем порт 8080
EXPOSE 8080

# команда запуска
ENTRYPOINT ["java", "-jar", "app.jar"]

# чтобы собрать сам jar надо в терминал ./mvnw clean package -DskipTests
# потом запускаем контейнер в корне где Dockerfile (обязательно такое название и значок!!!)
# docker build -t deposit-backend .
# docker run -p 8080:8080 deposit-backend