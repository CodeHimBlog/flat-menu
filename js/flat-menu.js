/*   Project           : Flat Menu (Pull and Sliding Navigation System)
 *   Plugin Name       : flat-menu.js
 *   Plugin Version    : 1.0
 *   Last change       : 25/09/2018
 *   Framework css	     : Core Framework 3.0, + Material Design
 *   Framework js      : jQuery v3.2.1 min.js 
 *   Author            : Asif Mughal
 *   Official URL      : www.codehim.com
 *   License           : MIT License
 *   Copyright (c) 2018 - Asif Mughal
 */
/*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

$(document).ready(function(){

/* Variable Definitions */
    var sideBaricons, sideMenu, pulled, sliding, notifications,
dimmy, arrow, notifyCloseBtn;

/* Create some DOM elements */
 sliding = document.createElement("input");
 dimmy = document.createElement("div");
 arrow = document.createElement("i");
 notifyCloseBtn = document.createElement("span");
 

/* Accessing DOMs */
 sideBaricons = $(".menu-side-icons li");
 sideMenu = $(".flat-menu");
 notifications = $(".notification").find("li");

// Sliding 
    $(sliding).attr('type', 'range');
    $(sliding).addClass("slider").prop('min', 48).prop('max', 140);
    $(sliding).appendTo(sideMenu);

//Notifications
    $(notifyCloseBtn).addClass("notify-close").html("&times");
    $(notifications).prepend(notifyCloseBtn);

//Dropdown Arrow
    $(arrow).addClass("zmdi zmdi-chevron-down arrow").appendTo(".dropdown-heading");

function countNotification(){
var totalNotification = $(".notification").find("li").length;
$(".notify-badge").html(totalNotification);

   if(totalNotification <= 0){
       $(".notify-items").html("No Unread Notification").addClass("notify-empty");
        $(".notify-badge").fadeOut();
    }
 }
   countNotification();
    $(".ago").prepend("<i class='zmdi zmdi-time'></i> ");
   $(".notify-close").click(function(){
      $(this).parent().remove();
      countNotification();
   });


"use strict";
$(sliding).on('input', function(){
   $(sideMenu).css({
      'left' : '45px',
      'borderRadius' : '0 100% 100% 0',
        'width': ($(this).val()),
    });
      $("body").find("button, a, .theme-tray span").css({
        'position' : 'inherit',
    });
});

$(sliding).change(function(){
    if ($(this).val() > 60){
        openMenu();     
   }
   else if ($(this).val() < 60){
          closeMenu(); 
      }
 });

// Toggle Menu and show lists items
$(".lists").bind('click', function(){ 
     var its =  $(".lists-items");
    if(pulled == false){
        openMenu();
       $(its).fadeIn("slow");
       $(sideMenu).find("nav").not(its).hide();
    } 
   else {
        closeMenu();      
       }

});

//Show widgets items
$(".widgets").bind('click', function(){ 
     var its =  $(".widget-items");
      function showWidgets(){
      $(its).fadeIn("slow");
      $(sideMenu).find("nav").not(its).hide();
      }    
    if(pulled == false){
        openMenu();
        showWidgets();
    } 
   else if(pulled == true) {
        showWidgets();
       }
});
//Show Notifications 
$(".notify").bind('click', function(){ 
     var its =  $(".notify-items");
      function showNoti(){
      $(its).fadeIn("slow");
      $(sideMenu).find("nav").not(its).hide();
      }    
    if(pulled == false){
        openMenu();
        showNoti();
    } 
   else if(pulled == true) {
        showNoti();
       }
});

//Show Profile Contents
$(".profile").bind('click', function(){ 
     var its =  $(".profile-contents");
      function showProfile(){
      $(its).fadeIn("slow");
      $(sideMenu).find("nav").not(its).hide();
      }    
    if(pulled == false){
        openMenu();
        showProfile();
    } 
   else if(pulled == true) {
        showProfile();
       }
});


//Show Devices Contents
$(".devices").bind('click', function(){ 
     var its =  $(".devices-items");
      function showDevices(){
      $(its).fadeIn("slow");
      $(sideMenu).find("nav").not(its).hide();
      }    
    if(pulled == false){
        openMenu();
        showDevices()
    } 
   else if(pulled == true) {
        showDevices()
       }
});


//default value for pulled
   pulled = false;
function closeMenu(){
$(sideMenu).removeClass("menu-open").css({
      'left' : '-215px',
      'borderRadius' : '0',
      'overflow' : 'hidden',
      'width': '215px',
});
      $(dimmy).fadeOut();
      $(sliding).removeClass("pushed");
     $(".nav-container").removeClass("sweep-to-bottom");
    clickable();
    pulled = false;
}

function openMenu(){ 
    pulled = true;
$(sideMenu).addClass("menu-open").css({
      'left' : '45px',
      'borderRadius' : '0',
      'overflow' : 'auto',
        'width': '215px',
});
      $(dimmy).fadeIn();
   $(sliding).addClass("pushed");
   $(".nav-container").addClass("sweep-to-bottom");
    $("body").find("button, a, .theme-tray span").css({
        'position' : 'inherit',
    });
}
clickable();

//Dim overlayer
      $(dimmy).css({
        'width' : '100%',
        'height' : '100vh',
        'background' : 'rgba(255, 255, 255, 0.7)',
        'zIndex' : '2', 
        'position' : 'fixed',
        'top' : '0', 
        'left' : '0',
        'display' : 'none',
       }).appendTo("body");
    
$(sideBaricons).addClass("hvr-radial-out");
function clickable(){
     var toclick = $("body").find("button, a, .theme-tray span");
$(toclick).css({
   'position' : 'relative',
    'transition' : '1s',
   'zIndex' : '110', });
}

//Dropdowns
    $(".dropdown-heading").click(function(){
      var n = $(".has-sub").find("span:hover + ul li").length;
      var h = $(".has-sub").find("span:hover + ul li").outerHeight();
      var dropdown = h*n;
      var todrop = $(".has-sub").find("span:hover + ul");
      var nodrop = $(".has-sub ul");

    $(todrop).animate({"height" : dropdown}, 100);
    $(this).find("i").toggleClass("arrowdown");
    if ($(todrop).height() == dropdown){
      $(todrop).animate({"height" : 0}, 100);
    }

      if ($(nodrop).height(dropdown)){
        $(nodrop).not(todrop).height(0); $(".dropdown-heading").not(this).find("i").removeClass("arrowdown");
      }
 });
}); //jQuery