import type { DepositResponse } from '../types';

type Props = {
  result: DepositResponse;
};

export function ResultDisplay({ result }: Props) {
  return (
    <div>
      <p>Итоговая сумма: {result.total.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽</p>
      <p>Доход: {result.profit.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽</p>
    </div>
  );
}