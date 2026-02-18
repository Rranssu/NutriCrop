import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/history.styles';

const History = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ["All", "Applying Fertilizer", "Planting Crops", "Pesticide", "Harvest Crops", "Subsidy"];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Filters Section */}
        <View style={styles.filterWrapper}>
          <View style={styles.chipList}>
            {filters.map((item) => (
              <TouchableOpacity 
                key={item} 
                style={[styles.chip, activeFilter === item && styles.activeChip]}
                onPress={() => setActiveFilter(item)}
              >
                <Text style={[styles.chipText, activeFilter === item && styles.activeChipText]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* History Cards */}
        <HistoryItem 
          title="Subsidy"
          date="December 21, 2025"
          category="Financial Aid"
          details="Received: Fertilizer Discount Voucher (₱3,000)."
          footer="Received"
          icon="cash-outline"
          iconColor="#2ECC71"
          isPrimaryFooter={true}
        />

        <HistoryItem 
          title="Applying Fertilizer"
          date="March 15, 2025"
          category="Rice"
          details="First application of Urea."
          footer="Bags: 3 bags"
          icon="leaf-outline"
          iconColor="#3498DB"
        />

        <HistoryItem 
          title="Planting Crops"
          date="February 15, 2025"
          category="Rice"
          details="Initial planting for the dry season."
          footer="Area: 2 Hectare"
          icon="book-outline"
          iconColor="#27AE60"
        />

        <HistoryItem 
          title="Pesticide"
          date="April 10, 2025"
          category="Rice"
          details="Sprayed organic pesticide for stem borers."
          footer="Volume: 5 Liters"
          icon="flask-outline"
          iconColor="#F1C40F"
        />

        <HistoryItem 
          title="Harvest Crops"
          date="May 20, 2025"
          category="Rice"
          details="Final harvest for the dry season cycle."
          footer="Yield: 120 Sacks"
          icon="Analytics"
          isMaterial={true}
          iconColor="#8BC34A"
        />

      </ScrollView>
    </SafeAreaView>
  );
};

// Helper Component for History Card
const HistoryItem = ({ title, date, category, details, footer, icon, iconColor, isPrimaryFooter, isMaterial }: any) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={[styles.iconBox, { backgroundColor: iconColor + '20' }]}>
        {isMaterial ? (
          <MaterialCommunityIcons name={icon as any} size={22} color={iconColor} />
        ) : (
          <Ionicons name={icon as any} size={22} color={iconColor} />
        )}
      </View>
      <View style={styles.headerText}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDate}>{date}</Text>
      </View>
      <View style={styles.categoryBadge}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    </View>

    <View style={styles.detailBox}>
      <Text style={styles.detailText}>{details}</Text>
    </View>

    <View style={[styles.footerPill, isPrimaryFooter && styles.footerPillActive]}>
      <Text style={[styles.footerPillText, isPrimaryFooter && styles.footerPillTextActive]}>
        {footer}
      </Text>
    </View>
  </View>
);

export default History;