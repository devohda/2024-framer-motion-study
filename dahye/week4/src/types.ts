export type Vector3 = [number, number, number];

export interface Model {
  name: string;
  gltf: string;
}

export interface ModelInfo extends Model {
  position: Vector3;
}
