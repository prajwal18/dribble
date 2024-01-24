import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
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
          <MenuItem key={data.id} color={data.id == 7 ? "red.600" : "gray.500"} gap={2}>
            {data.logo()}
            <Text>{data.title}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FeedMenu;
