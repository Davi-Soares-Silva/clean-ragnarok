export interface GameModel {
  gameId: string;
  name: string;
  description: string;
  price: number;
  platformId: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}