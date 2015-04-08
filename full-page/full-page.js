if (Meteor.isClient) {
  // counter starts at 0
  Template.hello.rendered = function() {
    $('#fullpage').fullpage();
  }

  Template.hello.rendered = function() {
      $('#fullpage').fullpage({
          verticalCentered: false,
          scrollOverflow: false
      });
  }

}
