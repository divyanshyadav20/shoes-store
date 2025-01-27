export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  brand: string;
  model: string;
  color: string;
  discount: number;
};

export enum ProductCategory {
  TV = "tv",
  Audio = "audio",
  Laptop = "laptop",
  Mobile = "mobile",
  Men = "men",
  Women = "women",
  Kids = "kids",
}
