import { NgModule } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [],
    imports: [],
})
export class IconsModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, fab);
    }
}
