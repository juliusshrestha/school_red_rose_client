import { useCreateContext } from '../create-context'
import { reducer, initialState } from './video.reducer'

// eslint-disable-next-line react-hooks/rules-of-hooks
const [state, useDispatch, provider] = useCreateContext(initialState, reducer)

export const useVideoState = state

export const useVideoDispatch = useDispatch

export const VideoProvider = provider
