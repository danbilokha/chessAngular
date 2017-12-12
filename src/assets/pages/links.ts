import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { DefaultComponent } from 'app/default/default.component';

export const links = [
    {
        caption: "Главная",
        link: "home",
        component: HomeComponent,
        i: "fa fa-home fa-2x",
    },
    {
        caption: "Играть",
        link: "game", 
        component: DefaultComponent,
        i: "fa fa-gamepad"
    },
    {
        caption: "Уроки",
        link: "lessons",
        component: DefaultComponent,
        i: "fa fa-list fa-2x",
    },
    {
        caption: "История",
        link: "history",
        component: DefaultComponent,
        i: "fa fa-bar-chart-o fa-2x",
    }, 
    {
        caption: "Локация",
        link: "map",
        component: DefaultComponent,
        i: "fa fa-map-marker fa-2x",
    }, 
    {
        caption: "Мы",
        link: "about",
        component: AboutComponent,
        i: "fa fa-info fa-2x",
    }
];