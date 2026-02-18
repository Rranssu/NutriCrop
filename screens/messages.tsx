import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/messages.styles';

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search messages..." 
            placeholderTextColor="#999" 
            style={styles.searchInput}
          />
        </View>

        {/* Message Thread List */}
        <MessageItem 
          initials="AM" 
          name="Agriculturist Maria" 
          role="Agriculturist" 
          message="Your soil test results are ready. Let's discuss..." 
          time="10:30 AM" 
          isOnline={true}
          unreadCount={2}
        />

        <MessageItem 
          initials="AO" 
          name="Admin Office" 
          role="Admin" 
          message="Your subsidy application has been approved..." 
          time="Yesterday" 
          isHighlighted={true} // Special background color
        />

        <MessageItem 
          initials="PS" 
          name="Pedro Santos" 
          role="Farmer" 
          message="Thanks for the fertilizer advice!" 
          time="2 days ago" 
        />

      </ScrollView>
    </SafeAreaView>
  );
};

// Helper Component for Message Items
const MessageItem = ({ 
  initials, name, role, message, time, isOnline, isHighlighted, unreadCount 
}: any) => (
  <TouchableOpacity 
    style={[styles.messageCard, isHighlighted && styles.highlightedCard]} 
    activeOpacity={0.7}
  >
    {/* Avatar */}
    <View style={styles.avatarContainer}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      {isOnline && <View style={styles.onlineDot} />}
    </View>

    {/* Message Content */}
    <View style={styles.textSection}>
      <View style={styles.nameRow}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.timestamp}>{time}</Text>
      </View>
      <Text style={styles.userRole}>{role}</Text>
      <Text style={styles.messageSnippet} numberOfLines={1}>
        {message}
      </Text>
    </View>

    {/* Unread Badge */}
    {unreadCount > 0 && (
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{unreadCount}</Text>
      </View>
    )}
  </TouchableOpacity>
);

export default Messages;