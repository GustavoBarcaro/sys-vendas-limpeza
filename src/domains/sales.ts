export interface Sales {
  id: number;
  saleDatetime: string;
  status: string;
  value: number;
}

export interface SalesItems extends Sales {
  items: Array<{
    id: number;
    name: string;
    value: number;
  }>;
}

export interface SalesResponse extends Sales {
  items: Array<{
    id: number;
    product: {
      id: number;
      name: string;
      value: number;
    };
  }>;
}
