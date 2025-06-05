import { Text, View, Image, TextInput, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { IconButton } from 'react-native-paper';
import FallBack from '../app/(screens)/todo-screen'



function Index() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoLIst] = useState([]);
  const [editedTodo, seteditedTodo] = useState(null);



  const handleTheToDo = () => {
    setTodoLIst([...todoList, { id: Date.now().toString(), title: todo }])
    setTodo('')
  }
  const handleDeletToDo = (id) => {
    const updatedTOdo = todoList.filter((todo) => todo.id !== id);

    setTodoLIst(updatedTOdo)

  }
  const handleEditToDo = (todo) => {

    seteditedTodo(todo)
    setTodo(todo.title)
  }
   const handleUpdateToDo =()=>{
    const updatedTodo = todoList.map((item) => {
      if(item.id===editedTodo.id){
        return {...item,title:todo}
      }
      return item
    });
    setTodoLIst(updatedTodo)
    seteditedTodo(null)
    setTodo('')
   }



  const rendertodos = ({ item }) => {
    return (
      <View style={styles.todoNotes}>
        <Text style={{ flex: 1, marginLeft: 19 }}>{item?.title ?? "No title"}</Text>
        <IconButton icon='pencil' onPress={() => handleEditToDo(item)} />
        <IconButton icon='trash-can'
          onPress={() => handleDeletToDo(item.id)}
        />
      </View>
    )
  };


  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        blurRadius={70}
        source={require("../assets/images/johannes-andersson-a5c9WeJU8WQ-unsplash.jpg")}
        style={styles.backgroundImage}
      />

      {/* Foreground Content */}
      <SafeAreaView style={styles.overlay}>
        <StatusBar style="light" />

        <Text
          style={styles.text}>
          To Do
        </Text>

        <TextInput placeholder="Add task" style={styles.input} placeholderTextColor="white"
          value={todo}
          onChangeText={(theText) => setTodo(theText)} />

        {
          editedTodo ? <TouchableOpacity
            style={styles.touch}
            onPress={handleUpdateToDo
            }>
            <Text style={styles.textouch}>SAVE</Text>
          </TouchableOpacity> : <TouchableOpacity
            style={styles.touch}
            onPress={handleTheToDo
            }>
            <Text style={styles.textouch}>ADD</Text>
          </TouchableOpacity>


        }

      </SafeAreaView>
      <View>
        {/* FlatList for Todos */}
        <FlatList
          data={todoList}
          renderItem={rendertodos}
          keyExtractor={(item) => item.id}
          style={styles.flatList}
        />
        {
          todoList.length === 0 && <FallBack texStyle={styles.text} />
        }

      </View>

    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#142563",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "white",
    fontSize: 18,
    marginBottom: 15,
  },
  touch: {
    backgroundColor: "#142563",
    width: "40%",
    padding: 9,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: "center",
  },
  textouch: {
    color: "white",
    textAlign: "center",
  },
  flatList: {
    width: "100%",
    marginTop: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowRadius: '',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
  },
  todoNotes: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 'auto',
    marginVertical: 5,
    marginLeft: 18,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    flexDirection: 'row',

  },
  todoText: {
    fontSize: 18,
    color: "white",
  },
});
