import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";


export type ButtonType = 'primary' | 'secondary'

type ContainerProps = {
  type?: ButtonType
}

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  max-height: 40px;
  min-height: 40px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type}) => type === 'primary' ? theme.colors.attention : theme.colors.sucess};
`

export const Title = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.light};
  font-family: ${({theme}) => theme.fonts.bold};
  letter-spacing: 2px;
`

export const Load = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.colors.light,
}))``;