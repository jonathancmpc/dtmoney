import { useEffect, useState } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { api } from '../../Services/api';
import { Container } from './styles';

interface Transactions {
  title: string;
  amount: number;
  type: string;
  category: string;
}

export function Summary() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data))
  }, []);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
      <div className="background-green">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}