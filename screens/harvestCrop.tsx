import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/harvestCrop.styles';

interface HarvestCropProps {
  onCancel: () => void;
}

const HarvestCrop: React.FC<HarvestCropProps> = ({ onCancel }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.card}>
          {/* Form Header */}
          <View style={styles.cardHeader}>
            <View style={styles.iconBox}>
              <Ionicons name="leaf-outline" size={24} color="#4E7D42" />
            </View>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerTitle}>Harvest Crop</Text>
              <Text style={styles.headerSub}>Configure the crop</Text>
            </View>
          </View>

          {/* Form Body */}
          <View style={styles.formBody}>
            
            {/* Crop Selector */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Crop</Text>
              <TouchableOpacity style={styles.inputContainer} activeOpacity={0.7}>
                <Text style={styles.placeholderText}>Select Existing Crop</Text>
                <Ionicons name="arrow-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            {/* Expected Harvest Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Expected Harvest</Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  placeholder="DD/MM/YY or Wet season/Dry season" 
                  placeholderTextColor="#AAA" 
                  style={styles.inputText} 
                />
              </View>
            </View>

            {/* Date of Harvest Selector */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Date of Harvest</Text>
              <TouchableOpacity style={styles.inputContainer} activeOpacity={0.7}>
                <Text style={styles.placeholderText}>DD/MM/YY</Text>
                <Ionicons name="arrow-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            {/* Total Bags Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Total Bags Harvested</Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  placeholder="e.g 20 Bag" 
                  placeholderTextColor="#AAA" 
                  style={styles.inputText} 
                  keyboardType="numeric"
                />
              </View>
            </View>

            {/* Action Buttons */}
            <TouchableOpacity style={styles.harvestBtn} activeOpacity={0.8}>
              <Text style={styles.harvestBtnText}>Harvest Crop</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.cancelBtn} 
              activeOpacity={0.8}
              onPress={onCancel}
            >
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HarvestCrop;