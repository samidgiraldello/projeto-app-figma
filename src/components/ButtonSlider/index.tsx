import { TouchableOpacity } from 'react-native'
import { styles } from './styles'
export interface IBSlider {
    onPressI: () => void
}
export function ButtonSlider({ onPressI }: IBSlider) {
    return (
        <TouchableOpacity sytle={styles.ball} onPress={onPressI} />
        )
}