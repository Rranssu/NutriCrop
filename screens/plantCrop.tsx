import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/plantCrop.styles';

interface PlantCropProps {
  onCancel: () => void;
}

const PlantCrop: React.FC<PlantCropProps> = ({ onCancel }) => {
  const [cropType, setCropType] = useState('Rice');
  const [source, setSource] = useState('Subsidies');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Types of Crops */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Types of Crops</Text>
          <div style={styles.toggleRow}>
            <TouchableOpacity 
              style={[styles.toggleButton, cropType === 'Rice' && styles.activeToggleButton]}
              onPress={() => setCropType('Rice')}
            >
              {cropType === 'Rice' && <Ionicons name="checkmark-circle" size={18} color="white" style={{marginRight: 8}} />}
              <Text style={[styles.toggleText, cropType === 'Rice' && styles.activeToggleText]}>Rice</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.toggleButton, cropType === 'Corn' && styles.activeToggleButton]}
              onPress={() => setCropType('Corn')}
            >
              {cropType === 'Corn' && <Ionicons name="checkmark-circle" size={18} color="white" style={{marginRight: 8}} />}
              <Text style={[styles.toggleText, cropType === 'Corn' && styles.activeToggleText]}>Corn</Text>
            </TouchableOpacity>
          </div>
        </View>

        {/* Acquisition Source */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Acquisition Source</Text>
          <div style={styles.toggleRow}>
            <TouchableOpacity 
              style={[styles.toggleButton, source === 'Subsidies' && styles.activeToggleButton]}
              onPress={() => setSource('Subsidies')}
            >
              {source === 'Subsidies' && <Ionicons name="checkmark-circle" size={18} color="white" style={{marginRight: 8}} />}
              <Text style={[styles.toggleText, source === 'Subsidies' && styles.activeToggleText]}>Subsidies</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.toggleButton, source === 'Own Purchased' && styles.activeToggleButton]}
              onPress={() => setSource('Own Purchased')}
            >
              {source === 'Own Purchased' && <Ionicons name="checkmark-circle" size={18} color="white" style={{marginRight: 8}} />}
              <Text style={[styles.toggleText, source === 'Own Purchased' && styles.activeToggleText]}>Own Purchased</Text>
            </TouchableOpacity>
          </div>
        </View>

        {/* Amount Field (Conditional based on Source) */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Amount</Text>
          <View style={[styles.inputContainer, source === 'Subsidies' && styles.disabledInput]}>
            <TextInput 
              placeholder={source === 'Subsidies' ? "Amount (Disabled)" : "Type the Amount"} 
              placeholderTextColor="#AAA" 
              editable={source === 'Own Purchased'}
              keyboardType="numeric"
              style={styles.inputText} 
            />
          </View>
        </View>

        {/* Variety Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Variety</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Input the variety" placeholderTextColor="#AAA" style={styles.inputText} />
          </View>
        </View>

        {/* Plot Label Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Plot Label</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Select label (e.g. A-12)" placeholderTextColor="#AAA" style={styles.inputText} />
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
          <Text style={styles.submitBtnText}>Plant Crop Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelBtn} onPress={onCancel} activeOpacity={0.8}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default PlantCrop;