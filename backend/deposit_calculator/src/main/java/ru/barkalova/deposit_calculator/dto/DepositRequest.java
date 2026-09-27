package ru.barkalova.deposit_calculator.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DepositRequest {

    @NotNull(message = "Введите сумму в рублях")
    @DecimalMin(value = "1000.00", message = "Введите сумму от 1000 рублей")
    @DecimalMax(value = "10000000.00", message = "Введите сумму до 10 000 000 рублей")
    private BigDecimal amount;//сумма от 1000 до 10млн

    @NotNull(message = "Введите срок в месяцах")
    @Min(value = 1, message = "Введите срок в месяцах от 1")
    @Max(value = 60, message = "Введите срок в месяцах до 60")
    private Integer months;//срок в месяцах от 1 до 60

    @NotNull(message = "Введите годовую ставку в процентах")
    @DecimalMin(value = "1.00", message = "Введите годовую ставку от 1%")
    @DecimalMax(value = "20.00", message = "Введите годовую ставку до 20%")
    private BigDecimal rate;//годовая ставка от 1% до 20%

}
