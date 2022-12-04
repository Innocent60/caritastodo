import { View,Text} from "react-native"
export default function Comp({props}){
    return(
        <View>
            <Text> Tobechukwu component </Text>
        </View>
    )


}
export function Comp1({name,setName}){
    return(
        <View>
            <Text> Tobechukwu first component </Text>
        </View>
    )
}
export function Comp2({age,setAge}){
    return(
        <View>
            <Text> Tobechukwu second component</Text>
        </View>
    )
}
export function Comp3({status,setstatus}){
    return(
        <View>
            <Text> Tobechukwu third component </Text>
        </View>
    )
}
export function Comp4({place,setplace}){
return(
    <View>
        <Text> Tobechukwu fourth component </Text>
    </View>
)
}
export function Comp5({school,setschool}){
    return(
        <View>
            <Text> Tobechukwu fifth component </Text>
        </View>
    )
}
export function Comp6({church,setchurch}){
    return(
        <View>
            <Text> Tobechukwu sixth component </Text>
        </View>
    )
}