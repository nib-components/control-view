var Tip         = require('tip');
var Control     = require('nib-health-funds-control');
var ControlView = Control.ControlView;

var init = ControlView.prototype.init;
ControlView.prototype.init = function() {
  init.call(this);

  this.feedbackTarget = this.el.querySelector('.js-feedback-icon');
  if (this.feedbackTarget) {
    this.tip = new Tip();
    this.tip
      .prependTo(this.feedbackContainer || this.feedbackMessage)
      .positionAt(this.feedbackTarget, 'bottom')
    ;
  }

};

var showMessage = ControlView.prototype.showMessage;
ControlView.prototype.showMessage = function() {
  showMessage.call(this);
  if (this.feedbackTarget) {
    this.tip.reposition().show();
  }
  return this;
};

var hideMessage = ControlView.prototype.hideMessage;
ControlView.prototype.hideMessage = function() {
  hideMessage.call(this);
  if (this.feedbackTarget) this.tip.hide();
  return this;
};

module.exports = ControlView;

