import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Profile {
  'stream' : string,
  'cgpa' : number,
  'name' : string,
  'degree' : string,
  'registration_no' : bigint,
  'passout_year' : bigint,
}
export type Result = { 'ok' : null } |
  { 'err' : string };
export interface _SERVICE {
  'create_profile' : ActorMethod<[Profile], undefined>,
  'delete_profile' : ActorMethod<[bigint], Result>,
  'read_profile' : ActorMethod<[bigint], [] | [Profile]>,
  'test' : ActorMethod<[], Principal>,
}
