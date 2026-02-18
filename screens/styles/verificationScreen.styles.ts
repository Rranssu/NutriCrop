import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED',
    alignItems: 'center',
    // Increased horizontal padding to keep content away from the screen edge
    paddingHorizontal: 30, 
    paddingTop: 80,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#507D44',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#507D44',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 14,
    color: '#7C8472',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 30,
    // Added padding to make text wrap better
    paddingHorizontal: 10, 
  },
  emailText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  otpContainer: {
    flexDirection: 'row',
    // CHANGED: space-evenly keeps the outer boxes away from the edges
    justifyContent: 'space-evenly', 
    width: '100%',
    marginBottom: 35,
  },
  otpBox: {
    // CHANGED: Slightly smaller width ensures it fits all devices without touching edges
    width: 42, 
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  otpInput: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#507D44',
    textAlign: 'center',
    width: '100%',
  },
  resendContainer: {
    marginBottom: 40,
  },
  resendText: {
    fontSize: 14,
    color: '#7C8472',
  },
  resendBold: {
    fontWeight: 'bold',
    color: '#507D44',
  },
  confirmButton: {
    backgroundColor: '#507D44',
    // CHANGED: Use a percentage or slightly less than 100% for better margins
    width: '100%', 
    height: 55,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;