import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { NavComponent } from './comps/general/nav/nav.component';
import { ArrowComponent } from './comps/general/arrow/arrow.component';
import { PizzaPanelComponent } from './comps/panels/pizza-panel/pizza-panel.component';
import { SaladPanelComponent } from './comps/panels/salad-panel/salad-panel.component';
import { DrinkPanelComponent } from './comps/panels/drink-panel/drink-panel.component';
import { PasteryPanelComponent } from './comps/panels/pastery-panel/pastery-panel.component';
import { PasteryCardComponent } from './comps/cards/pastery-card/pastery-card.component';
import { PizzaCardComponent } from './comps/cards/pizza-card/pizza-card.component';
import { SaladCardComponent } from './comps/cards/salad-card/salad-card.component';
import { DrinkCardComponent } from './comps/cards/drink-card/drink-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ArrowComponent,
    PizzaPanelComponent,
    SaladPanelComponent,
    DrinkPanelComponent,
    PasteryPanelComponent,
    PasteryCardComponent,
    PizzaCardComponent,
    SaladCardComponent,
    DrinkCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
