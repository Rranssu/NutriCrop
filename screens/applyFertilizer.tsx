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
import styles from './styles/applyFertilizer.styles';

interface ApplyFertilizerProps {
  onCancel: () => void;
}

const ApplyFertilizer: React.FC<ApplyFertilizerProps> = ({ onCancel }) => {
  const [source, setSource] = useState<'Subsidy' | 'Purchase'>('Subsidy');
  const [step, setStep] = useState('1');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.card}>
          {/* Header Card Style matches Image 4 */}
          <View style={styles.cardHeader}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons name="tools" size={24} color="#4E7D42" />
            </View>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerTitle}>Apply Fertilizer</Text>
              <Text style={styles.headerSub}>Configure the crop</Text>
            </View>
          </View>

          <View style={styles.formBody}>
            
            {/* Acquisition Source Toggle */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Acquisition Source</Text>
              <View style={styles.toggleRow}>
                <TouchableOpacity 
                  style={[styles.toggleButton, source === 'Subsidy' && styles.activeToggleButton]}
                  onPress={() => setSource('Subsidy')}
                >
                  {source === 'Subsidy' && <Ionicons name="checkmark-circle" size={18} color="white" style={{marginRight: 8}} />}
                  <Text style={[styles.toggleText, source === 'Subsidy' && styles.activeToggleText]}>Subsidy</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.toggleButton, source === 'Purchase' && styles.activeToggleButton]}
                  onPress={() => setSource('Purchase')}
                >
                  {source === 'Purchase' && <Ionicons name="checkmark-circle" size={18} color="white" style={{marginRight: 8}} />}
                  <Text style={[styles.toggleText, source === 'Purchase' && styles.activeToggleText]}>Purchase</Text>
                </TouchableOpacity>
              </View>

              {/* Conditional Amount Input */}
              <View style={[styles.inputContainer, source === 'Subsidy' && styles.disabledInput]}>
                <TextInput 
                  placeholder={source === 'Subsidy' ? "Amount (Disabled)" : "Enter Purchase Amount (₱)"}
                  placeholderTextColor="#AAA"
                  editable={source === 'Purchase'}
                  keyboardType="numeric"
                  style={styles.inputText}
                />
              </View>
            </View>

            {/* Application Step Selector */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Which application is this?</Text>
              <View style={styles.stepRow}>
                {['1', '2', '3', '4', '+'].map((item, index) => {
                  const labels = ['1st', '2nd', '3rd', '4th', 'Custom'];
                  const isActive = step === item;
                  return (
                    <TouchableOpacity 
                      key={item}
                      style={[styles.stepButton, isActive && styles.activeStepButton]}
                      onPress={() => setStep(item)}
                    >
                      <Text style={[styles.stepNum, isActive && styles.activeStepText]}>{item}</Text>
                      <Text style={[styles.stepSub, isActive && styles.activeStepText]}>{labels[index]}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Conditional Custom Step Input */}
            {step === '+' && (
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Specify Custom Application</Text>
                <View style={[styles.inputContainer, {borderColor: '#F39C12'}]}>
                  <TextInput 
                    placeholder="e.g. 5th Application, Ratoon, etc." 
                    placeholderTextColor="#AAA"
                    style={styles.inputText}
                  />
                </View>
              </View>
            )}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Type of Fertilizer</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder="Enter fertilizer type" placeholderTextColor="#AAA" style={styles.inputText} />
              </View>
            </View>

            <View style={styles.inputSplitRow}>
              <View style={[styles.inputGroup, styles.inputSplit]}>
                <Text style={styles.label}>Quantity (Bags)</Text>
                <View style={styles.inputContainer}>
                  <TextInput placeholder="0" placeholderTextColor="#AAA" keyboardType="numeric" style={styles.inputText} />
                </View>
              </View>
              <View style={[styles.inputGroup, styles.inputSplit]}>
                <Text style={styles.label}>Date Applied</Text>
                <View style={styles.inputContainer}>
                  <TextInput placeholder="YYYY-MM-DD" placeholderTextColor="#AAA" style={styles.inputText} />
                </View>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Method of Application</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder="Broadcasting, Basal, etc." placeholderTextColor="#AAA" style={styles.inputText} />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>PHOTOS OF APPLICATION</Text>
              <View style={styles.mediaBox}>
                <Ionicons name="camera-outline" size={32} color="#CCC" />
                <Text style={styles.mediaText}>Tap to capture or upload</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
              <Ionicons name="send" size={18} color="white" />
              <Text style={styles.submitBtnText}>Submit Record</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelBtn} onPress={onCancel} activeOpacity={0.8}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplyFertilizer;