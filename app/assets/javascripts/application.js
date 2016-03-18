// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });


// I need to set a timer separately from the
// thing I want to execute. I think I want to execute
// create.js.erb

// function executeScript() {
//      $.getScript('<%"create.js.erb"%>',
//           blah blah blah
//           );
//  }
// function executeScript() {
//   $.getScript('<%"create.js.erb"%>', function() {
//
// });

function update(){
  $("#highest-box").load(location.href + " #highest-box");
};

setInterval("update()", 15000);

//
// function update(){
//    $.get("<%= j(show.html.erb)%>", function(data){
//        $('#highest-box').html(data);
//    });
// }
// $(document).ready(function(){
// window.setInterval('update()', 15000);
// });
