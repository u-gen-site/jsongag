import { createHash } from 'sha256-uint8array';


export function SHA256(key: string): string {
  const hash = createHash().update(key).digest('hex');
  return hash;
}
