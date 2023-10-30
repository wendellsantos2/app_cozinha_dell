// GenerateQRCode.tsx

import React from 'react';
import QRCode from 'react-native-qrcode-svg';

type Pedido = {
  id: number;
  items: string[];
  // Você pode adicionar outros campos conforme necessário
};

interface GenerateQRCodeProps {
  pedido: Pedido;
}

export const GenerateQRCode: React.FC<GenerateQRCodeProps> = ({ pedido }) => {
  const pedidoAsString = JSON.stringify(pedido);

  return <QRCode value={pedidoAsString} size={200} />;
}
