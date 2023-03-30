import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const Musica = ({ musica, onRemove }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: musica.imagem }} style={styles.image} />
      <View style={ styles.info }>
        <Text style={styles.text}>{musica.nome}</Text>
        <Text style={styles.text2}>{musica.artista}</Text>
        <TouchableOpacity onPress={onRemove}>
          <Feather style={styles.delete} name="delete" size={24} color="black" />
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
    borderRadius: 10,
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
    color: 'white',
  },
  delete: {
    fontSize: 16,
    color: "red",
    justifyContent: "space-between",
  },


});

export default Musica;
