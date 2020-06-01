import useChakraToast, { useToastOptions } from '@chakra-ui/core/dist/Toast'
import toaster from 'toasted-notes'

type UseToast = () => {
  toast: (props: useToastOptions) => void,
  toaster: typeof toaster
}
const useToast: UseToast = () => {
  const toast = useChakraToast()

  return {
    toast,
    toaster,
  }
}
export default useToast
