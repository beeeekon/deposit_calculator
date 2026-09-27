import type { DepositRequest, DepositResponse } from '../types';


export async function calculateDeposit(
  request: DepositRequest
): Promise<DepositResponse> {
    //response - обещание что ответ придет, await заставляет ждать ответа
    //fetch - встроенная функция браузера отправляет http запрос
  const response = await fetch('/api/calculate', {
    method: 'POST',
    headers: {//явно говорим что отправляем json иначе spring boot не поймет что делать
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),//отправляем json в виде строки тк fetch отправляет только строки
  });

  if (!response.ok) {
    throw new Error(`Ошибка сервера: ${response.status}`);
  }

  return response.json() as Promise<DepositResponse>;
}