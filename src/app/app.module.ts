import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NodeComponent } from './components/node/node.component';
import { OrgTreeComponent } from './components/org-tree/org-tree.component';

@NgModule({
  declarations: [AppComponent, NodeComponent, OrgTreeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
