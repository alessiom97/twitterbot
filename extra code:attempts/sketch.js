
function process(txt) {

var text1 = "Importing the surrender of those lands Lost by his father, with all bonds of law, To our most valiant brother. So much for him. Now for ourself and for this time of meeting: Thus much the business is: we have here writ To Norway, uncle of young Fortinbras, Who, impotent and bed-rid, scarcely hears Of this his nephews purpose, to suppress His further gait herein in that the levies, The lists and full proportions, are all made Out of his subject: and we here dispatch You, good Cornelius, and you, Voltimand, For bearers of this greeting to old Norway Giving to you no further personal power To business with the king, more than the scope Of these delated articles allow. Farewell, and let your haste commend your duty.";

var text2 = "Though yet of Hamlet our dear brother's death The memory be green, and that it us befitted To bear our hearts in grief and our whole kingdom To be contracted in one brow of woe, Yet so far hath discretion fought with nature That we with wisest sorrow think on him, Together with remembrance of ourselves. Therefore our sometime sister, now our queen, The imperial jointress to this warlike state, Have we, as twere with a defeated joy, With an auspicious and a dropping eye, With mirth in funeral and with dirge in marriage, In equal scale weighing delight and dole, Taken to wife: nor have we herein barrd Your better wisdoms, which have freely gone With this affair along. For all, our thanks. Now follows, that you know, young Fortinbras, Holding a weak supposal of our worth, Or thinking by our late dear brothers death Our state to be disjoint and out of frame, Colleagued with the dream of his advantage, He hath not faild to pester us with message.";

  var delimiter = /(\W+)/;

  var tokens = text1.split(delimiter);

  var tokens2 = text2.split(delimiter);

  for (var i = 0; i < tokens.length; i++) {

    var regex = /^[a-z]{1,4}$/i;
    if (regex.test(tokens[i])) {
      tokens[i] = "";
    }
  }

  for (var j = 0; j < tokens2.length; j++) {

    var regex2 = /^[a-z]{1,4}$/i;
    if (regex2.test(tokens2[j])) {
      tokens2[j] = "";
    }
  }

  var output = tokens.join('');
  var par1 = createP(output);

  var output2 = tokens2.join('');
  var par2 = createP(output2);

}

function setup() {

  noCanvas();

  input = select('hello');
  button = select('#submit');
  button.mousePressed(handleInput);

  regexInput = select('#regex');
  globalCheck = select('#global');
  caseCheck = select('#case');
}

function fileLoaded(data) {
  var txt = data.join('\n');
  input.html(tokens);
}

function handleInput() {
  process(input.value());
}
