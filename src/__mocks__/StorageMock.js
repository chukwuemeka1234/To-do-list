const MockStorage = () => {
    const storage = {};
    return {
      setItem(key, value) {
        storage[key] = value || '';
      },
      // eslint-disable-next-line no-unused-vars
      getItem(key, value) {
        return key in storage ? storage[key] : null;
      },
      key(i) {
        const keys = Object.keys(storage);
        return keys[i] || null;
      },
    };
  };
  
  export default MockStorage;