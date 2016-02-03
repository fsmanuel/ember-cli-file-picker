import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
/* global Blob, jQuery */

moduleForComponent('file-picker', 'Integration | Component | file picker', {
  integration: true
});

test('it\'s testable', function(assert) {
  assert.expect(0);
  this.render(hbs`{{file-picker}}`);
  const file = new Blob(['']);
  file.name = 'filename';
  file.lastModifiedDate = new Date();
  const event = jQuery.Event('change');
  event.target = {
    files: [file]
  };
  Ember.run(() => {
    this.$('.file-picker__input').trigger(event);
  });
});
