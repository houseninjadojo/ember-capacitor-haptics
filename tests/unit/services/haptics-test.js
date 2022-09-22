import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';

import { Haptics as NativeHaptics } from '@capacitor/haptics';

import {
  ImpactStyle,
  NotificationType,
} from 'ember-capacitor-haptics/services/haptics';

module('Unit | Service | haptics', function (hooks) {
  setupTest(hooks);

  // hooks.beforeEach(() => {
  //   console.log(NativeHaptics);
  //   this.impactStub = sinon.stub(NativeHaptics, 'impact');
  //   this.notificationStub = sinon.stub(NativeHaptics, 'notification');
  //   this.vibrateStub = sinon.stub(NativeHaptics, 'vibrate');
  //   this.selectionStartStub = sinon.stub(NativeHaptics, 'selectionStart');
  //   this.selectionChangedStub = sinon.stub(NativeHaptics, 'selectionChanged');
  //   this.selectionEndStub = sinon.stub(NativeHaptics, 'selectionEnd');
  // });

  // module('impact', function () {
  //   test('it calls NativeHaptics.impact with the correct params', async function (assert) {
  //     assert.expect(1);

  //     const service = this.owner.lookup('service:haptics');
  //     const style = ImpactStyle.Heavy;

  //     await service.impact(style);

  //     assert.true(this.impactStub.calledOnce);
  //   });
  // });
});
