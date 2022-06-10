class NavigationBar extends HTMLElement {
    constructor () {
        super();
        this.innerHTML = 
            `
            <div id="navigation_bar" class="navigation-bar">
				<a href="index.html"><img src="images/nafi/logo.png" /></a>
				<div id="navigation_bar_menu" class="navigation-bar-menu">
					<ul>
						<li>
							<a href="index.html" style="color: black">Home</a>
						</li>
						<li>
							<a href="floor-plan.html" style="color: black">Floor Plan</a>
						</li>
						<li>
							<a href="location-map.html" style="color: black">Location Map</a>
						</li>
						<li>
							<a href="about.html" style="color: black">About</a>
						</li>
						<li>
							<a href="contact.html" style="color: black">Contact</a>
						</li>
					</ul>
				</div>
			</div>
            `
    }
}
window.customElements.define('navigation-bar', NavigationBar);