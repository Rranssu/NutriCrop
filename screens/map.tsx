import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/map.styles';

const FarmMap = () => {
  const [mapType, setMapType] = useState('Satellite');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Toggle Controls */}
        <View style={styles.toggleRow}>
          <TouchableOpacity 
            style={[styles.toggleBtn, mapType === 'Satellite' && styles.activeToggle]}
            onPress={() => setMapType('Satellite')}
          >
            <Ionicons name="layers-outline" size={18} color={mapType === 'Satellite' ? 'white' : '#666'} />
            <Text style={[styles.toggleText, mapType === 'Satellite' && styles.activeToggleText]}>Satellite</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.toggleBtn, mapType === 'Terrain' && styles.activeToggle]}
            onPress={() => setMapType('Terrain')}
          >
            <Ionicons name="location-outline" size={18} color={mapType === 'Terrain' ? 'white' : '#666'} />
            <Text style={[styles.toggleText, mapType === 'Terrain' && styles.activeToggleText]}>Terrain</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.expandBtn}>
            <Ionicons name="expand-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Interactive Map Visual */}
        <View style={styles.mapContainer}>
          {/* Plot A-12 (Rice) */}
          <View style={[styles.plotBox, { top: 30, left: 30, borderColor: '#4E7D42' }]}>
            <View style={[styles.plotStatusDot, { backgroundColor: '#4E7D42' }]} />
            <Text style={styles.plotName}>Plot A-12</Text>
            <Text style={styles.plotCrop}>Rice</Text>
            <Text style={styles.plotArea}>2.0 ha</Text>
          </View>

          {/* Plot B-05 (Corn) */}
          <View style={[styles.plotBox, { top: 40, right: 30, borderColor: '#8B5E3C', backgroundColor: '#F9F3E8' }]}>
            <View style={[styles.plotStatusDot, { backgroundColor: '#8B5E3C' }]} />
            <Text style={styles.plotName}>Plot B-05</Text>
            <Text style={styles.plotCrop}>Corn</Text>
            <Text style={styles.plotArea}>1.5 ha</Text>
          </View>

          {/* Sensor S1 */}
          <View style={[styles.sensorIconContainer, { bottom: 60, left: 80 }]}>
            <MaterialCommunityIcons name="wifi-strength-4" size={24} color="white" />
            <Text style={styles.sensorText}>Sensor S1</Text>
          </View>

          {/* Sensor S2 */}
          <View style={[styles.sensorIconContainer, { bottom: 80, right: 60 }]}>
            <MaterialCommunityIcons name="wifi-strength-4" size={24} color="white" />
            <Text style={styles.sensorText}>Sensor S2</Text>
          </View>
        </View>

        {/* Stats Summary */}
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>Total Area: 3.5 hectares</Text>
          <Text style={styles.statsText}>2 Active Plots</Text>
        </View>

        {/* Map Legend Card */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Map Legend</Text>
          
          <LegendItem color="#4E7D42" label="Rice Plot" />
          <LegendItem color="#D2B48C" label="Corn Plot" />
          <LegendItem icon="radio-outline" label="Active Sensor" isIcon color="#FF4D4D" />
          <LegendItem icon="location" label="Farm Center" isIcon color="#4E7D42" />
        </View>

        {/* Sensor Status Card */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Sensor Status</Text>
          
          <StatusRow label="Sensor S1 – Plot A-12" status="Active" />
          <StatusRow label="Sensor S2 – Plot B-05" status="Active" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// Helper Components
const LegendItem = ({ color, label, icon, isIcon }: any) => (
  <View style={styles.legendItem}>
    {isIcon ? (
      <Ionicons name={icon} size={20} color={color} style={{ marginRight: 10 }} />
    ) : (
      <View style={[styles.legendBox, { backgroundColor: color, borderColor: color }]} />
    )}
    <Text style={styles.legendLabel}>{label}</Text>
  </View>
);

const StatusRow = ({ label, status }: any) => (
  <View style={styles.statusRow}>
    <Text style={styles.statusLabel}>{label}</Text>
    <View style={styles.activeBadge}>
      <Text style={styles.activeBadgeText}>{status}</Text>
    </View>
  </View>
);

export default FarmMap;