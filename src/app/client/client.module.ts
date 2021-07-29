import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LayoutModule } from 'src/@customs/layouts/layout.module';
import { ClientRoutingModule } from './client-routing.module';
import { AccessoryLayoutComponent } from 'src/@customs/layouts/accessory-layout/accessory-layout.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AccessoryLayoutComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        NgSelectModule,
        ClientRoutingModule,
        LayoutModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AccessoryLayoutComponent]
})
export class ClientModule { }
