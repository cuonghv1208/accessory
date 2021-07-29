import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule, Provider } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbContextMenuModule,
    NbIconModule,
    NbLayoutDirection,
    NbLayoutModule,
    NbMediaBreakpoint,
    NbMenuModule,
    NbRadioModule,
    NbSearchModule,
    NbSelectModule,
    NbSidebarModule,
    NbThemeModule,
    NbUserModule
} from "@nebular/theme";
import { NgSelectModule } from "@ng-select/ng-select";
import { CORPORATE_THEME } from "../styles/theme.corporate";
import { COSMIC_THEME } from "../styles/theme.cosmic";
import { DARK_THEME } from "../styles/theme.dark";
import { DEFAULT_THEME } from "../styles/theme.default";
import { BtnSearchComponent } from "../template/btn-search/btn-search.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { NbSecurityModule } from "@nebular/security";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
    CapitalizePipe, NumberWithCommasPipe, PluralPipe, RoundPipe, TimingPipe
} from "../pipes";

const COMPONENTS = [
    BtnSearchComponent
];

const MAT_MODULES = [
    MatDialogModule,
    MatTabsModule
];

const BASE_MODULES = [CommonModule, FormsModule, NgSelectModule];

const NB_MODULES = [
    NbRadioModule,
    NbCardModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
];

const PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];

const MEDIA: NbMediaBreakpoint = {
    name: '',
    width: 12
};

const LAYOUTDE = NbLayoutDirection.RTL;

@NgModule({
    imports: [...BASE_MODULES, ...NB_MODULES, ...MAT_MODULES],
    exports: [...BASE_MODULES, ...NB_MODULES, ...MAT_MODULES, ...PIPES, ...COMPONENTS],
    declarations: [...COMPONENTS, ...PIPES],
})

export class LayoutModule {
    static forRoot(): ModuleWithProviders<LayoutModule> {
        return {
            ngModule: LayoutModule,
            providers:
                NbThemeModule.forRoot(
                    {
                        name: 'default',
                    },
                    [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
                ).providers,
        };
    }
}
