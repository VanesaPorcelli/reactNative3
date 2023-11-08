import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputEmail: {
        width: '90%',
        backgroundColor: colors.secondary,
        height: 50,
        marginVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    inputPasswordContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'flex-end',
    },
    inputPassword: {
        flex: 1,
        height: '90%',
    },
    showPasswordButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: "center",
    },
    showPasswordButtonText: {
        color: 'white',
    },
    loginButton: {
        backgroundColor: colors.primary,
        width: '50%',
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
    },
});
