import {
  Input,
  Component
} from '@angular/core';
import {
  NewsComponent
} from '../../../publicinfo/news/news.component';
@Component({
  template: '',
})
export class NewsListCustComponent extends NewsComponent {
  public options: any = {
    listViewFilter: 'list', includeSubDetail: false,
    disableViewSwitch: true,
  };
}/*>>> Please check this recent updates and merge with existing ones***
**Date: Mon Sep 07 2020 16:21:41 GMT-0700 (Pacific Daylight Time)

import {
  Input,
  Component
} from '@angular/core';
import {
  NewsComponent
} from '../../../publicinfo/news/news.component';
@Component({
  template: '',
})
export class NewsListCustComponent extends NewsComponent {}**** End of recent updates.<<<*/
