import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Page1Screens({ navigation }) {
  const meals = [
    { id: '1', image: require('../../Beslenme/assets/kahvaltı.jpg'), text: 'KAHVALTI', route: 'Diet', list: ['+ 2 adet yumurta', '+ 1 kibrit kutusu kadar peynir', '+ 1 dilim tam buğday ekmeği'] },
    { id: '2', image: require('../../Beslenme/assets/öğle.jpg'), text: 'ÖĞLE YEMEĞİ', route: 'Food', list: ['+ 1 porsiyon tavuk', '+ 1 kase çorba', '+ 1 dilim tam buğday ekmeği'] },
    { id: '3', image: require('../../Beslenme/assets/aksam.jpg'), text: 'AKŞAM YEMEĞİ', route: 'Life', list: ['+ 1 porsiyon balık', '+ 1 tabak sebze yemeği', '+ 1 kase yoğurt'] },
    { id: '4', image: require('../../Beslenme/assets/doğum.jpg'), text: 'ARA ÖĞÜN', route: 'Life', list: ['+ 1 porsiyon balık', '+ 1 tabak sebze yemeği', '+ 1 kase yoğurt'] },
    { id: '5', image: require('../../Beslenme/assets/atıştırma.jpg'), text: 'ATIŞTIRMALIK', route: 'Chat', list: ['+ Yulaflı Bisküvi','+ Portakal',''] },
  ];

  const recipes = [
    { 
      id: '1', 
      image: require('../../Beslenme/assets/çorba.jpg'), 
      text: 'Mercimek Çorbası', 
      route: 'Life', 
      list: ['Mercimek, soğan, havuç, patates ve su ile yapılan, limonla servis edilen klasik çorba.'] 
    },
    { 
      id: '2', 
      image: require('../../Beslenme/assets/balık.jpg'), 
      text: 'Izgara Balık', 
      route: 'Chat', 
      list: ['Taze balık, zeytinyağı ve baharatlarla marine edilip ızgarada pişirilir.'] 
    },
    { 
      id: '3', 
      image: require('../../Beslenme/assets/tavuk.jpg'), 
      text: 'Tavuk Haşlama', 
      route: 'Chat', 
      list: ['Tavuk, sebzeler ve baharatlarla kaynatılarak yapılan hafif bir yemek.'] 
    },
  ];

  const renderMealItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(item.route)}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.textOverlay}>
        <Text style={styles.cardText}>{item.text}</Text>
        {item.list.map((listItem, index) => (
          <Text key={index} style={styles.listText}>{listItem}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Page3')}>
      <View style={styles.logoContainer}  >
        <Image source={require('../../Beslenme/assets/image_converted.png')} style={styles.logoImage} />
      </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('Profile')}>
      <View style={styles.memet}>
      <View style={styles.iconContainer}>
        <Icon name="notifications-outline" size={24} color="#000" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Merhaba! Mehmet</Text>
        <Text style={styles.welcomeText}>Hoşgeldin</Text>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.profileInitials}>MC</Text>
      </View>
      </View>
      </TouchableOpacity>
      <View style={styles.moti}>
        <Image source={require('../../Beslenme/assets/mevsim.jpg')} style={styles.motiImage} />
        <View style={styles.motiTextContainer}>
          <Text style={styles.motiText}>Diyet, sadece bedenini değil, yaşam tarzını da dönüştürmektir.</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Beslenme Planım</Text>
        <View style={styles.flatListWrapper}>
          <FlatList
            data={meals}
            renderItem={renderMealItem}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Tariflerim</Text>
        <View style={styles.flatListWrapper}>
          <FlatList
            data={recipes}
            renderItem={renderMealItem}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TouchableOpacity style={[styles.footerIcon, styles.selectedFooterIcon]}>
            <Icon name="home-outline" size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon}  onPress={() => navigation.navigate('Life')}>
            <Icon name="flash-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Page2')}>
            <Icon name="grid-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Chat')}>
            <Icon name="chatbubble-outline" size={24} color="#FFFFFF" />
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
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    top:-10,
    backgroundColor: '#FFFFFF',
  },
  logoImage: {
    width: 400,
    height: 50,
    resizeMode: 'contain',
  },
  sectionContainer: {
    marginVertical: -2,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  flatListWrapper: {
    paddingVertical: 5,
    position: 'relative',
  },
  line: {
    height: 2,
    backgroundColor: '#b3ff00',
    position: 'absolute',
    top: '50%',
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: '#FFFFF',
    borderRadius: 10,
    marginRight: 10,
    elevation: 3,
    width: 180,
    height: 110,
    borderColor: '#b3ff00',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  cardText: {
    color: '#FFFFFF', 
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  listText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  footerContainer: {
    position: 'relative',
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
  moti: {
    width: 370,
    height: 95,
    backgroundColor: '#b3ff00',
    left: 20,
    bottom:13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  motiImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  motiTextContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    paddingVertical: 10,
    alignItems: 'center',
  },
  motiText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 20,
  },
  textContainer: {
    marginLeft: 50,
    
  },
  greetingText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  welcomeText: {
    color: '#808080',
  },
  profileContainer: {
    marginLeft: 'auto',
    backgroundColor: '#9DC944',
    borderRadius: 20,
    padding: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  memet: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 5,
    width:350,
    top:-20,
    height:45,
    right:-30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
