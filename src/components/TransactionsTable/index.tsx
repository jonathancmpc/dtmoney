import { Container } from './styles';

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>PIX</td>
            <td className="deposit">R$ 1.000,00</td>
            <td>Crédito</td>
            <td>01/01/2021</td>
          </tr>
          <tr>
            <td>Gasolina</td>
            <td className="withdraw">- R$ 100,00</td>
            <td>Veículo</td>
            <td>05/01/2021</td>
          </tr>
          <tr>
            <td>Cédito celular</td>
            <td className="withdraw">- R$ 400,00</td>
            <td>Celular</td>
            <td>06/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}