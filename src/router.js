import {createRouter,createWebHistory} from 'vue-router';
import CoachesList from "./pages/Coaches/CoachesList";
import CoachDetails from "./pages/Coaches/CoachDetails";
import CoachRegistration from "./pages/Coaches/CoachRegistration";
import ContactCoach from "./pages/Requests/ContactCoach";
import RequestsReceived from "./pages/Requests/RequestsReceived";
import UserAuth from "./pages/auth/UserAuth";
import NotFound from "./pages/NotFound";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id',
            component: CoachDetails,
            props: true, // ensure that id from the path '/coaches/:id' is passed as a prop
            children:[
                {path: 'contact', component: ContactCoach}
            ]},
        {path: '/register', component: CoachRegistration},
        {path: '/requests', component: RequestsReceived},
        {path: '/auth', component: UserAuth},
        {path: '/:notFound(.*)', component: NotFound},
    ]
})

export default router;