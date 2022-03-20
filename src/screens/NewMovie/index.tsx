import React, { useContext, useEffect, useState } from "react"
import { Alert, Keyboard } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { Input } from "../../components/Input"
import { Container, NotFound, SearchContainer } from "./styles"
import theme from "../../global/styles/theme"
import { Card } from "../../components/Card"
import cardDefaultSource from '../../assets/not-found.png'
import { getMoviesByName } from "../../services"
import { FlatList } from "react-native-gesture-handler"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { dataKey, Movie } from "../../types"
import { Context } from "../../Context"


export const NewMovie = () => {
  const {setStorageData, storageData} = useContext(Context)
  const [search, setSearch] = useState('')
  const [searchResults, setSeachResults] = useState<Movie[]>([])
  const [notFound, setNotFound] = useState(false)

  const handleSearchMovie = async () => {
    Keyboard.dismiss()
    if (!search) return
    try {
      setNotFound(false)
      const response = await getMoviesByName(search)
      setSeachResults(response.data.results)
      if (!response.data.results.length) setNotFound(true)
    } catch (err) {
      //
    }
  }

  const getStorageMovies = async () => {
    const response = await AsyncStorage.getItem(dataKey)
    setStorageData(JSON.parse(response!))
  }

  const handleAddMovie = async (item: Movie) => {
    const response = await AsyncStorage.getItem(dataKey)
    const data = response ? JSON.parse(response) : []
    const newData = [
      ...data,
      item
    ]
    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(newData))
      setStorageData(newData)
    } catch (err) {
      console.log(err)
      Alert.alert("Error on adding movie to queue, try again")
    }
  }

  const handleRemoveMovie = async (item: Movie) => {
    const newData = storageData.filter((data) => data.id !== item.id)

    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(newData))
      setStorageData(newData)
    } catch (err) {
      console.log(err)
      Alert.alert("Error on deleting movie to queue, try again")
    }
  }

  const renderItem = ({item}: {item: Movie}) => {
    const isMovieOnQueue = storageData ? storageData.find((data) => data.id === item.id) : false

    return (
      <Card
        title={item.title}
        description={item.overview}
        imageSource={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : cardDefaultSource}
        onButtonPress={() => isMovieOnQueue ? handleRemoveMovie(item) : handleAddMovie(item)}
        buttonType={isMovieOnQueue ? "primary" : "secondary"}
        buttonText={isMovieOnQueue ? 'Remove from Queue' : 'Add to Queue'}
      />
    )
  }


  useEffect(() => {
    getStorageMovies()
  }, [])

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
      {notFound ? (
        <NotFound>Movie not found, try again</NotFound>
      ) : (
        <FlatList 
          data={searchResults} 
          renderItem={renderItem} 
          keyExtractor={item => item.id as unknown as string}
        />
      )}
    </Container>
  )
}