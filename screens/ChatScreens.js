import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Animated, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function ChatScreens({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(-300))[0];

  const conversations = [
    { id: '1', title: 'Kıymalı Patates Oturtma Tarifi' },
    { id: '2', title: 'Zeytinyağlı Yaprak Sarma Tarifi' },
    { id: '3', title: 'Sebzeli Makarna Tarifi' },
  ];

  const suggestions = [
    "Bugün ne pişirsem?",
    "En iyi kahvaltı tarifleri?",
    "Sağlıklı atıştırmalıklar neler?",
    "Kolay akşam yemeği önerisi?",
    "Tatlı tarifleri önerir misin?",
    "Yemek hazırlarken dikkat edilmesi gerekenler nelerdir?"
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    Animated.timing(slideAnim, {
      toValue: menuOpen ? -300 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderConversationItem = ({ item }) => (
    <View style={styles.conversationItem}>
      <Text style={styles.conversationText}>{item.title}</Text>
      <View style={styles.conversationButtons}>
        <TouchableOpacity style={styles.editButton}>
          <FAIcon name="edit" size={18} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <FAIcon name="trash" size={18} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity style={styles.suggestionBubble}>
      <Text style={styles.suggestionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
        <Text style={styles.sidebarTitle}>Konuşmalar</Text>
        <FlatList
          data={conversations}
          renderItem={renderConversationItem}
          keyExtractor={item => item.id}
        />
        {menuOpen && (
          <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
            <Icon name="chevron-back-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        )}
      </Animated.View>

      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="menu" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
      </View>

     

      <View style={styles.chatContainer}>
        <View style={[styles.messageBubble, styles.rightBubble]}>
          <Text style={styles.messageText}>Kıymalı bir yemek önerir misin?</Text>
        </View>
        <View style={[styles.messageBubble, styles.leftBubble]}>
          <Text style={styles.messageText}>Tabii, size lezzetli ve pratik bir kıymalı yemek tarifi önerisinde bulunabilirim: "Kıymalı Patates Oturtma"</Text>
        </View>
      </View>

      <View style={styles.suggestionsContainer}>
        <FlatList
          data={suggestions}
          renderItem={renderSuggestionItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Chat'e bir şeyler yaz"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Page1')}>
            <Icon name="home-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon}  onPress={() => navigation.navigate('Life')}>
            <Icon name="flash-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Page2')}>
            <Icon name="grid-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerIcon, styles.selectedFooterIcon]} onPress={() => navigation.navigate('Chat')}>
            <Icon name="chatbubble-outline" size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Takvim')}>
            <Icon name="calendar-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  suggestionsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    top:-15,
    borderBottomColor: '#ddd',
  },
  suggestionBubble: {
    backgroundColor: '#000000',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  suggestionText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 20,
    top:-10,
    paddingBottom: 20,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: '80%',
  },
  leftBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
  },
  rightBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  messageText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
  },
  footerContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    position: 'relative',
    marginHorizontal: 10,
  },
  footerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2B2B2B',
  },
  selectedFooterIcon: {
    backgroundColor: '#E6E6E6',
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: '#F8F8F8',
    zIndex: 1000,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  conversationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  conversationText: {
    fontSize: 16,
    flex: 1,
    color: '#333',
    fontFamily: 'sans-serif-medium',
  },
  conversationButtons: {
    flexDirection: 'row',
  },
  editButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  deleteButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  closeButton: {
    position: 'absolute',
    right: -25,
    top: '50%',
    transform: [{ translateY: -15 }],
    width: 50,
    height: 50,
    backgroundColor: '#333',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
