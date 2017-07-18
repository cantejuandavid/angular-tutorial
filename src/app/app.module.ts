import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component'

import { AppRoutingModule } from './app-routing.component';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroesComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		FormsModule,
		AppRoutingModule
	],
	providers: [HeroService],
	bootstrap: [AppComponent]
})
export class AppModule { }

