import {
  Injectable,
  Inject,
  OnDestroy,
  SkipSelf
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  MemresourcesBaseService
} from './memresources.base.service';
import {
  Resources_SERVER_ROOT_URI
} from '../resources.tokens';
@Injectable({
  providedIn: 'root',
})
export class MemresourcesService extends MemresourcesBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Resources_SERVER_ROOT_URI) private resourcesServerRootUri: string) {
    super(http, resourcesServerRootUri);
  }
  ngOnDestroy() {}
}