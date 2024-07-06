import { Vector3 } from 'three';
import { create } from 'zustand';
import { Controls } from '../types';

interface CharactersState {
  position: Vector3;
  setPosition: (control: Controls) => void;
}

const useCharacterStore = create<CharactersState>((set) => ({
  position: new Vector3(0, 0, 0),
  setPosition: (control: Controls) => {
    console.log(control);

    // switch (control) {
    //   case Controls.forward:
    //     set((state) => {
    //       state.position.z += 1;
    //     });
    //     break;
    //   case Controls.back:
    //     set((state) => {
    //       state.position.z -= 1;
    //     });
    //     break;
    //   case Controls.left:
    //     set((state) => {
    //       state.position.x -= 1;
    //     });
    //     break;
    //   case Controls.right:
    //     set((state) => {
    //       state.position.x += 1;
    //     });
    //     break;
    //   case Controls.jump:
    //     set((state) => {
    //       state.position.y += 1;
    //     });
    //     break;
    // }
  },
}));

export { useCharacterStore };
