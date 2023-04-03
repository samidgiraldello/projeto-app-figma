import React from "react";
import { View, KeyboardAvoidingView, Text} from "react-native";
import { styles } from "./sytles";
 import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";


export function Login() {
    return (
        <View style={styles.container}>
           <KeyboardAvoidingView>
              <Text style={styles.title}>Login</Text>
              <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon} />
                <TextInput
                    placeholder="email"
                    placeholderTextColor={colors.thirdLigth}
                    keyboardType="email-adress"
                    autoCapitalize="none"
                    style={styles.input}  
                />
              </View>
           </KeyboardAvoidingView>
        </View>
    )
}