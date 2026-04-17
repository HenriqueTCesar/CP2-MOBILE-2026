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

  // RECUPERAR: useEffect para buscar dados ao abrir o app (Requisito 4 e 5)
  useEffect(() => {
    const carregarDadosSalvos = async () => {
      try {
        const valor = await AsyncStorage.getItem("@dados_usuario");
        if (valor !== null) {
          const dadosObj = JSON.parse(valor); // Dica do prof: Usar JSON.parse

          // Dica do prof: Usar os setters para autopreencher
          setNome(dadosObj.nome);
          setCurso(dadosObj.curso);
          setTelefone(dadosObj.telefone);
          setCpf(dadosObj.cpf);

          console.log("Dados carregados com sucesso!");
        }
      } catch (error) {
        console.log("Erro ao carregar dados:", error);
      }
    };
    carregarDadosSalvos();
  }, []);

  // VALIDAR E SALVAR (Requisito 3 e 4)
  const salvarEAvancar = async () => {
    // 1. Validação de campos totalmente vazios
    if (!nome.trim() || !curso.trim() || !telefone.trim() || !cpf.trim()) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    // 2. Validação de CPF incompleto (O CPF com máscara tem 14 caracteres: 000.000.000-00)
    if (cpf.length < 14) {
      Alert.alert("CPF Inválido", "O CPF deve estar completo para salvar.");
      return;
    }

    // 3. Validação de Telefone incompleto (O Telefone com máscara tem 15 caracteres: (00) 00000-0000)
    if (telefone.length < 15) {
      Alert.alert(
        "Telefone Inválido",
        "O Telefone deve estar completo para salvar.",
      );
      return;
    }

    // Se passou por todos os IFs acima, agora ele salva e navega
    const usuario = { nome, curso, telefone, cpf };
    try {
      await AsyncStorage.setItem("@dados_usuario", JSON.stringify(usuario));
      navigation.navigate("Perfil", { user: usuario });
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar dados.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("./assets/fiaplogo.png")} style={styles.logo} />

      <Text style={styles.titulo}>Cadastro de Usuário</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome completo"
      />

      <Text style={styles.label}>Curso:</Text>
      <TextInput
        style={styles.input}
        value={curso}
        onChangeText={setCurso}
        placeholder="Seu curso"
      />

      <Text style={styles.label}>Telefone:</Text>
      <MaskedTextInput
        mask="(99) 99999-9999"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.label}>CPF:</Text>
      <MaskedTextInput
        mask="999.999.999-99"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={salvarEAvancar}>
        <Text style={styles.textoBotao}>SALVAR E CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  logo: {
    width: 150,
    height: 60,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ed145b",
    textAlign: "center",
    marginBottom: 20,
  },
  label: { fontWeight: "bold", marginTop: 10, color: "#333" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    backgroundColor: "#fafafa",
  },
  botao: {
    backgroundColor: "#ed145b",
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: "center",
  },
  textoBotao: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
