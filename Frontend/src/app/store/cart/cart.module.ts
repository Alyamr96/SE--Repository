import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CartRoutingModule } from './cart-routing.module';

import { CartComponent } from './cart.component';

@NgModule({
  imports: [ThemeModule, CartRoutingModule],
  declarations: [CartComponent],
  providers: []
})
export class CartModule {}
