import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
    imports: [
        MatCardModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
