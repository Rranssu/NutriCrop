import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/profile.styles';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Main Identity Card */}
        <View style={styles.mainCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Ionicons name="person-outline" size={40} color="#4E7D42" />
            </View>
            <View>
              <Text style={styles.name}>Juan dela Cruz</Text>
              <Text style={styles.farmerId}>Farmer ID: FRM-2024-001</Text>
              <Text style={styles.memberSince}>Member since Jan 2024</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color="#4E7D42" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Farm Location</Text>
              <Text style={styles.infoValue}>Barangay San Jose, Nueva Ecija</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="leaf-outline" size={20} color="#4E7D42" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Farm Area</Text>
              <Text style={styles.infoValue}>3.5 hectares</Text>
            </View>
          </View>
        </View>

        {/* Current Crops Section */}
        <Text style={styles.sectionTitle}>Current Crops Planted</Text>
        <CropItem 
          name="Rice" 
          area="2.0 ha" 
          variety="NSIC Rc222" 
          date="Jan 15, 2026" 
        />
        <CropItem 
          name="Corn" 
          area="1.5 ha" 
          variety="Pioneer 30G40" 
          date="Dec 20, 2025" 
        />

        {/* Historical Performance Section */}
        <Text style={[styles.sectionTitle, {marginTop: 10}]}>Historical Performance</Text>
        <PerformanceItem 
          icon="calendar-outline" 
          title="2025 Total Yield" 
          subtitle="Rice & Corn Combined" 
          stat="6,840 kg" 
        />
        <PerformanceItem 
          icon="trending-up-outline" 
          title="Average Yield/Ha" 
          subtitle="Last 3 seasons" 
          stat="1,950 kg/ha" 
        />

      </ScrollView>
    </SafeAreaView>
  );
};

// Helper Component for Crop Items
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
      <Text style={styles.detailsLabel}>Variety</Text>
      <Text style={styles.detailsValue}>{variety}</Text>
    </View>
    <View style={styles.detailsRow}>
      <Text style={styles.detailsLabel}>Planted</Text>
      <Text style={styles.detailsValue}>{date}</Text>
    </View>
  </View>
);

// Helper Component for Performance Items
const PerformanceItem = ({ icon, title, subtitle, stat }: any) => (
  <View style={styles.itemCard}>
    <View style={styles.cardTopRow}>
      <View style={styles.iconAndTitle}>
        <Ionicons name={icon} size={24} color="#4E7D42" />
        <View style={{marginLeft: 12}}>
          <Text style={styles.userName}>{title}</Text>
          <Text style={styles.infoLabel}>{subtitle}</Text>
        </View>
      </View>
      <Text style={styles.performanceMainStat}>{stat}</Text>
    </View>
  </View>
);

export default Profile;