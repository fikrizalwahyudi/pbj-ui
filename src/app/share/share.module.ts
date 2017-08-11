import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { SpinnerComponent } from './spinner.component';

@NgModule({
    declarations: [InputComponent,HeaderComponent, SpinnerComponent],
    imports: [ CommonModule,FormsModule ],
    exports: [InputComponent,HeaderComponent, SpinnerComponent],
    providers: [],
})
export class ShareModule {}