import { writable } from 'svelte/store';

export enum LayoutMode {
  square,
  rectangle,
}

export const layoutMode = writable(LayoutMode.square);

export function toggleRectangleMode() {
  layoutMode.update(() => LayoutMode.rectangle);
}
export function toggleSquareMode() {
  layoutMode.update(() => LayoutMode.square);
}
