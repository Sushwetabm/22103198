import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const payload = {
  email: process.env.EMAIL,
  name: process.env.NAME,
  mobileNo: process.env.MOBILE_NO,
  githubUsername: process.env.GITHUB_USERNAME,
  rollNo: process.env.ROLL_NO,
  collegeName: process.env.COLLEGE_NAME,
  accessCode: process.env.ACCESS_CODE
};

const register = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/evaluation-service/register', payload);
    console.log('Registration successful! Save these credentials securely:');
    console.log('Client ID:', response.data.clientID);
    console.log('Client Secret:', response.data.clientSecret);
  } catch (error: any) {
    if (error.response) {
      console.error('Registration failed:', error.response.data);
    } else {
      console.error('Network or unexpected error:', error.message);
    }
  }
};

register();
