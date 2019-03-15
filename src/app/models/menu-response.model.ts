export interface IMenuResponse {
  category: string;
  details: IMenuDetails;
  items: IMenuItems[];
}

export interface IMenuItems extends IMenuDetails {
  name: string;
  extra: IMenuDetails;
}

export interface IMenuDetails {
  description: string;
  price: number | null;
}
