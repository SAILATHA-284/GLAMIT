import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { BsBookmark } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Shoppings = () => {
	return (
		<NavLink to="/glamboard" style={{ textDecoration: "none", width: "100%" }}>
			<Tooltip
				hasArrow
				label={"Glamboard"}
				placement="right"
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
				>
					<BsBookmark />
					<Box display={{ base: "none", md: "block" }}>Shopping Events</Box>
				</Flex>
			</Tooltip>
		</NavLink>
	);
};

export default Shoppings;
