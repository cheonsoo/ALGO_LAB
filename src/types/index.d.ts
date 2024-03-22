declare module '*.md';

export type TypeApps = {
  [key: string]: IApps;
};

export type TPost = {
  id: string;
  publish: boolean;
  path: string;
  desc: string;
  title: string;
  type: string;
  content: string;
};

export interface IApps {
  id: string;
  publish: boolean;
  path: string;
  type: string;
  title: string;
  desc: string;
  thumbnail: string;
  created: string;
  updated: string;
}

export interface IApps2 {
  [key: string]: IApp;
}

export interface IApp {
  id: string;
  publish: boolean;
  path: string;
  type?: string;
  title?: string;
  desc?: string;
  thumbnail?: string;
  created?: string;
  updated?: string;
}

export interface IPost extends IApp {}

export interface IPosts {
  publish: boolean;
  path: string;
  desc: string;
  title: string;
  type: string;
}
