import { Stylesheet, Text } from 'react-native';

export default function CounterText({ color, fontSize, children }) {
  return (
    <Text
      style={{
        color: color,
        fontSize: fontSize,
      }}>
      {children}
    </Text>
  );
}
