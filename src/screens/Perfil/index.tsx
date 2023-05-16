import {View, Text} from "react-native";
import { ComponentButtonInterface } from "../../components";
import { styles } from "../Slider1/styles";
import { TabTypes } from "../../navigations/tab.navigation";

export function Perfil({ navigation}: TabTypes) {
    function handleVoltar (){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            <ComponentButtonInterface title="Voltar" type="secondary" onPressI={handleVoltar}/>
        </View>
    )
}