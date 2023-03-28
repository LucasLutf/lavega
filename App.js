import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, hov } from "react-native";
import Filme from "./src/components/Filme";

const filmes = [
  {
    nome: "Né segredo",
    artista: "Cabelinho",
    imagem: "https://i.ytimg.com/vi/GqLrlHHeww0/maxresdefault.jpg"
  },
  {
    nome: "Maturidade",
    artista: "Kayblack",
    imagem: "https://i.ytimg.com/vi/K9d5Tfdevt8/maxresdefault.jpg"
  },
  {
    nome: "Pra Toda Quebrada",
    artista: "Cabelinho",
    imagem: "https://i.ytimg.com/vi/Kh9fYUUMK9U/maxresdefault.jpg"
  },
  {
    nome: "Bonjour",
    artista: "Kayblack",
    imagem: "https://i1.sndcdn.com/artworks-wmlh1iqlTNdcaLIx-2adkfg-t500x500.jpg"
  }
];


const ListaFilmes = () => {
  const [filmesList, setFilmesList] = useState(filmes);

  const handleRemove = (index) => {
    const newFilmesList = [...filmesList];
    newFilmesList.splice(index, 1);
    setFilmesList(newFilmesList);
  };

  return (
    <ScrollView style={styles.scroll}>
      {filmesList.map((filme, index) => (
        <Filme key={index} filme={filme} onRemove={() => handleRemove(index)}  />
      ))}
    </ScrollView>
  );
};

export default function App() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>la Vega</Text>
      <ListaFilmes />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    backgroundColor: "#000",
    height: 60,
    paddingTop: 10,
  },
  scroll: {
    padding: 20,
    backgroundColor: '#212121'
  },
  content: {
    flex: 1,
  },
});
