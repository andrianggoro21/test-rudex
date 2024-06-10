import { useState, useEffect } from "react";
import { Box, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SearchBar = ({ setFilteredSales, sales }) => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  useEffect(() => {
    const handleSearch = () => {
      const filteredData = sales.filter((sale) =>
        sale.product.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSales(filteredData);
    };

    handleSearch();

    const timer = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, sales, setFilteredSales]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box>
      <Input
        mb="4"
        placeholder="Cari produk"
        value={searchTerm}
        onChange={handleChange}
      />
    </Box>
  );
};

SearchBar.propTypes = {
  setFilteredSales: PropTypes.func.isRequired,
  sales: PropTypes.array.isRequired,
};

export default SearchBar;
