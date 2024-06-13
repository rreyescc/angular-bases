import { NgModule } from '@angular/core';
import { CountComponent } from './components/counter/count.component'

@NgModule({
  declarations: [
    CountComponent
  ],
  exports: [
    CountComponent
  ]

})
export class CountModule {}
