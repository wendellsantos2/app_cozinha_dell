import React from "react";
import { FormControl, Input as NativeBaseInput } from "native-base";

interface InputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

export function EntradaTexto({ 
  label, 
  placeholder, 
  secureTextEntry = false
}: InputProps): JSX.Element {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label color="white">{label}</FormControl.Label>}
      <NativeBaseInput
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius={0}
        borderWidth={0}
        color="gray" // Defina a cor do texto como cinza
        _focus={{ borderBottomColor: "black", color: "black" }} // Cor da borda e do texto ao focar
        _hover={{ borderBottomColor: "black", color: "black" }} // Cor da borda e do texto ao passar o mouse
        style={{ borderBottomWidth: 1, borderBottomColor: "gray" }} // Linha cinza
        secureTextEntry={secureTextEntry}
      />
    </FormControl>
  );
}
