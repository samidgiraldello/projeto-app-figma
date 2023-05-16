import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    butthonPrimary: { 
        backgroundColor: colors.primary, 
        borderRadius: 5,
        margin: 10
    },
    butthonSecondary: { 
        backgroundColor: colors.secondary, 
        borderRadius: 5,
        margin: 10
    },
    butthonFourth: { 
        backgroundColor: colors.secondary, 
        borderRadius: 5,
        margin: 10
    },
    text: {
        color:colors.black,
        fontWeight: "bold",
        padding: 10,
        fontSize: 18,
        textAlign: "center"
    }

})