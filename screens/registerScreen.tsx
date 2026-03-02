import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, ScrollView, 
  KeyboardAvoidingView, Platform, SafeAreaView, Modal, FlatList,
  ActivityIndicator, Alert 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/registerScreen.styles';

const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Terms & Conditions States
  const [termsModalVisible, setTermsModalVisible] = useState(false);
  const [acceptBoth, setAcceptBoth] = useState(false);

  // Form Field States
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [extensionName, setExtensionName] = useState(''); 
  const [contactNumber, setContactNumber] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [rsbsaNumber, setRsbsaNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Dropdown States
  const [gender, setGender] = useState('Select Gender');
  const [month, setMonth] = useState('Month');
  
  // UI States
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [monthModalVisible, setMonthModalVisible] = useState(false);

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // FIXED: Options now match backend Zod schema exactly
  const genders = ["Male", "Female", "Other"];

  const handleRegister = async () => {
    // 1. Validation Logic
    if (!acceptBoth) {
      Alert.alert("Notice", "Please read and accept the Terms & Conditions and Privacy Policy.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    if (!firstName || !lastName || !username || !rsbsaNumber || !password || gender === 'Select Gender' || month === 'Month' || !day || !year) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      // 2. Format Date of Birth for DB (YYYY-MM-DD)
      const monthIndex = months.indexOf(month) + 1;
      const formattedMonth = monthIndex < 10 ? `0${monthIndex}` : monthIndex;
      const formattedDay = day.padStart(2, '0');
      const birthDate = `${year}-${formattedMonth}-${formattedDay}`;

      // 3. Construct Payload - SYNCHRONIZED WITH BACKEND MIGRATION
      const payload = {
        firstname: firstName,
        middlename: middleName || '',
        lastname: lastName,
        ext: extensionName || '',      
        email: email.toLowerCase(),
        gender: gender.toLowerCase(),  // FIXED: Now lowercase (male/female/other)
        address: address,
        dob: birthDate,                
        contact_number: contactNumber,
        username: username.toLowerCase(),
        password: password,
        rsbsa_no: rsbsaNumber,         
      };

      // 4. API Call
      const response = await fetch('https://nutricropguide.com/api/auth/register/farmer', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Account created successfully!");
        navigation.navigate('Verification'); 
      } else {
        // FIXED: Handles Zod error array as shown in your screenshot
        const errorMessage = Array.isArray(data) ? data[0].message : data.message;
        Alert.alert("Registration Failed", errorMessage || "Invalid registration details.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Connection Error", "Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const SelectorModal = ({ visible, options, onSelect, onClose, title }: any) => (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}><Text style={styles.modalTitle}>{title}</Text></View>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.modalOption} onPress={() => { onSelect(item); onClose(); }}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );

  const renderStepOne = () => (
    <>
      <View style={styles.inputContainer}><TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} placeholderTextColor="#7B8D76" /></View>
      <View style={styles.inputContainer}><TextInput style={styles.input} placeholder="Middle Name" value={middleName} onChangeText={setMiddleName} placeholderTextColor="#7B8D76" /></View>
      <View style={styles.inputContainer}><TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} placeholderTextColor="#7B8D76" /></View>
      <View style={styles.inputContainer}><TextInput style={styles.input} placeholder="Extension Name (Optional)" value={extensionName} onChangeText={setExtensionName} placeholderTextColor="#7B8D76" /></View>
      <View style={styles.inputContainer}><TextInput style={styles.input} placeholder="Contact Number (11 digits)" value={contactNumber} onChangeText={setContactNumber} keyboardType="phone-pad" maxLength={11} placeholderTextColor="#7B8D76" /></View>
      
      <Text style={styles.label}>Date of Birth</Text>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.inputContainer, styles.dobMonth]} onPress={() => setMonthModalVisible(true)}>
          <Text style={{color: month === 'Month' ? '#7B8D76' : '#333'}}>{month}</Text>
          <Ionicons name="chevron-down" size={16} color="#4E7D42" />
        </TouchableOpacity>
        <View style={[styles.inputContainer, styles.dobDay]}><TextInput style={styles.input} placeholder="Day" value={day} onChangeText={setDay} keyboardType="numeric" maxLength={2} placeholderTextColor="#7B8D76" /></View>
        <View style={[styles.inputContainer, styles.dobYear]}><TextInput style={styles.input} placeholder="Year" value={year} onChangeText={setYear} keyboardType="numeric" maxLength={4} placeholderTextColor="#7B8D76" /></View>
      </View>

      <Text style={styles.label}>Gender</Text>
      <TouchableOpacity style={styles.inputContainer} onPress={() => setGenderModalVisible(true)}>
        <Text style={{color: gender === 'Select Gender' ? '#7B8D76' : '#333'}}>{gender}</Text>
        <Ionicons name="chevron-down" size={16} color="#4E7D42" />
      </TouchableOpacity>

      <View style={styles.inputContainer}><TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} placeholderTextColor="#7B8D76" /></View>
      
      <TouchableOpacity style={styles.primaryButton} onPress={() => setStep(2)}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </>
  );

  const renderStepTwo = () => (
    <>
      <View style={styles.inputContainer}><TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} autoCapitalize="none" placeholderTextColor="#7B8D76" /></View>
      <View style={styles.inputContainer}><TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#7B8D76" /></View>
      <View style={styles.inputContainer}><TextInput style={styles.input} placeholder="RSBSA Number" value={rsbsaNumber} onChangeText={setRsbsaNumber} keyboardType="numeric" placeholderTextColor="#7B8D76" /></View>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={!showPass} placeholderTextColor="#7B8D76" />
        <TouchableOpacity onPress={() => setShowPass(!showPass)}><Ionicons name={showPass ? "eye-off-outline" : "eye-outline"} size={20} color="#7B8D76" /></TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={!showConfirmPass} placeholderTextColor="#7B8D76" />
        <TouchableOpacity onPress={() => setShowConfirmPass(!showConfirmPass)}><Ionicons name={showConfirmPass ? "eye-off-outline" : "eye-outline"} size={20} color="#7B8D76" /></TouchableOpacity>
      </View>

      <Text style={styles.termsText}>
        By signing up, you agree to our <Text style={styles.linkText} onPress={() => setTermsModalVisible(true)}>Terms & Conditions</Text> and <Text style={styles.linkText} onPress={() => setTermsModalVisible(true)}>Privacy Policy</Text>
      </Text>

      <TouchableOpacity 
        style={[styles.secondaryButton, loading && { opacity: 0.7 }]} 
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Sign-up</Text>}
      </TouchableOpacity>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.backButton} onPress={() => step === 1 ? navigation.goBack() : setStep(1)}>
            <Ionicons name="chevron-back" size={24} color="#4E7D42" />
          </TouchableOpacity>
          
          <View style={styles.logoSection}>
            <Ionicons name="leaf-circle" size={80} color="#4E7D42" />
            <Text style={styles.title}>NutriCrop</Text>
            <Text style={styles.subtitle}>Create your account</Text>
          </View>

          {step === 1 ? renderStepOne() : renderStepTwo()}
        </ScrollView>
      </KeyboardAvoidingView>

      <SelectorModal visible={monthModalVisible} options={months} title="Select Month" onSelect={setMonth} onClose={() => setMonthModalVisible(false)} />
      <SelectorModal visible={genderModalVisible} options={genders} title="Select Gender" onSelect={setGender} onClose={() => setGenderModalVisible(false)} />

      {/* TERMS & CONDITIONS MODAL */}
      <Modal visible={termsModalVisible} transparent animationType="fade">
        <View style={styles.termsModalOverlay}>
          <View style={styles.termsModalContent}>
            <Text style={styles.termsSectionTitle}>Terms & Conditions</Text>
            <Text style={styles.termsSectionBody}>
              By using NutriCrop, you agree to comply with all platform rules. Users must provide accurate 
              registration details and maintain account confidentiality.
            </Text>

            <Text style={styles.termsSectionTitle}>Privacy Policy</Text>
            <Text style={styles.termsSectionBody}>
              NutriCrop collects user information strictly for authentication and service purposes. 
              We do not sell or distribute user data.
            </Text>

            <TouchableOpacity style={styles.modalCheckboxRow} onPress={() => setAcceptBoth(!acceptBoth)}>
              <Ionicons name={acceptBoth ? "checkbox" : "square-outline"} size={20} color="#4E7D42" />
              <Text style={styles.modalCheckboxLabel}>Accept both at once</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalAcceptBtn} onPress={() => setTermsModalVisible(false)}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalDeclineBtn} onPress={() => { setAcceptBoth(false); setTermsModalVisible(false); }}>
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RegisterScreen;