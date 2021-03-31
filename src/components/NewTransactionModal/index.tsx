import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../Contexts/TransactionsContext';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    
    onRequestClose();
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal de exemplo"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    > 

      <img 
        onClick={onRequestClose}
        className="close-button-modal"
        src={closeImg} 
        alt="Fechar modal"
      />

      <Container
        onSubmit={handleCreateNewTransaction}
      >
        <h2>Cadastrar transação</h2>
        
        <input 
          placeholder="Título"
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
        />
        
        <input 
          type="number" 
          placeholder="Valor"
          value={amount}
          onChange={(e) => {setAmount(Number(e.target.value))}}
        />

        <TransactionTypeContainer>
          <RadioBox 
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            colorBackground={'green'}
            type="button"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            colorBackground={'red'}
            type="button"
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={(e) => {setCategory(e.target.value)}}
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>

    </Modal>
  );
}
