import { Text, ITextProps } from "native-base"
import { ReactNode } from "react"

interface TituloProps extends ITextProps {
  children: ReactNode
}

export function Titulo({ children, ...rest }: TituloProps){
  return (
    <Text
        fontSize="15"
        fontWeight="bold"
        color="black"
        textAlign="center"
        mt={5}
        {...rest}
      >
        {children}
      </Text>
  )
}