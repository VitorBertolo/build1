import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatCommonModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { AboutComponent } from "./pages/about/about.component";
import { BudgetComponent } from "./pages/budget/budget.component";
import { HomeComponent } from "./pages/home/home.component";
import { LibraryComponent } from "./pages/library/library.component";
import { ParametersComponent } from "./pages/parameters/parameters.component";
import { UsersCrudComponent } from "./pages/users-crud/users-crud.component";
import { ServicesCrudComponent } from "./pages/services-crud/services-crud.component";
import { ClientsCrudComponent } from "./pages/clients-crud/clients-crud.component";
import { CoursesCrudComponent } from "./pages/courses-crud/courses-crud.component";
import { HeaderComponent } from "./template/header/header.component";
import { NavComponent } from "./template/nav/nav.component";
import { FooterComponent } from "./template/footer/footer.component";
import { AddUsersComponent } from "./components/users/add-users/add-users.component";
import { EditUsersComponent } from "./components/users/edit-users/edit-users.component";
import { UsersListComponent } from "./components/users/users-list/users-list.component";
import { AddClientsComponent } from "./components/clients/add-clients/add-clients.component";
import { EditClientsComponent } from "./components/clients/edit-clients/edit-clients.component";
import { ClientsListComponent } from "./components/clients/clients-list/clients-list.component";
import { AddServicesComponent } from "./components/services/add-services/add-services.component";
import { EditServicesComponent } from "./components/services/edit-services/edit-services.component";
import { ServicesListComponent } from "./components/services/services-list/services-list.component";
import { AddCoursesComponent } from "./components/courses/add-courses/add-courses.component";
import { EditCoursesComponent } from "./components/courses/edit-courses/edit-courses.component";
import { CoursesListComponent } from "./components/courses/courses-list/courses-list.component";
import { AddContractsComponent } from "./components/contracts/add-contracts/add-contracts.component";
import { EditContractsComponent } from "./components/contracts/edit-contracts/edit-contracts.component";
import { ContractsListComponent } from "./components/contracts/contracts-list/contracts-list.component";
import { AddEquipimentsComponent } from "./components/equipiments/add-equipiments/add-equipiments.component";
import { EditEquipimentsComponent } from "./components/equipiments/edit-equipiments/edit-equipiments.component";
import { EquipimentsListComponent } from "./components/equipiments/equipiments-list/equipiments-list.component";
import { AddEquipimentsEnterComponent } from "./components/equipiments_enter/add-equipiments-enter/add-equipiments-enter.component";
import { EditEquipimentsEnterComponent } from "./components/equipiments_enter/edit-equipiments-enter/edit-equipiments-enter.component";
import { EquipimentsEnterListComponent } from "./components/equipiments_enter/equipiments-enter-list/equipiments-enter-list.component";
import { AddEquipimentsExitComponent } from "./components/equipiments-exit/add-equipiments-exit/add-equipiments-exit.component";
import { EditEquipimentsExitComponent } from "./components/equipiments-exit/edit-equipiments-exit/edit-equipiments-exit.component";
import { EquipimentsExitListComponent } from "./components/equipiments-exit/equipiments-exit-list/equipiments-exit-list.component";
import { AddListsComponent } from "./components/lists/add-lists/add-lists.component";
import { EditListsComponent } from "./components/lists/edit-lists/edit-lists.component";
import { ListsListComponent } from "./components/lists/lists-list/lists-list.component";
import { AddParametersCityComponent } from "./components/parameters_city/add-parameters-city/add-parameters-city.component";
import { EditParametersCityComponent } from "./components/parameters_city/edit-parameters-city/edit-parameters-city.component";
import { ParametersCityListComponent } from "./components/parameters_city/parameters-city-list/parameters-city-list.component";
import { AddParametersDocComponent } from "./components/parameters_doc/add-parameters-doc/add-parameters-doc.component";
import { EditParametersDocComponent } from "./components/parameters_doc/edit-parameters-doc/edit-parameters-doc.component";
import { ParametersDocListComponent } from "./components/parameters_doc/parameters-doc-list/parameters-doc-list.component";
import { AddParametersTrainingComponent } from "./components/parameters_training/add-parameters-training/add-parameters-training.component";
import { EditParametersTrainingComponent } from "./components/parameters_training/edit-parameters-training/edit-parameters-training.component";
import { ParametersTrainingListComponent } from "./components/parameters_training/parameters-training-list/parameters-training-list.component";
import { AddParametersContractComponent } from "./components/parameters_contract/add-parameters-contract/add-parameters-contract.component";
import { EditParametersContractComponent } from "./components/parameters_contract/edit-parameters-contract/edit-parameters-contract.component";
import { ParametersContractListComponent } from "./components/parameters_contract/parameters-contract-list/parameters-contract-list.component";
import { AddVisitsComponent } from "./components/visits/add-visits/add-visits.component";
import { EditVisitsComponent } from "./components/visits/edit-visits/edit-visits.component";
import { VisitsListComponent } from "./components/visits/visits-list/visits-list.component";
import { ListsCrudComponent } from "./pages/lists-crud/lists-crud.component";
import { ContractsCrudComponent } from "./pages/contracts-crud/contracts-crud.component";
import { EquipimentsCrudComponent } from "./pages/equipiments-crud/equipiments-crud.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PrintListCoursesComponent } from "./components/courses/print-list-courses/print-list-courses.component";
import { StartComponent } from "./pages/start/start.component";
import { MatNativeDateModule } from "@angular/material/core";
import { AddEquipimentsCalibrationComponent } from "./components/equipiments_calibration/add-equipiments-calibration/add-equipiments-calibration.component";
import { EquipimentsCalibrationListComponent } from "./components/equipiments_calibration/equipiments-calibration-list/equipiments-calibration-list.component";
import { EditEquipimentsCalibrationComponent } from "./components/equipiments_calibration/edit-equipiments-calibration/edit-equipiments-calibration.component";
import { ModalStartComponent } from "./pages/start/modal-start/modal-start.component";
import { AuthGuard } from "./pages/home/auth.guard";
import { AuthService } from "./pages/home/auth.service";
import { OrderFormComponent } from "./components/users/order-form/order-form.component";
import { ModalOrderComponent } from "./components/users/edit-users/modal-order/modal-order.component";
import { CpfPipe } from "./components/clients/clients-list/cpf.pipe";
import { CnpjPipe } from "./components/clients/clients-list/cnpj.pipe";
import { TelefonePipe } from "./components/clients/clients-list/telefone.pipe";
import { DataPipe } from "./components/services/services-list/data.pipe";
import { FilterPipe } from "./components/services/services-list/filter.pipe";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgxPrintModule } from "ngx-print";
import { FormatCnpjPipe } from "./components/services/add-services/format-cnpj.pipe";
import { UploadFormComponent } from "./components/upload-form/upload-form.component";
import { SendEmailComponent } from "./components/send-email/send-email.component";
import { ModalServicesComponent } from './components/upload-form/modal-services/modal-services.component';
import { NoticeComponent } from './components/notice/notice.component';
import { AddNoticesComponent } from './components/notice/add-notices/add-notices.component';
import { EditNoticesComponent } from './components/notice/edit-notices/edit-notices.component';
import { ListsNoticeComponent } from './components/notice/lists-notice/lists-notice.component';
import { FormularioComponent } from './components/test_new_components/formulario/formulario.component';
import { OrderFormServicesComponent } from './components/services/order-form-services/order-form-services.component';
import { PesquisaPipe } from './components/upload-form/pesquisa.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BudgetComponent,
    HomeComponent,
    LibraryComponent,
    ParametersComponent,
    UsersCrudComponent,
    ServicesCrudComponent,
    ClientsCrudComponent,
    CoursesCrudComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    AddUsersComponent,
    EditUsersComponent,
    UsersListComponent,
    AddClientsComponent,
    EditClientsComponent,
    ClientsListComponent,
    AddServicesComponent,
    EditServicesComponent,
    ServicesListComponent,
    AddCoursesComponent,
    EditCoursesComponent,
    CoursesListComponent,
    AddContractsComponent,
    EditContractsComponent,
    ContractsListComponent,
    AddEquipimentsComponent,
    EditEquipimentsComponent,
    EquipimentsListComponent,
    AddEquipimentsEnterComponent,
    EditEquipimentsEnterComponent,
    EquipimentsEnterListComponent,
    AddEquipimentsExitComponent,
    EditEquipimentsExitComponent,
    EquipimentsExitListComponent,
    AddListsComponent,
    EditListsComponent,
    ListsListComponent,
    AddParametersCityComponent,
    EditParametersCityComponent,
    ParametersCityListComponent,
    AddParametersDocComponent,
    EditParametersDocComponent,
    ParametersDocListComponent,
    AddParametersTrainingComponent,
    EditParametersTrainingComponent,
    ParametersTrainingListComponent,
    AddParametersContractComponent,
    EditParametersContractComponent,
    ParametersContractListComponent,
    AddVisitsComponent,
    EditVisitsComponent,
    VisitsListComponent,
    ListsCrudComponent,
    ContractsCrudComponent,
    EquipimentsCrudComponent,
    PrintListCoursesComponent,
    StartComponent,
    AddEquipimentsCalibrationComponent,
    EquipimentsCalibrationListComponent,
    EditEquipimentsCalibrationComponent,
    ModalStartComponent,
    OrderFormComponent,
    ModalOrderComponent,
    CpfPipe,
    CnpjPipe,
    TelefonePipe,
    DataPipe,
    FilterPipe,
    FormatCnpjPipe,
    UploadFormComponent,
    SendEmailComponent,
    ModalServicesComponent,
    NoticeComponent,
    AddNoticesComponent,
    EditNoticesComponent,
    ListsNoticeComponent,
    FormularioComponent,
    OrderFormServicesComponent,
    PesquisaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    RouterModule,
    FormsModule,
    MatNativeDateModule,
    HttpClientModule,
    NgxPrintModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
