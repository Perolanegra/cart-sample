import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDrawer } from '@angular/material/sidenav';
import { NgModule } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { CdkTreeModule } from '@angular/cdk/tree';
// import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
// import 'moment/locale/pt-br';


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    // MatCheckboxModule,
    // MatTableModule,
    MatInputModule,
    // MatDialogModule,
    // MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // MatMenuModule,
    // MatProgressSpinnerModule,
    // MatSortModule,
    // MatSelectModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatChipsModule,
    // MatDividerModule,
    // CdkTreeModule,
    // MatTreeModule,
    // MatProgressBarModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    // MatCheckboxModule,
    // MatTableModule,
    MatInputModule,
    // MatDialogModule,
    // MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // MatMenuModule,
    // MatProgressSpinnerModule,
    // MatSortModule,
    // MatSelectModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatChipsModule,
    // MatDividerModule,
    // CdkTreeModule,
    // MatTreeModule,
    // MatProgressBarModule
  ],
  providers: [
    // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: { separatorKeyCodes: [ENTER, COMMA] } },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
  ]
})
export class MaterialModule {
}