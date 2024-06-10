import { Box, Text } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const DateFilter = ({ setFilteredSales }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    const handleDateChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
  
      if (start && end) {
        setFilteredSales({
          startDate: start.toISOString().split('T')[0],
          endDate: end.toISOString().split('T')[0],
        });
      }
    };
  
    return (
      <Box>
        <Text mb="2">Filter berdasarkan tanggal:</Text>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat="yyyy-MM-dd"
          isClearable
          placeholderText="Pilih rentang tanggal"
        />
      </Box>
    );
  };

DateFilter.propTypes = {
  setFilteredSales: PropTypes.func.isRequired,
};

export default DateFilter;
