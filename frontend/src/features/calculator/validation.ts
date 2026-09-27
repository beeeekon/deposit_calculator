import type { DepositRequest } from './types';


// keyof DepositRequest тип "ошибки по полям"
// Partial<Record<...>> означает объект где ключ - любое из полей DepositRequest
// Patial все поля необязательные
export type ValidationErrors = Partial<Record<keyof DepositRequest, string>>;

export const LIMITS = {
  amount: { min: 1000, max: 10_000_000 },
  months: { min: 1, max: 60 },
  rate: { min: 1, max: 20 },
} as const;

export function validate(values: {
  amount: string;
  months: string;
  rate: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  // проверка amount
  if (values.amount.trim() === '') {//trim убирает пробелы в начале и в конце
    errors.amount = 'Заполните это поле';
  } else {
    const amount = Number(values.amount);
    if (isNaN(amount)) {
      errors.amount = 'Введите число через точку (например, 12345.67)';
    } else if (amount < LIMITS.amount.min || amount > LIMITS.amount.max) {
      errors.amount = `Сумма должна быть от ${LIMITS.amount.min} до ${LIMITS.amount.max} ₽`;
    }
  }

  // проверка months
  if (values.months.trim() === '') {
    errors.months = 'Заполните это поле';
  } else {
    const months = Number(values.months);
    if (isNaN(months)) {
      errors.months = 'Введите целое число';
    } else if (months < LIMITS.months.min || months > LIMITS.months.max) {
      errors.months = `Срок должен быть от ${LIMITS.months.min} до ${LIMITS.months.max} месяцев`;
    }
  }

  // проверка rate
  if (values.rate.trim() === '') {
    errors.rate = 'Заполните это поле';
  } else {
    const rate = Number(values.rate);
    if (isNaN(rate)) {
      errors.rate = 'Введите число через точку (например, 12.34)';
    } else if (rate < LIMITS.rate.min || rate > LIMITS.rate.max) {
      errors.rate = `Ставка должна быть от ${LIMITS.rate.min} до ${LIMITS.rate.max}%`;
    }
  }

  return errors;
}