import axiosInstance from '../axiosInstance'

export const getAlbumDetails = () => {
  return getAlbumDetailsAsync(1, 10)
    .then(result => {
      //console.log(result)

      return result.data
    })
    .catch(error => {
      return error
    })
}

const getAlbumDetailsAsync = async (page, limit) => {
  try {
    const response = await axiosInstance.get(`album/?page=${page}&limit=${limit}`)
    const body = await response

    return body
  } catch (error) {
    return error
  }
}
