import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function TelaPerfil({ route, navigation }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://github.com/HenriqueTCesar.png" }}
        style={styles.avatar}
      />
      <Text style={styles.userName}>Henrique Teixeira Cesar</Text>
      <Text style={styles.userRm}>RM: 563088</Text>

      <View style={styles.infoCard}>
        <Text style={styles.cardHeader}>DETALHES DA CONTA</Text>
        <Text style={styles.infoText}>Curso: {user.curso}</Text>
        <Text style={styles.infoText}>Telefone: {user.telefone}</Text>
        <Text style={styles.infoText}>CPF: {user.cpf}</Text>
      </View>

      <TouchableOpacity
        style={styles.backLink}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backLinkText}>Voltar para edição</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: "#ed145b",
    marginTop: 30,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
    color: "#1a1a1a",
  },
  userRm: { fontSize: 16, color: "#ed145b", fontWeight: "500" },
  infoCard: {
    backgroundColor: "#ffffff",
    padding: 25,
    borderRadius: 15,
    width: "100%",
    marginTop: 30,
    elevation: 5,
  },
  cardHeader: {
    fontWeight: "700",
    color: "#888",
    marginBottom: 15,
    fontSize: 12,
    letterSpacing: 1,
  },
  infoText: { fontSize: 17, marginBottom: 8, color: "#333" },
  backLink: { marginTop: 40 },
  backLinkText: { color: "#ed145b", fontWeight: "600" },
});
