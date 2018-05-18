import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BartrixPage } from '../pages/bartrix/bartrix';
import { StHuBarPage } from '../pages/sthubar/sthubar';
import { FlorinesBarPage } from '../pages/florinesbar/florinesbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	BartrixPage,
	StHuBarPage,
	FlorinesBarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	BartrixPage,
	StHuBarPage,
	FlorinesBarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
