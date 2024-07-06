export type Vector3 = [number, number, number];

export interface Model {
  name: string;
  gltf: string;
}

export interface ModelInfo extends Model {
  position: Vector3;
}

export enum Controls {
  forward = 'forward',
  back = 'back',
  left = 'left',
  right = 'right',
  jump = 'jump',
}
