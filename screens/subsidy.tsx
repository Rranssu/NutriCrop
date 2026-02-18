import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/subsidy.styles';

const SubsidyTracker = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Summary Row */}
        <View style={styles.summaryRow}>
          {/* Total Aid Card */}
          <View style={styles.aidCard}>
            <Text style={[styles.summaryLabel, { color: '#B0C4AD' }]}>Total Aid Received (2025)</Text>
            <Text style={styles.aidValue}>₱ 12,500.00</Text>
          </View>

          {/* Status Card */}
          <View style={styles.statusCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <Ionicons name="information-circle-outline" size={16} color="#F39C12" />
              <Text style={[styles.summaryLabel, { color: '#99A3A4', marginBottom: 0, marginLeft: 4 }]}>Requirements Status</Text>
            </View>
            <Text style={styles.statusValue}>RSBSA Registered</Text>
            <View style={styles.verifiedRow}>
              <Ionicons name="checkmark" size={14} color="#4E7D42" />
              <Text style={styles.verifiedText}>Verified Profile</Text>
            </View>
          </View>
        </View>

        {/* History Card Section */}
        <View style={styles.historyCard}>
          <Text style={styles.historyTitle}>Application History (Scroll sideways)</Text>
          
          <View style={styles.tableHeader}>
            <Text style={styles.columnLabel}>Subsidy Name</Text>
            <Text style={styles.columnLabel}>Amount/Value</Text>
          </View>

          <SubsidyItem 
            name="Fertilizer Discount Voucher" 
            program="RCEF SUBSIDY" 
            value="₱3,000" 
          />

          <SubsidyItem 
            name="Hybrid Seed Support" 
            program="NATIONAL RICE PROGRAM" 
            value="2 Bags (Binhi)" 
          />

          {/* Add more items as needed */}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// Helper Component for List Items
const SubsidyItem = ({ name, program, value }: any) => (
  <View style={styles.listItem}>
    <View style={{ flex: 1 }}>
      <Text style={styles.subsidyName}>{name}</Text>
      <Text style={styles.programLabel}>{program}</Text>
    </View>
    <View>
      <Text style={styles.amountValue}>{value}</Text>
    </View>
  </View>
);

export default SubsidyTracker;