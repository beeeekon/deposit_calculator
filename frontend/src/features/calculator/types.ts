
// поля должны называться ровно так же, как в Java DTO.
export type DepositRequest = {
  amount: number;
  months: number;
  rate: number;
};

export type DepositResponse = {
  total: number;
  profit: number;
};