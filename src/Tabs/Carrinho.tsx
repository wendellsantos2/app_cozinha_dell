import React from 'react';
import { VStack, Text, Image } from 'native-base';
import { Botao } from '../componentes/Botao';

export default function Carrinho() {
   
  const isCarrinhoVazio = true;  

  return (
    <VStack flex={1} alignItems="center" justifyContent="center">
      {isCarrinhoVazio ? (
        <>
          <Image
            source={require('../assets/Carrinho.png')} 
            alt="Carrinho Vazio"
            size="150"  
          />
          <Text mt={4}>Seu carrinho está vazio</Text>
        </>
      ) : (
        <Text>Este é o seu carrinho!</Text>
      )}
   <Botao height={10} width="80%" top={40}>Começar a comprar</Botao>

    </VStack>
  );
}
