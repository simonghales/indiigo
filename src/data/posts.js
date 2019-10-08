// @flow

import avatar from '../avatar.jpg';
import art from '../art.png';
import boys from '../boys.jpg';
import painting from '../painting.png';

export type AuthorMdl = {
  uid: string,
  avatar: string,
  name: string,
  handle: string,
};

export const DATA_AUTHOR: AuthorMdl = {
  uid: 'simon',
  avatar,
  name: 'Simon Hales',
  handle: 'simonghales',
};

export const DATA_AUTHOR_2: AuthorMdl = {
  uid: 'admin',
  avatar:
    'https://at-cdn-s01.audiotool.com/2014/11/18/documents/g5Znv0KKZGlKw59uGCLQnomxoAowXP/0/cover256x256-4e1663dd03d1407895aaf86ca575c87d.jpg',
  name: 'indiigo',
  handle: 'indiigo',
};

export const getAuthorName = (author: AuthorMdl): string => {
  return author.name;
};

export const getAuthorHandle = (author: AuthorMdl): string => {
  return `@${author.handle}`;
};

export const getAuthorAvatar = (author: AuthorMdl): string => {
  return author.avatar;
};

export type ImagePreviewMdl = {
  url: string,
  width: number,
  height: number,
};

export type TextImagePreviewMdl = {
  banner: ImagePreviewMdl,
  preview: string,
};

export const getImagePreviewUrl = (preview: ImagePreviewMdl): string => {
  return preview.url;
};

export const getImagePreviewDimensions = (preview: ImagePreviewMdl): [number, number] => {
  const { width, height } = preview;
  return [width, height];
};

export type PostContentMdl = {
  type: string,
  preview: string | ImagePreviewMdl | TextImagePreviewMdl,
};

export type PostMdl = {
  uid: string,
  author: AuthorMdl,
  created: number,
  introduction: string,
  numberOfLikes: number,
  numberOfComments: number,
  content: PostContentMdl,
};

export const getPostTextImagePreview = (post: PostMdl): TextImagePreviewMdl => {
  return post.content.preview;
};

export const getPostImagePreview = (post: PostMdl): ImagePreviewMdl => {
  return post.content.preview;
};

export const getPostCreatedDate = (post: PostMdl): number => {
  return post.created;
};

export const getPostIntroduction = (post: PostMdl): string => {
  return post.introduction;
};

export const getPostContentType = (post: PostMdl): string => {
  return post.content.type;
};

export const getPostAuthor = (post: PostMdl): AuthorMdl => {
  return post.author;
};

export const DATA_POSTS: Array<PostMdl> = [
  {
    uid: '0',
    author: DATA_AUTHOR,
    created: new Date() + 1,
    introduction: 'Check out my awesome new post! Pretty nifty aye?',
    numberOfLikes: 4,
    numberOfComments: 7,
    content: {
      type: 'text',
      preview: `# indiigo announcement #4\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit modi mollitia nihil recusandae reprehenderit rerum sequi. \n\nAutem dicta dolor ducimus exercitationem, illum ipsa itaque labore laboriosam nulla quia vel vero!`,
    },
  },
  {
    uid: 'a',
    author: DATA_AUTHOR_2,
    created: Date.now() - 60 * 1000,
    introduction: 'Check out my awesome new post! Pretty nifty aye?',
    numberOfLikes: 4,
    numberOfComments: 7,
    content: {
      type: 'image',
      preview: {
        url: boys,
        width: 500,
        height: 375,
      },
    },
  },
  {
    uid: 'b',
    author: DATA_AUTHOR_2,
    created: Date.now() - 60 * 1000,
    introduction: 'Check out my awesome new post! Pretty nifty aye?',
    numberOfLikes: 4,
    numberOfComments: 7,
    content: {
      type: 'image',
      preview: {
        url: painting,
        width: 500,
        height: 750,
      },
    },
  },
  {
    uid: '1',
    author: DATA_AUTHOR_2,
    created: Date.now() - 60 * 1000,
    introduction: 'Check out my awesome new post! Pretty nifty aye?',
    numberOfLikes: 4,
    numberOfComments: 7,
    content: {
      type: 'image',
      preview: {
        url: art,
        width: 500,
        height: 500,
      },
    },
  },
  {
    uid: '5',
    author: DATA_AUTHOR,
    created: Date.now() - 2 * 60 * 60 * 1000,
    introduction: 'Check out my awesome new post! Pretty nifty aye?',
    numberOfLikes: 4,
    numberOfComments: 7,
    content: {
      type: 'text',
      preview: 'Hello World',
    },
  },
  {
    uid: '2',
    author: DATA_AUTHOR_2,
    created: Date.now() - 2 * 24 * 60 * 60 * 1000,
    introduction: 'Check out my awesome new post! Pretty nifty aye?',
    numberOfLikes: 4,
    numberOfComments: 7,
    content: {
      type: 'textImage',
      preview: {
        preview: `# indiigo announcement #4\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit modi mollitia nihil recusandae reprehenderit rerum sequi. \n\nAutem dicta dolor ducimus exercitationem, illum ipsa itaque labore laboriosam nulla quia vel vero!`,
        banner: {
          url: art,
          width: 500,
          height: 500,
        },
      },
    },
  },
  {
    uid: '3',
    author: DATA_AUTHOR,
    created: Date.now() - 365 * 24 * 60 * 60 * 1000,
    introduction: 'Check out my awesome new post! Pretty nifty aye?',
    numberOfLikes: 4,
    numberOfComments: 7,
    content: {
      type: 'text',
      preview: 'Hello World',
    },
  },
  {
    uid: '4',
    author: DATA_AUTHOR_2,
    created: 1570510269207,
    introduction: 'Important announcement!',
    numberOfLikes: 4,
    numberOfComments: 7,
    content: {
      type: 'text',
      preview: 'Hello World',
    },
  },
];
