import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, { useEffect, useState } from 'react'
import { addTodo, removeTodo, toggleTodo, editTodo } from '../../store/todoSlices/TodosSlice';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useDispatch, useSelector } from 'react-redux';

const CompleteTodoScreen = () => {
    const todos = useSelector((state: any) => state.todos.todos);
    const [data,setData]=useState<any>()
   console.log("kjdhjf==",todos)
   const handelFilter=()=>{
   const data= todos.filter((item:any)=>item.completed!==false)
   setData(data)
   }
   useEffect(()=>{
    handelFilter()
   },[])
  return (
    <SafeAreaView style={styles.container}>
           <StatusBar barStyle={"dark-content"} />
           <View style={styles.maincontainer}>
             <View style={{ height: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
               <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}> COMPLETED TODOS</Text>
              
             </View>
             <View style={styles.flexContainer}></View>
   
             <FlatList
               data={data}
               keyExtractor={(item) => item.id.toString()} 
               renderItem={({ item }) => (
                
                 <View style={{ display: "flex", flexDirection: "row", gap: 5, marginTop: 0 }}>
                  
                   <View style={styles.listStyle}>
                     <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                      
                         {item.completed ? <FontAwesome name="check" size={18} color={"white"} /> : null}
                      
                       <Text style={{ color: "white", fontSize: 17,fontWeight:"bold" }}>{item.title}</Text>
                     </View>
                     
                   </View>
                 </View>
               )}
             />
            
             {/* modal */}
   
          
           </View>
         
       </SafeAreaView>
  )
}

export default CompleteTodoScreen

const styles = StyleSheet.create({
    maincontainer: {
      padding: 10
    },
  
    container: {
      flex: 1,
    },
    addButton: {
      backgroundColor: "brown",
      borderWidth: 1,
      height: 50,
      width: "20%",
      justifyContent: "center",
      borderRadius: 10
    },
    flexContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: "100%"
    },
    text: {
      color: 'white',
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Modal backdrop
    },
    modalContainer: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
      gap: 10
    },
    modalText: {
      marginBottom: 20,
      fontSize: 18,
    },
    listStyle: {
      height: 50,
      marginBottom: 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: "100%",
      shadowColor: "#000",
      borderRadius: 10,
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.28,
      shadowRadius: 10.00,
      elevation: 24,
      backgroundColor: "brown"
    },
    backgroundcontainer: {
      padding: 10,
      flex: 1
    }
  });