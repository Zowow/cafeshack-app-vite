function Footer() {
    return (
        <footer class="site-footer bg-gray-600 py-12 text-gray-300 text-base leading-6 relative z-10">
        <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <h6 class="text-white text-xl font-bold mb-2">About</h6>
                <p class="text-justify"><i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
            </div>

            <div class="w-full md:w-1/4 px-4">
                <h6 class="text-white text-xl font-bold mb-2">Categories</h6>
                <ul class="footer-links">
                <li><a href="" class="text-gray-300">C</a></li>
                <li><a href="" class="text-gray-300">UI Design</a></li>
                <li><a href="" class="text-gray-300">PHP</a></li>
                <li><a href="" class="text-gray-300">Java</a></li>
                <li><a href="" class="text-gray-300">Android</a></li>
                <li><a href="" class="text-gray-300">Templates</a></li>
                </ul>
            </div>

            <div class="w-full md:w-1/4 px-4">
                <h6 class="text-white text-xl font-bold mb-2">Quick Links</h6>
                <ul class="footer-links">
                <li><a href="" class="text-gray-300">About Us</a></li>
                <li><a href="" class="text-gray-300">Contact Us</a></li>
                <li><a href="" class="text-gray-300">Contribute</a></li>
                <li><a href="" class="text-gray-300">Privacy Policy</a></li>
                <li><a href="" class="text-gray-300">Sitemap</a></li>
                </ul>
            </div>
            </div>
            <hr class="border-t border-gray-700 mt-8"/>
        </div>
        <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-2/3 px-4 mb-8 md:mb-0">
                <p class="copyright-text mb-0">Copyright &copy; 2017 All Rights Reserved by
                <a href="#" class="text-blue-500">Scanfcode</a>.
                </p>
            </div>

            <div class="w-full md:w-1/3 px-4">
                <ul class="social-icons flex justify-end">
                <li><a class="facebook" href="#"><i class="fa fa-facebook text-gray-300"></i></a></li>
                <li><a class="twitter" href="#"><i class="fa fa-twitter text-gray-300"></i></a></li>
                <li><a class="dribbble" href="#"><i class="fa fa-dribbble text-gray-300"></i></a></li>
                <li><a class="linkedin" href="#"><i class="fa fa-linkedin text-gray-300"></i></a></li>
                </ul>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;