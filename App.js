import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Musica from "./src/components/Musica";


const musicas = [
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


const ListaMusicas = () => {
  const [musicasList, setMusicasList] = useState(musicas);

  const handleRemove = (index) => {
    const newMusicasList = [...musicasList];
    newMusicasList.splice(index, 1);
    setMusicasList(newMusicasList);
  };

  return (
    <ScrollView style={styles.scroll}>
      {musicasList.map((musica, index) => (
        <Musica key={index} musica={musica} onRemove={() => handleRemove(index)}  />
      ))}
    </ScrollView>
  );
};

export default function App() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>la Vega</Text>
      <ListaMusicas />
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
    height: 80,
    paddingTop: 30,
  },
  scroll: {
    padding: 20,
    backgroundColor: '#212121'
  },
  content: {
    flex: 1,
  },
});
