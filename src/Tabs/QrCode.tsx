import React, { useState, useEffect } from 'react';
import { Box, Text, Alert } from 'native-base';
import QRCode from 'react-native-qrcode-svg';
import { Titulo } from '../componentes/Titulo';

const QRCodeComponent = ({ route }) => {
  const { data = "default_value", type } = route.params;
  const [showAlert, setShowAlert] = useState(false);
  const isGarcom = type === 'garcom';

  useEffect(() => {
    if (isGarcom) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);  // Limpa o timer se o componente for desmontado
    }
  }, [isGarcom]);

  return (
    <Box 
      alignItems="center" 
      justifyContent="center" 
      flex={1} 
      bg={isGarcom ? "red" : "white"}  // Definindo a cor de fundo baseada na condição isGarcom
    >
      {showAlert && 
        <Alert status="info" w="80%" mb={4}>
          <Titulo>o Garçom está procurando você levante o celular <Alert.Icon /></Titulo>
        </Alert>
      }
      <QRCode
        value={data}
        size={200}
      />
      <Text mt={4}>{isGarcom ? "Chamar o garçom" : "Apresente este QR Code ao caixa"}</Text>
    </Box>
  );
}

export default QRCodeComponent;
