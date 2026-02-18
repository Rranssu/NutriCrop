import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 40,
  },
  // Filter Chips
  filterScroll: {
    marginBottom: 20,
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 10,
  },
  activeChip: {
    backgroundColor: '#4E7D42',
    borderColor: '#4E7D42',
  },
  chipText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeChipText: {
    color: '#FFFFFF',
  },
  // Actions
  markReadText: {
    fontSize: 14,
    color: '#4E7D42',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  // Notification Cards
  notifCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  unreadCard: {
    backgroundColor: '#F9F4E8', // Light beige tint for unread
  },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#E0E6D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  notifTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4E7D42',
  },
  notifBody: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  notifTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },
  // Preferences Section
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 25,
    marginBottom: 15,
  },
  prefCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EAD9', // Muted tan/beige
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  prefLabel: {
    flex: 1,
    fontSize: 14,
    color: '#444',
    marginLeft: 12,
  },
});

export default styles;