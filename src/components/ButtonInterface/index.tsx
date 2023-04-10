import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { styles } from './styles'
export interface IInterface extends TouchableOpacityProps {
  onPressI: () => void
  title: string;
  type: 'primary' | 'secondary' | 'third'
}
export function ButtonInterface({ onPressI, title, type }: IInterface) {
  return (
    <TouchableOpacity style={
      type == "primary" ? styles.buttonPrimary :
        type == "secondary" ? styles.buttonSecondary :
          styles.buttonThird
    } onPress={onPressI} >
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}