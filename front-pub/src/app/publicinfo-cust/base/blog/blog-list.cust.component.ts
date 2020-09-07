import {
  Input,
  Component
} from '@angular/core';
import {
  BlogComponent
} from '../../../publicinfo/blog/blog.component';
@Component({
  template: '',
})
export class BlogListCustComponent extends BlogComponent {
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
  BlogComponent
} from '../../../publicinfo/blog/blog.component';
@Component({
  template: '',
})
export class BlogListCustComponent extends BlogComponent {}**** End of recent updates.<<<*/
