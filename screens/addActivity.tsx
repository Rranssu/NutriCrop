import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/addActivity.styles';

interface AddActivityProps {
  onBack: () => void;
  onPesticidePress: () => void;
  onFertilizerPress: () => void;
  onHarvestPress: () => void;
}

const AddActivity: React.FC<AddActivityProps> = ({ 
  onBack,
  onPesticidePress, 
  onFertilizerPress,
  onHarvestPress 
}) => {

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#4E7D42" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ACTIVITY MENU</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Action Buttons */}
        <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPesticidePress}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="flask-outline" size={24} color="#4E7D42" />
          </View>
          <Text style={styles.cardText}>Apply Pesticide</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onFertilizerPress}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="tools" size={24} color="#4E7D42" />
          </View>
          <Text style={styles.cardText}>Apply Fertilizer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onHarvestPress}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="basket-outline" size={24} color="#4E7D42" />
          </View>
          <Text style={styles.cardText}>Harvest Crop</Text>
        </TouchableOpacity>

        {/* Recent Activity Section */}
        <Text style={styles.sectionLabel}>RECENT RICE ACTIVITY</Text>
        
        <TouchableOpacity style={styles.recentItem}>
          <View style={styles.recentInfo}>
            <View style={styles.recentIconBox}>
              <Ionicons name="leaf-outline" size={20} color="#4E7D42" />
            </View>
            <View>
              <Text style={styles.recentTitle}>Applied Fertilizer (Rice)</Text>
              <Text style={styles.recentDate}>Feb 10, 2024</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#CCC" />
        </TouchableOpacity>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle-outline" size={20} color="#666" />
          <Text style={styles.infoText}>
            Now viewing activities for Rice. To manage another crop, please go back to the monitoring list.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default AddActivity;