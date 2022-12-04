import { View,Text} from "react-native"

export default function Comp(){
    return(
        <View>
            <Text>
                Innocent component 
            </Text>
        </View>
    )
}
    export function Comp1(props){
        console.log(props.name); 
        return(
            <View>
                <Text> Innocent second component</Text>
            </View>
        )
    }
export function Comp2({name,age,setName}){
    return(
        <View>
            <Text> Innocent third component </Text>
        </View>
    )
    }
    export function Zara({zara}){
        return(
            <View>
        
                <Text>Zara</Text>
            </View>
        )
        }
        export function Zaraisanappdeveloper(){
            return(
                <View>
            
                    <Text>Zaraisanappdeveloper</Text>
                </View>
            )
            }
        
        export function Zaraisanappdevelopeur(){
            return(
                <View>
            
                    <Text>Zaraisanappdeveloper</Text>
                </View>
            )
            }