import { Flex, Text, Link } from "@chakra-ui/react";
import useColors from "./useColors";

export default function Footer() {
  const { highlight, secondary } = useColors();
  return (
    <Flex
      color={secondary}
      mt={16}
      padding={4}
      justifyContent="center"
      as="footer"
    >
      <Text textAlign="center" fontSize="sm">
        Read{" "}
        <Link
          color={highlight}
          href="https://stacker.news/items/711428/r/AGORA"
        >
          more
        </Link>{" "} or get your{" "}
        <Link
          color={highlight}
          href="https://swag.btc.pub/tag/stickers/"
        >
          Sticky Stickers
        </Link>{" "}
        &{" "}
        <Link
          color={highlight}
          href="https://swag.btc.pub/tag/pins"
        >
          Pinny Pins
        </Link>
      </Text>
    </Flex>
  );
}
