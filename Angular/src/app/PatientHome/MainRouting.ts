
import { HomeComponent } from '../PatientHome/HomeComponent';
import { SecurityLogic } from "src/app/Utilities/Utility.AuthGuard";



export const MainRoutes=[
    {path:'',component:HomeComponent, canActivate:[SecurityLogic]},
    {path:'Home',component:HomeComponent, canActivate:[SecurityLogic]},
    {path:'Login',loadChildren:'src/app/Login/LoginPageModule#LoginModule'},
    {path:'Patient',loadChildren:'src/app/PatientInfo/PatientModule#PatientModule', canActivate:[SecurityLogic]},
    {path:'SearchPatient',loadChildren:'src/app/SearchPatient/SearchModule#SearchModule'}
];