import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
import {
  MpicturegroupDetailComponent
} from './mpicturegroup-detail.component';
import {
  MpicturegroupService
} from '../mpicturegroup.service';
@Component({
  selector: 'app-mpicturegroup-detail-sub',
  templateUrl: './mpicturegroup-detail-sub.component.html',
  styleUrls: ['./mpicturegroup-detail.component.css', './mpicturegroup-detail-sub.component.css']
})
export class MpicturegroupDetailSubComponent extends MpicturegroupDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public mpicturegroupService: MpicturegroupService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpicturegroupService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}