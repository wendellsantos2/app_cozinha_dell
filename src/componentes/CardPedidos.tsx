import React, { useEffect, useState } from 'react';
import { Text, VStack, Image, HStack, Box } from 'native-base';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { Botao } from './Botao';

export function CardPedido({
  id,
  titulo,
  imageUrl,
  preco,
  rating,
  promotion
}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [qrRead, setQrRead] = useState(false);
  const [isValidQR, setIsValidQR] = useState(false); // Estado para verificar se o QR é válido

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (data === "VALID-QR") { // Verificação fictícia
      setIsValidQR(true);
      setQrRead(true);
    } else {
      alert('QR Code inválido. Por favor, tente novamente.');
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (!qrRead) {
    return <BarCodeScanner onBarCodeScanned={handleBarCodeScanned} style={{ flex: 1 }} />;
  }
  if (!isValidQR) {
    return <Text>QR Code inválido.</Text>;
  }

  return (
    <Box
      w="100%"
      bg="white"
      p={4}
      borderRadius="lg"
      shadow={2}
      mb={1}
      borderColor="gray.200"
      borderWidth={1}
    >
      <Image
        source={{ uri: imageUrl }}
        alt={titulo}
        size="lg"
        borderRadius="lg"
        h={200}
        w="100%"
      />
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
            Ver Produto
          </Botao>
        </HStack>
        <HStack justifyContent="flex-start" mt={1}>
          <Botao onPress={'2'} background='#FA4A0C' mt={1}>
            Adicionar Produto
          </Botao>
        </HStack>
      </VStack>
    </Box>
  );
}
