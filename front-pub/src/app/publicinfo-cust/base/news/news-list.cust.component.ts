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
**Date: Fri Sep 04 2020 23:53:08 GMT-0700 (Pacific Daylight Time)

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
