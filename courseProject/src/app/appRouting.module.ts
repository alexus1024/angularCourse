import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';

const appRoutes: Routes = [
    { path: '', component: RecipesComponent, pathMatch: 'full', data: {} },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            {path: ':id', component: RecipeDetailComponent},
        ]
    },
    { path: 'shopping', component: ShoppingComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
