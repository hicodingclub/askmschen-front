import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
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
  selector: 'app-mpicturegroup-detail-pop',
  templateUrl: './mpicturegroup-detail-pop.component.html',
  styleUrls: ['./mpicturegroup-detail.component.css']
})
export class MpicturegroupDetailPopComponent extends MpicturegroupDetailComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public mpicturegroupService: MpicturegroupService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpicturegroupService, injector, router, route, location);
    this.majorUi = false;
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail view... no id...");
  }
  ngAfterViewInit() {}
}