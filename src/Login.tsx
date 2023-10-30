import React, { useState } from 'react';
import { VStack, Image, Text, Box, Link, Flex, View, HStack, Divider, Center } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native';
import Logo from './assets/google21.jpg';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
 
  
export default function Login({ navigation }: any) {
  // Função para fazer login com o Google
  const loginWithGoogle = async () => {
    // ...
  };

  // Função para fazer login com o Facebook
  const loginWithFacebook = async () => {
    // ...
  };

  // Função para fazer login com o Twitter
  const loginWithTwitter = () => {
    // Adicione aqui a lógica para fazer login com o Twitter
    console.log('Login com o Twitter');
  };
  const [isRegistering, setIsRegistering] = useState(false);
  const toggleRegistrationMode = () => {
    setIsRegistering(!isRegistering);
  };
  const [selectedTab, setSelectedTab] = useState<'login' | 'register'>('login');

  return (
    <ScrollView>
    <VStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="white"
      borderRadius={45} // Bordas arredondadas
      margin={5}
      p={5}
    >
      <Center>
 
      </Center>

      <HStack space={4} mt={5} mb={-5}>
        <TouchableOpacity onPress={() => setSelectedTab('login')}>
          <Titulo 
          marginRight={50}
            fontSize={17}
            borderBottomWidth={selectedTab === 'login' ? 2 : 0}
            borderBottomColor={selectedTab === 'login' ? 'orange.600' : 'blue.500'} // Cor laranja escuro quando selecionado
          >
            Login
          </Titulo>
        </TouchableOpacity>
       
      </HStack>
    </VStack>

    {selectedTab === 'login' && (
      <VStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        margin={5}
      >
        <Box width="100%">
          <EntradaTexto label="Email" placeholder="Insira seu endereço de e-mail" />
          <EntradaTexto label="Senha" placeholder="Insira sua senha" />
        </Box>

        <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

        <Link href='https://www.alura.com.br' mt={2}>Esqueceu sua senha?</Link>
      </VStack>
    )}

    {selectedTab === 'register' && (
      <VStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        margin={5}
      >
        <Box width="100%">
          <EntradaTexto label="Nome" placeholder="Insira seu nome completo" />
          <EntradaTexto label="Email" placeholder="Insira seu endereço de e-mail" />
          <EntradaTexto label="Senha" placeholder="Insira uma senha" />
          <EntradaTexto label="Confirma Senha" placeholder="Confirma senha" />
        </Box>

        <Botao onPress={() => navigation.navigate('Tabs')}>Cadastrar</Botao>
      </VStack>
    )}
  </ScrollView>
  );
}
  