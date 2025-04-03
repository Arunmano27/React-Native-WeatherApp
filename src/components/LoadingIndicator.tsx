import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

type LoadingIndicatorProps = {
  size?: 'small' | 'large';
  color?: string;
  text?: string;
}

const LoadingIndicator = ({ size = "large", color = "#007AFF", text = "Loading..." }: LoadingIndicatorProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    marginTop: 10,
    color: '#666',
  },
});

export default LoadingIndicator;
