import React from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { IPage} from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider3({ setPageI}: IPage) {
    const slide1 = require("../../assets/slider3.png")
    const slide1Texts = [
        { id: '1', text: 'Adicionar destinos favoritos'},
        { id: '2', text: 'Adicionar hotéis favoritos'},
        { id: '3', text: 'Adicionar voos favoritos'},
    ]
    return (
        <ImageBackground source={slide1} style={styles.container} >
            <View style={styles.panel}>
              <ComponentTitleSlider titleI='LISTA DE FAVORITOS' />
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