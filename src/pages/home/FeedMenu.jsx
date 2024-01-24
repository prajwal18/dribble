import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { feedMenuData } from "./data";

// ICONS
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// ICONS

const FeedMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="gray"
        color="gray.500"
        variant="outline"
      >
        <MoreHorizIcon />
      </MenuButton>

      <MenuList>
        {feedMenuData.map((data) => (
          <MenuItem
            key={data.id}
            icon={data.logo()}
            color={data.id === 7 ? "red.600" : "gray.500"}
            gap={2}
          >
            {data.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FeedMenu;
