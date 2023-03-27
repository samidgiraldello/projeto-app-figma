import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles =  StyleSheet.create({
    container: {
        flex: 1,
    },
    panel: {
        flex: 1,
        marginTop: 50,
        margin: 30,
        borderRadius: 30,
        backgroundColor: colors.thirdLigth
    },
    buttonSlider: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginBottom: 20
    }
});
