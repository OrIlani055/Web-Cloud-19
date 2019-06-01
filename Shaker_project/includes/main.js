$("#logo_shaker").mouseover(function () {
  $(this).effect("shake", { times:5 }, 200);
});


/*-----Show More Button-----*/

var wrap = document.getElementById('wrapper');
var clickBox = document.getElementById('more_button');

clickBox.onclick = function () { generateProjects();};


generateProjects = function () {
    var projBoxNum = 8;
    var i = 0;
    for (i = 3; i < 6; i++) {

      var project = document.createElement('div');
      $(project).attr({"data-toggle":"modal", "data-target":"#exampleModal", "data-whatever":projBoxNum});

        var projContainer = document.createElement('div');
        projContainer.className = "container";
        projContainer.innerHTML = '<img src="./images/proj'+i+'.jpeg" alt="pic">'

        var projHeart = document.createElement("img");
        projHeart.className = "small_logos";
        projHeart.id = "heart_logo";
        projHeart.innerHTML = '<img id="heart_logo"></img>';

        var projName = document.createElement('a');
        projName.innerHTML = '<a href="#?itemI'+i+'">פרוייקט '+i+'</a>'

        var projSmallContainer = document.createElement('div');
        projSmallContainer.className = "small_container";
        projSmallContainer.innerHTML = '<p>פרוייקט: שמלה מדברת</p><p>דרושים: מהנדס אלקטרוניקה, מהנדס תוכנה</p>';

        project.appendChild(projContainer);
        projContainer.appendChild(projName);
        projContainer.appendChild(projHeart);
        projContainer.appendChild(projSmallContainer);
        projBoxNum += 1;
        wrap.appendChild(project);
    }

};