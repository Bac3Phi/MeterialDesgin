 function sendMessage(){
      var form = document.getElementsByClassName("form-control")
      var currentDate = new Date();
      var message = form[0].value

      var fullName = form[1].value

      var email = form[2].value

      var comments = document.getElementById('comments')
      var numberOfComments = comments.children.length - 1

      var comment = document.createElement('div')
      comment.className = 'row'
      comment.innerHTML = `<div class="col-md-11"><p>${message}</p><footer><small><b>${fullName}</b> <i> (${email}) </i>at ${currentDate.toLocaleString('en-US', {hour12: true })} </small></footer><hr></div><div class="col-md-1 comment-num">${numberOfComments}</div>`
      comments.insertBefore(comment, comments.children[comments.children.length-1])
      alert("Your comments sent successfull!");
      var article = document.getElementById('alert')
      
      article.innerHTML=`<div class="alert alert-success alert-dismissible"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Success!</strong> Indicates a successful or positive action.</div>`; 
      }
// Ripple-effect animation
(function($) {
    $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
    })
})(jQuery);

$(function(){
    $("#includedContent").load("buttonGMD.html"); 
    $("#includedForm").load("formGMD.html");
  });
/*
 * Material Deesign Checkboxes non Polymer updated for use in bootstrap.
 * Tested and working in: IE9+, Chrome (Mobile + Desktop), Safari, Opera, Firefox.
 * @author Jason Mayes 2014, www.jasonmayes.com
 * @update Sergey Kupletsky 2014, www.design4net.ru
*/

var wskCheckbox = function() {
    var wskCheckboxes = [];
    var SPACE_KEY = 32;
  
    function addEventHandler(elem, eventType, handler) {
      if (elem.addEventListener) {
        elem.addEventListener (eventType, handler, false);
      }
      else if (elem.attachEvent) {
        elem.attachEvent ('on' + eventType, handler);
      }
    }
  
    function clickHandler(e) {
      e.stopPropagation();
      if (this.className.indexOf('checked') < 0) {
        this.className += ' checked';
      } else {
        this.className = 'chk-span';
      }
    }
  
    function keyHandler(e) {
      e.stopPropagation();
      if (e.keyCode === SPACE_KEY) {
        clickHandler.call(this, e);
        // Also update the checkbox state.
  
        var cbox = document.getElementById(this.parentNode.getAttribute('for'));
        cbox.checked = !cbox.checked;
      }
    }
  
    function clickHandlerLabel(e) {
      var id = this.getAttribute('for');
      var i = wskCheckboxes.length;
      while (i--) {
        if (wskCheckboxes[i].id === id) {
          if (wskCheckboxes[i].checkbox.className.indexOf('checked') < 0) {
            wskCheckboxes[i].checkbox.className += ' checked';
          } else {
            wskCheckboxes[i].checkbox.className = 'chk-span';
          }
          break;
        }
      }
    }
  
    function findCheckBoxes() {
      var labels =  document.getElementsByTagName('label');
      var i = labels.length;
      while (i--) {
        var posCheckbox = document.getElementById(labels[i].getAttribute('for'));
        if (posCheckbox !== null && posCheckbox.type === 'checkbox') {
          var text = labels[i].innerText;
          var span = document.createElement('span');
          span.className = 'chk-span';
          span.tabIndex = i;
          labels[i].insertBefore(span, labels[i].firstChild);
          addEventHandler(span, 'click', clickHandler);
          addEventHandler(span, 'keyup', keyHandler);
          addEventHandler(labels[i], 'click', clickHandlerLabel);
          wskCheckboxes.push({'checkbox': span,
              'id': labels[i].getAttribute('for')});
        }
      }
    }
  
    return {
      init: findCheckBoxes
    };
  }();
  
  wskCheckbox.init();