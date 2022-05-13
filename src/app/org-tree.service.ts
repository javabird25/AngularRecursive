import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Org = {
  name: string;
  nodes: Org[];
};

@Injectable({
  providedIn: 'root',
})
export class OrgTreeService {
  private orgsSubject$ = new BehaviorSubject<Org[]>([
    {
      name: 'Руководитель',
      nodes: [
        {
          name: 'Финансовый отдел',
          nodes: [
            { name: 'Инженер 1', nodes: [] },
            {
              name: 'Инженер 2',
              nodes: [
                { name: 'Стажер 1', nodes: [] },
                { name: 'Стажер 2', nodes: [] },
              ],
            },
          ],
        },
        {
          name: 'Отдел снабжения',
          nodes: [{ name: 'Менеджер снабжения', nodes: [] }],
        },
        { name: 'Отдел продаж', nodes: [] },
      ],
    },
  ]);
  public orgs$ = this.orgsSubject$.asObservable();

  addOrg(newOrg: Org, to: string) {
    const orgs = this.orgsSubject$.getValue();
    for (const org of orgs) {
      this._appendIfMatches(org, newOrg, to);
    }
    this.orgsSubject$.next(orgs);
  }

  private _appendIfMatches(org: Org, newOrg: Org, to: string) {
    if (org.name === to) {
      org.nodes.push(newOrg);
    } else {
      if (org.nodes) {
        for (const node of org.nodes) {
          this._appendIfMatches(node, newOrg, to);
        }
      }
    }
  }

  renameOrg(from: string, to: string) {
    const orgs = this.orgsSubject$.getValue();
    for (const org of orgs) {
      this._renameIfMatches(org, from, to);
    }
    this.orgsSubject$.next(orgs);
  }

  private _renameIfMatches(org: Org, from: string, to: string) {
    if (org.name === from) {
      org.name = to;
    } else {
      if (org.nodes) {
        for (const node of org.nodes) {
          this._renameIfMatches(node, from, to);
        }
      }
    }
  }
}
