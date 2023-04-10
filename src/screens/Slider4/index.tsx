import React from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { IPage} from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider4({ setPageI}: IPage) {
    const slide1 = require("../../assets/slider4.png")
    const slide1Texts = [
        { id: '1', text: 'Fazer Cotação'},
        { id: '2', text: 'Falar com um atendente'},
        { id: '3', text: 'Formas de pagamento'},
        { id: '4', text: 'Seguro Viagem'},
        { id: '5', text: 'Transfer'},
    ]
    return (
        <ImageBackground source={slide1} style={styles.container} >
            <View style={styles.panel}>
              <ComponentTitleSlider titleI='GERAL' />
                <FlatList
                data={slide1Texts}
                renderItem={({item})=> 
                   <ComponentListMarker key={item.id} textMarker={item.text} />
               }
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)}  />
                <ComponentButtonSlider onPressI={() => setPageI(2)}  />
                <ComponentButtonSlider onPressI={() => setPageI(3)}  />
                <ComponentButtonSlider onPressI={() => setPageI(4)}  />
                <ComponentButtonSlider onPressI={() => setPageI(5)}  />
                <ComponentButtonSlider onPressI={() => setPageI(6)}  />
            </View>
            </ImageBackground>
    );                         
}