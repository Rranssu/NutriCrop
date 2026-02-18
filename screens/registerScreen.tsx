import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

// IMPORT FIX: No curly braces around styles
import styles from './styles/registerScreen.styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [rememberMe, setRememberMe] = useState(false);

  // Helper component for Dropdown-style inputs
  const DropdownInput = ({ placeholder }: { placeholder: string }) => (
    <TouchableOpacity style={styles.inputContainer} activeOpacity={0.7}>
      <Text style={[styles.input, { textAlignVertical: 'center', paddingTop: 12 }]}>
        {placeholder}
      </Text>
      <Ionicons name="chevron-up" size={20} color="#4E7D42" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.logoSection}>
            <View style={styles.logoCircle}>
              <Ionicons name="leaf-outline" size={40} color="white" />
            </View>
            <Text style={styles.title}>NutriCrop</Text>
            <Text style={styles.subtitle}>Agriculture Monitoring Platform</Text>
          </View>

          {/* Form Fields */}
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#7B8D76" />
          </View>
          
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Middle Name" placeholderTextColor="#7B8D76" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#7B8D76" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Extension Name(Optional)" placeholderTextColor="#7B8D76" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="RSBSA Number" placeholderTextColor="#7B8D76" keyboardType="numeric" />
          </View>

          <DropdownInput placeholder="Date of Birth" />

          {/* New Age Field */}
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Age" 
              placeholderTextColor="#7B8D76" 
              keyboardType="numeric" 
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Contact Number" placeholderTextColor="#7B8D76" keyboardType="phone-pad" />
          </View>

          <DropdownInput placeholder="Address" />
          <DropdownInput placeholder="Gender" />

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#7B8D76" keyboardType="email-address" autoCapitalize="none" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#7B8D76" secureTextEntry />
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#7B8D76" secureTextEntry />
          </View>

          {/* Remember Me */}
          <TouchableOpacity 
            style={styles.checkboxRow} 
            onPress={() => setRememberMe(!rememberMe)}
          >
            <Text style={styles.rememberMeText}>Remember Me</Text>
            <Ionicons 
              name={rememberMe ? "checkbox" : "square-outline"} 
              size={20} 
              color={rememberMe ? "#4E7D42" : "#7B8D76"} 
            />
          </TouchableOpacity>

          {/* Action Button - Navigates to Verification */}
          <TouchableOpacity 
            style={styles.registerButton}
            onPress={() => navigation.navigate('Verification')}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>

          {/* Footer - Navigates back to Login */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerText}>
              Already have an account? <Text style={styles.loginLink}>Log-in</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;