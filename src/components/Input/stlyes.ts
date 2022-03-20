import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type InputType = 'primary' | 'secondary'

type Props = {
  type: InputType
}

export const Container = styled(TextInput).attrs<Props>(({theme}) => ({
  placeholderTextColor: theme.colors.text,
}))<Props>`
  width: 100%;
  height: 45px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0px 7px 20px;
  margin-bottom: 16px;
  ${({theme}) => css`
    font-family: ${theme.fonts.medium};
    border: 2px solid ${theme.colors.primary};
    color: ${theme.colors.text}
  `}
`
