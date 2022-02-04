import { NgModule } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@NgModule({
    declarations: [],
    imports: [],
})
export class IconsModule {
    constructor() {
        library.add(fas, fab);
    }
}
