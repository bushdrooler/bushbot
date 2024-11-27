var navBar = `<section id="navBar"><div onclick="showMedia()" style="position: relative;left: -41px;transform: rotate(-5deg);width: 200px;z-index: 99;top: -1px;cursor: pointer;font-weight: 800;text-align: center;color: orange;font-size: 24px;display:none">
Click button.<br>
<div style="transform: rotate(88deg);font-size: 39px;position: absolute;left: 91px;top: 16px;">➧
</div>
</div>

<button onclick="location.assign('/')" style="background: rgb(36, 92, 125);">Reload pics</button>
<button onclick="location.assign('donatefunds/')">Donate</button>
<button onclick="location.assign('donatephotos/')">Add Photos</button>
<button onclick="location.assign('#form1')">Join Mail List</button>
<button onclick="location.assign('donatephotos/')">Selfie</button>

<button onclick="location.assign('//twitter.com/bushdrooler')">Twitter</button>
<button style="display:none" onclick="location.assign('/museum/')">Museum</button>
<div id="mssg"></div>
</section>


`;
//<button onclick="launchTweet()">Random</button>

document.getElementById('navvy').innerHTML = navBar;

