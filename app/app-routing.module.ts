import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { AddCoursesComponent } from './components/courses/add-courses/add-courses.component';
import { ServicesListComponent } from './components/services/services-list/services-list.component';
import { EditServicesComponent } from './components/services/edit-services/edit-services.component';
import { AddServicesComponent } from './components/services/add-services/add-services.component';
import { EditClientsComponent } from './components/clients/edit-clients/edit-clients.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';
import { AddClientsComponent } from './components/clients/add-clients/add-clients.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { AddUsersComponent } from './components/users/add-users/add-users.component';
import { EquipimentsCrudComponent } from './pages/equipiments-crud/equipiments-crud.component';
import { ContractsCrudComponent } from './pages/contracts-crud/contracts-crud.component';
import { UsersCrudComponent } from './pages/users-crud/users-crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { ClientsCrudComponent } from './pages/clients-crud/clients-crud.component';
import { CoursesCrudComponent } from './pages/courses-crud/courses-crud.component';
import { LibraryComponent } from './pages/library/library.component';
import { ParametersComponent } from './pages/parameters/parameters.component';
import { ServicesCrudComponent } from './pages/services-crud/services-crud.component';
import { PrintListCoursesComponent } from './components/courses/print-list-courses/print-list-courses.component';
import { StartComponent } from './pages/start/start.component';
import { AddEquipimentsComponent } from './components/equipiments/add-equipiments/add-equipiments.component';
import { EquipimentsListComponent } from './components/equipiments/equipiments-list/equipiments-list.component';
import { EditEquipimentsComponent } from './components/equipiments/edit-equipiments/edit-equipiments.component';
import { AuthGuard } from './pages/home/auth.guard';
import { AddVisitsComponent } from './components/visits/add-visits/add-visits.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      permissoes: ['admin', 'user']
    }
  },
  {
    path: "start",
    component: StartComponent,
    canActivate:[AuthGuard],
    data: {
      permissoes: ['admin', 'user']
    }
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate:[AuthGuard],
    data: {
      permissoes: ['user']
    }
  },
  {
    path: "services",
    component: ServicesCrudComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "clients",
    component: ClientsCrudComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "courses",
    component: CoursesCrudComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "parameters",
    component: ParametersComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "library",
    component: LibraryComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "budget",
    component: BudgetComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "users",
    component: UsersCrudComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "contracts",
    component: ContractsCrudComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "equipiments",
    component: EquipimentsCrudComponent ,
    canActivate:[AuthGuard]
  },
  { 
    path: "register-users", 
    component: AddUsersComponent,
    canActivate:[AuthGuard]
  },
  { 
    path: "view-users", 
    component: UsersListComponent,
    canActivate:[AuthGuard]
  },
  { path: "edit-users/:id", 
    component: EditUsersComponent,
    canActivate:[AuthGuard]
  },
  { 
    path: "register-clients", 
    component: AddClientsComponent,
    canActivate:[AuthGuard]
  },
  { 
    path: "view-clients", 
    component: ClientsListComponent,
    canActivate:[AuthGuard]
  },
  { path: "edit-clients/:id", 
    component: EditClientsComponent,
    canActivate:[AuthGuard]
  },
  { 
    path: "register-services", 
    component: AddServicesComponent,
    canActivate:[AuthGuard],
    data: {
      permissoes: ['admin', 'user']
    }
  },
  { 
    path: "view-services", 
    component: ServicesListComponent,
    canActivate:[AuthGuard]
  },
  { path: "edit-services/:id", 
    component: EditServicesComponent,
    canActivate:[AuthGuard],
  },
  { 
    path: "register-courses", 
    component: AddCoursesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "print-list-courses/:id",
    component: PrintListCoursesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "register-equipiment",
    component: AddEquipimentsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "view-equipiments",
    component: EquipimentsListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "edit-equipiments/:id",
    component: EditEquipimentsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "visits",
    component: AddVisitsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "upload-pdf",
    component: UploadFormComponent,
    canActivate:[AuthGuard]
  }
];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }