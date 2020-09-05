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
**Date: Fri Sep 04 2020 23:53:08 GMT-0700 (Pacific Daylight Time)

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
