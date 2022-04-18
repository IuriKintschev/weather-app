import React from "react";

import { Box, Button, Text } from "~/components";

const Bootstrap: React.FC = () => (
  <Box flex={1} alignItems={"center"} justifyContent={"center"}>
    <Text variant={"title1"}>Hello world!</Text>

    <Button variant={"elevation"}>
      <Text variant={"button"}>Ready</Text>
    </Button>
  </Box>
);

export default Bootstrap;
