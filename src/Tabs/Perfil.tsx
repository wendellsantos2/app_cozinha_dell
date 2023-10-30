import { VStack, Text, ScrollView, Divider, HStack, IconButton, ChevronLeftIcon, ChevronRightIcon } from 'native-base';

import { Titulo } from '../componentes/Titulo';
import CardPerfil from '../componentes/CardPrefil';
import { TouchableOpacity } from 'react-native';
import { Botao } from '../componentes/Botao';

export default function Perfil({ navigation }) {
  return (
    <ScrollView flex={1}>
      <VStack flex={1}  p={5}>

        <HStack spacing={2} alignItems="center">
          <IconButton 
            icon={<ChevronLeftIcon size="6" color="black" />} 
            onPress={() => navigation.goBack()} // Assume que você está usando react-navigation
            variant="unstyled"
            mt={25}
            ml={-5}
          />
          
        </HStack>
        <Titulo color="black" bold textAlign="left" fontSize={35} >Meu Perfil</Titulo>
        <HStack alignItems="center" width="100%" mb={-4}>
  <Titulo textAlign="left">Detalhes pessoais</Titulo>
  <TouchableOpacity>
  <Titulo textAlign="right" color={'orange.500'} ml={20}>Editar Perfil</Titulo>
  </TouchableOpacity>
</HStack>
        <CardPerfil 
          title="" 
          avatarSource={{ uri: "https://i.pinimg.com/564x/b3/18/07/b31807a466283b30252571f91d690590.jpg" }}
        >
          <Titulo fontSize="lg" mb={1} fontWeight="bold">Wendell Santos</Titulo>
          <Text mb={2}>Wemdellcos@gmail.com</Text>
          <Divider/>
          <Text mb={2}>(11) 98765-4321</Text>
    
        </CardPerfil>
    
 
<Botao color='white'>
  <HStack alignItems="center" spacing={2}>
    <Text color={'black'} bold ml={15}>Faq</Text>  
    <IconButton 
        icon={<ChevronRightIcon size="4" color="black" ml={200} />} 
        variant="unstyled"
    />
  </HStack>
</Botao>
<Botao color='white'>
  <HStack alignItems="center" spacing={2}>
    <Text color={'black'} bold ml={15} >Sair</Text>  
    <IconButton 
        icon={<ChevronRightIcon size="4" color="black" ml={200} />} 
        variant="unstyled"
    />
  </HStack>
</Botao>

       
      </VStack>
    </ScrollView>
  )
}

