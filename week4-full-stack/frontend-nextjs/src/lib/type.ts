export type Post = {
  _id: string;
  user: {
    _id: string;
    name: string;
    photo: string;
  };
  content: string;
  createdAt: string;
  image:string;
};
