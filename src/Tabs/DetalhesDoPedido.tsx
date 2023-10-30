import {
  VStack, Text, ScrollView, Image, Badge, Box, Divider, Flex, Checkbox, HStack, Spacer
} from 'native-base';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Botao } from '../componentes/Botao';
import { Alert } from 'react-native';
export default function DetalhesPedido() {
  const route = useRoute();
  const { pedido } = route.params;

  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Hambúrguer Simples', imagem: 'https://content.news.ifood.com.br/uploads/2023/05/ifn-capa-hamb.webp', preco: '10.99', pronto: false },
    { id: 2, nome: 'Hambúrguer Duplo', imagem: 'https://content.news.ifood.com.br/uploads/2023/05/ifn-capa-hamb.webp', preco: '14.99', pronto: false },
    // ... Adicione mais produtos conforme necessário
  ]);

  const togglePronto = (id) => {
    setProdutos(produtos.map(produto => 
      produto.id === id ? { ...produto, pronto: !produto.pronto } : produto
    ));
  }

  const entregarPedido = () => {
    Alert.alert(
      "Pedido Pronto", 
      "O pedido está pronto para ser entregue!", 
      [
        { text: "OK", onPress: () => console.log("Alerta fechado") }
      ]
    );
  }

  return (
    <ScrollView p="5" bg="gray.100">
      <VStack space={6} alignItems="center">
        <Text fontSize="3xl" fontWeight="bold" color="black">{pedido.nome}</Text>
        <Text fontSize="lg" fontWeight="semibold" color="gray.700">{pedido.nomeCliente}</Text>
        <Text fontSize="md" color="gray.600">Pedido: {pedido.pedido}</Text>
        <Box w="100%">
          {produtos.map((produto) => (
            <Flex 
              key={produto.id} 
              direction="row" 
              m={2} 
              p={4} 
              rounded="lg" 
              bg={produto.pronto ? "green.50" : "red.50"} 
              shadow={3} 
              alignItems="center"
            >
              <Checkbox 
                isChecked={produto.pronto}
                onChange={() => togglePronto(produto.id)}
                size="lg"
                mr={5} value={''}              />
              <Image 
                borderRadius={10}
                source={{ uri: produto.imagem }}
                alt="Imagem do Produto"
                size="md"
                mr={5}
              />
              <VStack flex={1} justifyContent="center">
                <Text fontWeight="bold" fontSize="xl">{produto.nome}</Text>
                <Text fontSize="md" color="green.800" fontWeight="semibold">R$ {produto.preco}</Text>
              </VStack>
              <Spacer />
            </Flex>
          ))}
        </Box>
        <Botao onPress={entregarPedido}>Entregar Pedido</Botao>
      </VStack>
    </ScrollView>
  );
}
