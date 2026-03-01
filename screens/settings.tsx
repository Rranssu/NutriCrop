import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  Switch 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/settings.styles';

const Settings = () => {
  const navigation = useNavigation<any>();
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* PERSONAL INFORMATION */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>PERSONAL INFORMATION</Text>
          <View style={styles.card}>
            <SettingItem 
              icon="person-outline" 
              label="Full Name" 
              value="Juan dela Cruz" 
              rightElement={<Ionicons name="lock-closed-outline" size={18} color="#CBD5E1" />}
            />
            <View style={styles.divider} />
            <SettingItem 
              icon="document-text-outline" 
              label="RSBSA Number" 
              value="12-3456789-0" 
              rightElement={<Ionicons name="lock-closed-outline" size={18} color="#CBD5E1" />}
            />
          </View>
        </View>

        {/* FARM DETAILS */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>FARM DETAILS</Text>
          <View style={styles.card}>
            <SettingItem 
              icon="leaf-outline" 
              label="Primary Crop" 
              value="Rice (Humay)" 
              rightElement={<Ionicons name="lock-closed-outline" size={18} color="#CBD5E1" />}
            />
            <View style={styles.divider} />
            <SettingItem 
              icon="globe-outline" 
              label="Farm Size" 
              value="2 Hectares" 
              rightElement={<Ionicons name="lock-closed-outline" size={18} color="#CBD5E1" />}
            />
          </View>
        </View>

        {/* APP SETTINGS */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>APP SETTINGS</Text>
          <View style={styles.card}>
            <SettingItem 
              icon="language-outline" 
              label="Language" 
              value="English" 
              onPress={() => {}}
              rightElement={<Ionicons name="chevron-forward" size={18} color="#CBD5E1" />}
            />
            <View style={styles.divider} />
            <SettingItem 
              icon="notifications-outline" 
              label="Notifications" 
              rightElement={
                <Switch 
                  value={notifications} 
                  onValueChange={setNotifications}
                  trackColor={{ false: "#CBD5E1", true: "#4E7D42" }}
                  thumbColor="#FFFFFF"
                />
              }
            />
          </View>
        </View>

        {/* HELP & SECURITY */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>HELP & SECURITY</Text>
          <View style={styles.card}>
            <SettingItem 
              icon="shield-checkmark-outline" 
              label="Privacy Policy" 
              onPress={() => {}}
              rightElement={<Ionicons name="chevron-forward" size={18} color="#CBD5E1" />}
            />
            <View style={styles.divider} />
            <SettingItem 
              icon="help-circle-outline" 
              label="Agri Support Helpdesk" 
              onPress={() => {}}
              rightElement={<Ionicons name="chevron-forward" size={18} color="#CBD5E1" />}
            />
          </View>
        </View>

        {/* LOGOUT BUTTON */}
        <TouchableOpacity 
          style={styles.logoutButton} 
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Login')}
        >
          <Ionicons name="log-out-outline" size={22} color="#DC2626" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

// Helper Component for setting rows
const SettingItem = ({ icon, label, value, rightElement, onPress }: any) => {
  const Container: any = onPress ? TouchableOpacity : View;
  
  return (
    <Container style={styles.item} onPress={onPress} activeOpacity={0.6}>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={20} color="#4E7D42" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemLabel}>{label}</Text>
        {value && <Text style={styles.itemValue}>{value}</Text>}
      </View>
      {rightElement}
    </Container>
  );
};

export default Settings;