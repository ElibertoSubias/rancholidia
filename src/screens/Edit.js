import React from 'react';
import { StyleSheet, Image, Text, View, Platform, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { SvgCss } from 'react-native-svg';

export default class Edit extends React.Component{
    render() {
        const xml = `
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="254mm" height="254mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 25400 25400"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
            <style type="text/css">
            <![CDATA[
                .str0 {stroke:#373435;stroke-width:20;stroke-miterlimit:22.9256}
                .str1 {stroke:#373435;stroke-width:7.62;stroke-miterlimit:22.9256}
                .fil0 {fill:#373435}
                .fil1 {fill:#373435;fill-rule:nonzero}
            ]]>
            </style>
            </defs>
            <g id="Capa_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"/>
            <path class="fil0 str0" d="M16240.1 15585.23c5234.9,365.49 7699.77,-716.7 8143.2,-784.42 6.45,-0.99 -1759.24,1581.78 -8421.98,1941.58 -182.27,9.81 -368.79,24.47 -549.28,83.39 -523.85,171.07 -1009.96,492.24 -1145.63,1041.62 -333.32,1349.54 63.67,2184.25 729.87,2990.28 83.3,100.78 439.64,442.99 342.71,464.53 -481.9,107.18 -1040.3,-26.64 -1308.83,61.1 -433.45,141.59 -887.38,561.37 -1195.53,655.11 -2.97,0.89 -5.9,0.52 -8.83,-0.53 -2.6,0.79 -5.3,0.79 -7.94,0 -308.15,-93.74 -762.08,-513.51 -1195.53,-655.11 -268.53,-87.74 -826.94,46.08 -1308.83,-61.09 -96.93,-21.55 259.41,-363.76 342.7,-464.54 666.21,-806.02 1063.19,-1640.74 729.88,-2990.28 -135.67,-549.38 -621.78,-870.54 -1145.63,-1041.62 -180.5,-58.92 -367.02,-73.58 -549.29,-83.39 -6662.73,-359.8 -8428.42,-1942.56 -8421.97,-1941.58 443.43,67.72 2908.3,1149.92 8143.2,784.42 1025.74,-71.64 2492.63,-416.38 3409.69,-356.7 938.82,-57.02 2376.86,284.57 3418.02,357.23z"/>
            <path class="fil1 str1" d="M9204.87 10157.02c-30.98,3.87 -61.97,7.74 -91.02,9.68 -30.98,1.93 -73.59,1.93 -131.68,1.93 -183.97,0 -327.28,-34.85 -427.98,-104.57 -100.7,-69.71 -149.11,-172.35 -149.11,-304.04 0,-75.52 30.98,-143.3 94.89,-201.4 65.84,-58.09 141.37,-89.08 228.51,-89.08 120.07,0 230.45,25.18 331.15,75.53 100.7,48.41 191.72,123.94 274.99,226.57 211.08,-7.74 437.66,-87.14 675.85,-236.25 238.2,-149.12 486.07,-366.01 741.7,-648.75 325.34,-364.07 575.15,-724.26 749.44,-1082.52 174.29,-356.33 261.43,-685.54 261.43,-983.77 0,-193.65 -32.92,-369.88 -98.76,-530.61 -65.84,-160.73 -170.42,-309.85 -309.85,-445.4 -218.83,178.16 -445.4,393.11 -681.66,646.8 -234.32,253.69 -513.19,592.58 -838.52,1016.69 -377.63,484.13 -842.4,1130.94 -1390.44,1938.47 -548.04,807.54 -933.41,1338.15 -1158.05,1591.84 -722.33,832.71 -1454.35,1450.47 -2196.04,1855.21 -739.76,404.74 -1506.63,608.07 -2296.74,608.07 -602.26,0 -1076.72,-112.32 -1427.23,-335.02 -350.51,-222.7 -524.8,-522.87 -524.8,-896.62 0,-220.76 73.59,-406.67 220.76,-559.66 149.12,-154.92 327.28,-230.45 534.49,-230.45 158.79,0 294.35,52.29 404.74,154.93 108.44,104.57 164.6,230.44 164.6,377.62 0,129.75 -40.67,228.51 -120.06,302.1 -79.4,71.65 -191.72,106.51 -335.03,106.51 -63.9,0 -151.05,-21.3 -257.56,-63.9 -108.44,-44.54 -189.78,-65.85 -242.06,-65.85 -27.12,0 -46.48,9.69 -60.04,29.05 -13.55,17.43 -19.36,44.54 -19.36,79.4 0,214.96 145.24,406.67 437.66,573.22 290.48,166.54 637.12,249.81 1037.98,249.81 333.09,0 650.68,-40.67 954.72,-122 305.97,-81.34 596.45,-207.21 877.25,-377.63 309.85,-185.91 660.36,-476.39 1051.54,-873.38 393.12,-396.99 917.92,-1001.19 1574.41,-1810.66 182.04,-222.71 447.34,-553.85 793.98,-993.45 1343.96,-1694.47 2414.87,-2827.35 3218.54,-3398.63 -300.17,-174.29 -617.76,-305.97 -956.66,-393.12 -338.89,-87.14 -702.96,-129.75 -1092.21,-129.75 -726.2,0 -1458.21,125.88 -2197.97,377.63 -737.82,251.75 -1421.42,610.01 -2048.86,1074.78 -515.12,381.5 -910.18,780.43 -1189.04,1194.85 -276.92,414.42 -416.35,813.34 -416.35,1200.65 0,294.36 108.44,538.36 323.4,732.01 214.95,191.72 491.88,288.55 828.84,288.55 453.15,0 950.84,-182.04 1493.07,-548.04 540.3,-364.07 1041.86,-863.7 1502.76,-1495.01 226.57,-309.85 416.35,-641 571.28,-995.38 154.92,-354.39 253.68,-530.62 298.23,-530.62 23.23,0 40.66,11.62 52.28,36.8 9.68,25.17 15.49,63.9 15.49,116.19 0,182.03 -52.28,426.04 -154.92,735.89 -104.57,307.91 -238.19,592.58 -400.86,854.01 -418.3,675.85 -910.18,1194.85 -1471.77,1555.04 -561.6,358.26 -1161.93,538.36 -1804.86,538.36 -458.96,0 -826.9,-120.06 -1109.64,-360.19 -280.8,-240.14 -422.17,-553.86 -422.17,-939.23 0,-420.23 147.18,-854.01 441.54,-1299.42 296.29,-447.34 718.45,-873.38 1266.49,-1281.99 656.49,-486.07 1371.08,-857.89 2143.76,-1119.32 770.74,-261.43 1539.55,-391.18 2308.35,-391.18 416.36,0 811.41,50.35 1185.17,151.05 373.75,98.76 733.95,249.81 1076.71,451.21 265.31,-151.05 451.22,-251.75 557.73,-298.22 104.57,-48.42 185.91,-71.65 244,-71.65 29.05,0 58.1,7.74 81.34,23.23 25.17,15.5 36.79,34.86 36.79,56.16 0,63.91 -102.64,158.8 -311.78,284.67 -135.56,79.4 -245.94,147.18 -329.21,203.34 226.57,226.58 396.99,460.9 509.31,699.09 110.38,238.2 166.54,486.08 166.54,743.64 0,733.94 -244.01,1369.13 -730.08,1909.43 -486.07,538.35 -1152.24,896.61 -2000.45,1074.78 38.74,102.63 67.78,199.46 85.21,294.35 19.37,94.89 29.05,187.84 29.05,278.86 0,189.78 -44.54,381.5 -133.62,579.03 -89.08,195.59 -228.51,410.54 -422.17,640.99 -151.05,178.17 -352.45,395.06 -602.26,652.62 -249.82,257.56 -373.75,424.1 -373.75,499.63 0,40.66 15.49,73.58 44.54,98.76 30.98,25.17 73.59,36.79 125.87,36.79 178.16,0 427.98,-81.33 751.38,-245.94 323.4,-164.6 677.79,-393.12 1063.16,-685.53 158.8,-116.2 327.28,-251.75 505.44,-404.74 178.16,-152.99 280.8,-230.45 305.97,-230.45 30.99,0 54.23,9.68 69.72,25.18 13.55,17.43 23.24,42.6 27.11,77.46 0,46.48 -50.35,118.13 -149.11,218.83 -100.7,100.7 -274.99,247.87 -524.81,445.4 -416.35,333.09 -811.41,594.52 -1187.1,782.36 -375.69,189.79 -681.66,284.68 -915.98,284.68 -218.83,0 -381.5,-46.48 -489.95,-141.37 -106.51,-94.89 -160.73,-240.13 -160.73,-437.66 0,-276.93 230.45,-650.68 689.41,-1123.19 154.92,-158.8 273.05,-284.68 356.32,-375.69 230.45,-253.69 387.31,-453.15 472.52,-598.39 85.21,-145.24 127.81,-278.87 127.81,-398.93 0,-38.73 -1.94,-75.53 -7.75,-108.45 -5.8,-34.86 -13.55,-67.78 -25.17,-102.63zm5821.25 2831.22c-503.5,-145.24 -956.65,-251.75 -1359.45,-321.47 -402.8,-71.65 -759.13,-106.51 -1070.91,-106.51 -180.1,0 -331.15,23.24 -447.34,71.66 -118.13,46.47 -176.23,104.57 -176.23,174.28 0,137.5 127.82,242.07 385.38,315.66 257.56,75.53 629.37,112.32 1113.51,112.32 242.07,0 491.88,-19.37 749.44,-60.03 257.56,-40.67 524.8,-102.64 805.6,-185.91zm5056.31 -3997.02c912.11,-331.15 1692.54,-710.71 2341.28,-1132.88 648.74,-424.1 1192.91,-914.05 1632.5,-1469.83 147.18,-182.04 261.44,-358.26 342.77,-526.74 81.34,-170.42 122,-311.79 122,-426.04 0,-114.26 -29.04,-195.59 -87.14,-245.94 -60.03,-52.29 -156.86,-77.47 -292.42,-77.47 -499.63,0 -1099.95,333.09 -1799.04,1001.2 -701.03,668.1 -1452.41,1626.69 -2259.95,2877.7zm-323.4 455.08c-673.92,1032.18 -1318.79,1824.23 -1934.61,2372.27 -615.82,549.98 -1280.05,931.47 -1990.76,1146.43 290.48,89.08 557.72,152.99 801.73,195.59 244,40.67 460.89,61.97 650.67,61.97 476.39,0 927.61,-85.21 1355.58,-253.69 427.98,-168.48 904.37,-455.08 1431.11,-861.76 83.27,-63.9 185.91,-149.11 311.78,-255.62 182.04,-154.92 298.23,-232.39 350.52,-232.39 23.23,0 42.6,7.75 58.09,25.18 15.49,17.43 21.3,38.73 21.3,65.84 0,44.54 -46.47,114.26 -141.36,207.21 -94.89,92.96 -278.87,249.82 -555.79,468.64 -522.87,410.55 -991.51,693.29 -1407.87,854.02 -416.35,158.8 -867.57,238.19 -1357.51,238.19 -302.1,0 -608.08,-30.98 -917.92,-91.01 -311.79,-60.04 -633.25,-152.99 -966.34,-278.87 -317.59,125.88 -644.87,218.83 -981.82,278.87 -338.9,60.03 -691.35,91.01 -1057.36,91.01 -563.53,0 -993.44,-54.22 -1289.73,-164.6 -296.29,-110.38 -445.41,-273.05 -445.41,-484.14 0,-180.1 87.15,-311.78 263.37,-396.99 176.23,-85.21 441.53,-127.81 795.92,-127.81 352.45,0 749.44,44.54 1190.97,133.62 441.54,89.08 912.12,222.7 1411.74,400.87 540.3,-259.5 1074.78,-637.13 1599.59,-1130.95 526.74,-493.81 1074.78,-1136.74 1642.18,-1926.85l-1522.12 311.78 -118.13 27.11c-305.97,61.97 -484.13,91.02 -534.48,91.02 -67.78,0 -120.07,-9.68 -154.93,-27.11 -36.79,-19.37 -54.22,-46.48 -54.22,-81.34 0,-85.21 315.66,-183.97 945.03,-294.35 629.38,-108.45 1212.28,-238.2 1748.7,-385.37 1130.94,-1524.06 2132.13,-2666.62 3001.64,-3425.75 869.51,-761.06 1607.33,-1140.62 2217.34,-1140.62 222.7,0 393.12,54.22 509.31,160.73 118.13,108.45 176.23,267.25 176.23,474.46 0,590.64 -451.22,1239.38 -1351.71,1948.16 -902.43,708.77 -2136.01,1378.81 -3700.73,2006.25z"/>
            <path class="fil1 str1" d="M1681.79 14700.8l225.9 -800.63 340.49 96.07c85.54,24.13 145.74,48.96 180.46,74.25 34.9,25.34 58.63,59.6 71.56,102.89 12.89,43.48 12.8,88.72 -0.55,136.05 -16.99,60.2 -48.5,104.83 -94.77,134.04 -46.25,29.19 -105.75,38.96 -178.72,29.44 29.12,30.15 51.51,60.62 67.17,91.39 15.85,30.83 34.16,82.87 54.98,155.96l53.6 183.72 -193.26 -54.52 -66.6 -207.53c-24.05,-73.78 -41.52,-120.97 -52.41,-141.54 -10.76,-20.34 -23.82,-36.09 -39.28,-46.9 -15.65,-10.85 -42.02,-21.51 -79.29,-32.03l-32.8 -9.26 -94.34 334.35 -162.14 -45.75zm292.44 -416.07l119.64 33.76c77.54,21.87 126.75,32.14 147.97,31.09 21.04,-1.11 39.53,-8.17 54.86,-21.14 15.52,-12.93 26.6,-31.53 33.39,-55.57 7.62,-27.03 6.46,-50.69 -3.16,-71.52 -9.67,-20.63 -27.04,-36.8 -51.93,-48.45 -12.7,-5.6 -51.76,-17.63 -117.18,-36.09l-126.16 -35.59 -57.43 203.51zm2522.11 1010.58l-179.39 -27.25 -42.57 -198.03 -329.87 -50.12 -96.79 176.85 -176.13 -26.76 444.3 -773.93 175.94 26.73 204.51 872.51zm-254.84 -372.47l-68.03 -321.77 -157.3 287.53 225.33 34.24zm1630.77 491.11l37.45 -831.05 162.88 7.34 316.91 572.35 25.1 -556.94 155.53 7.01 -37.45 831.05 -168.1 -7.58 -312.17 -561.47 -24.61 546.3 -155.54 -7.01zm2651.42 -292.93l164.19 44.68c-22.01,92.35 -61.43,161.63 -118.05,208.02 -56.62,46.2 -129.45,70.84 -218.68,73.73 -110.51,3.57 -202.49,-31.23 -276.17,-104.41 -73.46,-73.18 -112.41,-175.18 -116.65,-306.21 -4.48,-138.38 27.84,-247.15 96.78,-326.1 68.93,-78.95 161.75,-120.33 278.26,-124.1 101.81,-3.29 185.43,24.22 250.85,82.37 39.1,34.38 69.01,84.56 90.13,150.71l-164.78 44.87c-11.26,-42.65 -32.87,-76.05 -64.85,-100.01 -32.16,-23.95 -70.49,-35.12 -115.01,-33.68 -61.73,2 -111.15,25.69 -148.04,71.25 -37.08,45.38 -53.93,117.61 -50.73,216.7 3.4,104.9 24.79,179.19 63.97,222.48 39.39,43.48 89.27,64.15 149.84,62.19 44.71,-1.45 82.77,-16.82 113.98,-46.31 31.21,-29.5 53,-74.76 64.96,-136.18zm1602.47 179.96l-121.93 -822.91 166.65 -24.69 48.02 324.1 324.1 -48.02 -48.02 -324.11 166.65 -24.69 121.94 822.9 -166.65 24.7 -53.31 -359.73 -324.1 48.02 53.3 359.73 -166.65 24.7zm2077.22 -696.73c0.06,-84.82 12.88,-156.07 38.28,-213.76 18.81,-42.39 44.78,-80.53 77.53,-114.2 32.75,-33.68 68.58,-58.64 107.52,-75.07 51.9,-21.85 111.75,-32.85 179.52,-32.81 122.77,0.07 220.74,38.28 294.47,114.43 73.53,76.35 110.26,182.29 110.18,318.04 -0.09,134.58 -36.75,239.9 -109.8,315.76 -73.05,76.06 -170.86,113.95 -293.05,113.87 -123.74,-0.08 -222.28,-37.9 -295.24,-113.65 -72.95,-75.57 -109.49,-179.77 -109.41,-312.61zm173.13 -5.51c-0.06,94.31 21.77,165.77 65.31,214.6 43.54,48.62 98.91,73.06 165.91,73.1 67.2,0.04 122.2,-24.12 165.41,-72.32 43.02,-48.38 64.57,-120.79 64.63,-217.42 0.06,-95.47 -20.82,-166.74 -62.81,-213.63 -41.8,-47.07 -97.36,-70.55 -166.88,-70.59 -69.32,-0.04 -125.3,23.74 -167.73,71.17 -42.44,47.6 -63.78,119.24 -63.84,215.09zm3652.61 766.45l51.69 -823.3 168.14 10.55 -42.88 682.99 416.29 26.13 -8.81 140.32 -584.43 -36.69zm1988.24 88.14l-0.26 -831.89 168.47 -0.06 0.26 831.89 -168.47 0.06zm1570.7 -863.48l305.82 -17.88c69.01,-4.04 121.89,-1.89 158.66,6.63 49.37,11.47 92.61,34.54 129.37,69.24 36.92,34.51 65.84,77.81 87.12,129.92 21.07,51.91 33.99,116.92 38.53,194.62 4,68.44 -1.06,127.7 -15.18,178.18 -17.15,61.72 -43.87,112.37 -80.15,151.92 -27.34,30.11 -65.29,54.44 -113.66,73.18 -36.23,13.95 -85.19,22.63 -147.05,26.25l-314.9 18.41 -48.56 -830.47zm176.39 130.5l32.14 549.79 124.69 -7.29c46.58,-2.73 80.06,-7.4 100.44,-13.82 26.86,-8.36 48.61,-21.27 65.45,-38.56 17.03,-17.28 29.96,-44.81 39,-82.57 9.24,-37.79 11.87,-88.96 8.12,-153.14 -3.76,-64.18 -12.23,-112.96 -25.65,-146.7 -13.22,-33.75 -30.63,-59.51 -52.06,-77.65 -21.41,-17.95 -47.9,-29.59 -79.61,-34.53 -23.5,-3.86 -69.48,-3.89 -137.52,0.09l-75 4.38zm1985.02 486.65l-139.81 -820.06 166.07 -28.31 139.81 820.06 -166.07 28.31zm2306.43 -533.22l-174.27 50.53 -121.74 -161.89 -320.45 92.92 -13.66 201.14 -171.1 49.61 78.56 -888.93 170.92 -49.56 551.74 706.18zm-387.61 -231.18l-196.77 -263.52 -22.13 326.99 218.9 -63.47z"/>
            </g>
            </svg>
        `;
        const {navigate} = this.props.navigation;
        let imageStyle = '';
        if (Platform.OS !== 'web') {
            imageStyle = styles.image_movil
        } else {
            imageStyle = styles.image_web
        }
        return(
            <View style={{backgroundColor:"#FFF", height:"100%"}}>
                {Platform.OS !== 'web' 
                ? (<View style={styles.contenedorLogo}>
                    <SvgCss xml={xml} width="80%" height="100%" style={styles.logo}/>
                </View>) 
                : <Image style={imageStyle} source={require('../images/logo.png')}/>}
                <Text style={styles.title}>Crear cuenta</Text>
                <Text style={styles.description}>
                    Familia Subias Ortega criando las mejores reces desde 1994
                </Text>
                <View style={styles.contenedorIcono}>
                    <TextInput style={styles.styleInput} placeholder="Correo" placeholderTextColor="#00716F"/>
                </View>
                <View style={styles.contenedorIcono}>
                    <TextInput style={styles.styleInput} placeholder="Contraseña" placeholderTextColor="#00716F" secureTextEntry/>
                </View>
                <View style={styles.contenedorIcono}>
                    <TextInput style={styles.styleInput} placeholder="Confirmar contraseña" placeholderTextColor="#00716F" secureTextEntry/>
                </View>
                <View style={styles.cuentaActualContent}>
                    <Text 
                        style={styles.cuentaActualText}
                        onPress={()=>navigate('Login')}
                    >Registrar</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        flex: 1
    },
    contenedorLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nuevoUsuario: {
        alignSelf: 'center',
        color: '#00716F',
        fontFamily: 'Bold',
        paddingVertical: 30,
    },
    cuentaActualContent: {
        marginHorizontal: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#00716F',
        paddingVertical: 8,
        borderRadius: 23
    },
    cuentaActualText: {
        color: 'white',
        fontFamily: 'Bold'
    },
    styleInput: {
        paddingHorizontal: 10
    },
    contenedorIcono: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 35,
        paddingHorizontal: 10,
        borderColor: '#00716F',
        borderRadius: 23,
        paddingVertical: 2
    },
    image_movil: {
        width: '100%', 
        height: '43%'
    },
    image_web: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        height: '20%'
    },
    title: {
        alignSelf: 'center',
        fontSize: 28,
        fontFamily: 'Black'
    },
    description: {
        fontFamily:"Light",
        marginHorizontal:55,
        textAlign:'center',
        marginTop:5,
        opacity:0.4
    }
});
  