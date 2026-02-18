import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/plantCrop.styles';

const PlantCrop = ({ onCancel }: { onCancel?: () => void }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.card}>
          {/* Green Card Header */}
          <View style={styles.cardHeader}>
            <Ionicons name="leaf-outline" size={30} color="white" />
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerTitle}>Plant Crop</Text>
              <Text style={styles.headerSub}>Configure crop details</Text>
            </View>
          </View>

          {/* Form Fields */}
          <View style={styles.formBody}>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Crop Name</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder="Enter Crop name" placeholderTextColor="#999" style={styles.inputText} />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Crop Type</Text>
              <TouchableOpacity style={styles.inputContainer}>
                <Text style={[styles.inputText, {color: '#999'}]}>Choose Crop Type</Text>
                <Ionicons name="chevron-down" size={20} color="#666" style={styles.dropdownIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity style={styles.inputContainer}>
                <Text style={[styles.inputText, {color: '#999'}]}>DD/MM/YY</Text>
                <Ionicons name="chevron-down" size={20} color="#666" style={styles.dropdownIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Area Size</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder="Enter Area Size (sq.m)" placeholderTextColor="#999" style={styles.inputText} keyboardType="numeric" />
              </View>
            </View>

            {/* Media (MoVs) Section */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Media of Verification (MoVs)</Text>
              <View style={styles.mediaBox}>
                <Ionicons name="images-outline" size={40} color="#999" />
                <Text style={styles.mediaText}>Upload photos or videos</Text>
                <TouchableOpacity style={styles.addMediaBtn}>
                  <Text style={styles.addMediaText}>+ Add Media</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Notes (Optional)</Text>
              <View style={[styles.inputContainer, styles.notesInput]}>
                <TextInput 
                  placeholder="Add any additional notes..." 
                  placeholderTextColor="#999" 
                  multiline 
                  style={styles.inputText} 
                />
              </View>
            </View>

            {/* Action Buttons */}
            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>Plant Crop</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default PlantCrop;