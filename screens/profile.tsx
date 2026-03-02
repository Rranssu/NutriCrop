import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/profile.styles';

const API_BASE_URL = 'https://nutricropguide.com/api';

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [activeCrops, setActiveCrops] = useState([]);
  const [historyStats, setHistoryStats] = useState({ totalLand: '0', count: '0' });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setLoading(true);
    await fetchProfileAndCrops();
    setLoading(false);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProfileAndCrops();
    setRefreshing(false);
  };

  const fetchProfileAndCrops = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const storedUser = await AsyncStorage.getItem('userData');
      
      if (storedUser) {
        setUserData(JSON.parse(storedUser));
      }

      // 1. CHANGED URL: Based on your migration, the endpoint is likely /commodities
      const response = await fetch(`${API_BASE_URL}/commodities`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      // 2. SAFETY CHECK: If server sends HTML (404/500), don't try to parse as JSON
      const contentType = response.headers.get("content-type");
      if (!response.ok || !contentType || !contentType.includes("application/json")) {
        const errorText = await response.text();
        console.error("Backend Error or Wrong URL. Server sent:", errorText);
        return;
      }

      const result = await response.json();

      if (response.ok) {
        // 3. FILTERING: Based on migration field 'is_done'
        // is_done = false means the crop is still in the field
        const active = result.filter((c: any) => c.is_done === false || c.is_done === 0);
        setActiveCrops(active);

        // 4. CALCULATION: Summing up the land_area strings
        const totalLand = result.reduce((acc: number, curr: any) => {
            const area = parseFloat(curr.land_area) || 0;
            return acc + area;
        }, 0);

        setHistoryStats({
          totalLand: totalLand.toFixed(1),
          count: result.length.toString()
        });
      }
    } catch (e) {
      console.error("Profile Fetch Error:", e);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#4E7D42" />
      </View>
    );
  }

  const fullName = userData 
    ? `${userData.firstname} ${userData.lastname}`
    : "Farmer Profile";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.content}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#4E7D42" />}
      >
        
        {/* Main Identity Card */}
        <View style={styles.mainCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Ionicons name="person-outline" size={40} color="#4E7D42" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name} numberOfLines={1}>{fullName}</Text>
              <Text style={styles.farmerId}>RSBSA: {userData?.rsbsa_no || 'N/A'}</Text>
              <Text style={styles.memberSince}>
                Member since {userData?.created_at ? new Date(userData.created_at).getFullYear() : '2024'}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color="#4E7D42" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Home Address</Text>
              <Text style={styles.infoValue}>{userData?.address || 'Not specified'}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="leaf-outline" size={20} color="#4E7D42" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Username</Text>
              <Text style={styles.infoValue}>@{userData?.username || 'user'}</Text>
            </View>
          </View>
        </View>

        {/* Current Crops Section - Maps to your 'commodities' table */}
        <Text style={styles.sectionTitle}>Active Commodities ({activeCrops.length})</Text>
        
        {activeCrops.length > 0 ? (
          activeCrops.map((item: any) => (
            <CropItem 
              key={item.id}
              name={item.name}               // From Migration: 'name'
              area={`${item.land_area} ha`}  // From Migration: 'land_area'
              variety={item.crop_type}       // From Migration: 'crop_type' ENUM
              date={new Date(item.created_at).toLocaleDateString()} 
            />
          ))
        ) : (
          <Text style={{ textAlign: 'center', color: '#999', marginVertical: 20 }}>No active crops recorded.</Text>
        )}

        {/* Historical Performance */}
        <Text style={[styles.sectionTitle, {marginTop: 10}]}>Farm Statistics</Text>
        <PerformanceItem 
          icon="globe-outline" 
          title="Total Land Managed" 
          subtitle="Sum of all plots recorded" 
          stat={`${historyStats.totalLand} ha`} 
        />
        <PerformanceItem 
          icon="stats-chart-outline" 
          title="Total Crops Planted" 
          subtitle="Lifetime record count" 
          stat={historyStats.count} 
        />

      </ScrollView>
    </SafeAreaView>
  );
};

const CropItem = ({ name, area, variety, date }: any) => (
  <View style={styles.itemCard}>
    <View style={styles.cardTopRow}>
      <View style={styles.iconAndTitle}>
        <Ionicons name="leaf-outline" size={20} color="#4E7D42" />
        <Text style={styles.cardTitle}>{name}</Text>
      </View>
      <Text style={styles.cardValueMain}>{area}</Text>
    </View>
    <View style={styles.detailsRow}>
      <Text style={styles.detailsLabel}>Category</Text>
      <Text style={styles.detailsValue}>{variety}</Text>
    </View>
    <View style={styles.detailsRow}>
      <Text style={styles.detailsLabel}>Date Added</Text>
      <Text style={styles.detailsValue}>{date}</Text>
    </View>
  </View>
);

const PerformanceItem = ({ icon, title, subtitle, stat }: any) => (
  <View style={styles.itemCard}>
    <View style={styles.cardTopRow}>
      <View style={styles.iconAndTitle}>
        <Ionicons name={icon} size={24} color="#4E7D42" />
        <View style={{marginLeft: 12}}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#333' }}>{title}</Text>
          <Text style={{ fontSize: 12, color: '#999' }}>{subtitle}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#4E7D42' }}>{stat}</Text>
    </View>
  </View>
);

export default Profile;