import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Org, OrgTreeService } from 'src/app/org-tree.service';

@Component({
  selector: 'app-org-tree',
  templateUrl: './org-tree.component.html',
  styleUrls: ['./org-tree.component.css'],
})
export class OrgTreeComponent {
  orgs$: Observable<Org[]>;

  constructor(private orgTreeService: OrgTreeService) {
    this.orgs$ = this.orgTreeService.orgs$;
  }
}
