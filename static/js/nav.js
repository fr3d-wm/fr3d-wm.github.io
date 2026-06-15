function showSection(id) {
    // Define content to be loaded dynamically for each section
    const contentMap = {
        'waymo': `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full  panel-style">
                    <h3 class="title is-4">Waymo</h3>
                    <p>
                        Our method can forecast how dynamic 3D scenes evolve in a feed-forward manner.
                    </p>
                    <br>
                    <div id="wrapper" style="
              display: flex;
              flex-wrap: nowrap;
              justify-content: center;
              align-items: center;
              gap: 2em;
            ">
                        <div class="iframe-container">
                        <iframe class="vframe"
                            src="./build/?playbackPath=../static/recordings/waymo1.viser&initialCameraPosition=0,0,-3&initialCameraLookAt=0,0,0&initialCameraUp=0,-1,0&baseSpeed=0.8"
                            loading="lazy"></iframe>
                            <button onclick="openInNewTab(this)" data-link="./build/?playbackPath=../static/recordings/waymo1.viser&initialCameraPosition=0,0,-3&initialCameraLookAt=0,0,0&initialCameraUp=0,-1,0&synchronizedVideoOverlay=../static/recordings/waymo1.mp4&baseSpeed=0.8">Open in New Tab for Better Visualization</button>
                        </div>
                    </div>
                    <br>
                    <!-- <div>
            (Results are downsampled for efficient online rendering)
          </div> -->
                    <div class="hide-on-touchscreens" style="
            display: flex;
            justify-content: center;
            gap: 1.5em;
            padding-top: 0.5em;
          ">
                        <div>
                            <i class="ti ti-view-360-arrow"></i> <strong>Left-click</strong> and
                            drag to rotate
                        </div>
                        <div>
                            <i class="ti ti-arrows-move"></i> <strong>Right-click</strong> and
                            drag or
                            <strong>WASD</strong>
                            to move
                        </div>
                        <div><i class="ti ti-zoom"></i> <strong>Scroll</strong> to zoom</div>
                        <div><strong>Click <i class="fas fa-pause"></i></strong> to pause</div>
                    </div>
                    <button onclick="window.location.href='./interactive.html';" target="_blank"
        style="font-size: 20px; font-family: 'Arial', sans-serif; background-color: #92A8D1; color: white; margin: 20px auto; display: block; padding: 15px 15px; border: none; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); text-align: center; transition: all 0.3s ease; cursor: pointer;">
    <span class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
                                                style="fill: #ffffff">
                                                <path
                                                    d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z">
                                                </path>
                                            </svg>
                                        </span>
                </div>
            </div>
        </div><br>
        `,
        'kitti': `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <h2 class="title is-4">KITTI</h2>

                    <p>Our method exhibits strong zero-shot generalization on KITTI.</p>
                    <br>
                    <div id="wrapper" style="
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: center;
                    gap: 2em;
                  ">
                        <div class="iframe-container">
                        <iframe class="vframe"
                            src="./build/?playbackPath=../static/recordings/kitti1.viser&initialCameraPosition=0,0,-3&initialCameraLookAt=0,0,0&initialCameraUp=0,-1,0&baseSpeed=0.8"
                            loading="lazy"></iframe>
                            <button onclick="openInNewTab(this)" data-link="./build/?playbackPath=../static/recordings/kitti1.viser&initialCameraPosition=0,0,-3&initialCameraLookAt=0,0,0&initialCameraUp=0,-1,0&synchronizedVideoOverlay=../static/recordings/kitti1.mp4&baseSpeed=0.8">Open in New Tab for Better Visualization</button>
                        </div>
                    </div>
                    <br>
                    <div class="hide-on-touchscreens" style="
                  display: flex;
                  justify-content: center;
                  gap: 1.5em;
                  padding-top: 0.5em;
                ">
                        <div>
                            <i class="ti ti-view-360-arrow"></i> <strong>Left-click</strong> and
                            drag to rotate
                        </div>
                        <div>
                            <i class="ti ti-arrows-move"></i> <strong>Right-click</strong> and
                            drag or
                            <strong>WASD</strong>
                            to move
                        </div>
                        <div><i class="ti ti-zoom"></i> <strong>Scroll</strong> to zoom</div>
                        <div><strong>Click <i class="fas fa-pause"></i></strong> to pause</div>
                    </div>
                </div>
            </div>
        </div>
        `,
        'nuscenes': `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-full panel-style">
                    <h2 class="title is-4">nuScenes</h2>

                    <p>Our method exhibits strong zero-shot generalization on nuScenes.</p>
                    <br>
                    <div id="wrapper" style="
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: center;
                    gap: 2em;
                  ">
                        <div class="iframe-container">
                        <iframe class="vframe"
                            src="./build/?playbackPath=../static/recordings/nuscenes1.viser&initialCameraPosition=0,0,-3&initialCameraLookAt=0,0,0&initialCameraUp=0,-1,0&baseSpeed=0.8"
                            loading="lazy"></iframe>
                            <button onclick="openInNewTab(this)" data-link="./build/?playbackPath=../static/recordings/nuscenes1.viser&initialCameraPosition=0,0,-3&initialCameraLookAt=0,0,0&initialCameraUp=0,-1,0&synchronizedVideoOverlay=../static/recordings/nuscenes1.mp4&baseSpeed=0.8">Open in New Tab for Better Visualization</button>
                        </div>
                    </div>
                    <br>
                    <div class="hide-on-touchscreens" style="
                  display: flex;
                  justify-content: center;
                  gap: 1.5em;
                  padding-top: 0.5em;
                ">
                        <div>
                            <i class="ti ti-view-360-arrow"></i> <strong>Left-click</strong> and
                            drag to rotate
                        </div>
                        <div>
                            <i class="ti ti-arrows-move"></i> <strong>Right-click</strong> and
                            drag or
                            <strong>WASD</strong>
                            to move
                        </div>
                        <div><i class="ti ti-zoom"></i> <strong>Scroll</strong> to zoom</div>
                        <div><strong>Click <i class="fas fa-pause"></i></strong> to pause</div>
                    </div>

                </div>
            </div>
        </div>
        `
    };

    // Hide all sections and remove their content to free up memory
    const sections = document.getElementsByClassName('dynamic-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
        sections[i].hidden = true;
        // sections[i].innerHTML = '';
    }

    // Load content only for the clicked (or default) section
    const selectedSection = document.getElementById(id);
    selectedSection.hidden = false;
    // selectedSection.innerHTML = contentMap[id] || `<p>No content for section "${id}".</p>`;
    selectedSection.style.display = 'block';
}

function initCarouselResults() {
    document.querySelectorAll('#carousel-results video source[data-src]').forEach(srcTag => {
        const realSrc = srcTag.getAttribute('data-src');
        srcTag.setAttribute('src', realSrc);
        srcTag.removeAttribute('data-src');
    });

    bulmaCarousel.attach('#carousel-results', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pagination: false
    });
}

// Show default section on page load
document.addEventListener('DOMContentLoaded', function () {
    showSection('waymo');
    setActive('nav1');
});

function openInNewTab(element) {
    var url = element.getAttribute('data-link');
    window.open(url, '_blank').focus();
}