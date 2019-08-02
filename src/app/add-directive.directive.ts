import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAddHost]'
})
export class AddDirectiveDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
