import { Component, Input } from '@angular/core';
import { Org, OrgTreeService } from 'src/app/org-tree.service';

@Component({
  selector: 'li[app-node]',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css'],
})
export class NodeComponent {
  @Input() org: Org = new Org('');
  editing = false;
  newName = '';

  constructor(private orgTreeService: OrgTreeService) {}

  add() {
    this.orgTreeService.addOrg('(Безымянный)', this.org);
  }

  startEditing() {
    this.newName = this.org.name;
    this.editing = true;
  }

  save() {
    this.orgTreeService.renameOrg(this.org, this.newName);
    this.editing = false;
  }
}
