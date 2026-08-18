import React from 'react';
import { Route } from 'react-router-dom';
import { ClaimsListPage } from './presentation/pages';
import type { ClaimsContainer } from './di/container';

export function getClaimsRoutes(container: ClaimsContainer) {
  return (
    <>
      <Route path="/claims" exact>
        <ClaimsListPage container={container} />
      </Route>
    </>
  );
}
