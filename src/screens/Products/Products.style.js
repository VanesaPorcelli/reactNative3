import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    listContainer: {
        flex: 1,
        marginTop: 15,
        paddingHorizontal: 15,
    },
    wrapperStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    productContainer: {
        width: '48%',
        backgroundColor: colors.grey,
        marginBottom: 20,
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        margin: 5,
    },
    image: {
        alignSelf: 'center',
        height: 150,
        width: 150,
    },
    title: {
        fontWeight: '600',
        fontVariant: 'small-caps',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    price: {
        fontSize: 18,
        fontVariant: 'small-caps',
        textAlign: 'center',
        marginBottom: 10,
    },
})
