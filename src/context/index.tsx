import { createContext, SetStateAction } from "react"
import { Movie } from "../types"

type ContextProps = {
  storageData: Movie[]
  setStorageData: React.Dispatch<SetStateAction<Movie[]>>
}

const ContextDefaultValues = {
  storageData: [],
  setStorageData: () => []
}

export const Context = createContext<ContextProps>(ContextDefaultValues)