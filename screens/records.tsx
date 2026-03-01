import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/records.styles';

// Updated Interface with two specific navigation props
interface RecordsProps {
  onCropPress: () => void;   // Navigate to AddActivity (Menu)
  onAddPress: () => void;    // Navigate to PlantCrop (Form)
}

const Records: React.FC<RecordsProps> = ({ onCropPress, onAddPress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        <Text style={styles.headerTitle}>Active Crops</Text>

        {/* Rice Card - Tapping this goes to Activity Menu */}
        <CropCard 
          name="Rice"
          variety="NSIC Rc222"
          status="HEALTHY"
          progress={65}
          planted="Oct 12"
          area="2.5 Hectares"
          icon="leaf"
          themeColor="#4E7D42"
          iconBg="#EEF5ED"
          statusBg="#E6F4EA"
          onPress={onCropPress} 
        />

        {/* Corn Card - Tapping this goes to Activity Menu */}
        <CropCard 
          name="Corn"
          variety="Pioneer 30T60"
          status="WARNING"
          progress={30}
          planted="Nov 05"
          area="1.2 Hectares"
          icon="corn"
          isMaterial={true}
          themeColor="#D68100"
          iconBg="#FFF4E5"
          statusBg="#FFF4E5"
          onPress={onCropPress}
        />

      </ScrollView>

      {/* Floating Action Button - Tapping this goes to Plant New Crop Form */}
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

// Updated Sub-component to accept the onPress prop
const CropCard = ({ 
  name, variety, status, progress, planted, area, icon, themeColor, iconBg, statusBg, isMaterial, onPress 
}: any) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
    {/* Top Row: Icon, Title, Status */}
    <View style={styles.cardTopRow}>
      <View style={[styles.iconBox, { backgroundColor: iconBg }]}>
        {isMaterial ? (
          <MaterialCommunityIcons name={icon} size={32} color={themeColor} />
        ) : (
          <Ionicons name={icon} size={32} color={themeColor} />
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.cropName}>{name}</Text>
        <Text style={styles.varietyText}>Variety: {variety}</Text>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: statusBg }]}>
        <Text style={[styles.statusText, { color: themeColor }]}>{status}</Text>
      </View>
    </View>

    {/* Middle Row: Growth Progress */}
    <View style={styles.progressSection}>
      <View style={styles.progressLabelRow}>
        <Text style={styles.progressLabel}>Growth Progress</Text>
        <Text style={styles.progressPercentage}>{progress}%</Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: themeColor }]} />
      </View>
    </View>

    {/* Bottom Row: Metadata */}
    <View style={styles.cardFooter}>
      <View style={styles.footerItem}>
        <Ionicons name="calendar-outline" size={16} color="#999" />
        <Text style={styles.footerText}>Planted: {planted}</Text>
      </View>
      <View style={styles.footerItem}>
        <Ionicons name="resize-outline" size={16} color="#999" />
        <Text style={styles.footerText}>{area}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Records;