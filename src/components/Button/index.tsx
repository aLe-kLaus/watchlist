import { RectButtonProps } from "react-native-gesture-handler";

import {ButtonType, Container, Load, Title} from './styles'

type Props = RectButtonProps & {
  title: string,
  type?: ButtonType,
  isLoading?: boolean
}

export const Button = ({title, type = 'primary', isLoading = false, ...props}: Props): JSX.Element => {
  return (
    <Container type={type} enabled={!isLoading} {...props}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}