import React from 'react'; //estrictamente necesario
import {
  View,
  Text,
  Image,
  //Button,
  TouchableOpacity,
} from 'react-native'; //varios elementos

const Imgn = (props) => {
    const i = Image.resolveAssetSource(props.source);
    const r = i.height / i.width; //ratio
    const w = props.width; //base width
    const h = w * r; //adjusted height
    return(
        <View>
            <Image source={props.source} style={{width:w, height:h}} />
        </View>
    );
}

const Boton = (props) => {
    return (
        <TouchableOpacity 
            style={{
                borderColor:'gray', 
                borderWidth:1, 
                borderRadius:4, 
                padding:6, 
                backgroundColor:'whitesmoke', 
                margin:4,
                alignItems:'center',
                width:150,
                marginBottom:48,
            }}
            onPress={props.onPress}
        >
            <Text style={{fontFamily:'OpenSans-Regular', fontSize:16}}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

// justifyContent: 'center'
// resizeMode='contain'
// <Text style={{fontSize:32}}>Portada</Text>
// <Image source={require('../assets/logo.png')} style={{width:320}} resizeMode='contain' />
// <Button title='Entrar' color='gray' onPress={() => navigation.navigate('Principal')} />
function Portada({ navigation }) {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'white', padding:24}}>
            <Imgn source={require('../assets/logo.png')} width={320} />
            <Boton title="Entrar" onPress={() => navigation.navigate('Principal')} />
            <Imgn source={require('../assets/xanay.png')} width={200} />
        </View>
    );
}

export default Portada;