package ru.barkalova.deposit_calculator.service;


import ru.barkalova.deposit_calculator.dto.DepositRequest;
import ru.barkalova.deposit_calculator.dto.DepositResponse;

public interface DepositService {

    DepositResponse calculate(DepositRequest request);

}
