import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function MalzemeScreens() {
  const [selectedTab, setSelectedTab] = useState('Var');
  const [malzemeler, setMalzemeler] = useState([
    { id: '1', name: '2 adet yumurta', status: 'Var' },
    { id: '2', name: '1 kibrit kutusu kadar peynir', status: 'Yok' },
    { id: '3', name: '1 dilim tam buğday ekmeği', status: 'Var' },
    { id: '4', name: '1 porsiyon tavuk', status: 'Yok' },
    { id: '5', name: '1 kase çorba', status: 'Var' },
    { id: '6', name: '1 dilim tam buğday ekmeği', status: 'Yok' },
    { id: '7', name: '1 porsiyon balık', status: 'Var' },
  ]);

  const toggleStatus = (id) => {
    setMalzemeler((prevMalzemeler) =>
      prevMalzemeler.map((item) =>
        item.id === id ? { ...item, status: item.status === 'Var' ? 'Yok' : 'Var' } : item
      )
    );
  };

  const renderMalzemeItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <TouchableOpacity
        style={[styles.statusButton, item.status === 'Var' && styles.varButton]}
        onPress={() => toggleStatus(item.id)}
      >
        <Text style={styles.statusButtonText}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Var' && styles.selectedTab]}
          onPress={() => setSelectedTab('Var')}
        >
          <Text style={[styles.tabText, selectedTab === 'Var' && styles.selectedTabText]}>Var</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Yok' && styles.selectedTab]}
          onPress={() => setSelectedTab('Yok')}
        >
          <Text style={[styles.tabText, selectedTab === 'Yok' && styles.selectedTabText]}>Yok</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={malzemeler.filter(item => item.status === selectedTab)}
        renderItem={renderMalzemeItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 25,
  },
  selectedTab: {
    backgroundColor: '#C4F200',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  selectedTabText: {
    color: '#FFF',
  },
  list: {
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  statusButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
  },
  varButton: {
    backgroundColor: '#C4F200',
  },
  statusButtonText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
