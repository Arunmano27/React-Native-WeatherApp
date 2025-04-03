import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type ErrorMessageProps = {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({message, onRetry}: ErrorMessageProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
          <Text style={styles.retryText}>Try Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFEBEE',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  message: {
    color: '#D32F2F',
    marginVertical: 10,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#D32F2F',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  retryText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ErrorMessage;
