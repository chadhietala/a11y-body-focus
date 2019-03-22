import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service('router'),
  init() {
    this._super(...arguments);
    this.router.on('routeDidChange', transition => {

      if (document.activeElement) {
        document.activeElement.blur();
      }

      if (transition.to !== null) {
        document.body.focus();
      }
    });
  }
});
