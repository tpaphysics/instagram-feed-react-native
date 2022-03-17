interface FeedData {
  id: number;
  image: string;
  small: string;
  aspectRatio: 0.843;
  description: string;
  authorId: 2;
}

interface AuthorsData {
  id: number;
  name: string;
  avatar: string;
}

interface ExtendsData extends FeedData {
  author: AuthorsData;
}

export { FeedData, AuthorsData, ExtendsData };
