import { MathUtils } from 'three';
import gaussianRandom from './gaussianRandom';

import type { Model, ModelInfo } from '../types';

const models: Model[] = [
  {
    name: 'cat',
    gltf: '/medias/cat.gltf',
  },
  {
    name: 'burger',
    gltf: '/medias/burger.gltf',
  },
  {
    name: 'ball',
    gltf: '/medias/ball.gltf',
  },
];

const MODEL_LENGTH = 100;
const MODEL_KINDS_LENGTH = models.length;

// make 100 models with random positions
const makeModelGroup = () => {
  return new Array(MODEL_LENGTH).fill(null).map(() => {
    const randomInt = MathUtils.randInt(0, MODEL_KINDS_LENGTH - 1);

    const randomModel: ModelInfo = {
      ...models[randomInt],
      position: [
        MathUtils.clamp(gaussianRandom(0, 5), -30, 30),
        MathUtils.clamp(gaussianRandom(0, 5), -30, 30),
        MathUtils.clamp(gaussianRandom(0, 5), -30, 30),
      ],
    };

    return randomModel;
  });
};

export default makeModelGroup();
