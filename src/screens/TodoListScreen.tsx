import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, StatusBar, FlatList, ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { addTodo, removeTodo, toggleTodo, editTodo } from '../../store/todoSlices/TodosSlice';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useDispatch, useSelector } from 'react-redux';

const TodoListScreen = () => {
  const [add, setAdd] = useState(false)
  const [text, setText] = useState<any>("");
  const [delet, setdelet] = useState(false)
  const [id, setid] = useState('')
  const [data,setData]=useState<any>("")
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos.todos);
 useEffect(()=>{
  setData(todos)
 },[])
  const [modalVisible, setModalVisible] = useState(false);
  const [confirm, setConfirm] = useState(false)
  const [edit, setEdit] = useState<any>(false)
  const handleAddTodo = () => {
    console.log("add")
    setText('');
    if (text?.trim()) {
      dispatch(addTodo(text));
      setModalVisible(false)
    }
  };

  const handleRemoveTodo = () => {
    if (id) {
      console.log("id====", id)
      dispatch(removeTodo(id));
      setConfirm(false)
    }
  };

  const handleToggleTodo = (id: any) => {
    dispatch(toggleTodo(id));
   const value= todos.filter((item:any)=>item.completed==false)
   setData(value)
  };

  const handelupdate = () => {
    if (text?.trim()) {
      dispatch(editTodo({ id: id, newTitle: text }));
      setModalVisible(false);
    }
  };

  const handeledit = (title: any) => {
    setEdit(true)
    setText(title)

    setModalVisible(true)
  }
  useEffect(()=>{
    console.log("todos===",todos)
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: 'https://www.shutterstock.com/image-vector/minimalist-banner-background-pastel-colorful-260nw-2470687695.jpg' }} style={styles.backgroundcontainer}>
        <StatusBar barStyle={"dark-content"} />
        <View style={styles.maincontainer}>
          <View style={{ height: 50, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>TODOS</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => { setModalVisible(true), setText("") }}>
              <Text style={{ color: "#FFF", textAlign: "center", fontSize: 20,fontWeight:"bold" }}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flexContainer}></View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()} // Assuming the id is unique
            renderItem={({ item }) => (
             
              <View style={{ display: "flex", flexDirection: "row", gap: 5, marginTop: 0 }}>
               
                <View style={styles.listStyle}>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <TouchableOpacity
                      style={{
                        width: 20,
                        height: 20,
                        borderWidth: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 25,
                        backgroundColor: "#FFF"
                      }}
                      onPress={() => handleToggleTodo(item.id)}
                    >
                      {item.completed ? <FontAwesome name="check" size={18} /> : null}
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 17,fontWeight:"bold" }}>{item.title}</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <AntDesign name="delete" size={25} color={"#FFF"} onPress={() => { setConfirm(true), setid(item.id) }} />
                    <AntDesign name="edit" color={"#FFF"} size={25} onPress={() => { handeledit(item.title), setid(item.id) }} />
                  </View>
                </View>
              </View>
            )}
          />
         
          {/* modal */}

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Entypo name='squared-cross' color={"red"} size={20} style={{ marginRight: -250 }} onPress={() => setModalVisible(false)} />
                <Text style={{ marginBottom: -10, marginLeft: 10 }}>{text.trim() === "" && !edit? "Add Task" : "edit"}</Text>
                <TextInput
                  style={{ borderWidth: 1, width: "70%", height: 50, borderRadius: 10 }}
                  value={text}
                  onChangeText={(text) => setText(text)}
                />
                <Button
                  title="save"
                  onPress={() => text.trim() !== "" && setEdit(true) ? handelupdate() : handleAddTodo()}
                />
              </View>
            </View>
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={confirm}
            onRequestClose={() => setConfirm(false)}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Entypo name='squared-cross' color={"red"} size={20} style={{ marginRight: -250 }} onPress={() => setConfirm(false)} />
                <Text>you want to delete task</Text>
                <View style={{ display: 'flex', flexDirection: "row", gap: 10 }}>
                  <Button
                    title="delete"
                    onPress={() => handleRemoveTodo()}
                  />
                  <Button
                    title="CANCEL"
                    onPress={() => setConfirm(false)}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

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

export default TodoListScreen;
