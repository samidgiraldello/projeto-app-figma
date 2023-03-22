import { , Text, View } from 'react-native';
import  { Marker } from '../Marker';
import { styles } from './styles';
export interface ITextMarker {
    textMarker: string
}
export function ListaMarker({ textMarker }: ITextMarker) {
   return (
    <View style={styles.ListaMarker}>
        <Marker />
        <Text style={styles.textMarker} > {textMarker}</Text>
    </View>
   )
}