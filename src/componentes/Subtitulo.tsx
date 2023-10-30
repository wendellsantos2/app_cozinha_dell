import { Text, ITextProps } from "native-base"
import { ReactNode } from "react"

interface SubtituloProps extends ITextProps {
  children: ReactNode
}

export function Subtitulo({ children, ...rest }: SubtituloProps){
  return (
    <Text
        fontSize="25"
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