import { useState } from 'react';
import type { DepositRequest, DepositResponse } from '../types';
import { calculateDeposit } from '../api/calculate';
import { validate, type ValidationErrors } from '../validation';

// Пропсы - что родитель передаёт в этот компонент
// onSubmitResult - функция которую мы вызовем когда получим результат.
type Props = {
  onSubmitResult: (result: DepositResponse) => void;
};

export function CalculatorForm({ onSubmitResult }: Props) {
  // Состояние для трёх полей ввода.
  // Все значения - строки, потому что HTML-инпуты работают со строками.
  const [amount, setAmount] = useState('');
  const [months, setMonths] = useState('');
  const [rate, setRate] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const currentErrors = validate({ amount, months, rate });
  const hasErrors = Object.keys(currentErrors).length > 0;

  // Эта функция срабатывает когда пользователь нажимает кнопку рассчитать
  async function handleSubmit(event: React.FormEvent) {
    // event - событие submit которое вызывает браузер при отправке формы
    // Отменяем стандартное поведение формы - перезагрузку страницы
    event.preventDefault();

    const validationErrors = currentErrors;
    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Собираем объект запроса Number() превращает строку в число
    const request: DepositRequest = {
      amount: Number(amount),
      months: Number(months),
      rate: Number(rate),
    };

    // Отправляем запрос на бэкенд и получаем результат
    const result = await calculateDeposit(request);

    // Сообщаем наверх - родительский компонент покажет результат
    onSubmitResult(result);
  }

  //onSubmit когда форма отправляется вызови мою функцию 
  //когда пользователь печатает, вызывается setAmount
  //с новым значением. e.target.value — то, что ввёл пользователь
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Сумма вклада:
          {currentErrors.amount && <p className="error">{currentErrors.amount}</p>}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="100000.50"
          />
        </label>
      </div>

      <div>
        <label>
          Срок (месяцы):
          {currentErrors.months && <p className="error">{currentErrors.months}</p>}
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            placeholder="12"
          />
        </label>
      </div>

      <div>
        <label>
          Годовая ставка (%):
          {currentErrors.rate && <p className="error">{currentErrors.rate}</p>}
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="8.5"
          />
        </label>
      </div>

      
      <button type="submit" disabled={hasErrors}>
        Рассчитать
      </button>
    </form>
  );
}