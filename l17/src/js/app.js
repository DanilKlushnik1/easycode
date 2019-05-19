import {HomeComponent} from "./components/home.component"
import {LoginComponent} from "./components/login.component"
import {ActiveRoute} from "./core/active.route"
import {Routing} from "./core/active.route"
// import {SignUpComponent} from "./components/singnUp.component"
const routes = { 
    '/': new HomeComponent(), 
    '/login': new LoginComponent(),
    '/user/:id' : new UserComponent(),
    // '/singnUp' : new SignUpComponent(),
    // '**': new NotFoundComponent() 
}; 

const activeRoute = new ActiveRoute()
 
const router = () => { 
    const container = document.querySelector('app-container'); 
    const request = activeRoute.parseRequestURL()
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');
 
    const component = routes[url] || routes['**'];  

    component.beforeRender().then(() =>{
        container.innerHTML = component.render(); 
        component.afterRender(); 
    }) 
} 
 
window.addEventListener('load', router); 
window.addEventListener('hashchange', router);


