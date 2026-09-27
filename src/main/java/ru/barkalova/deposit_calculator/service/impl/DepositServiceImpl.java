package ru.barkalova.deposit_calculator.service.impl;

import org.springframework.stereotype.Service;
import ru.barkalova.deposit_calculator.dto.DepositRequest;
import ru.barkalova.deposit_calculator.dto.DepositResponse;
import ru.barkalova.deposit_calculator.service.DepositService;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class DepositServiceImpl implements DepositService {

    @Override
    public DepositResponse calculate(DepositRequest request) {
        DepositResponse response = new DepositResponse();
        //Итог = Сумма × (1 + Ставка/100/12) ^ Срок_в_месяцах
        //Прибыль = Итог - Сумма

        //RoundingMode.HALF_UP - школьное округление
        //RoundingMode.HALF_EVEN - банковское округление 2.5->3
        //RoundingMode.HALF_DOWN - зеркальное округление 2.5->2 2.6->3

        // Месячная ставка = rate / 100 / 12 = rate / 1200
        BigDecimal monthlyRate = request.getRate()
                .divide(BigDecimal.valueOf(1200), 10, RoundingMode.HALF_UP);

        //итог
        BigDecimal total = request.getAmount()
                .multiply(monthlyRate.add(BigDecimal.ONE))
                .pow(request.getMonths())
                .setScale(2, RoundingMode.HALF_UP);

        response.setTotal(total);
        response.setProfit(total.subtract(request.getAmount()));

        return response;
    }
}
