import { Input, HStack } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export function SearchBar(props) {
  return (
    <HStack
      width="100%"
      borderWidth={1}
      borderRadius={50} // Aumentando o borderRadius para torná-lo mais redondo
      borderColor="transparent"
      alignItems="center"
      paddingLeft={2}
      {...props} 
    >
      <Input
        flex={1}
        placeholder="Pesquisar..."
        paddingLeft={2}
        borderRadius={25}
        bg="gray.200"
        variant="unstyled"
        InputLeftElement={ // Adicionando o ícone à esquerda do Input
          <Icon name="search" size={20} color="gray" style={{ marginLeft: 5 }} />
        }
      />
    </HStack>
  );
}
