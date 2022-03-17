import styled from 'styled-components/native';

const Post = styled.View`
  margin-top: 15px;
  background: #fff;
`;

const PostHeader = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

const PostImage = styled.Image`
  width: 100%;
  aspect-ratio: ${(props: any) => props.ratio};
`;

const PostDescription = styled.Text`
  padding: 15px;
  align-items: center;
`;

const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;

export { Post, PostHeader, Avatar, Name, PostImage, PostDescription, Loading };
