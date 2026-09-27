package ru.barkalova.deposit_calculator.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DepositResponse {

    private BigDecimal total;//итоговая сумма

    private BigDecimal profit;//доход
}
