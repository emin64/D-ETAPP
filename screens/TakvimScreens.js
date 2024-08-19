import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TakvimScreens({ navigation }) {
  const [selectedDay, setSelectedDay] = useState('08');
  const [selectedTab, setSelectedTab] = useState('Benim');

  const meals = [
    { id: '1', image: require('../../Beslenme/assets/kahvaltı.jpg'), text: 'KAHVALTI', route: 'Diet', list: ['2 adet yumurta', '1 kibrit kutusu kadar peynir', '1 dilim tam buğday ekmeği'] },
    { id: '2', image: require('../../Beslenme/assets/öğle.jpg'), text: 'ÖĞLE YEMEĞİ', route: 'Food', list: ['1 porsiyon tavuk', '1 kase çorba', '1 dilim tam buğday ekmeği'] },
    { id: '3', image: require('../../Beslenme/assets/aksam.jpg'), text: 'AKŞAM YEMEĞİ', route: 'Life', list: ['1 porsiyon balık', '1 tabak sebze yemeği', '1 kase yoğurt'] },
    { id: '4', image: require('../../Beslenme/assets/doğum.jpg'), text: 'ARA ÖĞÜN', route: 'Life', list: ['1 porsiyon balık', '1 tabak sebze yemeği', '1 kase yoğurt'] },
    { id: '5', image: require('../../Beslenme/assets/atıştırma.jpg'), text: 'ATIŞTIRMALIK', route: 'Chat', list: ['Yulaflı Bisküvi','Portakal',''] },
  
  ];

  const days = [
    { day: 'PZT', date: '05' },
    { day: 'SAL', date: '06' },
    { day: 'ÇAR', date: '07' },
    { day: 'PER', date: '08' },
    { day: 'CUM', date: '09' },
    { day: 'CMT', date: '10' },
    { day: 'PAZ', date: '11' },
    { day: 'PZT', date: '12' },
    { day: 'SAL', date: '13' },
    { day: 'ÇAR', date: '14' },
    { day: 'PER', date: '15' },
    { day: 'CUM', date: '16' },
    { day: 'CMT', date: '17' },
    { day: 'PAZ', date: '18' },
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
      <View style={styles.logoContainer}>
        <Image source={require('../../Beslenme/assets/image_converted.png')} style={styles.logoImage} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Takvim</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Benim' && styles.selectedTab]}
            onPress={() => setSelectedTab('Benim')}
          >
            <Text style={[styles.tabText, selectedTab === 'Benim' && styles.selectedTabText]}>Beslenme Planım</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Tümü' && styles.selectedTab]}
            onPress={() => setSelectedTab('Tümü')}
          >
            <Text style={[styles.tabText, selectedTab === 'Tümü' && styles.selectedTabText]}>Tariflerim</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dateContainer}>
        <TouchableOpacity>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>08 AĞUSTOS 2024</Text>
        <TouchableOpacity>
          <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.daysContainer}>
        {days.map((day) => (
          <TouchableOpacity
            key={day.date}
            style={[styles.dayBox, selectedDay === day.date && styles.selectedDayBox]}
            onPress={() => setSelectedDay(day.date)}
          >
            <Text style={[styles.dayText, selectedDay === day.date && styles.selectedDayText]}>{day.day}</Text>
            <Text style={[styles.dateText, selectedDay === day.date && styles.selectedDateText]}>{day.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Yatay kaydırılabilir kartlar */}
      <View style={styles.flatListWrapper}>
        <FlatList
          data={meals}
          renderItem={renderMealItem}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      
      {/* İstatistikler ve Malzemeleri Kontrol Et Butonu */}
      <View style={styles.statsContainer}>
  <View style={styles.statsContent}>
    <View style={styles.progressContainer}>
      <View style={styles.progressCircle}>
        <View style={[styles.progressFill, { transform: [{ rotate: '122.4deg' }] }]} />
        <Text style={styles.progressText}>34%</Text>
      </View>
    </View>
    <TouchableOpacity
      style={styles.checkButton}
      onPress={() => navigation.navigate('MalzemeKontrol')}
    >
      <Text style={styles.checkButtonText}>Malzemeleri Kontrol Et</Text>
    </TouchableOpacity>
  </View>
</View>
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerIcon}  onPress={() => navigation.navigate('Page1')}>
            <Icon name="home-outline" size={24} color="#FFFFFF" />
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
          <TouchableOpacity style={[styles.footerIcon, styles.selectedFooterIcon]} onPress={() => navigation.navigate('Takvim')}>
            <Icon name="calendar-outline" size={24} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15, // Küçültme
        paddingHorizontal: 15, // Küçültme
        backgroundColor: '#FFF',
      },
      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -18, // Küçültme
      },
      header: {
        fontSize: 18, // Küçültme
        fontWeight: 'bold',
      },
      tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#F0F0F0',
        borderRadius: 20, // Küçültme
      },
      tab: {
        paddingVertical: 7.5, // Küçültme
        paddingHorizontal: 12, // Küçültme
        borderRadius: 20, // Küçültme
      },
      selectedTab: {
        backgroundColor: '#C4F200',
      },
      tabText: {
        fontSize: 12, // Küçültme
        fontWeight: 'bold',
        color: '#000',
      },
      selectedTabText: {
        color: '#FFF',
      },
      dateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15, // Küçültme
      },
      arrow: {
        fontSize: 18, // Küçültme
        color: '#C4F200',
      },
      dateText: {
        fontSize: 15, // Küçültme
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 15, // Küçültme
      },
      daysContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 240, // Küçültme
      },
      dayBox: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7.5, // Küçültme
        paddingHorizontal: 7.5, // Küçültme
        borderRadius: 7.5, // Küçültme
        backgroundColor: '#F0F0F0',
        marginHorizontal: 2.25, // Küçültme
      },
      selectedDayBox: {
        backgroundColor: '#C4F200',
      },
      dayText: {
        fontSize: 10.5, // Küçültme
        fontWeight: 'bold',
        color: '#333',
      },
      selectedDayText: {
        color: '#FFF',
      },
      dateText: {
        fontSize: 10.5, // Küçültme
        fontWeight: 'bold',
        marginTop: 3.75, // Küçültme
        color: '#333',
      },
      selectedDateText: {
        color: '#FFF',
      },
      logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
      },
      logoImage: {
        width: 400,
        height: 50,
        resizeMode: 'contain',
      },
      flatListWrapper: {
        paddingVertical: 3.75, // Küçültme
        bottom: 210, // Küçültme
      },
      contentContainer: {
        paddingHorizontal: 3.75, // Küçültme
      },
      card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20, // Küçültme
        marginRight: 7.5, // Küçültme
        elevation: 3,
        width: 225, // Büyütme
        height: 155, // Büyütme
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
        borderRadius: 20, // Küçültme
        resizeMode: 'cover',
      },
      textOverlay: {
        position: 'absolute',
        bottom: 0,
        height: 87.5, // Büyütme
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 3.75, // Küçültme
        paddingHorizontal: 7.5, // Küçültme
      },
      cardText: {
        color: '#FFFFFF',
        fontSize: 12, // Küçültme
        fontWeight: 'bold',
        marginBottom: 0.75, // Küçültme
      },
      listText: {
        color: '#FFFFFF',
        fontSize: 10, // Küçültme
      },
      statsContainer: {
        marginTop: -153.75, // Küçültme
        padding: 11.25, // Küçültme
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 11.25, // Küçültme
        elevation: 3,
        borderColor: '#b3ff00',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        bottom: 15, // Küçültme
      },
      statsContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Boşluğu aralarında eşit olarak dağıtıyoruz
      },
      progressContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30, // Küçültme
      },
      progressCircle: {
        width: 45, // Küçültme
        height: 45, // Küçültme
        borderRadius: 37.5, // Küçültme
        borderWidth: 5, // Küçültme
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      progressFill: {
        width: '100%',
        height: '100%',
        borderRadius: 37.5, // Küçültme
        borderWidth: 6, // Küçültme
        borderColor: '#C4F200',
        position: 'absolute',
        top: 0,
        left: 0,
        borderTopColor: '#C4F200',
        borderRightColor: '#C4F200',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: [{ rotate: '34deg' }],
      },
      progressText: {
        fontSize: 10.5, // Küçültme
        fontWeight: 'bold',
        color: '#C4F200',
      },
      checkButton: {
        backgroundColor: '#C4F200',
        paddingVertical: 4.5, // Küçültme
        paddingHorizontal: 12, // Küçültme
        borderRadius: 18.75, // Küçültme
        alignItems: 'center',
        justifyContent: 'center', // Butonu ortalıyoruz
      },
      checkButtonText: {
        fontSize: 12, // Küçültme
        fontWeight: 'bold',
        color: '#FFF',
      },
  footerContainer: {
    position: 'relative',
    marginBottom: 10,
    width:410,
    right:20,
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
});
