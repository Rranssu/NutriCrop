import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  Switch 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/notifications.styles';

const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // States for Preferences
  const [prefs, setPrefs] = useState({
    weather: true,
    crops: true,
    announcements: true,
    tasks: false,
  });

  const toggleSwitch = (key: keyof typeof prefs) => {
    setPrefs({ ...prefs, [key]: !prefs[key] });
  };

  const filters = ["All", "Weather", "Crops", "Announcements"];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {filters.map((f) => (
            <TouchableOpacity 
              key={f} 
              style={[styles.chip, activeFilter === f && styles.activeChip]}
              onPress={() => setActiveFilter(f)}
            >
              <Text style={[styles.chipText, activeFilter === f && styles.activeChipText]}>{f}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity>
          <Text style={styles.markReadText}>Mark all as read</Text>
        </TouchableOpacity>

        {/* Notifications List */}
        <NotificationItem 
          icon="rainy-outline" 
          title="Weather Alert"
          body="Heavy rainfall expected in 48 hours. Consider harvesting mature crops."
          time="2 hours ago"
          isUnread={true}
        />
        <NotificationItem 
          icon="alert-circle-outline" 
          title="Crop Alert"
          body="Soil moisture levels are low in Plot A-12. Consider irrigation."
          time="5 hours ago"
          isUnread={true}
        />
        <NotificationItem 
          icon="megaphone-outline" 
          title="New Subsidy Program"
          body="Agricultural department announced new fertilizer subsidy. Apply now!"
          time="1 day ago"
          isUnread={true}
        />
        <NotificationItem 
          icon="time-outline" 
          title="Task Reminder"
          body="Time to apply fertilizer to your rice crop (Plot A-12)."
          time="1 day ago"
          isUnread={false}
        />
        <NotificationItem 
          icon="checkmark-circle-outline" 
          title="Subsidy Approved"
          body="Your seed subsidy application has been approved. ₱5,000 credited."
          time="2 days ago"
          isUnread={false}
        />

        {/* Preferences Section */}
        <Text style={styles.sectionTitle}>Notification Preferences</Text>
        
        <PreferenceItem 
          icon="rainy-outline" 
          label="Weather Alerts" 
          value={prefs.weather} 
          onToggle={() => toggleSwitch('weather')} 
        />
        <PreferenceItem 
          icon="alert-circle-outline" 
          label="Crop Alerts" 
          value={prefs.crops} 
          onToggle={() => toggleSwitch('crops')} 
        />
        <PreferenceItem 
          icon="megaphone-outline" 
          label="Announcements" 
          value={prefs.announcements} 
          onToggle={() => toggleSwitch('announcements')} 
        />
        <PreferenceItem 
          icon="time-outline" 
          label="Task Reminders" 
          value={prefs.tasks} 
          onToggle={() => toggleSwitch('tasks')} 
        />

      </ScrollView>
    </SafeAreaView>
  );
};

// Sub-component: Notification Card
const NotificationItem = ({ icon, title, body, time, isUnread }: any) => (
  <TouchableOpacity style={[styles.notifCard, isUnread && styles.unreadCard]}>
    <View style={styles.iconCircle}>
      <Ionicons name={icon} size={22} color="#4E7D42" />
    </View>
    <View style={styles.textContainer}>
      <View style={styles.titleRow}>
        <Text style={styles.notifTitle}>{title}</Text>
        {isUnread && <View style={styles.unreadDot} />}
      </View>
      <Text style={styles.notifBody}>{body}</Text>
      <Text style={styles.notifTime}>{time}</Text>
    </View>
  </TouchableOpacity>
);

// Sub-component: Preference Toggle
const PreferenceItem = ({ icon, label, value, onToggle }: any) => (
  <View style={styles.prefCard}>
    <Ionicons name={icon} size={20} color="#4E7D42" />
    <Text style={styles.prefLabel}>{label}</Text>
    <Switch 
      value={value} 
      onValueChange={onToggle}
      trackColor={{ false: "#D1D1D1", true: "#4E7D42" }}
      thumbColor="#FFFFFF"
    />
  </View>
);

export default Notifications;