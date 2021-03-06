export interface Sales {
  id: string;
  saleDatetime: string;
  status: string;
  value: number;
}
export interface Product {
  id: number;
  name: string;
  value: number;
  quantity: number;
  amount: number;
}

export interface ProductCart extends Product {
  qtd: number;
}

export type Cart = ProductCart[];

export interface SalesItems extends Sales {
  items: Array<Product>;
}

export interface SalesResponse extends Sales {
  items: Array<{
    id: number;
    product: Product;
    quantity: number;
    amount: number;
  }>;
}
