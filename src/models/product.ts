export interface Product {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  brand: string;
  liked: boolean;
}

export type ProductFormValues = Omit<Product, 'id' | 'liked' | 'price'> & {
  price: string;
};
