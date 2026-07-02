$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");

        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //typing animation
    var typed = new Typed(".typing", {
        strings: ["SDET", "Developer", "Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true



    });
    var typed = new Typed(".typing-2", {
        strings: ["SDET", "Developer", "Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true



    });
    // Resume Modal Logic
    var modal = $('#resume-modal');
    var btn = $('#view-resume-btn');
    var closeSpan = $('.close-btn');

    btn.click(function (e) {
        e.preventDefault();
        modal.fadeIn(300);
        $('body').css('overflow', 'hidden');
    });

    closeSpan.click(function () {
        modal.fadeOut(300);
        $('body').css('overflow', 'auto');
    });

    $(window).click(function (event) {
        if ($(event.target).is(modal)) {
            modal.fadeOut(300);
            $('body').css('overflow', 'auto');
        }
    });

    // Horizontal Timeline Interactivity
    $('.timeline-point').click(function () {
        var target = $(this).attr('data-target');

        $('.timeline-point').removeClass('active');
        $(this).addClass('active');

        $('.timeline-card').removeClass('active');
        $('#' + target).addClass('active');
    });

    $('.timeline-card').click(function () {
        var target = $(this).attr('id');

        $('.timeline-card').removeClass('active');
        $(this).addClass('active');

        $('.timeline-point').removeClass('active');
        $('.timeline-point[data-target="' + target + '"]').addClass('active');
    });

    // Fetch live GitHub Repository Statistics
    $('.repo-stats').each(function () {
        var $stats = $(this);
        var repoName = $stats.attr('data-repo');

        $.ajax({
            url: 'https://api.github.com/repos/' + repoName,
            dataType: 'json',
            cache: false, // Prevents caching of API responses
            success: function (data) {
                var stars = data.stargazers_count;
                var forks = data.forks_count;

                $stats.find('.stars').html('<i class="fas fa-star"></i> ' + stars + ' Stars');
                $stats.find('.forks').html('<i class="fas fa-code-branch"></i> ' + forks + ' Forks');
            },
            error: function () {
                $stats.find('.stars').html('<i class="fas fa-star"></i> 0 Stars');
                $stats.find('.forks').html('<i class="fas fa-code-branch"></i> 0 Forks');
            }
        });
    });
});