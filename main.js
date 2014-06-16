(function(){
    var NIC = document.createElement('img');
    NIC.setAttribute('class', 'twitter-hashflag');
    NIC.setAttribute('aria-label', 'Nicaragua');
    NIC.setAttribute('title', 'Nicaragua');
    NIC.setAttribute('draggable', 'false');
    NIC.setAttribute('src', 'https://scontent-b-mia.xx.fbcdn.net/hphotos-xpa1/t1.0-9/10456259_10203952550954740_3817246750125613825_n.jpg');
    var loadFlag= function(){
      var elements = document.querySelectorAll("a:not(.nic-hashtag).twitter-hashtag[href='/hashtag/NIC?src=hash']");
      for (i=0; i<elements.length; i++){
        var container = document.createElement('span');
        container.setAttribute('class', 'twitter-hashflag-container');
        element = elements[i];
        element.className = element.className + ' nic-hashtag';
        parent = element.parentNode;
        foo = parent.replaceChild(container, element);
        container.innerHTML = element.outerHTML + NIC.outerHTML;
      } 
    };
    var body = document.getElementsByTagName('body')[0];
    body.addEventListener("DOMNodeInserted", function(e){
      loadFlag();
    }, false);
}).call(this);
