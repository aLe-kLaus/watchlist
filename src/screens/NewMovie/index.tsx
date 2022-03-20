import React, { useState } from "react"
import { Keyboard } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { Input } from "../../components/Input"
import { Container, SearchContainer } from "./styles"
import theme from "../../global/styles/theme"
import { Card } from "../../components/Card"
import cardDefaultSource from '../../assets/not-found.png'

export const NewMovie = () => {
  const [search, setSearch] = useState('')
  const handleSearchMovie = () => {
    Keyboard.dismiss()
    console.log(search)
  }
  return (
    <Container>
      <SearchContainer>
        <Input 
          selectionColor={theme.colors.primary}
          placeholder="Search for a new movie/show" 
          autoCorrect={false} 
          autoCapitalize="none"
          onChangeText={setSearch}
          onSubmitEditing={handleSearchMovie}
          keyboardType="default"
        />
        <MaterialIcons 
          name="search" 
          size={24} 
          style={{marginLeft: -36, marginTop: 10}} 
          color={theme.colors.primary}
          onPress={handleSearchMovie}
        />
      </SearchContainer>
      <Card
        title="This is a cool title"
        imageSource={cardDefaultSource}
        buttonType="secondary"
        buttonText="Add to queue"
        isButtonLoading={false}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet quis metus ut malesuada. Aliquam arcu libero, dignissim ac sodales at, tincidunt id dolor. Cras posuere lorem eu orci ultrices pretium. Duis blandit, nulla ac dapibus congue, erat est aliquet nisi, a convallis urna diam ac felis."
      />
    </Container>
  )
}