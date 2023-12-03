

        // showAbout();

        const aboutBtn = document.getElementById('tab1');
        const reviewsBtn = document.getElementById('tab2');
        const discussionBtn = document.getElementById('tab3');
        const content = document.querySelector(".tab-content");

        // const aboutBtn = document.getElementById()

        aboutBtn.addEventListener('click', () => {showAbout()})
        reviewsBtn.addEventListener('click', () => {showReviews()})
        discussionBtn.addEventListener('click', () => {showDiscussion()})




        function showAbout() {
            // console.log("good job bro");
            aboutBtn.classList.add('active-menu');
            discussionBtn.classList.remove('active-menu');
            reviewsBtn.classList.remove('active-menu');
            content.innerHTML = `<h2 >About Courses</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis excepturi dicta porro veritatis repellat et autem animi sint sed facere nam id saepe illum dolor, quasi tenetur esse pariatur repellendus netur esse pariatur repellend.</p>`;

        }


        function showReviews() {
            reviewsBtn.classList.add('active-menu');
            aboutBtn.classList.remove('active-menu');
            discussionBtn.classList.remove('active-menu');
            content.innerHTML = `<h2>Course Reviews</h2>
                <p>
                The Declaration of Independence proclaimed that the American colonies were separating from British rule, and detailed the reasons. On July 4, 1776, Congress voted to accept the Declaration of Independence, marking July 4  </p>`;

        }


        function showDiscussion() {
                discussionBtn.classList.add('active-menu');
                aboutBtn.classList.remove('active-menu');
                reviewsBtn.classList.remove('active-menu');
            content.innerHTML = `<h2>Discussions on Courses</h2>
                <p>The area began to come under British control in 1861 and was made a British colony in 1914. Nigeria gained independence in 1960 and became a republic in 1963. Ethnic strife soon led to military coups, and military groups ruled the country from.</p>`;

        }

        showAbout();



        // JS TO DISPLAY COURSE, AUDIO AND VIDEO CONTENT OF SIDE BOX

        function displayCourseContent() {
            const coursesEl = document.querySelector('.video-courses');
            const dropCaret = document.querySelector('.drop-courses');

            coursesEl.classList.toggle('details');
            dropCaret.classList.toggle('fa-angle-down');
            dropCaret.classList.toggle('fa-angle-up');

        }


        function displayAudioContent() {
            const audioEl = document.querySelector('.drop-audio');

            audioEl.classList.toggle('fa-angle-down');
            audioEl.classList.toggle('fa-angle-up');
        }


        function displayVideoContent() {
            const videoEl = document.querySelector('.drop-video');

            videoEl.classList.toggle('fa-angle-down');
            videoEl.classList.toggle('fa-angle-up');
        }


 
