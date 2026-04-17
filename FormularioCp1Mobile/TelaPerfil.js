import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function TelaPerfil({ route, navigation }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      {/* Requisito: Sua foto, Nome e RM (RM: 563088) */}
      <Image
        source={{ uri: "https://github.com/HenriqueTCesar.png" }}
        style={styles.foto}
      />
      <Text style={styles.meuNome}>Henrique Teixeira Cesar</Text>
      <Text style={styles.meuRm}>RM: 563088</Text>

      <View style={styles.card}>
        <Text style={styles.labelInfo}>DADOS DO USUÁRIO</Text>
        <Text style={styles.txt}>Curso: {user.curso}</Text>
        <Text style={styles.txt}>Telefone: {user.telefone}</Text>
        <Text style={styles.txt}>CPF: {user.cpf}</Text>
      </View>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#ed145b",
    marginTop: 20,
  },
  meuNome: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  meuRm: { fontSize: 18, color: "#666", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "100%",
    elevation: 4,
  },
  labelInfo: {
    fontWeight: "bold",
    color: "#ed145b",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  txt: { fontSize: 16, marginVertical: 5 },
  botaoVoltar: { marginTop: 30 },
  textoBotao: { color: "#ed145b", fontWeight: "bold" },
});
