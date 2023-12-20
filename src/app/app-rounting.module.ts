import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { DescriptionComponent } from './description/description.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'list/:id', component: ItemDetailComponent},
    {path: 'description', component: DescriptionComponent},
    {path: 'userdescription', component: ParentDataComponent},
    {path: 'twoWay', component: TwoWayBindingComponent}

]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}