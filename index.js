var Tip         = require('tip');
var Control     = require('nib-health-funds-control');
var ControlView = Control.ControlView;

var init = ControlView.prototype.init;
ControlView.prototype.init = function() {
  init.call(this);

  this.tip = new Tip();
  this.tip
    .prependTo(this.feedbackContainer || this.feedbackMessage)
    .positionAt(document.querySelector('.js-feedback-icon'), 'bottom')
  ;

};

var showMessage = ControlView.prototype.showMessage;
ControlView.prototype.showMessage = function() {
  showMessage.call(this);
  this.tip.show();
  return this;
};

var hideMessage = ControlView.prototype.hideMessage;
ControlView.prototype.hideMessage = function() {
  hideMessage.call(this);
  this.tip.hide();
  return this;
};

module.exports = ControlView;

