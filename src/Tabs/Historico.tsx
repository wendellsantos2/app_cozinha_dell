import { VStack, Divider, ScrollView, Box, Text, Image, HStack, Badge, Button, Modal } from 'native-base';
import { Botao } from '../componentes/Botao';
import { Titulo } from '../componentes/Titulo';
import { useState } from 'react';

export default function Historico({ navigation }) { // Supondo que você está passando 'navigation' como prop
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }
  return (
    <ScrollView p="5">
      <Titulo color="black">Meus Pedidos</Titulo>
      <Box
        bg="white"
        shadow={2}
        rounded="lg"
        p={4}
        my={2}
        width="100%"
      >
        <HStack space={3} alignItems="center">
          <Image 
            borderRadius={25}
            source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/12/hamburguer-unsplash.jpg?w=1200&h=1200&crop=1' }}
            alt="Imagem do Produto"
            size="md" // Você pode ajustar o tamanho conforme necessário
          />
          <VStack>
            <Text fontWeight="bold">X-Salada</Text>
            <Text color="green.500">R$ 25,99 </Text>
            <Badge colorScheme="green">Entegue</Badge>  
          </VStack>
        </HStack>
        <Botao onPress={openModal}>
Ver detalhe do pedido 
      </Botao>

      </Box>
      <Box
        bg="white"
        shadow={2}
        rounded="lg"
        p={4}
        my={2}
        width="100%"
      >
        <HStack space={3} alignItems="center">
          <Image 
            borderRadius={25}
            source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/12/hamburguer-unsplash.jpg?w=1200&h=1200&crop=1' }}
            alt="Imagem do Produto"
            size="md" // Você pode ajustar o tamanho conforme necessário
          />
          <VStack>
            <Text fontWeight="bold">X-Salada</Text>
            <Text color="green.500">R$ 25,99 </Text>
            <Badge colorScheme="green">Entegue</Badge>  
          </VStack>
        </HStack>
        <Botao onPress={openModal}>
Ver detalhe do pedido 
      </Botao>

      </Box>
     

      <Modal isOpen={isModalOpen} onClose={closeModal} size="full">
        <Modal.Content>
          <Modal.Header>Validar Pedido</Modal.Header>
          <Modal.Body>
            <VStack space={5}>
            <Botao onPress={() => {
              // Adicione aqui o código para "Ir até o balcão"
              navigation.navigate('QRCodePage', { type: 'balcao' }); // Passando 'type' como parâmetro para a nova página, caso necessário
              closeModal();
            }}>Ver Detalhes do Pedido </Botao>

        
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </ScrollView>
  );
}
