export interface GameModel {
  gameId: number;
  name: string;
  description: string;
  price: number;
  platformId: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}