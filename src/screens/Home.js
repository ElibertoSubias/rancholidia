// import React from 'react';
// import { StyleSheet, Image, Text, View, Platform, TextInput } from 'react-native';
// import Icon from '@expo/vector-icons/AntDesign';

// export default class Home extends React.Component{
//     render() {
//         const {navigate} = this.props.navigation;
//         let imageStyle = '';
//         if (Platform.OS !== 'web') {
//             imageStyle = styles.image_movil
//         } else {
//             imageStyle = styles.image_web
//         }
//         return(
//             <View style={{backgroundColor:"#FFF", height:"100%"}}>
//                 <Image 
//                     source={require('../images/logo.png')} 
//                     style={imageStyle}
//                 />
//                 <Text style={styles.title}>Home</Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     image_movil: {
//         width: '100%', 
//         height: '43%'
//     },
//     image_web: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%', 
//         height: '20%'
//     }
// });

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return ( 
        <View>
            <Text style={styles.myText}>Estoy en Home</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    myText: {
        color: 'tomato',
        textAlign: 'center'
    }
})
 
export default Home;