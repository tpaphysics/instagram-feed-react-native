import { View, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { MY_IP } from '@env';

import { ExtendsData } from './types';
import {
  Post,
  PostHeader,
  Avatar,
  Name,
  PostDescription,
  Loading,
} from './styles';
import LoadingImage from '../../components/LoadingImage';

export interface CardProps {
  shouldLoad: boolean;
  post: ExtendsData;
}

function CardPost({ post, shouldLoad }: CardProps) {
  const { image, small, aspectRatio, description, author } = post;
  return (
    <Post>
      <PostHeader>
        <Avatar source={{ uri: author.avatar }} />
        <Name>{author.name}</Name>
      </PostHeader>
      <LoadingImage
        shouldLoad={shouldLoad}
        aspectRatio={aspectRatio}
        normalSource={image}
        smallSource={small}
      />
      <PostDescription>
        <Name>{author.name}</Name> {description}
      </PostDescription>
    </Post>
  );
}

export default function Feed() {
  const [feed, setFeed] = useState<ExtendsData[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function loadPage(
    pageNumber = page,
    shouldRefresh = false,
  ): Promise<void> {
    if (total && pageNumber > total) return;
    setLoading(true);
    // console.log(pageNumber);

    const response = await fetch(
      `http://${MY_IP}:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`,
    );
    const data = await response.json();
    const totalItens = response.headers.get('X-total-Count');
    setTotal(Math.floor(Number(totalItens) / 5));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow

  useEffect(() => {
    loadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function refreshList() {
    setRefreshing(true);
    loadPage(1, true);
    setRefreshing(false);
  }

  const [visible, setVisible] = useState([]);
  const onViewableItemsChanged = useRef(({ changed }) => {
    setVisible(changed.map(({ item }) => item.id));
  });

  return (
    <View>
      <FlatList
        data={feed}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 10 }}
        onViewableItemsChanged={onViewableItemsChanged.current}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        onRefresh={() => refreshList()}
        refreshing={refreshing}
        ListFooterComponent={loading ? <Loading /> : null}
        keyExtractor={post => String(post.id)}
        renderItem={({ item }) => (
          <CardPost post={item} shouldLoad={visible.includes(item.id)} />
        )}
      />
    </View>
  );
}
