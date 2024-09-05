import React from "react";
import { View } from "react-native";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Circle,
  Text,
  G,
} from "react-native-svg";

export const CustomStepper = ({ width = 300, height = 80 }) => {
  const steps = [
    { label: "PD", color: "#e17055" },
    { label: "SBC", color: "#dfe6e9" },
    { label: "GBC", color: "#fdcb6e" },
    { label: "DBC", color: "#74b9ff" },
    { label: "EBC", color: "#55efc4" },
    { label: "PBC", color: "#a29bfe" },
  ];

  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 300 80">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            {steps.map((step, index) => (
              <Stop
                key={step.label}
                offset={`${(index * 100) / (steps.length - 1)}%`}
                stopColor={step.color}
              />
            ))}
          </LinearGradient>
        </Defs>

        <Path
          d="M10,50 Q150,30 290,50"
          stroke="url(#grad)"
          strokeWidth="8"
          fill="none"
        />

        {steps.map((step, index) => {
          const x = 10 + (280 / 5) * index;
          const y = 50 - Math.sin((Math.PI * index) / 5) * 20;
          return (
            <G key={step.label}>
              <Circle cx={x} cy={y} r="10" fill={step.color} />
              <Text
                x={x}
                y={y + 4}
                fontSize="10"
                fill="white"
                textAnchor="middle"
              >
                {index + 1}
              </Text>
              <Text
                x={x}
                y={y + 25}
                fontSize="9"
                fill="#333"
                textAnchor="middle"
              >
                {step.label}
              </Text>
            </G>
          );
        })}
      </Svg>
    </View>
  );
};
