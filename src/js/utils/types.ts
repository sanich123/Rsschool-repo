export interface CarsType {
  name: string;
  color: string;
  id: number;
}

export interface WinnersType {
  id: number;
  wins: number;
  time: number;
}
export interface CarsMocksType {
  brand: string;
  models: string[];
}

export interface EngineResponse {
  velocity: number,
  distance: number
}

export interface TopSpeeds {
  id: number,
  duration: number,
}