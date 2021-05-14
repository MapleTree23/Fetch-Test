import React, { useState, useImperativeHandle } from "react";
import { Box, Text, SimpleGrid} from "@chakra-ui/react";

const DynamicText = React.forwardRef((pro, ref) => {

  const [value, setValue] = useState("Random Text");

  useImperativeHandle(ref, () => ({
    changeValue(newValue){
      setValue(newValue);
    }
  }));

 return (
  <>
  <SimpleGrid minChildWidth="200px">
  <Box maxWidth="32rem" >
    <Text my={2} align="center">
    {value} 
    </Text>
  </Box>
  </SimpleGrid>
  </>
 );
});

export default DynamicText;

