import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#FFFFFF',
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 14,
        color: '#000000',
    },
    eyeIcon: {
        padding: 8,
    },
    eyeIconText: {
        fontSize: 18,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    forgotPasswordText: {
        fontSize: 12,
        color: '#007680',
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    loginButton: {
        marginBottom: 16,
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
    },
    signUpText: {
        fontSize: 14,
        color: '#666666',
    },
    signUpLink: {
        fontSize: 14,
        color: '#007680',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
});