import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImgComponent } from './componet/img/img.component';
import { ProductComponent } from './componet/product/product.component';
import { ProductsComponent } from './componet/products/products.component';
import { NavComponent } from './componet/nav/nav.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { TranforVocalsPipe } from './pipes/tranfor-vocals.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    FlexboxComponent,
    TimeAgoPipe,
    TranforVocalsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
