import { Component, Input } from '@angular/core';
import { Org, OrgTreeService } from 'src/app/org-tree.service';

@Component({
  selector: 'li[app-node]',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css'],
})
export class NodeComponent {
  @Input() org: Org = { name: '', nodes: [] };
  editing = false;
  newName = '';

  constructor(private orgTreeService: OrgTreeService) {}

  add() {
    this.orgTreeService.addOrg({ name: '(Безымянный)', nodes: [] }, this.org.name);
  }

  startEditing() {
    this.newName = this.org.name;
    this.editing = true;
  }

  save() {
    this.orgTreeService.renameOrg(this.org.name, this.newName);
    this.editing = false;
  }
}
