import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
  background-color: ${({ theme}) => theme.colors.background};
  flex: 1;
`

export const SearchContainer = styled.View`
  width: 100%;
  flex-direction: row;
`

export const NotFound = styled.Text`
  color: ${({theme}) => theme.colors.attention};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 20px;
`