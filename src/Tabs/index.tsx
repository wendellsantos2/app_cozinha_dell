import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Principal from "./Principal";
 
import Perfil from "./Perfil";
import Pedidos from './Pedidos';
import Historico from "./Historico";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#FFFFFF" // Cor de fundo da tabBar como branco
  },
  tabBarActiveTintColor: "black", // Cor preta para o ícone ativo (selecionado)
  tabBarInactiveTintColor: "gray" // Cor branca para o ícone inativo (não selecionado)
};

const tabs = [
  {
    name: 'Principal',
    component: Principal,
    icon: 'home'
  } ,
  {
    name: 'histórico',
    component: Historico,
    icon: 'time-outline'
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'person'
  },
];

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            )
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
