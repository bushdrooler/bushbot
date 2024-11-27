var navBar = `<section id="navBar"><div onclick="showMedia()" style="position: relative;left: -41px;transform: rotate(-5deg);width: 200px;z-index: 99;top: -1px;cursor: pointer;font-weight: 800;text-align: center;color: orange;font-size: 24px;display:none">
Click button.<br>
<div style="transform: rotate(88deg);font-size: 39px;position: absolute;left: 91px;top: 16px;">➧
</div>
</div>

<button onclick="showMedia()" style="background: rgb(36, 92, 125);">Reload pics</button>
<button onclick="updateInfo()">Donate</button>
<button onclick="updateInfo()">Add Photos</button>
<button onclick="updateInfo()">Join Mail List</button>
<button onclick="updateInfo()">Selfie</button>

<button onclick="location.assign('//twitter.com/bushdrooler')">Twitter</button>
<button style="display:none" onclick="updateInfo()">Museum</button>
<div id="mssg"></div>
</section>


`;

function updateInfo() {
    var message = `<h3>You can donate funds, donate images, join the mailing list, and inquire about the museum by emailing bushdrooler@gmail.com. Thanks!</h3>`;
    document.getElementById('info').innerHTML = message;
}
//<button onclick="launchTweet()">Random</button>

document.getElementById('navvy').innerHTML = navBar;

