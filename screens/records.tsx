import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// IMPORTANT: No curly braces here!
import styles from './styles/records.styles'; 

// Added the prop interface to handle the transition
interface RecordsProps {
  onAddPress: () => void;
}

const Records: React.FC<RecordsProps> = ({ onAddPress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Crop Summary Card */}
        <View style={styles.cropCard}>
          <View style={styles.iconBox}>
             <Ionicons name="leaf-outline" size={35} color="#4E7D42" />
          </View>
          <View>
            <Text style={styles.cropTitle}>Rice</Text>
            <Text style={styles.cropSubtitle}>NSIC Rc222</Text>
            <Text style={styles.cropMeta}>Plot: A-12    •    2.0 ha</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Healthy</Text>
          </View>
        </View>

        {/* Primary Action Button - Linked to Add Activity */}
        <TouchableOpacity 
          style={styles.mainActionBtn} 
          activeOpacity={0.8}
          onPress={onAddPress}
        >
          <Text style={styles.mainActionBtnText}>Add Activity</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Activities</Text>

        {/* Timeline Activities */}
        <ActivityItem 
          icon="calendar-outline" 
          label="Crop Planted" 
          date="Jan 15, 2026" 
          days="23 days ago" 
        />
        <ActivityItem 
          icon="leaf-outline" 
          label="Apply Fertilizer" 
          date="Jan 26, 2026" 
          days="11 days ago" 
        />
        <ActivityItem 
          icon="leaf-outline" 
          label="Apply Pesticide" 
          date="Feb 2, 2026" 
          days="5 days ago" 
        />

      </ScrollView>

      {/* Floating Action Button (+) - Linked to Add Activity */}
      <TouchableOpacity 
        style={styles.fab} 
        activeOpacity={0.9}
        onPress={onAddPress}
      >
        <Ionicons name="add" size={35} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Helper Component for Activity Rows
const ActivityItem = ({ icon, label, date, days }: any) => (
  <TouchableOpacity style={styles.activityCard} activeOpacity={0.7}>
    <View style={styles.activityIconCircle}>
       <Ionicons name={icon} size={24} color="#4E7D42" />
    </View>
    <View style={styles.activityInfo}>
      <Text style={styles.activityLabel}>{label}</Text>
    </View>
    <View style={styles.dateContainer}>
      <Text style={styles.activityDate}>{date}</Text>
      <Text style={styles.daysAgo}>{days}</Text>
    </View>
  </TouchableOpacity>
);

export default Records;