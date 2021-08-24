import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatCardModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
