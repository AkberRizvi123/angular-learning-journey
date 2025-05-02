import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent], // Components, directives, and pipes that belong to this module which are not standalone
  exports: [CardComponent], // Components, directives, and pipes that can be used in the component templates of other modules
})
export class SharedModule {}
