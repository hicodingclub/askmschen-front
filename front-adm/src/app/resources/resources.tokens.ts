import {
  InjectionToken
} from '@angular/core';
import {
  resources_server_root_uri
} from '../resources-cust/resources.tokens.value';
export const Resources_SERVER_ROOT_URI = new InjectionToken < string > ('Resources_SERVER_ROOT_URI', {
  factory: (): string => resources_server_root_uri,
  providedIn: 'root',
}, );