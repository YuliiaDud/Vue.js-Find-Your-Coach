import {createRouter,createWebHistory} from 'vue-router';
import CoachesList from "./pages/Coaches/CoachesList";
import CoachDetails from "./pages/Coaches/CoachDetails";
import CoachRegistration from "./pages/Coaches/CoachRegistration";
import ContactCoach from "./pages/Requests/ContactCoach";
import RequestsReceived from "./pages/Requests/RequestsReceived";
import NotFound from "./pages/NotFound";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {path: '/coaches/:id', component: CoachDetails,children:[
                {path: 'contact', component: ContactCoach}
            ]},
        {path: '/register', component: CoachRegistration},
        {path: '/requests', component: RequestsReceived},
        {path: '/:notFound(.*)', component: NotFound},
    ]
})

export default router;