import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  Keyboard 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

// IMPORT FIX: No curly braces around styles
import styles from './styles/verificationScreen.styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Verification'>;

const VerificationScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next box if text is entered
    if (text.length !== 0 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Move to previous box on backspace
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleConfirm = () => {
    Keyboard.dismiss();
    // Navigate to the next step (Permission screen)
    navigation.navigate('Permission');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoCircle}>
        <Ionicons name="leaf-outline" size={50} color="white" />
      </View>

      <Text style={styles.title}>Verify Account</Text>
      
      <Text style={styles.instructionText}>
        We sent 6 digits code to <Text style={styles.emailText}>test@gmail.com</Text>. Please enter it below
      </Text>

      {/* OTP Input Fields */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <View key={index} style={styles.otpBox}>
            <TextInput
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              value={digit}
            />
          </View>
        ))}
      </View>

      {/* Resend Timer */}
      <TouchableOpacity style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn't receive code? <Text style={styles.resendBold}>Resend (0:55)</Text>
        </Text>
      </TouchableOpacity>

      {/* Confirm Button */}
      <TouchableOpacity 
        style={styles.confirmButton}
        onPress={handleConfirm}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerificationScreen;