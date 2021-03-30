import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

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

      <Container>
        <h2>Cadastrar transação</h2>
        
        <input 
          placeholder="Título"
        />
        
        <input 
          type="number" 
          placeholder="Valor"
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
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>

    </Modal>
  );
}
