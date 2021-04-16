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
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

function CustomHeader({title}) {
    return (
        <View style={{flexDirection: 'row', height: 50, borderWidth: 1, borderColor: 'red'}}>
            <View style={{flex: 1, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}>
                <Icon name="menufold" color="#00716F" size={24}/>
            </View>
            <View style={{flex: 1.5, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}>
                <Text style={{textAlign: 'center'}}>
                    {title}
                </Text>
            </View>
            <View style={{flex: 1, borderColor: 'red', borderWidth: 1}}></View>
        </View>
    )
}

const Home = ({navigation}) => {
    return ( 
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title='Home'/>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.myText}>Estoy en Home</Text>
                <TouchableOpacity
                    style={{marginTop: 20}}
                >
                    Go Home Detail
                </TouchableOpacity>
            </View> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    myText: {
        color: 'tomato',
        textAlign: 'center'
    }
})
 
export default Home;