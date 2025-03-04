import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = ({navigation}: any) => {
    // const navigation=useNavigation()
    const [data, setData] = useState({
        user: "",
        pass: ""
    })
    const [error, setError] = useState(false)
    console.log("data====", data.user)

    const user = "test"
    const Password = "123"
    const handellogin = () => {
        if (data.user.trim() === user && data.pass == Password) {
            navigation.navigate("home")
        }
        else {
            setError(true)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.loggincontainer}>
                    <View style={{ padding: 20 }} >
                        <Text style={styles.headerText} >
                            LOGIN
                        </Text>
                        <View style={styles.loggincontainer}>
                            <View>
                                <Text style={styles.lable}>Use Name</Text>
                                <TextInput style={styles.input}
                                    placeholder='enter your user name'
                                    placeholderTextColor={"black"}
                                    onChangeText={(text) => {{setData(prevState => ({ ...prevState, user: text })), setError(false)}}}

                                />
                            </View>
                            <View>
                                <Text style={styles.lable}>Password</Text>
                                <TextInput style={styles.input}
                                    placeholder='enter your user name'
                                    placeholderTextColor={"black"}
                                    onChangeText={(text) => setData(prevState => ({ ...prevState, pass: text }))}
                                />
                            </View>
                            {error ?
                                <View style={styles.errorContaner}>
                                    <Text style={styles.errorText}>Invalid user name & passeord</Text>
                                </View>
                                : null} 
                        </View>
                        <View style={styles.forgetpas}>
                            <Text style={{ fontSize: 15, color: "blue", marginLeft: 10, fontWeight: "bold" }}>Forgot Password</Text>
                            <Text style={{ fontSize: 15, color: "blue", marginRight: 10, fontWeight: "bold" }}>Sign in</Text>
                        </View>
                        <View style={{ alignItems: "center", marginTop: 20, }}>
                            <TouchableOpacity style={styles.Button} onPress={()=> handellogin()}>
                                <Text style={[styles.loginText]}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    container: {
        backgroundColor: "brown",
        // height: "100%",
        padding: 10,
        justifyContent: "center",
        flex: 1,

    },
    loggincontainer: {
        backgroundColor: "#FFF",
        marginTop: 10,
        gap: 10,
        borderRadius: 10,
        padding: 10
    },
    headerText: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    },
    inputContainer: {
        padding: 20,

    },
    input: {
        borderBlockColor: "#FFF",
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        height: 50,
        fontWeight: "bold"
    },
    lable: {
        marginLeft: 10,
        fontWeight: "bold"
    },
    forgetpas: {
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    Button: {
        backgroundColor: "brown",
        padding: 10,
        height: 50,
        width: 200,
        borderRadius: 50

    }, loginText: {
        fontSize: 30,
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"

    },errorContaner:{
display:"flex",
alignItems:"center"
    },
    errorText:{
        fontSize:17,
        fontWeight:"bold",
        color:"red"
    }
})