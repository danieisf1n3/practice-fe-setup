import React from 'react';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { home, documents, wallet, person } from 'ionicons/icons';
import { AppProviders } from './providers';
import { HomePage } from '../presentation/pages/HomePage';
import { PoliciesPage } from '../presentation/pages/PoliciesPage';
import { PaymentsPage } from '../presentation/pages/PaymentsPage';
import { ProfilePage } from '../presentation/pages/ProfilePage';

setupIonicReact();

export const App: React.FC = () => {
  return (
    <IonApp>
      <AppProviders>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/policies" component={PoliciesPage} />
              <Route exact path="/payments" component={PaymentsPage} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="policies" href="/policies">
                <IonIcon icon={documents} />
                <IonLabel>Policies</IonLabel>
              </IonTabButton>
              <IonTabButton tab="payments" href="/payments">
                <IonIcon icon={wallet} />
                <IonLabel>Payments</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={person} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </AppProviders>
    </IonApp>
  );
};
