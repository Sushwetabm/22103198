import axios from 'axios';

export const fetchNumbers = async (numberId: string, clientID: string, clientSecret: string): Promise<number[]> => {
  const url = `http://20.244.56.144/testserver/numbers/${numberId}`;
  try {
    const response = await Promise.race([
      axios.get(url, {
        headers: {
          'Client-ID': clientID,
          'Client-Secret': clientSecret
        }
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 500))
    ]);
    return (response as any).data.numbers || [];
  } catch (err) {
    console.error('Failed to fetch or timed out:', err.message);
    return [];
  }
};
