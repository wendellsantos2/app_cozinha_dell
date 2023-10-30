import { VStack, ScrollView, Box, Text, HStack, Badge, Modal } from 'native-base';
import { Botao } from '../componentes/Botao';
import { Titulo } from '../componentes/Titulo';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Adicione essa linha

export default function Principal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const navigation = useNavigation();  // Inicialize a hook aqui

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const adicionarPedido = (pedido) => {
    // Garanta que cada pedido tenha um ID exclusivo
    const pedidoComId = {
      ...pedido,
      id: Date.now()   // Use o timestamp atual como um ID simples
    };
    setPedidos(prev => [...prev, pedidoComId]);
    closeModal();
  }

  const verDetalhes = (pedido) => {
    navigation.navigate('Detalhes', { pedido });
  }

  return (
    <ScrollView p="5">
      <Titulo color="black">Meus Pedidos</Titulo>

      {pedidos.map((pedido) => (
      <Box key={pedido.id}  // Use o ID exclusivo do pedido aqui
        bg="white"
        shadow={2}
        rounded="lg"
        p={4}
        my={2}
        width="100%"
      >
        <TouchableOpacity onPress={() => verDetalhes(pedido)}>
          <VStack>
            <Text fontWeight="bold">{pedido.nome}</Text>
            <Text fontWeight="bold">{pedido.nomeCliente}</Text>
            <Text fontWeight="bold">{pedido.pedido}</Text>
            <Text fontWeight="bold">{pedido.tempoDoPedido}</Text>
            <Text color="green.500">R$ {pedido.preco}</Text>
          </VStack>
          <Badge colorScheme="yellow">{pedido.status}</Badge>  
        </TouchableOpacity>
      </Box>
    ))}

      <Botao onPress={openModal}>Validar Pedido</Botao>

      <Modal isOpen={isModalOpen} onClose={closeModal} size="full">
        <Modal.Content>
          <Modal.Header>Escolha o Pedido</Modal.Header>
          <Modal.Body>
            <VStack space={5}>
              <Botao onPress={() => adicionarPedido({ nome: 'X-Salada', preco: '25.99', status: 'Em preparo', nomeCliente:'Wendell', pedido : '#1' ,tempoDoPedido:'10min' } )}>X-Salada - R$ 25.99</Botao>
              <Botao onPress={() => adicionarPedido({ nome: 'Original', preco: '9.99', status: 'Entregue', nomeCliente: 'Desconhecido', pedido : '#2' })}>Original - R$ 9.99</Botao>
              {/* Adicione mais opções conforme necessário */}
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </ScrollView>
  );
}
