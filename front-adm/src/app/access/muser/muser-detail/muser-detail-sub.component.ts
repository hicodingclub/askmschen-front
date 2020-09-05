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
  MuserDetailComponent
} from './muser-detail.component';
import {
  MuserService
} from '../muser.service';
@Component({
  selector: 'app-muser-detail-sub',
  templateUrl: './muser-detail-sub.component.html',
  styleUrls: ['./muser-detail.component.css', './muser-detail-sub.component.css']
})
export class MuserDetailSubComponent extends MuserDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public muserService: MuserService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(muserService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}