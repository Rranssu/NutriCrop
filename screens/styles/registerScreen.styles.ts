import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED', // Light cream
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingBottom: 40,
    paddingTop: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4E7D42',
  },
  subtitle: {
    fontSize: 14,
    color: '#7B8D76',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#DEE6D7',
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 50,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  // DOB & Grid Layouts
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: '#7B8D76',
    marginBottom: 5,
    marginLeft: 5,
    alignSelf: 'flex-start',
  },
  dobMonth: {
    width: '42%',
  },
  dobDay: {
    width: '26%',
  },
  dobYear: {
    width: '26%',
  },
  // Feedback & T&C
  errorText: {
    color: '#E74C3C',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 10,
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  linkText: {
    color: '#4E7D42',
    fontWeight: 'bold',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginLeft: 5,
  },
  rememberText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
  },
  // Buttons
  primaryButton: {
    backgroundColor: '#558249',
    width: '100%',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: '#A8B9A1', // Lighter green for Step 2 sign up
    width: '100%',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#4E7D42',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingBottom: 40,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  modalOption: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F9F9F9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#444',
  },
  // ... add these to your existing StyleSheet.create

  termsModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)', // Darker dim for focus
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsModalContent: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 30,
    padding: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  termsSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  termsSectionBody: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
    marginBottom: 20,
  },
  modalCheckboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalCheckboxLabel: {
    fontSize: 13,
    color: '#666',
    marginLeft: 10,
  },
  modalAcceptBtn: {
    backgroundColor: '#558249',
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalDeclineBtn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  declineText: {
    color: '#999',
    fontSize: 14,
  },
});


export default styles;