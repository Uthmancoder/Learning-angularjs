import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/Container.Component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { CustomerListsComponent } from './customer-lists/customer-lists.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChiltToParentComponent } from './chilt-to-parent/chilt-to-parent.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { ContentProductsComponent } from './content-products/content-products.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { LifehooksdemoComponent } from './lifehooksdemo/lifehooksdemo.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentChildDemoComponent } from './content-child-demo/content-child-demo.component';
import { CustomAttributeComponent } from './custom-attribute/custom-attribute.component';
import { SetbackgroundDirective} from "./CustomDirectives/setbackgrounddirective";
import { Render2Component } from './render2/render2.component';
import { HoverDirective } from './hover.directive';
import { BetterhighlightDirective } from './betterhighlight.directive';
import { ClassDirective } from './class.directive';
import { ConditionaldirectiveComponent } from './conditionaldirective/conditionaldirective.component';
import { HighlightDirective } from './highlight.directive';
import { StyleDirective } from './style.directive';
import { AngulaComponentComponent } from './angula-component/angula-component.component';
import { JavascriptComponentComponent } from './javascript-component/javascript-component.component'
import { EnrollService } from './Services/enroll.service';
import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    CustomerListsComponent,
    ViewChildComponent,
    ChiltToParentComponent,
    NgcontentComponent,
    ContentProductsComponent,
    LifecycleHooksComponent,
    LifehooksdemoComponent,
    ContentChildComponent,
    ContentChildDemoComponent,
    CustomAttributeComponent,
    SetbackgroundDirective,
    Render2Component,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective,
    ConditionaldirectiveComponent,
    HighlightDirective,
    StyleDirective,
    AngulaComponentComponent,
    JavascriptComponentComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
