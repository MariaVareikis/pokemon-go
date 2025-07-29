export interface CollectedPokemon {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
  collectedAt: string;
  collectionId: string;
  nickname?: string; 
  isFavorite: boolean; 
}