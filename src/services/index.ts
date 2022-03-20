import Api from "./api"

const API_KEY = '680696aacd6dd222b951702b83ddb9e5'

export const getMoviesByName = async (search: string) => {
  const response = Api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=true`)
  return response
}
