import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';

import { TEMAS } from './src/estilos/temas';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <Rotas />
      <StatusBar 
         style="light" // você pode definir para "dark" se o fundo for claro
         backgroundColor={TEMAS.colors.black}
      />
    </NativeBaseProvider>
  );
}
