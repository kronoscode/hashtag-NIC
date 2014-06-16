(function(){
    var NIC = document.createElement('img');
    var dataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABICAYAAAC6L9h5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABIlJREFUeNrsnF9sU1Ucx7+3t/YvdO1wm0O7FaKhYSgVMHEGA2o0UQOWSIy8yHwQZ/RhL0uMiWEk0+iDuvhg0CVkJJgQRVN4WByY2QmhuAipFpZtbNpujK1jdO26rXT9cz3n2lZg61g00qX3901Oznq7pj2f/M5333N2TwVJkkBaXCpCQJAIEkEiSASJIBEkEkH6t1Lne0Ko9zhY52SN9+bM5W1FNPYAa/7Mz27epIO17gVZ3L4sYXA4mBbWqhVYNBE+dgarKS8kBqiNdXtpguE3PosYLP8tnsQANRGgnDay5mJMzDlI7IGNdfuJzTxQLTdXUgMxWVB7eQFlIW0nHnnlFPDmWT7vJolFXnWpMjmIlF8OStx3VomK/IjWbgSJIBEkgkSQlCjhm18n3D2jsW2EYhFI0jK7GWB20ovx0dPQqVK4z96A+IwfWqOtoJ9JvRzAXPujDbHwJejNNTKQw9Eq7Cq9ARMD9md3PYylW2Dd2AxRY1amJ10PHMVUsBOWB3aibG0dvEINNky0ojtmhsHigP2pH5BOzaL/511IzYWVB6nvpxcRGT0F2+bPsbL8ScTSEnr7DuGXNV9CM34C3ZGEXD1rHz+EyvWN8LU7lAVpKuhm7y6ietMnuWnkCvRDTEYwJ5agr/xt+HyfyeC4zKtfQMW6d3Dl9yblQAqcb4D1kX98ZiSehrZ3P05e1OLCxydw6et2aMbOoDM4nntNadVujPV+Kpt70UPig5TSc8ykq3LXOjv2ob31YRh7rDii9eCZJxw49sErGPr+JYQSafl3uKlz30olosUPiQ/SVPF0rop800lMnL0K0+tbYWt8FZHj36FmYBBrjjox5NmC9u73c6/VmzcgMnaq+HMSr6T4tB8Wq1N+/OOxPUiu7kHpKoF9oGkYRDXmVCuZN4lQxScxcMaEx/acw4MGUfYy7QrbXc1OBQ+THWPjSJ2rRahSi2qDBIs+gdG4AWWIIXSPDiadEbPXovBf343XnjugrDA5OeySKynY8TyGjBYkrmowIIgQVCpoBCOmbpgQCauZHySw6t5h2Gf5FDsgVyGvorsZLAsGiQPi4TAS1OLyFTsgalnTQVLr5J7HAyEZZwYWQ7S3HFHNGNZ5WrGp9g3lrN34mmzY+x6sjg+X7C8jvmakktOoevQjZeQkDkZvsqPPvWNJuWfQU4eZsBf317yrvF2AoQuNmAmdR0nls6h46K15XsO9K3j5C+hL1qN6c4tyt0r41Bu52IxQ4FuWql+W12r9XU75uqhegUpWPaayrQXbBVhW+0l82iWZmfMcxE2dh06+8C34ptu+I4Nt/cEY3Ze0WAT46nTQTxiW8X4SQSJIBIlEkAjS/wYpTBjuDMlLGGi6/VcF5LMlQr2Hvhwgv45nK6mLWOSVOwupjVjklUuGJB2s5ZACxGOeDvPjXDcbN/8nWIS45MTPvDXc8teNEeNRwEH+9HcFsbadMZEzpLDQxmTm/G1dBpoSbhXMnsd18ZY9MZnjsdTd28wpwmI6rOO/HUbesdP3J1HiJkgEiSARJIJEkEgL6i8BBgD0gakoaMvFYAAAAABJRU5ErkJggg==";
    NIC.setAttribute('class', 'twitter-hashflag');
    NIC.setAttribute('aria-label', 'Nicaragua');
    NIC.setAttribute('title', 'Nicaragua');
    NIC.setAttribute('draggable', 'false');
    NIC.setAttribute('src', dataUrl);
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
