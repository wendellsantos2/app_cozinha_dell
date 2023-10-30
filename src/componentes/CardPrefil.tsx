import React from 'react';
import { Box, Text, Flex, Image } from 'native-base';
import { Titulo } from './Titulo';

const CardPerfil = ({ title, children, avatarSource }) => {
  return (
    <Box 
      mt={5}
      width="100%"
      p={5}
      borderRadius="lg"
      borderColor="gray.200"
      borderWidth={1}
      shadow={2}
      bgColor="white"
    >
      {title && <Titulo color="blue.500">{title}</Titulo>}

      <Flex direction="row" alignItems="flex-start">  
        <Image 
          size="100" 
          width="100" 
          source={avatarSource} 
          borderRadius="10"
          alt="User Avatar"
        />
        <Box ml={4}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
}

export default CardPerfil;
