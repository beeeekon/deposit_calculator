package ru.barkalova.deposit_calculator.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.barkalova.deposit_calculator.dto.DepositRequest;
import ru.barkalova.deposit_calculator.dto.DepositResponse;
import ru.barkalova.deposit_calculator.service.DepositService;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class DepositController {

    private final DepositService service;

    @PostMapping("/calculate")
    public DepositResponse calculate(@Valid @RequestBody DepositRequest request){
        log.info("Расчёт вклада: amount={}, months={}, rate={}",
                request.getAmount(), request.getMonths(), request.getRate());
        return service.calculate(request);
    }

}
