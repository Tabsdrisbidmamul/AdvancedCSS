$(function() {
    const $navBtn = $(".nav-btn");
    const $sideBarNav = $(".sidebar__nav");
    const $sideBar = $(".sidebar")
    const $closeBtn = $('.close-btn');

    const mediaQueryManager = () => {
        if(window.matchMedia("(max-width: 37.5em)")) {
            console.log(window.innerWidth);
            console.log("center-end");
            return "center-end";
        } else if (window.matchMedia("(max-width: 56.25em)")) {
            console.log(window.innerWidth);
            console.log("co-start 4");
            return "col-start 4";
        } else if (window.matchMedia("(max-width: 75em")) {
            console.log(window.innerWidth);
            console.log("col-start 4");
            return 'col-start 3';
        } else {
            console.log(window.innerWidth);
            console.log("center-start");
            return "center-start";
        }
    }

    $navBtn.on("click", () => {
        $navBtn.css({
            'visibility': 'none',
            'opacity': '0'
        });
        
        $sideBar.css({
            'grid-column': `sidebar-start / ${mediaQueryManager()}`,
            'z-index': '100',
        });
        
        $sideBarNav.css({
            'display': 'grid',
            'grid-template-column': 'subgrid',
            'align-content': 'center',
            'justify-content': 'center',
            'grid-gap': '2rem'
        });

        
    });

    $closeBtn.on("click", () => {
        $sideBar.css({
            'grid-column': 'sidebar-start / sidebar-end',
            'z-index': '100'
        });

        $navBtn.css({
            'visibility': 'visible',
            'opacity': '1'
        });

        $sideBarNav.css('display', 'none');
    })
});

