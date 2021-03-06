import { Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let fontFamilyTitle = 'Bold';
let fontFamilySubTitle = 'SemiBold';
let fontFamilyParafo = 'Thin';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
        backgroundColor:"#FFF",
        height: '100%',
    },
    scrollView: {
    },
    text: {
        fontSize: 42,
    },
    contenedorLogo: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contenedorLogoAuth: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        // flex: 1
    },
    titulo: {
        color: 'black',
        fontFamily: fontFamilyTitle,
        textAlign: 'center',
        fontSize: 21,
        marginTop: 10
    },
    subTitulo: {
        fontFamily: fontFamilySubTitle,
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10
    },
    contenidoText: {
        fontFamily: fontFamilySubTitle,
        textAlign: 'justify'
    },
    logo_movil: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        height: '50%',
        backgroundColor: '#cfcfcf'
    },
    logo_web: {
        flexDirection: 'row',
        width: '80%',
        height: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain'
    },
    title: {
        marginTop: 30,
        alignSelf: 'center',
        fontSize: 23,
        fontFamily: fontFamilyTitle
    },
    titleAuth: {
        alignSelf: 'center',
        fontSize: 28,
        fontFamily: fontFamilySubTitle
    },
    descriptionAuth: {
        fontFamily: fontFamilyParafo,
        marginHorizontal:55,
        textAlign:'center',
        marginTop:5,
        opacity:0.4
    },
    contenedorTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 25,
        paddingHorizontal: 10,
        borderColor: '#FCDB44',
        borderRadius: 23,
        paddingVertical: 2
    },
    cuentaActualContent: {
        marginHorizontal: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#FCDB44',
        paddingVertical: 8,
        borderRadius: 23
    },
    cuentaActualText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        fontFamily: fontFamilySubTitle,
    },
    errorText: {
        margin: 0,
        marginTop: 10,
        alignSelf: 'center',
        color: 'red',
        fontFamily: fontFamilySubTitle,
        padding: 0,
    },
    styleInput: {
        fontFamily: fontFamilySubTitle,
        fontSize: 18,
        width: '100%',
        paddingHorizontal: 10
    },
    cuentaActualContentGuardar: {
        marginHorizontal: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#13b30d',
        paddingVertical: 8,
        borderRadius: 23
    },
    imagen: {
        flex: 1,
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
        resizeMode: "contain",
    },
    nuevoUsuario: {
        alignSelf: 'center',
        color: '#00716F',
        fontFamily: fontFamilySubTitle,
        paddingVertical: 30,
    },
    containerItem: {
        flex: 1,
        flexDirection: 'row',
        width: '94%',
        marginTop: 24,
        padding: 10,
        backgroundColor: '#dee2dc',
        borderRadius: 10,
        marginHorizontal: '3%',
        marginTop: 24,
    },
    itemImage: {
        width: '50%',
        height: 150,
    },
    itemTitle: {
        fontFamily: fontFamilySubTitle,
        paddingLeft: 10,
        fontSize: 20,
    },
    imgHome: {
        width: '100%',
        height: Platform.OS !== 'web' ? 300 : 400
    }
});