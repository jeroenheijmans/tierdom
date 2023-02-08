import { writable } from 'svelte/store';

export enum LayoutMode {
  square,
  rectangle,
}

export const layoutMode = writable(LayoutMode.square);
