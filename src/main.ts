import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense} from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2VVhhQlFaclhJWHxOYVF2R2FJeVRyfF9EYkwgOX1dQl9hSXpTcUVlW3ddeHxTRWQ=");

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
