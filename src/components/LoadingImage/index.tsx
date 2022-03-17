import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { Normal, Small } from './styles';

const NormalAnimated = Animated.createAnimatedComponent(Normal);

export interface LoadingImageProps {
  smallSource: string;
  normalSource: string;
  aspectRatio: number;
  shouldLoad: boolean;
}

export default function LoadingImage({
  aspectRatio,
  smallSource,
  normalSource,
  shouldLoad,
}: LoadingImageProps) {
  const [loading, setLoading] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (shouldLoad) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 100);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [shouldLoad]);

  function loadingImageAnimated() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Small
      source={{ uri: `${smallSource}` }}
      ratio={aspectRatio}
      resizeMode="contain"
      blurRadius={3}
    >
      {loading && (
        <NormalAnimated
          style={{ opacity }}
          source={{ uri: `${normalSource}` }}
          ratio={aspectRatio}
          resizeMode="contain"
          onLoadEnd={() => loadingImageAnimated()}
        />
      )}
    </Small>
  );
}
