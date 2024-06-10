import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { getSales } from "../api/apiClient";

const Statistics = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    getSales().then((response) => {
      const sales = response.data;
      const totalSalesCount = sales.reduce((acc, cur) => acc + cur.sales, 0);
      const totalRevenueCount = sales.reduce(
        (acc, cur) => acc + cur.revenue,
        0
      );
      setTotalSales(totalSalesCount);
      setTotalRevenue(totalRevenueCount);
    });
  }, []);

  return (
    <Box>
      <Text>Total Penjualan: {totalSales}</Text>
      <Text>Total Pendapatan: {totalRevenue}</Text>
    </Box>
  );
};

export default Statistics;
