import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Modal, 
  ScrollView, 
  TouchableWithoutFeedback,
  Animated,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/sidebar.styles';

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
  onNavigate: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeItem, onNavigate }) => {
  const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.5, // Dim level
          duration: 300,
          useNativeDriver: true,
        })
      ]).start();
    }
  }, [isOpen]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -DRAWER_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      })
    ]).start(() => {
      onClose();
    });
  };

  const menuItems = [
    { name: 'Dashboard', icon: 'leaf-outline' },
    { name: 'Announcements', icon: 'notifications-outline' },
    { name: 'History', icon: 'time-outline' },
    { name: 'Forum', icon: 'chatbox-outline' },
    { name: 'Messages', icon: 'mail-outline' },
    { name: 'Profile', icon: 'person-outline' },
    { name: 'Crop Monitoring', icon: 'map-outline' },
    { name: 'Subsidy Records', icon: 'gift-outline' },
    { name: 'Settings', icon: 'settings-outline' },
  ];

  return (
    <Modal
      transparent={true}
      visible={isOpen}
      onRequestClose={handleClose}
      animationType="none" // Controlled by our manual Animated values
    >
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <Animated.View style={[styles.overlay, { opacity: opacityAnim }]} />
        </TouchableWithoutFeedback>

        <Animated.View 
          style={[
            styles.drawer, 
            { transform: [{ translateX: slideAnim }] }
          ]}
        >
          <View style={styles.header}>
            <View style={styles.profileRow}>
              <View style={styles.profileCircle}>
                <Ionicons name="person" size={35} color="white" />
              </View>
              <View>
                <Text style={styles.userName}>Juan dela Cruz</Text>
                <Text style={styles.userRole}>Farmer</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Ionicons name="close" size={28} color="white" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.menuList} showsVerticalScrollIndicator={false}>
            {menuItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <TouchableOpacity
                  key={item.name}
                  style={[styles.menuItem, isActive && styles.activeMenuItem]}
                  onPress={() => {
                    onNavigate(item.name);
                    handleClose();
                  }}
                >
                  <Ionicons 
                    name={item.icon as any} 
                    size={22} 
                    color={isActive ? '#4E7D42' : '#666'} 
                  />
                  <Text style={[styles.menuText, isActive && styles.activeMenuText]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.footerText}>NutriCrop v1.0.0</Text>
            <Text style={styles.footerText}>© 2026 Agriculture Platform</Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Sidebar;