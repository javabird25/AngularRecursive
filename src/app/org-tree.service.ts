import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Org {
  constructor(public name: string, public nodes: Org[] = []) {}
}

@Injectable({
  providedIn: 'root',
})
export class OrgTreeService {
  private orgsSubject$ = new BehaviorSubject<Org[]>([
    new Org('Руководитель', [
      new Org('Финансовый отдел', [
        new Org('Инженер 1'),
        new Org('Инженер 2', [new Org('Стажер 1'), new Org('Стажер 2')]),
      ]),
      new Org('Отдел снабжения', [new Org('Менеджер снабжения')]),
      new Org('Отдел продаж'),
    ]),
  ]);
  public orgs$ = this.orgsSubject$.asObservable();

  addOrg(name: string, to: Org) {
    to.nodes.push(new Org(name));
    this.orgsSubject$.next(this.orgsSubject$.getValue());
  }

  renameOrg(org: Org, newName: string) {
    org.name = newName;
    this.orgsSubject$.next(this.orgsSubject$.getValue());
  }
}
