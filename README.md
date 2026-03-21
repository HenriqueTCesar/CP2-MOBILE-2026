# Projeto de Formulário React Native - Checkpoint 01 - Mobile Application Development

Este repositório contém o código-fonte de um aplicativo mobile desenvolvido em React Native. O projeto implementa um formulário de cadastro interativo que processa e exibe dados dinamicamente na interface do usuário.

## Funcionalidades e Arquitetura

O aplicativo foi estruturado para demonstrar o uso de componentes fundamentais e a manipulação de estados no ecossistema React.

### Principais Recursos:
* **Interface Responsiva**: Utiliza `SafeAreaView` para garantir a visualização correta em diferentes dispositivos e `ScrollView` para navegação fluida em telas menores.
* **Formulário Estruturado**: Coleta de dados via `TextInput` para campos de texto simples e áreas de texto multilinha para descrições.
* **Gerenciamento de Estado (Hooks)**: 
    * `useState`: Implementado para realizar o bind bidirecional dos dados de entrada (Nome, Curso, Disciplina e Descrição).
    * `useEffect`: Configurado para executar rotinas de log e monitoramento no ciclo de vida inicial do componente.
* **Componentização**: Divisão da lógica de interface entre o componente principal e componentes de renderização de dados.

## Tecnologias Utilizadas

* **React Native**: Framework principal para a construção da interface.
* **JavaScript**: Lógica de programação e manipulação de objetos.
* **StyleSheet**: Abstração de CSS para estilização nativa de componentes, focando em flexbox para alinhamento.

## Estrutura de Pastas

* `/assets`: Armazena recursos estáticos como logotipos e imagens.
* `/Components`: Contém componentes reutilizáveis, como o módulo de exibição de dados pós-envio.
* `App.js`: Ponto de entrada da aplicação e centralização da lógica de estados.

## Como Executar

1. Certifique-se de ter o ambiente **React Native** (ou Expo) configurado.
2. Clone este repositório.
3. Cd CP1-MOBILE-2026/
4. Cd FormularioCp1Mobile/
5. Execute `npm install` para baixar as dependências.
6. Utilize `npx expo start` ou `npx react-native run-android` para iniciar o projeto.

---
*Este projeto faz parte de uma avaliação técnica de desenvolvimento mobile.*
