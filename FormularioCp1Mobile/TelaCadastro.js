import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaskedTextInput } from "react-native-mask-text";

export default function TelaCadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("@dados_usuario");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setNome(parsedData.nome);
          setCurso(parsedData.curso);
          setTelefone(parsedData.telefone);
          setCpf(parsedData.cpf);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleNavigation = async () => {
    if (!nome.trim() || !curso.trim() || !telefone.trim() || !cpf.trim()) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    if (cpf.length < 14 || telefone.length < 15) {
      Alert.alert("Erro", "Formato de CPF ou Telefone inválido.");
      return;
    }

    const userData = { nome, curso, telefone, cpf };

    try {
      await AsyncStorage.setItem("@dados_usuario", JSON.stringify(userData));
      navigation.navigate("Perfil", { user: userData });
    } catch (err) {
      Alert.alert("Erro", "Erro ao processar as informações.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("./assets/fiaplogo.png")} style={styles.logo} />

      <Text style={styles.header}>Registro de Aluno</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Curso Atual</Text>
      <TextInput style={styles.input} value={curso} onChangeText={setCurso} />

      <Text style={styles.label}>Telefone de Contato</Text>
      <MaskedTextInput
        mask="(99) 99999-9999"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.label}>CPF</Text>
      <MaskedTextInput
        mask="999.999.999-99"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.mainButton} onPress={handleNavigation}>
        <Text style={styles.buttonText}>FINALIZAR CADASTRO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: "#ffffff" },
  logo: { width: 140, height: 60, resizeMode: "contain", alignSelf: "center" },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ed145b",
    textAlign: "center",
    marginVertical: 20,
  },
  label: { fontWeight: "600", marginTop: 15, color: "#444" },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 12,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: "#fdfdfd",
  },
  mainButton: {
    backgroundColor: "#ed145b",
    padding: 16,
    borderRadius: 10,
    marginTop: 35,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
