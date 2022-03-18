import React from "react"
import { ImageSourcePropType } from "react-native";
import { Button } from "../Button"
import { ButtonType } from "../Button/styles";
import { CardContainer, ImageContainer, Container, Description, Title, Info, Poster } from "./styles"

type CardProps = {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  buttonType?: ButtonType,
  isButtonLoading?: boolean
}

export const Card = ({imageSource, title, description, buttonType, isButtonLoading}: CardProps) => {
  return (
    <Container>
        <CardContainer>
          <ImageContainer>     
            <Poster source={imageSource}/>
          </ImageContainer>
          <Info>
            <Title>{title}</Title>
            <Description numberOfLines={7}>{description}</Description>
          </Info>
        </CardContainer>
        <Button title="Remove from Queue" type={buttonType} isLoading={isButtonLoading}/>
      </Container>
  )
}
