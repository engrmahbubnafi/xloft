class FooterComponent extends HTMLElement {
    constructor () {
        super();
        this.innerHTML = 
            `
            <footer class="footer_area">
                <div class="container">
                    <div class="footer_row row">
                        <div class="col-md-6 col-sm-6 footer_about quick animate-box">
                            <h2>Quick links</h2>
                            <ul class="quick_link">
                                <li>
                                    <a href="floor-plan.html"><i class="fa fa-chevron-right"></i>Floor Plan</a>
                                </li>
                                <li>
                                    <a href="location-map.html"><i class="fa fa-chevron-right"></i>Location Map</a>
                                </li>
                                <li>
                                    <a href="about.html"><i class="fa fa-chevron-right"></i>About</a>
                                </li>
                                <li>
                                    <a href="contact.html"><i class="fa fa-chevron-right"></i>Contact</a>
                                </li>
                                <li>
                                    <a href="https://www.index-companies.com/"><i class="fa fa-chevron-right"></i>X-Index Companies</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-sm-6 footer_about animate-box">
                            <h2>CONTACT US</h2>
                            <address>
                                <p>Have questions, comments or just want to say hello:</p>
                                <ul class="my_address">
                                    <li>
                                        <a href="#"
                                            ><i class="fa fa-envelope" aria-hidden="true"></i
                                            >info@xloft.co</a
                                        >
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                            House # 32, Road # 12, Block-K, Baridhara Diplomatic Zone, Dhaka-1212.
                                        </a>
                                    </li>
                                </ul>
                            </address>
                        </div>
                    </div>
                </div>
                <div class="copyright_area">
                    &copy; 2022 <a href="/">XLOFT</a>. All rights reserved. 
                </div>
            </footer>
            <!-- End Footer Area -->
            `
    }
}
window.customElements.define('footer-component', FooterComponent);