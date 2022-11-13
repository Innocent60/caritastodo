import { View,text} from "react-native"
export default function comp({props}){
    return(
        <View>
            <text> Tobechukwu component </text>
        </View>
    )


}
export function comp1({name,setName}){
    return(
        <View>
            <text> Tobechukwu first component </text>
        </View>
    )
}
export function comp2({age,setAge}){
    return(
        <view>
            <text> Tobechukwu second component</text>
        </view>
    )
}
export function Comp3({status,setstatus}){
    return(
        <View>
            <text> Tobechukwu third component </text>
        </View>
    )
}
export function Comp4({place,setplace}){
return(
    <view>
        <text> Tobechukwu fourth component </text>
    </view>
)
}
export function Comp5({school,setschool}){
    return(
        <view>
            <text> Tobechukwu fifth component </text>
        </view>
    )
}
export function Comp6({church,setchurch}){
    return(
        <view>
            <text> Tobechukwu sixth component </text>
        </view>
    )
}