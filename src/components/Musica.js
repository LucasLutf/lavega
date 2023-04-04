import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Musica = ({ musica, onRemove }) => {
  return (
    <View style={styles.info}>
      <View style={styles.container}>
        <Image source={{ uri: musica.imagem }} style={styles.image} />
        <LinearGradient
          colors={["#191919", "#2c2c2c"]}
          style={styles.gradiente}
        >
          <Text style={styles.text}>{musica.nome}</Text>
          <View style={styles.descbottom}>
            <Text style={styles.text2}>{musica.artista}</Text>
            <TouchableOpacity onPress={onRemove}>
              <MaterialCommunityIcons
                name="delete-forever"
                size={24}
                color="black"
                style={styles.delete}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 10,
    shadowOffset: { width: 3, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 333,
    resizeMode: "stretch",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 12,
    marginBottom: -10,
    color: "white",
  },
  text2: {
    fontSize: 16,
    marginBottom: 24,
    color: "white",
  },
  delete: {
    fontSize: 30,
    color: "#df0000",
    justifyContent: "space-between",
    marginTop: -15,
  },
  gradiente: {
    width: "100%",
    borderRadius: 10,
    marginTop: -10,
    zIndex: -1,
  },
  descbottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    marginEnd: 30,
  },
});

export default Musica;
