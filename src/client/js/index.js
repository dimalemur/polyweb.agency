import '../css/preloader.pcss';
import '../css/main_menu.pcss';
import '../css/main.pcss';
import '../css/about.pcss';
import '../css/team.pcss';
import '../css/portfolio.pcss';
import '../css/services.pcss';
import '../css/contacts.pcss';
import '../css/footer.pcss';
import '../css/style.pcss';
import IMask from 'imask';

let links = document.getElementsByTagName('a');

// При нажатии на элементы списка в навигации
Array.from(links).forEach(element => {
    element.addEventListener('click', event => {
        // desktop версия
        if (document.body.clientWidth < 900) {
            document.getElementById('desctop').style.display = "";
        }

        let idScrolledElem = element.getAttribute('href').split('#')[1];
        let scrolledElem = document.getElementById(idScrolledElem);
        scrolledElem.style.paddingTop = menu.offsetHeight + 'px';

        event.preventDefault()

        const blockID = element.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });

});

let phoneMask = IMask(
    document.getElementById('zipCode'), {
    mask: '+{7}-(000)-000-00-00'
});


let mobileMenu = document.getElementById('Mobile-Menu');

mobileMenu.addEventListener('click', event => {
    if (document.body.clientWidth < 900) {
        if (document.getElementById('desctop').style.display == '') {
            document.getElementById('desctop').style.display = "block";
        }
        else if (document.getElementById('desctop').style.display == 'block') {
            document.getElementById('desctop').style.display = "";

        }

    }
})


window.onresize = (event) => {
    if (document.body.clientWidth > 900) {
        document.getElementById('desctop').style.display = ''
    }
}


let servicesMenuItems = document.getElementsByClassName('services_menu_item');

let tap = (count) => {
    const m1 = document.getElementById('m1');
    const m2 = document.getElementById('m2');
    const m3 = document.getElementById('m3');
    const s1 = document.getElementById('s1');
    const s2 = document.getElementById('s2');
    const s3 = document.getElementById('s3');
    if (count == 1 && (m1.className != "active")) {
        m1.classList.add("active");
        m2.classList.remove("active");
        m3.classList.remove("active");
        s1.style.display = "block";
        s2.style.display = "none";
        s3.style.display = "none";
        m1.style.background = "url(../images/site_light.svg)";
        m2.style.background = "url(../images/content_dark.svg)";
        m3.style.background = "url(../images/design_dark.svg)";
    } else if (count == 2) {
        m1.classList.remove("active");
        m2.classList.add("active");
        m3.classList.remove("active");
        s1.style.display = "none";
        s2.style.display = "block";
        s3.style.display = "none";
        m1.style.background = "url(../images/site_dark.svg)";
        m2.style.background = "url(../images/content_light.svg)";
        m3.style.background = "url(../images/design_dark.svg)";
    } else if (count == 3) {
        m1.classList.remove("active");
        m2.classList.remove("active");
        m3.classList.add("active");
        s1.style.display = "none";
        s2.style.display = "none";
        s3.style.display = "block";
        m1.style.background = "url(../images/site_dark.svg)";
        m2.style.background = "url(../images/content_dark.svg)";
        m3.style.background = "url(../images/design_light.svg)";
    }
}

Array.from(servicesMenuItems).forEach((item) => {
    item.addEventListener('click', event => {
        switch (item.id) {
            case 'm1':
                tap(1)
                break;
            case 'm2':
                tap(2)
                break;
            case 'm3':
                tap(3)
                break;
            default:
                break;
        }
    });
});


let team = count => {
    let teamCol = document.getElementById('team_col');
    let width = document.documentElement.clientWidth;

    teamCol.style.right = count * width + 'px';

    if (count == 0 && (document.getElementById('t1').className != "active_c")) {
        document.getElementById('t1').classList.add("active_c");
        document.getElementById('t2').classList.remove("active_c");
    } else if (count == 1) {
        document.getElementById('t1').classList.remove("active_c");
        document.getElementById('t2').classList.add("active_c");
    }
}

