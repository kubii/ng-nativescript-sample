import {Directive, Input, ElementRef} from '@angular/core';

@Directive({
    selector: '[my-render-image]'
})
export class RenderImage {
    constructor(private element: ElementRef) { }
    
    @Input() 
    set imageData(data) {
        if (data) {
            this.element.nativeElement.width = data.width;
            this.element.nativeElement.height = data.height;
            this.element.nativeElement.getContext('2d').putImageData(data, 0, 0, 0, 0, data.width, data.height);
        }
    }
}