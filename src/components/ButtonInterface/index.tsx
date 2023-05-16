import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { styles } from './styles'
export interface IBInterface extends TouchableOpacityProps {
    onPressI: () => void 
    title: string
    type: 'primary' | 'secondary' | 'third' | 'fourth'
}
export function ButtonInterface({ onPressI, title, type }: IBInterface) {
    return (
        <TouchableOpacity style={
            type == "primary" ? styles.butthonPrimary :
                type == "secondary" ? styles.butthonFourth :
                    styles.butthonFourth
        } onPress={onPressI} >
            <Text style={styles.text} >{title}</Text>
            </TouchableOpacity>
    )
}