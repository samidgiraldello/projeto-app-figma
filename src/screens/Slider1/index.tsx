import { FlatList, ImageBackground, View } from 'react-native';
import { IPage} from '../../../App';
import {
    ComponenetButtonSlider, ComponentListMarker, ComponemtTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider1({ setPageI}: IPage) {
    const slide1 = require("../../assets/slide1.svg")
    const slide1Texts = [
        { id: '1', text: 'PRAIAS'},
        { id: '2', text: 'PARQUES'},
        { id: '3', text: 'OUTROS'},
    ]
    return (
        <ImageBackground source={slide1} style={styles.container} >
            <View style={styles.panel}>
              <ComponemtTitleSlider titleI='PRÓXIMO DESTINO' />
               <ComponemtTitleSlider titleI='pesquise aqui seu destino' />
                <FlatList




                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponenetButtonSlider onPressI={() => setPageI(1)}  />
                <ComponenetButtonSlider onPressI={() => setPageI(2)}  />
                <ComponenetButtonSlider onPressI={() => setPageI(3)}  />
                <ComponenetButtonSlider onPressI={() => setPageI(4)}  />
            </View>
            <ImageBackground>
    );                         
}