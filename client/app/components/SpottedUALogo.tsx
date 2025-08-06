import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop
} from 'react-native-svg';

const SpottedLogo = ({
  size = 'md',
  variant = 'full',
  style = {},
  animated = true
}) => {
  const sizes = {
    sm: { container: 32, icon: 32, text: 24 },
    md: { container: 40, icon: 40, text: 28 },
    lg: { container: 48, icon: 48, text: 32 },
    xl: { container: 64, icon: 64, text: 40 }
  };

  const colors = {
    primary: 'white',
    primaryLight: '#60A5FA',
    accent: 'black',
    muted: 'black',
    background: '#FFFFFF'
  };

  const currentSize = sizes[size];

  // Animações
  const blinkAnim = useRef(new Animated.Value(1)).current;
  const lookAroundAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const scanAnim = useRef(new Animated.Value(0)).current;
  const glowAnim = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    if (!animated) return;

    // Animação de piscar (blink)
    const blinkSequence = Animated.loop(
      Animated.sequence([
        Animated.delay(2000 + Math.random() * 3000), // Delay aleatório
        Animated.timing(blinkAnim, {
          toValue: 0.1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ])
    );

    // Animação de olhar em volta
    const lookAroundSequence = Animated.loop(
      Animated.sequence([
        Animated.delay(1000),
        Animated.timing(lookAroundAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.delay(500),
        Animated.timing(lookAroundAnim, {
          toValue: -1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.delay(300),
        Animated.timing(lookAroundAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
      ])
    );

    // Animação de pulse sutil
    const pulseSequence = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );

    // Animação de scan/varredura
    const scanSequence = Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.delay(1000),
        Animated.timing(scanAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.delay(2000),
      ])
    );

    // Animação de brilho
    const glowSequence = Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0.6,
          duration: 1500,
          useNativeDriver: false,
        }),
      ])
    );

    // Iniciar todas as animações
    blinkSequence.start();
    lookAroundSequence.start();
    pulseSequence.start();
    scanSequence.start();
    glowSequence.start();

    // Cleanup
    return () => {
      blinkSequence.stop();
      lookAroundSequence.stop();
      pulseSequence.stop();
      scanSequence.stop();
      glowSequence.stop();
    };
  }, [animated, blinkAnim, lookAroundAnim, pulseAnim, scanAnim, glowAnim]);

  // Interpolações para as animações
  const eyeTranslateX = lookAroundAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-2, 0, 2],
  });

  const eyeTranslateY = lookAroundAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1, 0, -1],
  });

  const scanRotation = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const glowOpacity = glowAnim.interpolate({
    inputRange: [0.6, 1],
    outputRange: [0.6, 0.9],
  });

  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  const IconSvg = () => (
    <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
      <AnimatedSvg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 48 48"
        style={{ 
          width: currentSize.container, 
          height: currentSize.container,
          transform: [{ rotate: scanRotation }],
        }}
      >
        <Defs>
          <LinearGradient id="spotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor={colors.primary} stopOpacity="1" />
            <Stop offset="100%" stopColor={colors.primary} stopOpacity="0.7" />
          </LinearGradient>
          <LinearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor={colors.accent} stopOpacity="0.8" />
            <Stop offset="100%" stopColor={colors.muted} stopOpacity="0.4" />
          </LinearGradient>
        </Defs>
        
        {/* Outer ring com glow */}
        <Circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="1.5"
          opacity={animated ? glowOpacity : 0.6}
        />
        
        {/* Inner ring */}
        <Circle
          cx="24"
          cy="24"
          r="14"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="1"
          opacity="0.4"
        />
        
        {/* Central spot (olho) */}
        <Circle
          cx="24"
          cy="24"
          r="8"
          fill="url(#spotGradient)"
        />
        
        {/* Pupila animada */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: currentSize.container,
            height: currentSize.container,
            transform: animated ? [
              { translateX: eyeTranslateX },
              { translateY: eyeTranslateY },
              { scaleY: blinkAnim }
            ] : [],
          }}
        >
          <Svg
            width={currentSize.icon}
            height={currentSize.icon}
            viewBox="0 0 48 48"
            style={{ width: currentSize.container, height: currentSize.container }}
          >
            {/* Pupila */}
            <Circle
              cx="24"
              cy="24"
              r="4"
              fill="#1F2937"
            />
            
            {/* Reflexo no olho */}
            <Circle
              cx="25.5"
              cy="22.5"
              r="1.5"
              fill={colors.background}
              opacity="0.8"
            />
          </Svg>
        </Animated.View>
        
        {/* Scanning lines */}
        <Path
          d="M 12 24 A 12 12 0 0 1 24 12"
          fill="none"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        <Path
          d="M 36 24 A 12 12 0 0 1 24 36"
          fill="none"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
      </AnimatedSvg>
    </Animated.View>
  );

  if (variant === 'icon') {
    return (
      <View style={[{ width: currentSize.container, height: currentSize.container }, style]}>
        <IconSvg />
      </View>
    );
  }

  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      {/* Icon */}
      <View style={{ width: currentSize.container, height: currentSize.container, marginRight: 12 }}>
        <IconSvg />
      </View>

      {/* Text */}
      <View style={{ justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text
            style={{
              fontSize: currentSize.text,
              fontWeight: 'bold',
              color:"white",
              letterSpacing: -0.5,
            }}
          >
            Spotted
          </Text>
          <Text
            style={{
              fontSize: currentSize.text * 0.85,
              fontWeight: '300',
              marginLeft: 2,
            }}
            className='text-white/40'
          >
            UA
          </Text>
        </View>
        {size === 'xl' && (
          <Text style={{
            fontSize: 12,
            color: colors.muted,
            letterSpacing: 1,
            textTransform: 'uppercase',
            marginTop: 2,
          }}>
            Campus Social
          </Text>
        )}
      </View>
    </View>
  );
};

export default SpottedLogo;