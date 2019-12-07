$(document).ready(function () {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100 });

    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, { offset: -60, 'axis': 'y' });

    });

    /* ======= Fixed page nav when scrolled ======= */
    $(window).on('scroll resize load', function () {

        $('#page-nav-wrapper').removeClass('fixed');

        var scrollTop = $(this).scrollTop();
        var topDistance = $('#page-nav-wrapper').offset().top;

        if ((topDistance) > scrollTop) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
        }
        else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
        }

    });

    /* ======= Chart ========= */

    $('.chart').easyPieChart({
        barColor: '#00BCD4',//Pie chart colour
        trackColor: '#e8e8e8',
        scaleColor: false,
        lineWidth: 5,
        animate: 2000,
        onStep: function (from, to, percent) {
            $(this.el).find('span').text(Math.round(percent));
        }
    });



    /* ======= Isotope plugin ======= */
    /* Ref: http://isotope.metafizzy.co/ */
    // init Isotope
    var $container = $('.isotope');

    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        });
    });

    // filter items on click
    $('#filters').on('click', '.type', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.filters').each(function (i, typeGroup) {
        var $typeGroup = $(typeGroup);
        $typeGroup.on('click', '.type', function () {
            $typeGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

    const template = (data) => {
        data.responsibilities ? data.responsibilities = data.responsibilities.map(data => `<li>${data}</li>`) : null;
        return `
           <div class="item">
                <div class="work-place">
                    <h3 class="place">
                    <i class="fa fa-link"></i>
                        <a target="_blank" href="${data.url}">
                            <u>${data.place}</u>
                            <small>${data.title}</small>
                        </a>
                    </h3>
                    <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>${data.location}</div>
                </div>
                <div class="job-meta">
                    <div class="title">${data.job_title}</div>
                    <div class="time">${data.timeline}</div>
                </div><!--//job-meta-->
                <div class="job-desc">
                <ul>
                ${data.tech ? `<p><b>Technologies:</b><br/>${data.tech}</p>` : ""}
                    <p>
                        ${data.responsibilities ? "<b>Responsibilities:</b><br/>" : ""}
                        ${data.responsibilities ? data.responsibilities.join('<br/>') : ""}
                    </p>
                    </ul>
                </div><!--//job-desc-->
            </div><!--//Kayak-->
        `
    };

    const work_experiences = [{
        place: "DEIMOS Cloud",
        url: "https://deimos.io",
        title: "Experienced Computer Pipeline Plumber",
        location: "Remote, South Africa",
        job_title: "DevOps Engineer",
        timeline: "Mar. 2019 - Present",
        tech: "K8S, GCP, AWS, Ansible, Terraform, Velostrata, VMWare",
        responsibilities: [
            "Migrated VMs with Velostrata",
            "Fixed grub boot issues on on-prem OpenSUSE machine after critical failure",
            "Deployed K8s clusters both on-prem and GCP using Ansible with Xen and Terraform respectively",
            "System admin work with xen and VMWare",
            "Filesystem benchmarking for possible client proposals",
            "Migrated data dumps of 1TBs from mysql to cloudsql instances, fixed issues on sql compatibility with sed",
            "General research on best technology options for various problems",
            "General knowledge sharing and team assistance work in relation to Kubernetes"
        ]
    },
    {
        place: "WeeSpend",
        title: "Wannabe CTO",
        url: "#",
        location: "Lagos, Nigeria",
        job_title: "CTO",
        timeline: "Jan. 2019 - Apr. 2019",
        tech: "NodeJS, React, Redis, K8s, Cloud Build, Event Driven Architecture, Micro-services, KMS, MongoDB",
        responsibilities: [
            "Coordinated team affairs and software engineering choices",
            "Market research on product options in relation to cost and design expectations",
            "Backend development work and review of PRs from team mates",
            "Design of orchestration scripts for general components of the software architecture",
            "Management of progress on KPIs and task lists",
            "CI management, permission and role assignments for deployments, security work etc."
        ]
    },
    {
        place: "Raedah Group",
        title: "Remote Linux Ops Contractor",
        url: "#",
        location: "Remote, US",
        job_title: "Contractor",
        timeline: "Jan. 2019 - Mar. 2019",
        tech: "pf, OpenBSD, Go, Relayd",
        responsibilities: [
            "Maintained systems in Go",
            "Work with OpenBSD systems",
            "Relayd and PF configuration for configuring relay proxies",
            "Fixed issues with TLS termination on Go server",
            "Configured acme client and letsencrypt for certificate generation and renewals"
        ]
    },
    {
        place: "PAADC",
        title: "Software Lead",
        url: "http://paadc.theunilagengineer.com",
        location: "Lagos Nigeria",
        job_title: "Software Lead",
        timeline: "Aug. 2017 - Mar. 2019",
        tech: "PHP, cPanel, React, Laravel, CloudSQL",
        responsibilities: [
            "Maintained almost zero cost throughout project run using credits and cloud offerings",
            "Administered leadership practices through team meetings on progress",
            "Breakdown of tasks and site design expectations",
            "Recruitment of new team members in handling work load",
            "API design, general software work and relation of progress back to core board members"
        ]
    },
    {
        place: "Interswitch Group",
        url: "https://www.interswitchgroup.com",
        title: "Intern",
        location: "Lagos Nigeria",
        job_title: "Software Engineering Intern",
        timeline: "Jul. 2018 - Dec. 2018",
        tech: "Corda, Java, JS, K8S, Hyperledger, ELK, Spring Boot, Python, Go, Slate",
        responsibilities: [
            "Worked with Corda and other blockchain frameworks building POCs to verify product offerings",
            "Worked on demonstrating concepts such as private data on Hyperledger Fabric practically in Go.",
            "Read up and developed POC's demonstrating the feasibility about features on certain DLT and Blockchain frameworks (Hyperledger Fabric, Corda, Ethereum)",
            "Documented using slides the business potential for such technologies.",
            "Implemented reactive API's using Spring Boot Web Flux to interact with corda nodes over RPC using ArtermisMQ",
            "Automated documentation generation using postman collections with frontends implemented using Slate",
            "Kubernetes work amongst team members, general fixes, assisted with troubleshooting various issues etc"
        ]
    },
    {
        place: "Home",
        title: "Freelancer",
        url: "#",
        location: "Lagos Nigeria",
        job_title: "Professional Freelancer",
        timeline: "Jan. 2016 - Dec. 2018",
        tech: "PHP, cPanel, Laravel, Dialogflow, HTML Stack, Blockchain",
        responsibilities: [
            "Built an identity verification system using smart contracts and uPort for secure login functionality.",
            "Built a SPA using Vanilla JS and MaterializeCSS for an ALC project with GraphQL deployed on a MongoDB and Node Docker instance.",
            "Co-built a distributed music streaming service called coJam which demoed at Small Chops NG’s valentine program."
        ]
    },
    {
        place: "GRIT Systems",
        title: "Intern",
        url: "https://grit.systems/grit/home",
        location: "Lagos Nigeria",
        job_title: "Software Engineering Intern",
        timeline: "Jun. 2017 - Jul. 2018",
        tech: "Scala, Python, JS, Flask, Kafka (Confluent, Lenses), MongoDB, Embedded, Elastic, Serial, UART",
        responsibilities: [
            "Created an efficient notification service consuming large data from distributed (ElasticSearch, Kafka) instances sending alerts to firebase, email and SMS(Twilio, SIM) services.",
            "Researched on cryptocurrency applications and tested various engines such as Babble(Hashgraph) and Web3JS(Blockchain, Ethereum).",
            "Implemented test services (Bitbucket(pipelines), Nagios, Selenium(TestBots) to detect faults in production.",
            "Work with ARM devices, Rasbperry Pis, Arduinos on certain remote IOT product offerings",
            "Fixed countless issues with linux related faults, networking and OS related errors",
            "Python code to interact with hardware devices over GPIO for network and ADC related tasks",
            "Wrote a Kafka Connect plugin to perform data remapping in anticipation of an avro schema change.",
            "Worked with Kafka extensively, in stream data manipulations, kafka connect, kafka streams, schema registry"
        ]
    },
    {
        place: "Startup Studio",
        title: "Remote Software Engineer",
        url: "#",
        location: "Remote, Lagos Nigeria",
        job_title: "Software Engineer",
        timeline: "Sep. 2017 - Mar. 2018",
        tech: "Wordpress, JS, HTML Stack, PHP, Laravel, Dialogflow",
        responsibilities: [
            "Implemented chatbot functionality using endpoints hosted and created using ngrok and Laravel and NLP services from Dialog Flow.",
            "Consumed data from an Excel file containing large records into an SQL database using the PHPExcel module.",
            "Mostly Wordpress work, PHP and Laravel API development etc."

        ]
    },
    {
        place: "iQube Labs",
        title: "Software Engineer",
        url: "#",
        location: "Lagos Nigeria",
        job_title: "Software Engineer",
        timeline: "Mar. 2016 - Mar. 2018",
        tech: "Wordpress, JS, HTML Stack, PHP, Drones, OpenCV, Algorithms",
        responsibilities: [
            "Designed APIs on Laravel",
            "Fixed issues with team mates relating to HTML and Linux",
            "Used OpenCV in research for some projects",
            "Worked with drones and robotic devices",
            "Some wordpress work here and there!"
        ]
    },
    {
        place: "HealthFacts NG",
        title: "Software Engineer",
        url: "#",
        location: "Lagos Nigeria",
        job_title: "Software Engineer",
        timeline: "Jan. 2017 - Sep. 2017",
        tech: "Wordpress, JS, HTML Stack, PHP",
        responsibilities: [
            "Some wordpress work here and there!"
        ]
    },
    ];
    work_experiences.forEach(function (data) {
        $('#experience-timeline').append(template(data));
    });


    const leadership_experiences = [
        {
            place: "Google Developer Group Lagos",
            url: "https://www.meetup.com/en-AU/gdg-lagos/",
            title: "Organizer",
            location: "Lagos Nigeria",
            job_title: "Organizer",
            timeline: "Oct. 2019 - Present",
        },
        {
            place: "Google Cloud Developer Community",
            url: "https://www.meetup.com/en-AU/GDG-Cloud-Lagos/",
            title: "Organizer",
            location: "Lagos Nigeria",
            job_title: "Organizer",
            timeline: "Apr. 2019 - Present",
        },
        {
            place: "AIESEC",
            url: "https://www.slideshare.net/slideshow/embed_code/key/n1cuZ49UisTvcO",
            title: "Team Member",
            location: "UNILAG",
            job_title: "Team Member",
            timeline: "Jun. 2019 - Present",
        },
        {
            place: "HashGraph",
            url: "https://hashgraph.com/",
            title: "Ambassador",
            location: "Lagos Nigeria",
            job_title: "Ambassador",
            timeline: "Jan. 2018 - Oct. 2019",
        },
        {
            place: "forLoop Africa",
            url: "#",
            title: "Student Ambassador",
            location: "UNILAG",
            job_title: "Student Ambassador",
            timeline: "Oct. 2017 - Oct. 2019",
        },
        {
            place: "Consonance NG",
            url: "#",
            title: "Student Ambassador",
            location: "UNILAG",
            job_title: "Student Ambassador",
            timeline: "Sep. 2017 - Oct. 2019",
        },
        {
            place: "Andela",
            url: "https://andela.com",
            title: "BootCamp Volunteer Learning Facilitator",
            location: "Andela Complex",
            job_title: "VLF",
            timeline: "OCt. 2018 - Jul. 2019",
        },
        {
            place: "Andela",
            url: "https://andela.com",
            title: "Learning Community Ambassador",
            location: "Andela Complex",
            job_title: "LCA",
            timeline: "Nov. 2016 - Nov. 2019",
        },
        {
            place: "Google Developer Group UNILAG",
            url: "http://unilag.gdg.ng",
            title: "Co-Manager",
            location: "UNILAG",
            job_title: "Co-Manager",
            timeline: "Jun. 2017 - Jul. 2018",
        },
    ];
    leadership_experiences.forEach(function (data) {
        $('#leadership-timeline').append(template(data));
    });


    const talks_experiences = [
        {
            place: "DevFest Ajah",
            url: "https://speakerdeck.com/tiemma/devfest-ajah-2019-understanding-ci-cd",
            title: "Understanding CI / CD",
            location: "Lagos Nigeria",
            job_title: "Speaker",
            timeline: "Nov. 16th 2019",
        },
        {
            place: "DevFest Ibadan",
            url: "https://speakerdeck.com/tiemma/what-devops-is-really-about",
            title: "What Is DevOps Really About",
            location: "Ibadan Nigeria",
            job_title: "Speaker",
            timeline: "Nov. 9th 2019",
        },
        {
            place: "DevFest Lagos",
            url: "https://speakerdeck.com/tiemma/what-devops-is-really-about",
            title: "What Is DevOps Really About",
            location: "Lagos Nigeria",
            job_title: "Organizer, Speaker",
            timeline: "Nov. 2nd 2019",
        },
        {
            place: "PyCon Nigeria",
            url: "https://speakerdeck.com/tiemma/event-driven-architecture-the-right-way",
            title: "Event Driven Architecture The Right Way",
            location: "Abuja Nigeria",
            job_title: "Speaker",
            timeline: "Nov. 1st 2019",
        },
        {
            place: "GDG Ojo-Festac",
            url: "https://speakerdeck.com/tiemma/gdg-ojo-festac-managing-api-deployments-on-cloud-endpoints",
            title: "Deploying APIs on Google Cloud Endpoints",
            location: "Lagos Nigeria",
            job_title: "Speaker",
            timeline: "Mar. 2nd 2019",
        },
        {
            place: "Linux Lagos Meetup",
            url: "https://speakerdeck.com/tiemma/building-docker-from-scratch",
            title: "Docker!!!, It's built on Cgroups",
            location: "Lagos Nigeria",
            job_title: "Speaker",
            timeline: "Feb. 16th 2019",
        },
        {
            place: "DevFest Ajah",
            url: "https://speakerdeck.com/tiemma/gdg-devfest-2018-kubernetes-your-go-to-orchestration-tool",
            title: "Kubernetes, Your Go-To Orchestration Tool",
            location: "Lagos Nigeria",
            job_title: "Speaker",
            timeline: "Nov. 17th 2018",
        },
        {
            place: "DevFest Lagos",
            url: "https://speakerdeck.com/tiemma/gdg-devfest-2018-kubernetes-your-go-to-orchestration-tool",
            title: "Kubernetes, Your Go-To Orchestration Tool",
            location: "Lagos Nigeria",
            job_title: "Speaker",
            timeline: "Nov. 3rd 2018",
        },
        {
            place: "Cloud Next '18 Ajah",
            url: "https://speakerdeck.com/tiemma/code-build-run-observe-on-gcp",
            title: "Code, Build, Run and Observe on GCP",
            location: "Lagos Nigeria",
            job_title: "Speaker",
            timeline: "Oct. 27th 2018",
        },
    ];
    talks_experiences.forEach(function (data) {
        $('#talks-timeline').append(template(data));
    });
});
