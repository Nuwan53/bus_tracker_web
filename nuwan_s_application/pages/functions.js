
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    const page = this.textContent.trim();
                    let url = '#';
                    if (page === 'Home') url = 'RideOnTimeBusTrackingHomepage.html';
                    else if (page === 'Live Map') url = 'second.html';
                    else if (page === 'Schedule') url = 'third.html';
                    else if (page === 'About') url = 'fourth.html';
                    window.location.href = url;
                });
            });
        });
   
