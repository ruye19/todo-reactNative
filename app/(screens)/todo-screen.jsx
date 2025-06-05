 import { View, Text} from 'react-native'
 import { Image } from 'react-native'
 const Fallback = ({textStyle}) => {
   return (
     <View style={{alignItems:'center', justifyContent:'center',marginBottom:100}}>
        <Image 
        style={{width:300, 
          height:200}}
          source={require('../../assets/images/clark-tibbs-oqStl2L5oxI-unsplash.jpg')}/>
        <Text 
        style={textStyle}> 
        well,you should Start Tasks honey!
        </Text>
     </View>
   )
 }
 
 export default Fallback