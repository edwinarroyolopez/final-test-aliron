import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  OVERVIEW,
  WEBSITE,
  OTA_RANK,
  SALES,
  COMMUNITY,
  PMS,
} from "./settings/constants";
import AuthProvider from "./context/auth";
import { InLineLoader } from "./components/InlineLoader/InlineLoader";
const Website = lazy(() => import("./containers/Website/Website"));
const AdminLayout = lazy(() => import("./containers/Layout/Layout"));
const Overview = lazy(() => import("./containers/Overview/Overview"));
const OtaRank = lazy(() => import("./containers/OtaRank/OtaRank"));
const Sales = lazy(() => import("./containers/Sales/Sales"));
const Community = lazy(() => import("./containers/Community/Community"));
const Pms = lazy(() => import("./containers/Pms/Pms"));
const NotFound = lazy(() => import("./containers/NotFound/NotFound"));

const Routes = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<InLineLoader />}>
        <Switch>
          <Route exact={true} path={OVERVIEW}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Overview />
              </Suspense>
            </AdminLayout>
          </Route>
          <Route path={WEBSITE}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Website />
              </Suspense>
            </AdminLayout>
          </Route>
          <Route path={OTA_RANK}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <OtaRank />
              </Suspense>
            </AdminLayout>
          </Route>
          <Route path={SALES}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Sales />
              </Suspense>
            </AdminLayout>
          </Route>

          <Route path={COMMUNITY}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Community />
              </Suspense>
            </AdminLayout>
          </Route>

          <Route path={PMS}>
            <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Pms />
              </Suspense>
            </AdminLayout>
          </Route>

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </AuthProvider>
  );
};

export default Routes;
