import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED', // Consistent light cream
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E7D42', // Darker green for title
    lineHeight: 32,
    marginBottom: 15,
  },
  description: {
    fontSize: 15,
    color: '#7C8472', // Muted brownish-green
    lineHeight: 22,
    textAlign: 'left',
    marginBottom: 40,
  },
  buttonGroup: {
    width: '100%',
    gap: 15, // Space between buttons
  },
  agreeButton: {
    backgroundColor: '#4E7D42',
    height: 55,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  agreeButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    height: 55,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 18,
    fontWeight: '500',
  },
});