import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

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
        width: '95%',
        backgroundColor: colors.secondary,
        height: 30,
        marginVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    inputPasswordContainer: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        height: 30,
        marginVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'flex-end',
    },
    inputPassword: {
        flex: 1,
        height: '100%',
    },
    showPasswordButton: {
        flexDirection: 'row', // Para alinear el icono y el texto horizontalmente
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        height: 30, // Ajusta la altura de acuerdo al contenido
        alignItems: 'center', // Centra verticalmente
        justifyContent: 'center',
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
})
