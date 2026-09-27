import { useState } from 'react';
import type { DepositResponse } from './features/calculator/types';
import { CalculatorForm } from './features/calculator/components/CalculatorForm';
import { ResultDisplay } from './features/calculator/components/ResultDisplay';
import './App.css';

function App() {
  // Состояние: результат расчёта. null  пока ничего не считали
  const [result, setResult] = useState<DepositResponse | null>(null);

  return (
    <div className="app">
      <h1>Калькулятор вклада</h1>

      <CalculatorForm onSubmitResult={setResult} />

      {result !== null && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;