import React from "react"
import { Container} from "./styles"
import cardDefaultSource from '../../assets/not-found.png'
import { Card } from "../../components/Card"

export const WatchList = () => {
  return (
    <Container>
      <Card
        title="This is a cool title"
        imageSource={cardDefaultSource}
        buttonType="primary"
        buttonText="Remove from queue"
        isButtonLoading={false}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet quis metus ut malesuada. Aliquam arcu libero, dignissim ac sodales at, tincidunt id dolor. Cras posuere lorem eu orci ultrices pretium. Duis blandit, nulla ac dapibus congue, erat est aliquet nisi, a convallis urna diam ac felis."
      />
    </Container>
  )
}