import React, { useState } from 'react';
import { Box, Image, Button, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface FotoPerfilProps {
  defaultImageUri?: string; // URI da imagem padrão
  size?: number; // Tamanho da foto do perfil
}

export function FotoPerfil({ defaultImageUri = 'URL_DA_IMAGEM_PADRÃO', size = 100 }: FotoPerfilProps): JSX.Element {
  const [imageUri, setImageUri] = useState<string | null>(null);

  // Essa função pode ser usada para integrar com uma biblioteca de seleção de imagens
  const handleChangeImage = () => {
    // Aqui você pode chamar a biblioteca de seleção de imagem e atualizar imageUri com a nova imagem
    console.log('Usuário clicou para trocar a imagem');
  };

  return (
    <Box alignItems="center" mt={5}>
      <Box
        width={size}
        height={size}
        borderRadius="full" // Isso define o borderRadius para criar um círculo
        overflow="hidden" // Isso garante que a imagem não sairá do círculo
      >
        <Image
          source={{ uri: imageUri || defaultImageUri }}
          alt="Foto de perfil"
          size="100%" // Define o tamanho da imagem como 100% para preencher o círculo
        />
      </Box>
      <Button
        mt={3}
        size="sm"
        onPress={handleChangeImage}
        startIcon={
          <Icon as={Ionicons} name="camera" size="sm" />
        }
      >
        Trocar Foto
      </Button>
    </Box>
  );
}
