import React, { Children } from "react";
import { View, Text } from "react-native";
import styles from './AuthTemplateStyles'

interface AuthTemplateProps {
    title : string;
    subtitle : string;
    children: React.ReactNode;
}




const AuthTemplate = ({ title, subtitle, children }: AuthTemplateProps) => {
    return (          
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text>{subtitle}</Text>}
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};




export default AuthTemplate;