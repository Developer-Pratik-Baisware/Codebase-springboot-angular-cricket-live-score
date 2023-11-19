import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
    {
        // this is additional route, when the path is empty, then redirect to live page
        // means when clicked on home, as home doesnt have ny sub path, so redirected to live
        path: "",
        redirectTo: "/live",
        pathMatch: "full"
    },
    {
        //means http://localhost:4200/home
        path: "home",
        component: HomeComponent,
        title: "Home | CrickHub"
    },
    {
        path: "history", 
        component: HistoryComponent,
        title: "History | CrickHub"
    },
    {
        path: "live",
        component: LiveComponent,
        title: "Live | CrickHub"
    },
    {
        path: "point-table",
        component: PointTableComponent,
        title: "Point Table | CrickHub"
    }
];
