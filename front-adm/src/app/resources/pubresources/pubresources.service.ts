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
  PubresourcesBaseService
} from './pubresources.base.service';
import {
  Resources_SERVER_ROOT_URI
} from '../resources.tokens';
@Injectable({
  providedIn: 'root',
})
export class PubresourcesService extends PubresourcesBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Resources_SERVER_ROOT_URI) private resourcesServerRootUri: string) {
    super(http, resourcesServerRootUri);
  }
  ngOnDestroy() {}
}