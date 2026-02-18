import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7E8', // Light cream background
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: height * 0.05, // Responsive spacing
  },
  logoCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#4A7c44',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A7c44',
  },
  subtitle: {
    fontSize: 14,
    color: '#7B8D76',
    marginTop: 2,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDE6D5', 
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 60,
    borderWidth: 1,
    borderColor: '#C5D1BC',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 35,
    paddingHorizontal: 5,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: 13,
    color: '#555',
    marginRight: 5,
  },
  forgotText: {
    fontSize: 13,
    color: '#555',
  },
  loginButton: {
    backgroundColor: '#4A7c44',
    width: '100%',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  versionText: {
    fontSize: 11,
    color: '#999',
    marginBottom: 5,
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  signUpText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#333',
  },
});

export default styles;