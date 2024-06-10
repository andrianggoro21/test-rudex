import PropTypes from 'prop-types';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const SalesTable = ({ sales }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Produk</Th>
          <Th>Tanggal</Th>
          <Th isNumeric>Jumlah Penjualan</Th>
          <Th isNumeric>Pendapatan</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sales.map((sale) => (
          <Tr key={sale.id}>
            <Td>{sale.product}</Td>
            <Td>{sale.date}</Td>
            <Td isNumeric>{sale.sales}</Td>
            <Td isNumeric>{sale.revenue}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

SalesTable.propTypes = {
  sales: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Ensure id is validated as number
      product: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      sales: PropTypes.number.isRequired,
      revenue: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SalesTable;
