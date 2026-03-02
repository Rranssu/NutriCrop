import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image // Added to show the preview
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'; // Added
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/plantCrop.styles';

interface PlantCropProps {
  onCancel: () => void;
  onSuccess?: () => void; 
}

const API_URL = 'https://nutricropguide.com/api/commodities';

const PlantCrop: React.FC<PlantCropProps> = ({ onCancel, onSuccess }) => {
  const [cropCategory, setCropCategory] = useState('Rice'); 
  const [source, setSource] = useState('Subsidies');
  const [amount, setAmount] = useState('');
  const [variety, setVariety] = useState('');
  const [plotLabel, setPlotLabel] = useState('');
  const [loading, setLoading] = useState(false);
  
  // 1. Functional Placeholder state for the image
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 2. Logic to pick an image from the gallery
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need camera roll permissions to upload MoVs.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handlePlantNow = async () => {
    if (!variety.trim() || !plotLabel.trim()) {
      Alert.alert("Required Fields", "Please enter the variety and plot label.");
      return;
    }

    setLoading(true);

    try {
      const token = await AsyncStorage.getItem('userToken');
      const userJson = await AsyncStorage.getItem('userData');
      
      if (!userJson) {
        Alert.alert("Error", "User session not found. Please log in again.");
        return;
      }

      const userData = JSON.parse(userJson);

      // Current Payload (Image is not included yet as per your request)
      const payload = {
        user_id: Number(userData.id),
        name: `${cropCategory} (${variety.trim()})`,
        crop_type: "Cereal", 
        land_area: plotLabel.trim(),
        is_done: false 
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", `${cropCategory} has been recorded successfully.`);
        if (onSuccess) onSuccess(); 
        onCancel();
      } else {
        const errorMessage = Array.isArray(data) ? data[0].message : data.message;
        Alert.alert("Error", errorMessage || "Failed to save record.");
      }
    } catch (error) {
      console.error("Planting Error:", error);
      Alert.alert("Connection Error", "Server is unreachable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Types of Crops</Text>
            <View style={styles.toggleRow}>
              <TouchableOpacity 
                style={[styles.toggleButton, cropCategory === 'Rice' && styles.activeToggleButton]}
                onPress={() => setCropCategory('Rice')}
                disabled={loading}
              >
                {cropCategory === 'Rice' && <Ionicons name="checkmark-circle" size={18} color="white" style={{marginRight: 8}} />}
                <Text style={[styles.toggleText, cropCategory === 'Rice' && styles.activeToggleText]}>Rice</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.toggleButton, cropCategory === 'Corn' && styles.activeToggleButton]}
                onPress={() => setCropCategory('Corn')}
                disabled={loading}
              >
                {cropCategory === 'Corn' && <Ionicons name="checkmark-circle" size={18} color="white" style={{marginRight: 8}} />}
                <Text style={[styles.toggleText, cropCategory === 'Corn' && styles.activeToggleText]}>Corn</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Acquisition Source</Text>
            <View style={styles.toggleRow}>
              <TouchableOpacity 
                style={[styles.toggleButton, source === 'Subsidies' && styles.activeToggleButton]}
                onPress={() => setSource('Subsidies')}
                disabled={loading}
              >
                {source === 'Subsidies' && <Ionicons name="checkmark-circle" size={18} color="white" style={{marginRight: 8}} />}
                <Text style={[styles.toggleText, source === 'Subsidies' && styles.activeToggleText]}>Subsidies</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.toggleButton, source === 'Own Purchased' && styles.activeToggleButton]}
                onPress={() => setSource('Own Purchased')}
                disabled={loading}
              >
                {source === 'Own Purchased' && <Ionicons name="checkmark-circle" size={18} color="white" style={{marginRight: 8}} />}
                <Text style={[styles.toggleText, source === 'Own Purchased' && styles.activeToggleText]}>Own Purchased</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Amount</Text>
            <View style={[styles.inputContainer, source === 'Subsidies' && styles.disabledInput]}>
              <TextInput 
                placeholder={source === 'Subsidies' ? "Amount (Disabled)" : "Type the Amount"} 
                placeholderTextColor="#AAA" 
                value={amount}
                onChangeText={setAmount}
                editable={source === 'Own Purchased' && !loading}
                keyboardType="numeric"
                style={styles.inputText} 
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Variety</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="e.g. NSIC Rc222" 
                placeholderTextColor="#AAA" 
                value={variety}
                onChangeText={setVariety}
                editable={!loading}
                style={styles.inputText} 
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Plot Label / Size</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholder="e.g. Plot A-12" 
                placeholderTextColor="#AAA" 
                value={plotLabel}
                onChangeText={setPlotLabel}
                editable={!loading}
                style={styles.inputText} 
              />
            </View>
          </View>

          {/* 3. FUNCTIONAL MOV PLACEHOLDER */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Media of Verification (MoVs)</Text>
            <TouchableOpacity 
              style={styles.mediaBox} 
              onPress={pickImage}
              activeOpacity={0.7}
            >
              {selectedImage ? (
                <View style={{ width: '100%', height: '100%' }}>
                  <Image 
                    source={{ uri: selectedImage }} 
                    style={{ width: '100%', height: '100%', borderRadius: 10 }} 
                    resizeMode="cover" 
                  />
                  <View style={{ position: 'absolute', top: 5, right: 5, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 15, padding: 4 }}>
                    <Ionicons name="camera" size={16} color="white" />
                  </View>
                </View>
              ) : (
                <>
                  <Ionicons name="images-outline" size={40} color="#CCC" />
                  <Text style={{color: '#AAA', marginTop: 10, fontSize: 12}}>Upload photos or videos</Text>
                  <View style={{ backgroundColor: '#F0F0F0', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#555' }}>+ Add Media</Text>
                  </View>
                </>
              )}
            </TouchableOpacity>
            {selectedImage && (
              <TouchableOpacity onPress={() => setSelectedImage(null)} style={{ marginTop: 8 }}>
                <Text style={{ color: '#E74C3C', textAlign: 'center', fontSize: 12, fontWeight: 'bold' }}>Remove Media</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity 
            style={[styles.submitBtn, loading && { opacity: 0.7 }]} 
            onPress={handlePlantNow}
            disabled={loading}
          >
            {loading ? <ActivityIndicator color="white" /> : <Text style={styles.submitBtnText}>Plant Crop Now</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelBtn} onPress={onCancel} disabled={loading}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PlantCrop;