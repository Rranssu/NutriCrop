import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/dashboard.styles';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* NEW 2-Column Status Grid */}
        <View style={styles.statusGrid}>
          
          <StatCard icon="location-outline" label="Total Farms" value="2" color="#4E7D42" />
          
          <StatCard icon="checkmark-done-circle-outline" label="Total Plots" value="2" color="#2D5A9C" />
          
          <StatCard icon="water-outline" label="Avg Soil Health" value="75" unit=" %" color="#006D77" />
          
          {/* Special Card for Nutrient Status */}
          <View style={styles.statCard}>
            <View style={styles.statHeader}>
              <View style={styles.iconContainer}><Ionicons name="stats-chart-outline" size={16} color="#7B8D76" /></View>
              <Text style={styles.statLabel}>Nutrient Status</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                <View style={[styles.nutrientBadge, {backgroundColor: '#E6F4EA'}]}>
                    <Text style={[styles.nutrientText, {color: '#1E7E34'}]}>4 Optimal</Text>
                </View>
                <View style={[styles.nutrientBadge, {backgroundColor: '#FFF4E5'}]}>
                    <Text style={[styles.nutrientText, {color: '#D68100'}]}>5 Warning</Text>
                </View>
            </View>
          </View>

          <StatCard icon="thermometer-outline" label="Temperature" value="28" unit=" °C" color="#E67E22" percentage="+2%" />
          
          <StatCard icon="water-outline" label="Soil Moisture" value="45" unit=" %" color="#2980B9" percentage="-5%" isNegative />
          
          <StatCard icon="help-circle-outline" label="Humidity" value="68" unit=" %" color="#16A085" percentage="+3%" />
          
          <StatCard icon="leaf-outline" label="Yield" value="3500" unit=" kg" color="#27AE60" percentage="+8%" />

        </View>

        {/* Existing Sensor Readings Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Sensor Readings (Today)</Text>
            <Ionicons name="trending-up-outline" size={20} color="#4E7D42" />
          </View>
          <View style={styles.chartPlaceholder}>
             <Text style={{color: '#999'}}>Line Chart Visualization</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

// Helper Component for Grid Cards
const StatCard = ({ icon, label, value, unit, color, percentage, isNegative }: any) => (
  <View style={styles.statCard}>
    <View style={styles.statHeader}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={18} color={color} />
      </View>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
    
    <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={[styles.statMainValue, {color: color}]}>{value}</Text>
        {unit && <Text style={styles.statUnit}>{unit}</Text>}
    </View>

    {percentage && (
      <View style={[styles.percentBadge, {backgroundColor: isNegative ? '#FCEAEA' : '#E6F4EA'}]}>
        <Text style={[styles.percentText, {color: isNegative ? '#C0392B' : '#1E7E34'}]}>
            {percentage}
        </Text>
      </View>
    )}
  </View>
);

export default Dashboard;