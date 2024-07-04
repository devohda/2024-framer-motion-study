const gaussianRandom = (mean: number, sigma: number) => {
  let u = 0;
  let v = 0;

  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();

  const normal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  return mean + sigma * normal;
};

export default gaussianRandom;
