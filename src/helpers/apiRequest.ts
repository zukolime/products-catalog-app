export const apiRequest = () => {
  const request = async (url: string, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      if (e instanceof Error) {
        console.error('HTTP error:', e.message);
        throw e;
      }
      throw new Error('Unknown HTTP error occurred');
    }
  };

  return { request };
};
