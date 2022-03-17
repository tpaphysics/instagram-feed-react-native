import { ImageProps } from 'react-native';
import styled from 'styled-components/native';

interface Props extends ImageProps {
  ratio: number;
}

export const Small = styled.ImageBackground<Props>`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
`;

export const Normal = styled.Image<Props>`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
`;
