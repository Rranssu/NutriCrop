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
import styles from './styles/applyPesticide.styles';

interface ApplyPesticideProps {
  onCancel: () => void;
}

const ApplyPesticide: React.FC<ApplyPesticideProps> = ({ onCancel }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.card}>
          {/* Form Header - Matches the Records Detail style */}
          <View style={styles.cardHeader}>
            <View style={styles.iconBox}>
              <Ionicons name="leaf-outline" size={24} color="#4E7D42" />
            </View>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerTitle}>Apply Pesticide</Text>
              <Text style={styles.headerSub}>Configure the activity</Text>
            </View>
          </View>

          {/* Form Body */}
          <View style={styles.formBody}>
            
            {/* Date of Application */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Date of Application</Text>
              <TouchableOpacity style={styles.inputContainer} activeOpacity={0.7}>
                <Text style={styles.placeholderText}>DD/MM/YY</Text>
                <Ionicons name="arrow-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            {/* Pesticide Type */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Pesticide Type</Text>
              <TouchableOpacity style={styles.inputContainer} activeOpacity={0.7}>
                <Text style={styles.placeholderText}>Select Pesticide Type</Text>
                <Ionicons name="arrow-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            {/* Mix Pesticide */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Mix Pesticide</Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  placeholder="Search Pesticide To Mix" 
                  placeholderTextColor="#AAA" 
                  style={styles.inputText} 
                />
                <Ionicons name="add" size={24} color="#666" />
              </View>
            </View>

            {/* Amount */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Amount</Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  placeholder="e.g 1 Liters" 
                  placeholderTextColor="#AAA" 
                  style={styles.inputText} 
                  keyboardType="numeric"
                />
              </View>
            </View>

            {/* Action Buttons */}
            <TouchableOpacity style={styles.applyBtn} activeOpacity={0.8}>
              <Text style={styles.applyBtnText}>Apply Pesticide Now</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.cancelBtn} 
              onPress={onCancel}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplyPesticide;