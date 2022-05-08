export * from './hash';
declare type Hash = (key: string) => string;
declare type Store = {
    [key: string]: unknown;
};
interface JSONGagProps {
    hash: Hash;
    salt: string;
    data?: Store;
}
export default class JSONGag {
    hash: Hash;
    salt: string;
    data?: Store;
    constructor({ hash, salt, data, }: JSONGagProps);
    deriveKey(key: string): string;
    get<T>(key: string): T;
    set<T>(key: string, value: T): void;
    load(data: Store): void;
    toJSON(): string;
}
