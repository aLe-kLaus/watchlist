import React from "react"
import { ImageSourcePropType, ImageURISource } from "react-native";
import theme from "../../global/styles/theme";
import { CardContainer, ImageContainer, Container, Description, Title, Info, Poster, Button, ButtonText } from "./styles"

export type ButtonType = 'primary' | 'secondary'
type CardProps = {
  imageSource: ImageSourcePropType
  title: string
  description: string
  buttonText: string
  onButtonPress: () => void
  buttonType?: ButtonType
}

export const Card = ({imageSource, title, description, buttonType, buttonText, onButtonPress}: CardProps) => {
  return (
    <Container>
      <CardContainer>
        <ImageContainer>     
          <Poster source={typeof imageSource === "number" ? imageSource : {uri: imageSource as string}}/>
        </ImageContainer>
        <Info>
          <Title>{title}</Title>
          <Description numberOfLines={7}>{description}</Description>
        </Info>
      </CardContainer>
      <Button 
        style={{backgroundColor: buttonType === "primary" ? theme.colors.attention : theme.colors.sucess}}
        onPress={() => onButtonPress()}
      >
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </Container>
  )
}
