import React from "react";
import { InputGroup, InputLeftElement, Input, Box } from "@chakra-ui/react";
// Icons
import SearchIcon from "@mui/icons-material/Search";
// Icons

const SearchBar = () => {
  return (
    <Box px={4}>
      <InputGroup bg="gray.100" borderRadius={"10px"}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon sx={{ color: "#CBD5E0" }} />
        </InputLeftElement>
        <Input type="text" placeholder="Search files, teams.." />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
