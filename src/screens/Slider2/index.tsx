import React from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { IPage} from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI}: IPage) {
    const slide1 = require("../../assets/slider2.png")
    const slide1Texts = [
        { id: '1', text: 'Hotéis'},
        { id: '2', text: 'Localizar hóteis em promoção'},
        { id: '3', text: 'Resort'},
        { id: '4', text: 'Voos'},
        { id: '5', text: 'Voos baratos'},
        { id: '6', text: 'Localizar voos fretados'},
    ]
    return (
        <ImageBackground source={slide1} style={styles.container} >
            <View style={styles.panel}>
              <ComponentTitleSlider titleI='HOTÉIS E VOOS' />
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
            </View>
            </ImageBackground>
    );                         
}