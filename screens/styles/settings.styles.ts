import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9', // Slightly cooler grey-blue background
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  sectionContainer: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748B',
    marginBottom: 10,
    letterSpacing: 0.5,
    paddingLeft: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginHorizontal: 15,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F0FDF4', // Very light green tint
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#334155',
  },
  itemValue: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  rightIcon: {
    marginLeft: 10,
  },
  // Logout Button
  logoutButton: {
    backgroundColor: '#FEF2F2', // Light pinkish-red
    flexDirection: 'row',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  logoutText: {
    color: '#DC2626', // Deep red
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default styles;