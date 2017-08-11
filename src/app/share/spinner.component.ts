import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'acSpinner',
    template: `
        <div class="text-center spinner" *ngIf="show">
            <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        </div>
    `,
    styles: [`
        .spinner {
            padding-top: 20px;
            padding-bottom: 20px;
        }
    `]
})
export class SpinnerComponent implements OnInit {
    @Input() show: boolean;

    constructor() { }

    ngOnInit() { }
}