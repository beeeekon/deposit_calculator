package ru.barkalova.deposit_calculator.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

//http://localhost:8080/swagger-ui/index.html
@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Deposit Calculator")
                        .description("REST API для расчета вклада")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("Ekaterina Barkalova")
                                .email("barkekvl@mail.ru")
                                .url("https://github.com/beeeekon")))
                .servers(List.of(
                        new Server()
                                .url("http://localhost:8080")
                                .description("Local server")));
    }
}