let teamPoints = document.getElementsByClassName('team_circle');

Array.from(teamPoints).forEach(point => {
    point.addEventListener('click', event => {
        switch (point.id) {
            case 't1':
                team(0)
                break;
            case 't2':
                team(1)
                break;
            default:
                break;
        }
    });
});

let startX = 0;
document.getElementById('team_col').addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].clientX;
})

document.getElementById('team_col').addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let deltaX = endX - startX;
    if (deltaX > 50) {
        team(0);
    } else if (deltaX < -50) {
        team(1);
    }
})

function port(count) {
    let teamCol = document.getElementById('port');
    let width = document.documentElement.clientWidth;

    teamCol.style.right = count * width + 'px';


    if (count == 0 && (document.getElementById('p1').className != "active_c")) {
        document.getElementById('p1').classList.add("active_c");
        document.getElementById('p2').classList.remove("active_c");
        document.getElementById('p3').classList.remove("active_c");
        document.getElementById('p4').classList.remove("active_c");
        document.getElementById('p5').classList.remove("active_c");
    } else if (count == 1) {
        document.getElementById('p1').classList.remove("active_c");
        document.getElementById('p2').classList.add("active_c");
        document.getElementById('p3').classList.remove("active_c");
        document.getElementById('p4').classList.remove("active_c");
        document.getElementById('p5').classList.remove("active_c");
    } else if (count == 2) {
        document.getElementById('p1').classList.remove("active_c");
        document.getElementById('p2').classList.remove("active_c");
        document.getElementById('p3').classList.add("active_c");
        document.getElementById('p4').classList.remove("active_c");
        document.getElementById('p5').classList.remove("active_c");
    } else if (count == 3) {
        document.getElementById('p1').classList.remove("active_c");
        document.getElementById('p2').classList.remove("active_c");
        document.getElementById('p3').classList.add("active_c");
        document.getElementById('p4').classList.remove("active_c");
        document.getElementById('p5').classList.remove("active_c");
    }

}

Array.from(teamPoints).forEach(point => {
    point.addEventListener('click', event => {
        switch (point.id) {
            case 'p1':
                port(0)
                break;
            case 'p2':
                port(1)
                break;
            case 'p3':
                port(2)
                break;
            default:
                break;
        }
    });
});

document.getElementById('port').addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].clientX;
})

document.getElementById('port').addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let deltaX = endX - startX;

    const idNum = {
        ['p1']: 0,
        ['p2']: 1,
        ['p3']: 2
    }

    const lastActiveElement = document.getElementById('portfolio').getElementsByClassName('team_circle active_c')[0];

    if (deltaX > 50) {
        port((idNum[lastActiveElement.id] - 1 < 0) ? 0 : idNum[lastActiveElement.id] - 1);
    } else if (deltaX < -50) {
        port((idNum[lastActiveElement.id] + 1 > 2) ? 2 : idNum[lastActiveElement.id] + 1);
    }
});


document.body.onload = function () {
    var preloader = document.getElementById('preloader');
    setTimeout(function () {

        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 500);

    if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
        let port = document.getElementById('port');
        let team_c = document.querySelector('.team_c');
        
        port.classList.remove('port_col');
        port.classList.add('right-orientation');

        team_c.classList.add('right-orientation-team-c');
        team_c.classList.remove('team_c');
    }
};




window.addEventListener('resize', (e) => {
    let port = document.getElementById('port');
    let team_c = document.getElementById('team_circles');
    if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
        port.classList.remove('port_col');
        port.classList.add('right-orientation');
        
        team_c.classList.add('right-orientation-team-c');
        team_c.classList.remove('team_c');
    } else {
        port.classList.add('port_col');
        port.classList.remove('right-orientation');

        try {
            team_c.classList.remove('right-orientation-team-c');
            team_c.classList.add('team_c');
        } catch (error) {
            
        }
    }
})