import { create } from 'zustand';

export type PaintColor = 'stealth-black' | 'neon-green' | 'hyper-orange' | 'void-white';
export type MaterialDetail = 'matte' | 'gloss' | 'pearlescent';

interface ConfiguratorState {
  activePanel: 'exterior' | 'interior' | 'performance';
  paintColor: PaintColor;
  paintMaterial: MaterialDetail;
  setPaintColor: (color: PaintColor) => void;
  setPaintMaterial: (mat: MaterialDetail) => void;
  setActivePanel: (panel: 'exterior' | 'interior' | 'performance') => void;
  cameraView: 'front' | 'side' | 'rear' | 'top' | 'detail';
  setCameraView: (view: 'front' | 'side' | 'rear' | 'top' | 'detail') => void;
  carModel: 'AERO-V1' | 'AERO-V2' | 'MACH-Z';
  setCarModel: (model: 'AERO-V1' | 'AERO-V2' | 'MACH-Z') => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  activePanel: 'exterior',
  paintColor: 'stealth-black',
  paintMaterial: 'matte',
  setPaintColor: (color) => set({ paintColor: color, cameraView: 'detail' }),
  setPaintMaterial: (mat) => set({ paintMaterial: mat }),
  setActivePanel: (panel) => set({ activePanel: panel }),
  cameraView: 'front',
  setCameraView: (view) => set({ cameraView: view }),
  carModel: 'AERO-V1',
  setCarModel: (model) => set({ carModel: model }),
}));
