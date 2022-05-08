export * from './hash';

import { SHA256 } from './hash';

type Hash = (key: string) => string;

type Store = { [key: string]: unknown };

interface JSONGagProps {
  hash: Hash;
  salt: string;
  data?: Store;
}

export default class JSONGag {
  hash: Hash;
  salt: string;
  data?: Store;
  constructor({
    hash = SHA256,
    salt = "",
    data = {},
  }: JSONGagProps) {
    this.hash = hash;
    this.salt = salt;
    this.data = data;
  }
  deriveKey(key: string): string {
    return this.hash(key + this.salt)
  }
  get<T>(key: string): T {
    if(this.data){
      return this.data[this.deriveKey(key)] as T
    }else{
      throw new Error("No data loaded.");
    }
  }
  set<T>(key: string, value: T) {
    if(this.data){
      this.data[this.deriveKey(key)] = value;
    }
  }
  load(data: Store) {
    this.data = data;
  }
  toJSON(): string {
    return JSON.stringify(this.data);
  }
}
