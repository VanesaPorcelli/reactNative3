import { StyleSheet, Dimensions } from 'react-native'; // Importamos Dimensions
import { colors } from '../../../../constants/colors';

const windowWidth = Dimensions.get('window').width; // Obtenemos el ancho de la pantalla

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: (windowWidth * 0.1) / 2, // El 10% de margen en ambos lados
        width: windowWidth * 0.8, // Ancho del 80% de la pantalla
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    text: {
        fontFamily: 'PoppinsItalic',
        fontSize: 16,
        color: colors.primary,
    },
});
