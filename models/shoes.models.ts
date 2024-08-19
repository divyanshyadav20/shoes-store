export type Shoe = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
  rating: {
    count: number;
    rate: number;
  };
};
