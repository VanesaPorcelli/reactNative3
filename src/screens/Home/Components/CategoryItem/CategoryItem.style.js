import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'

export default styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.secondary,
        marginHorizontal: 30,
        marginVertical: 10,
        minWidth: 90,
        width: '85%',
        maxWidth:400,
        height:50,
        minHeight:30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',

    },
    contentContainer: {
        paddingLeft: 10,


    },
    text: {
        fontFamily: 'PoppinsLightItalic',
        fontSize: 20,
        color: colors.tertiary,

    },
})