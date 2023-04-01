import axiosInstance from '../axiosInstance'

export const getAlbumCategories = () => {
  return getAlbumAsync()
    .then(result => {
      return result.data
    })
    .catch(error => {
      return error
    })
}

const getAlbumAsync = async (page, limit) => {
  try {
    const response = await axiosInstance.get(`album/categories`)
    const body = await response

    return body
  } catch (error) {
    return error
  }
}
