import styled from "styled-components/native";

export const Container = styled.View`
  min-height: 225px;
  padding: 3px;
  border: 2px solid black;
  border-radius: 6px;
  margin-bottom: 10px;
`

export const CardContainer = styled.View`
  flex: 1;
  flex-direction: row;
`

export const ImageContainer = styled.View`
  width: 140px;
  height: 170px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`
export const Poster = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  height: 170px;
  width: 130px;
`;

export const Info = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 20px;
  text-transform: uppercase;
`

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 14px;
`