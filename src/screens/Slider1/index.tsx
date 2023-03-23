import React from 'react';
import { FlatList, ImageBackground, View, Text } from 'react-native';
import { IPage} from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
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
              <ComponentTitleSlider titleI='PRÓXIMO DESTINO' />
               <ComponentTitleSlider titleI='pesquise aqui seu destino' />
                <FlatList
                 data={slide1Texts}
                 renderItem={({item})=> 
                    <ComponentListMarker key={item.id} textMarker={item.text} />
                }
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider  onPressI={() => setPageI(1)}  />
                <ComponentButtonSlider  onPressI={() => setPageI(2)}  />
                <ComponentButtonSlider  onPressI={() => setPageI(3)}  />
                <ComponentButtonSlider onPressI={() => setPageI(4)}  />
            </View>
            </ImageBackground>
    );                         
}