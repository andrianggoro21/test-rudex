import {
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
    Flex,
  } from '@chakra-ui/react';
  import SalesTable from '../components/SalesTable';
  import SalesChart from '../components/SalesChart';
  import DateFilter from '../components/DateFilter';
  import SearchBar from '../components/SearchBar';
  import Statistics from '../components/Statistics';
  import { useState, useEffect } from 'react';
  import { getSales } from '../api/apiClient';
  
  const Home = () => {
    const [sales, setSales] = useState([]);
    const [filteredSales, setFilteredSales] = useState([]);
    const [filteredSalesBySearch, setFilteredSalesBySearch] = useState([]);
  
    useEffect(() => {
      // Fetch sales data from API
      getSales().then((response) => {
        setSales(response.data);
        setFilteredSales(response.data); // Initialize filteredSales with all sales
        setFilteredSalesBySearch(response.data); // Initialize filteredSalesBySearch with all sales
      });
    }, []);
  
    const handleDateFilter = ({ startDate, endDate }) => {
      // Example of how to filter sales by date range
      const filteredData = sales.filter((sale) => {
        return sale.date >= startDate && sale.date <= endDate;
      });
      setFilteredSales(filteredData);
    };
  
    return (
      <Box bg="gray.100" minH="100vh">
        <Container maxW="container.xl" py="12">
          <Heading as="h1" mb="6">
            Dashboard Analitik Penjualan
          </Heading>
          <Grid templateColumns="repeat(6, 1fr)" gap="6">
            <GridItem colSpan={3}>
              <Box bg="white" p="6" borderRadius="lg">
                <Flex justify="space-between" mb="6">
                  <SearchBar setFilteredSales={setFilteredSalesBySearch} sales={sales} />
                  <DateFilter setFilteredSales={handleDateFilter} />
                </Flex>
                <SalesTable sales={filteredSalesBySearch.filter(sale => filteredSales.includes(sale))} />
              </Box>
            </GridItem>
            <GridItem colSpan={3}>
              <Box bg="white" p="6" borderRadius="lg">
                <SalesChart sales={sales} />
              </Box>
            </GridItem>
            <GridItem colSpan={6}>
              <Box bg="white" p="6" borderRadius="lg">
                <Statistics sales={filteredSalesBySearch.filter(sale => filteredSales.includes(sale))} />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default Home;
  