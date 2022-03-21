import React, { useContext } from "react"
import { Alert, FlatList } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'

import cardDefaultSource from '../../assets/not-found.png'
import { Container} from "./styles"
import { Card } from "../../components/Card"
import { dataKey, Movie } from "../../types"
import { Context } from "../../context"

export const WatchList = () => {
  const {storageData, setStorageData} = useContext(Context)

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
    return (
      <Card
        title={item.title}
        description={item.overview}
        imageSource={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : cardDefaultSource}
        onButtonPress={() => handleRemoveMovie(item)}
        buttonType={"primary"}
        buttonText={'Remove from Queue'}
      />
    )
  }

  return (
    <Container>
         <FlatList 
          data={storageData} 
          renderItem={renderItem} 
          keyExtractor={item => item.id as unknown as string}
        />
    </Container>
  )
}