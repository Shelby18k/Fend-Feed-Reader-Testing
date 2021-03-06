/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

         /* Test case 1: Checks whether the allFeeds array is defined
          * and contain elements
          */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*Test Case 2: Checks for the URL whether it is defined
         * and if defined whether it is empty string or not
         */

         it('URL is defined and not empty', function(){
            allFeeds.forEach(function(item){
                let a;
                expect(item['url']).toBeDefined();
                if(item['url']){
                    a = true
                }
                expect(a).toBe(true);
            });
         });


        /*Test Case 3: Function checks whether name is defined or not
         * and it is empty sstring or not
         */

         it('Name is defined and not empty', function(){
            allFeeds.forEach(function(item){
                expect(item['name']).toBeDefined();
                expect(item['name']).toBeTruthy();
            });
         });

    });


    //A new test suite starts "The menu"

    describe('The menu', function(){
         var body;
         var menuIcon;

         //Function runs before the test cases are tested
         beforeEach(function(){
            body = $('body');
            menuIcon = $('.menu-icon-link');
         });

         //Test Case 1: To test Menu is hidden or not when the page first load
        it('Menu is hidden by default', function(){
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /*Test Case 2: To test whether the toggle class
         * functionality is working fine or not
         */ 
        it('menu changes visibility when clicked', function(){
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });


    //A new Test Suite starts "Initial Entries"
    describe('Initial Entries',function(){
        beforeEach(function(done){
            loadFeed(0,done);
        });

        /*Test Case 1: To test whether the API is responding or not
         *by checking API returs some news feeds
         */
        it('container has at least one entry', function(done){
            var container = $('.feed .entry').length;
            expect(container).not.toBe(0);
            done();
        });
    });

        //New Test Suite "New Feed Selection"
    describe('New Feed Selection', function() {
        var content;

        beforeEach(function(done) {
            loadFeed(1, function() {
                content = $('.feed').html();

                loadFeed(0, function(){
                	newContent = $('.feed').html()
                	done();
                });
            });
        });

        /*  This is the test that ensures when a new feed is loaded
            by the loadFeed function that the content actually changes.*/
        it('verified new feed is loaded', function(done) {
                expect(newContent).not.toEqual(content);
                done();
        });
	});
}());
