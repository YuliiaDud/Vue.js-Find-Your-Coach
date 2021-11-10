import {createRouter,createWebHistory} from 'vue-router';
import CoachesList from "./pages/Coaches/CoachesList";
import CoachDetails from "./pages/Coaches/CoachDetails";
import CoachRegistration from "./pages/Coaches/CoachRegistration";
import ContactCoach from "./pages/Requests/ContactCoach";
import RequestsReceived from "./pages/Requests/RequestsReceived";
import UserAuth from "./pages/auth/UserAuth";
import NotFound from "./pages/NotFound";
import store from "./store";

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
        {path: '/register', component: CoachRegistration, meta:{ requiresAuth: true} },
        {path: '/requests', component: RequestsReceived, meta:{ requiresAuth: true}},
        {path: '/auth', component: UserAuth, meta:{ requiresUnauth: true}},
        {path: '/:notFound(.*)', component: NotFound},
    ]
})
router.beforeEach(function (to, from,next){
    if(to.meta.requiresAuth && !store.getters.isAuthenticated){
        next('auth');
    } else if(to.meta.requiresUnauth && store.getters.isAuthenticated){
        next('/coaches');
    }else{
        next();
    }
})
export default router;