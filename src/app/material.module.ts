import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDividerModule } from '@angular/material/divider'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [
        MatCardModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatDividerModule,
        MatGridListModule,
        MatExpansionModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCheckboxModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
