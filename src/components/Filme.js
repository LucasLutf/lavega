import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Filme = ({ filme, onRemove }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: filme.imagem }} style={styles.image} />
      <View style={{ padding: 10 }}>
        <Text style={styles.text}>{filme.nome}</Text>
        <Text style={styles.text2}>{filme.genero}</Text>
        <TouchableOpacity onPress={onRemove}>
          <Text style={styles.delete}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: 'white',
  },
  text2: {
    fontSize: 16,
    marginBottom: 5,
  },
  delete: {
    fontSize: 16,
    color: "red",
  },
  // delete: {
  //   width: 50,
  //   height: 50,
  //   backgroundColor: '#FF5733',
  //   borderRadius: 25,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   transform: [{ scale: isDeleteHovered ? 1.2 : 1 }],
  // },
  // deleteIcon: {
  //   color: '#fff',
  //   fontSize: 24,
  // },
});

export default Filme;
