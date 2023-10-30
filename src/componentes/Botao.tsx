import { Button, IButtonProps } from 'native-base';
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

export function Botao({ children, autoSize = false, color, ...rest }: ButtonProps){

  return (
    <Button
      w={autoSize ? 'auto' : '100%'}
      bg={color || 'black'}
      mt={10}
      borderRadius={9999}

      _text={{ color: 'white' }}
      _pressed={{ bg: "gray.300" }} // Isso faz com que o botão fique cinza quando pressionado

      {...rest}
    >
      {children}
    </Button>
  );
};
