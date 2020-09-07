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
  MemresourcesDetailComponent
} from './memresources-detail.component';
import {
  MemresourcesService
} from '../memresources.service';
@Component({
  selector: 'app-memresources-detail-sub',
  templateUrl: './memresources-detail-sub.component.html',
  styleUrls: ['./memresources-detail.component.css', './memresources-detail-sub.component.css']
})
export class MemresourcesDetailSubComponent extends MemresourcesDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public memresourcesService: MemresourcesService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(memresourcesService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}