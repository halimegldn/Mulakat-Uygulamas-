import React from 'react';
import { WebView } from 'react-native-webview';

const FirebaseIntegration = () => {
  return (
    <WebView
      source={{ uri: 'path/to/your/html/index.html' }}
      style={{ flex: 1 }}
    />
  );
};

export default FirebaseIntegration;
