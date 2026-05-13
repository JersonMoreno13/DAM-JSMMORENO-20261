import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        gap: 4,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 12,
    },
    forgotPasswordText: {
        color: '#ef7f00',
        fontSize: 12,
        fontWeight: 'bold',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    signUpText: {
        fontSize: 13,
        color: '#333',
    },
    signUpLink: {
        fontSize: 13,
        color: '#ef7f00',
        fontWeight: 'bold',
    }
});