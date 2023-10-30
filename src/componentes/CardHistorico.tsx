import React from 'react';
import { Text, VStack, Image, HStack, Box } from 'native-base'; // Remova o Avatar e a importação não utilizada

import { Botao } from './Botao';

export function CardHistorico({
  id,
  titulo,
  imageUrl,
  preco,
  rating,
  promotion
}) {
  
  return (
    <Box
      w="100%"
      bg="white"
      p={4}
      borderRadius="lg"
      shadow={2}
      mb={1}
      borderColor="gray.200"
      borderWidth={1} // Adicione uma borda para destacar o cartão
    >
      {/* Imagem na parte superior */}
      <Image
        source={{ uri: imageUrl }}
        alt={titulo}
        size="lg"
        borderRadius="lg"
        h={200}
        w="100%"
      />

      {/* Conteúdo do cartão */}
      <VStack>
        <Text fontSize="xl" bold>
          {titulo}
        </Text>
        <Text fontSize="lg" color="green.500">
          {preco}
        </Text>
        <Text fontSize="md" color="gray.500">
          {promotion}
        </Text>
        <HStack justifyContent="flex-start" mt={1}>
        <Botao onPress={'2'} background='#FA4A0C'>
          Ver Detalhe do pedido
        </Botao>
      </HStack>
     
      </VStack>

   
   
    </Box>
  );
}
