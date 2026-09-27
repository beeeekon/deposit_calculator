package ru.barkalova.deposit_calculator.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;

@Slf4j
@RestControllerAdvice //класс перехватчик ошибок для всех контроллеров
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class) //вызывается если не пройдет @Valid
    @ResponseStatus(HttpStatus.BAD_REQUEST)//400
    public String handleValidation(MethodArgumentNotValidException ex) {
        log.warn("Ошибка валидации: {}", ex.getMessage());
        List<FieldError> errors = ex.getBindingResult().getFieldErrors();//список поле + ошибка
        if (errors.isEmpty())
            return "Ошибка валидации";

        String errorMessage = "";
        for (int i=0; i< errors.size();i++){
            FieldError error = errors.get(i);
            errorMessage += error.getField() + ": " + error.getDefaultMessage();
            if (i < errors.size() - 1) {
                errorMessage += "\n";
            }
        }
        return errorMessage;
    }


    @ExceptionHandler(ArithmeticException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)//500
    public String handleArithmetic(ArithmeticException ex) {
        log.error("Ошибка вычисления", ex);
        return "Ошибка вычисления: " + ex.getMessage();
    }
}
