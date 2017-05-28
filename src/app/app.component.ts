import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { CardsPage } from '../pages/cards/cards';
// import { ContentPage } from '../pages/content/content';
// import { MapPage } from '../pages/map/map';
// import { MenuPage } from '../pages/menu/menu';
// import { SearchPage } from '../pages/search/search';
// import { TabsPage } from '../pages/tabs/tabs';


import { FirstRunPage } from '../pages/pages';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { TeamListPage } from '../pages/team/list/list';
import { NotificationListPage } from '../pages/notification/list/list';
import { SettingsPage } from '../pages/settings/settings';

import { Settings } from '../providers/providers';
import { TranslateService } from '@ngx-translate/core'

@Component({
  templateUrl: '../pages/layouts/sidemenu.html'
})
export class MyApp {
  rootPage = DashboardPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    // { title: 'Tutorial', component: TutorialPage },
    // { title: 'Welcome', component: WelcomePage },
    // { title: 'Tabs', component: TabsPage },

    // { title: 'Cards', component: CardsPage },
    // { title: 'Content', component: ContentPage },
    // { title: 'Login', component: LoginPage },
    // { title: 'Signup', component: SignupPage },
    // { title: 'Map', component: MapPage },
    // { title: 'Menu', component: MenuPage },
    // { title: 'Search', component: SearchPage }

    { title: 'Dashboard', component: DashboardPage },
    { title: 'My Team', component: TeamListPage },
    { title: 'Notification', component: NotificationListPage },
    { title: 'Settings', component: SettingsPage },
    {title: 'Logout', component: null}
  ]

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.initTranslate();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }



  openPage(page) {
    if(page.component) {
        this.nav.setRoot(page.component);
    } else {
        // Since the component is null, this is the logout option
        // ...

        // logout logic
        // ...

        // redirect to home
        this.nav.setRoot(FirstRunPage);
    }
}
}
