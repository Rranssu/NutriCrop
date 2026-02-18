import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  // Sidebar Overlay
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000', // Just the color, opacity is animated in TSX
    zIndex: 100,
  },
  drawer: {
    width: width * 0.8,
    height: '100%',
    backgroundColor: '#FFFFFF',
    zIndex: 101,
    // FIX: Apply radius to the parent container
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    // FIX: This clips the sharp white corners of the container
    overflow: 'hidden', 
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  // Header Section
  header: {
    backgroundColor: '#4E7D42',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 20 : 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Matches the drawer radius
    borderTopRightRadius: 30, 
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userRole: {
    color: '#E0E0E0',
    fontSize: 13,
  },
  closeButton: {
    padding: 5,
  },
  // Menu List
  menuList: {
    paddingTop: 20,
    paddingHorizontal: 15,
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 5,
  },
  activeMenuItem: {
    backgroundColor: '#FFF9E6', 
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#444',
    fontWeight: '500',
  },
  activeMenuText: {
    color: '#4E7D42',
    fontWeight: 'bold',
  },
  // Footer
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});

export default styles;