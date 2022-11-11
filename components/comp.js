import { View,text} from "react-native-web"
export default function comp(){
    return(
        <View>
            <text>
                Innocent component 
            </text>
        </View>
    )
}
    export function comp1(props){
        console.log(props.name); 
        return(
            <View>
                <text> Innocent second component</text>
            </View>
        )
    }
export function comp2(name,age,setName){
    return(
        <view>
            <text> Innocent third component </text>
        </view>
    )
}
    