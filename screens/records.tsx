import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  ActivityIndicator, 
  RefreshControl 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/records.styles';

const API_BASE_URL = 'https://nutricropguide.com/api';

interface RecordsProps {
  onCropPress: () => void;   
  onAddPress: () => void;    
}

const Records: React.FC<RecordsProps> = ({ onCropPress, onAddPress }) => {
  const [activeCrops, setActiveCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchCrops();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCrops();
    setRefreshing(false);
  };

  const fetchCrops = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await fetch(`${API_BASE_URL}/commodities`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok) {
        // Filter: only show crops where is_done is false (Active)
        const active = result.filter((item: any) => !item.is_done);
        setActiveCrops(active);
      }
    } catch (e) {
      console.error("Fetch Crops Error:", e);
    } finally {
      setLoading(false);
    }
  };

  // Helper to determine color and icon based on the DB 'crop_type'
  const getCropTheme = (type: string) => {
    switch (type) {
      case 'Cereal': // Usually Rice
        return { color: '#4E7D42', bg: '#EEF5ED', icon: 'leaf', status: 'HEALTHY' };
      case 'Fruit':
      case 'Vegetable':
        return { color: '#D68100', bg: '#FFF4E5', icon: 'nutrition', status: 'MONITOR' };
      default: // Default (Corn/Others)
        return { color: '#2D5A9C', bg: '#E8F1FF', icon: 'corn', status: 'ACTIVE', isMaterial: true };
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#4E7D42" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.content}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#4E7D42" />}
      >
        
        <Text style={styles.headerTitle}>Active Crops ({activeCrops.length})</Text>

        {activeCrops.length > 0 ? (
          activeCrops.map((item: any) => {
            const theme = getCropTheme(item.crop_type);
            // Since growth percentage isn't in migration, we use a placeholder or 100
            const growthProgress = 65; 

            return (
              <CropCard 
                key={item.id}
                name={item.name}
                variety={item.crop_type}
                status={theme.status}
                progress={growthProgress}
                planted={new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                area={`${item.land_area} ha`}
                icon={theme.icon}
                themeColor={theme.color}
                iconBg={theme.bg}
                statusBg={theme.bg}
                isMaterial={theme.isMaterial}
                onPress={onCropPress} 
              />
            );
          })
        ) : (
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Ionicons name="leaf-outline" size={60} color="#CCC" />
            <Text style={{ color: '#999', marginTop: 10 }}>No active crops found.</Text>
          </View>
        )}

      </ScrollView>

      {/* Floating Action Button - Navigates to PlantCrop */}
      <TouchableOpacity 
        style={styles.fab} 
        activeOpacity={0.9}
        onPress={onAddPress} 
      >
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const CropCard = ({ 
  name, variety, status, progress, planted, area, icon, themeColor, iconBg, statusBg, isMaterial, onPress 
}: any) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
    <View style={styles.cardTopRow}>
      <View style={[styles.iconBox, { backgroundColor: iconBg }]}>
        {isMaterial ? (
          <MaterialCommunityIcons name={icon as any} size={32} color={themeColor} />
        ) : (
          <Ionicons name={icon as any} size={32} color={themeColor} />
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.cropName}>{name}</Text>
        <Text style={styles.varietyText}>Type: {variety}</Text>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: statusBg }]}>
        <Text style={[styles.statusText, { color: themeColor }]}>{status}</Text>
      </View>
    </View>

    <View style={styles.progressSection}>
      <View style={styles.progressLabelRow}>
        <Text style={styles.progressLabel}>Growth Progress</Text>
        <Text style={styles.progressPercentage}>{progress}%</Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: themeColor }]} />
      </View>
    </View>

    <View style={styles.cardFooter}>
      <View style={styles.footerItem}>
        <Ionicons name="calendar-outline" size={16} color="#999" />
        <Text style={styles.footerText}>Added: {planted}</Text>
      </View>
      <View style={styles.footerItem}>
        <Ionicons name="resize-outline" size={16} color="#999" />
        <Text style={styles.footerText}>{area}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Records;