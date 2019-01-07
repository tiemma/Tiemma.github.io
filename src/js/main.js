'use strict'



window.onload = () => {

  let timeout = 100;


  // Event listeners
  jQuery.fn.visibilityToggle = function () {
    return this.css('visibility', function (i, visibility) {
      return (visibility == 'visible') ? 'hidden' : 'visible';
    });
  }

  $("div.hamburger, #side-bar a").click(function() {
    $('#side-bar').toggleClass('hide-sidebar');
    $('div.hamburger').toggleClass('clicked');
  });

  // $(window).scroll(_.debounce(function () {

  //   if ($(this).scrollTop() >= $('#portfolio').position().top) {
  //     setTimeout(() => {
  //       animateCard('#landing');
  //     }, timeout)

  //   }

  //   if ($(this).scrollTop() >= $('#landing').position().top) {
  //     setTimeout(() => {
  //       animateCard('#about');
  //     }, timeout)

  //   }
  //   if ($(this).scrollTop() >= $('#about').position().top) {
  //     setTimeout(() => {
  //       animateCard('#skills');
  //     }, timeout)
  //   }

  //   if ($(this).scrollTop() >= $('#skills').position().top) {
  //     setTimeout(() => {
  //       animateCard('#speaking');
  //     }, timeout)
  //   }

  //   if ($(this).scrollTop() >= $('#speaking').position().top) {
  //     setTimeout(() => {
  //       animateCard('#projects');
  //     }, timeout)
  //   }

  //   if ($(this).scrollTop() >= $('#projects').position().top) {
  //     setTimeout(() => {
  //       animateCard('#tweets');
  //     }, timeout)
  //   }

  // }, 100));

  let animateToID = (id) => {
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 500);
  };

  let animateCard = (id) => {
    $(id).addClass('spaceInDown');
    $(id).removeClass('invisible');
    animateToID(id);
  }

  let increaseHeightOnHover = () => {
    let container = '.flip-container ',
      projectContainer = $(container).closest('#projects'),
      prevHeight = projectContainer.height();
    $(container).click(function () {
      if ($(this).hasClass('flip')) {
        $(container).removeClass('flip');
        projectContainer.height(prevHeight);
        $(container).removeClass(['swashIn', 'swashOut', 'zero-translate']);
        animateToID('#' + $(this).data('id'));
      } else {
        $(container).not(this).addClass('swashOut');
        $(this).addClass(['flip', 'zero-translate']);
        projectContainer.height($(`${container} .back .content`).height() + 300);
        animateToID('#projects');
      }
    });
  }


  // Tools used

  let createTool = (name, image, id) => {
    return $(`#${id}-tools`).append(`<div class="tool magictime foolishIn">
        <div class="tool-name align-center">${name}</div>
        <div class="tool-image">
          <!-- <img src="${image}" class="tool-image" title="" alt="Tool"> -->
        </div>
      </div>`);
  }

  let tools = [{
    name: 'Kubernetes',
    image: 'https://kubernetes.io/images/wheel.png',
    id: 'devops'
  },
  {
    name: 'Nagios',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  },
  {
    name: 'Prometheus',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  }, {
    name: 'Rancher',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  }, {
    name: 'Kubeless',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  },
  {
    name: 'Istio',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  },
  {
    name: 'Docker Compose',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  },
  {
    name: 'StackDriver',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  },
  {
    name: 'Redis',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  },
  {
    name: 'Kafka',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  },
  {
    name: 'Travis',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  },
  {
    name: 'Spinnaker',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  },
  {
    name: 'Jenkins',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  }, {
    name: 'ELK',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  }, {
    name: 'Kafka Connect',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  }, {
    name: 'Ansible',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  }, {
    name: 'Vagrant',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  }, {
    name: 'Nginx',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  }, {
    name: 'Schema Registry',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  }, {
    name: 'GRPC',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'devops'
  }, {
    name: 'VueJS',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'frontend'
  },
  {
    name: 'JQuery',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'frontend'
  }, {
    name: 'Laravel',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'backend'
  }, {
    name: 'Flask',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'backend'
  }
    , {
    name: 'Spring Boot',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'backend'
  },
  {
    name: 'NodeJS',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'backend'
  }, {
    name: 'Cgroups',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'linux'
  }, {
    name: 'FUSE',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'linux'
  }, {
    name: 'Networking IO',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'linux'
  }, {
    name: 'Kernel Process Lifecycle Debugging<br /><br />[Init, Ltrace]',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'linux'
  },
  {
    name: 'Proxies',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'networking'
  }, {
    name: 'Interface / Adapter Model on Linux/Windows',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'networking'
  },
  {
    name: 'DHCP and DNS Configuration <br /><br />[Kea, BIND]',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'networking'
  },
  {
    name: 'Kanban',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'methodology'
  },
  {
    name: '12 Factor',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'methodology'
  },
  {
    name: 'Agile',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'methodology'
  },
  {
    name: 'DMAIC',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'methodology'
  },

  ];

  tools.forEach((tool) => {
    createTool(tool.name, tool.image, tool.id);
  });



  // Posts for the speaker markup 

  let createSpeakerMarkup = (link, title, alt, id, icon) => {
    let linkIcon = icon || 'fas fa-link';
    return $(`#${id}-links`).append(`<div class="tool  magictime foolishIn">
        <div class="tool-name">
        <i class="${linkIcon}"></i>
        <a target="_blank" href="${link}" title="${alt}">${title}</a>
        </div>
        <div class="tool-image">
          <!-- <img src="" class="tool-image" title="" alt="Tool"> -->
        </div>
      </div>`);
  }

  let speakerPosts = [{
    link: 'http://bit.ly/stack-slides',
    title: 'DevFest Ajah - Stackdriver and GCP',
    alt: 'Logging with StackDriver and GCP',
    id: 'public-speaking'
  },
  {
    link: 'http://bit.ly/devfest-kube-slides',
    title: 'Kubernetes - The Full Intro!',
    alt: 'DevFest Lagos - Kubernetes',
    id: 'public-speaking'
  },
  {
    link: 'http://bit.ly/2F16U5g',
    title: 'UNILAG IO Extended - Flutter',
    alt: 'The Magic of Flutter',
    id: 'public-speaking'
  },
  {
    link: 'http://bit.ly/2F16U5g',
    title: 'Lean Six Sigma - Yellow Belt',
    alt: 'LSS',
    id: 'certification'
  },
  {
    link: 'https://onedrive.live.com/?cid=eb82b61796f97365&id=EB82B61796F97365%21380&ithint=file,pdf&authkey=!ABscBoByP2NTg9I',
    title: 'Google SEO Certification',
    alt: 'SEO Certification',
    id: 'certification'
  },
  {
    link: 'http://bit.ly/adwords-fundamentals-google',
    title: 'Google Adwords Fundamentals',
    alt: 'Adwords',
    id: 'certification'
  },
  {
    link: 'mailto:emmanueltimmy98@gmail.com',
    title: 'Email <br /><br />emmanueltimmy98@gmail.com',
    alt: 'email',
    id: 'contact'
  },
  {
    link: 'https://docs.google.com/document/d/1gue0DTS6RGdGnIG_-qyk6XLcF_AyZFpr3RoLr8Imtvs/edit?usp=sharing',
    title: 'Resume',
    alt: 'resume',
    id: 'contact'
  },
  ];

  speakerPosts.forEach((speech) => {
    createSpeakerMarkup(speech.link, speech.title, speech.alt, speech.id);
  });


  // Cards for the projects animation

  let createCard = (name) => {
    $(`.${name}`).click(function () {
      let element = $(`.${name}`).not(this);
      let thisElement = $(this);
      let timeout = 0;

      if (element.hasClass('hide')) {
        element.removeClass('swashOut');
        element.addClass('swashIn');
      } else {
        element.addClass('swashOut');
        element.removeClass('swashIn');
        timeout = 1000;
      }

      setTimeout(function () {
        element.toggleClass('hide');
        $(`#${name}s-title`).toggleClass('hide');
        $(`#${name}s`).trigger('click');
        // $('body').toggleClass('hide-overflow');

        let skillsText = thisElement.find(`.${name}-text`);
        skillsText.toggleClass('hide');

        $(`#${name}s`).toggleClass("spanOut");

      }, timeout);

    });

  }

  createCard('skill');
  createCard('project');


  //Projects
  let projects = [{
    links: [
      {
        link: 'https://tiemma.github.io/stackoverflow-lite/',
        title: 'Visit Site',
        alt: 'UI',
        icon: 'fas fa-globe'
      },
      {
        link: 'https://github.com/Tiemma/stackoverflow-lite',
        title: 'Github Repo',
        alt: 'Github Repository',
        icon: 'fab fa-github'
      },
      {
        link: 'https://stackoverflow-lite-api-node.herokuapp.com/',
        title: 'Swagger UI',
        alt: 'Swagger Dashboard',
      }
    ],
    status: 'COMPLETED',
    statusClass: 'completed',
    title: 'Stackoverflow Lite',
    description: `
    I built this during as a challenge exercise for an application to become a Volunteer Learning Facilitator role at Andela.
    The challenge had hinted that all features be implemented with base technologies<br/>[HTML, CSS and JS only!]<br /><br />
    of which no framework or ORM be used.
    <br /><br /> We were also mandated to write tests and cover a degree of criteria with progress tracking with Pivotal
    tracker, linting and code coverage with a 2 week and 1 week period for backend and frontend development respectively.
    <br /><br /> Unfortunately, the onboarding criteria for acceptance into the program for Nigeria required a NodeJS submission of which I had developed the
    entire platform in Flask, I had to rewrite the entire backend services, ORM and auth middlewares in NodeJS over the period of less than a week.
    <br /><br /> At the end of the 3 week challenge, we went through an array of online training sessions and a final inhouse interview.
    <br /><br />I was among the 5 applicants selected across the 36 states of Nigeria.`,
    tech: [
      {
        name: 'Postgresql<br /><br />[Docker]',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'HTML Stack',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Code Cliimate',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Travis CI',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Flask',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'NodeJS',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      }
    ],
    id: 'stackoverflow-lite'
  },
  {
    links: [
      {
        link: 'https://github.com/Tiemma/devfest-kubernetes-demo',
        title: 'Github Repo',
        alt: 'Github Repository',
        icon: 'fab fa-github'
      },
      {
        link: 'http://bit.ly/devfest-kube-slides',
        title: 'Presentation',
        alt: 'Presentation',
        icon: 'fas fa-chalkboard-teacher'
      }
    ],
    status: 'COMPLETED',
    statusClass: 'completed',
    title: 'DevFest Kubernetes Demo',
    description: `
    The project I used for my speech at DevFest Lagos 2018. I gave a speech on Kubernetes, various container methodologies as opposed to virtual machines
    along with a project which could be used to setup a single node cluster and deploy an application as a showcase.`,
    tech: [
      {
        name: 'Make',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'YAML',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Kubernetes',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'NodeJS',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Ingress NGINX Controller',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Docker',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      }
    ],
    id: 'devfest-kubernetes'
  },
  {
    links: [
      {
        link: 'https://github.com/Tiemma/grpc-crud',
        title: 'Github Repo',
        alt: 'Github Repository',
        icon: 'fab fa-github'
      }
    ],
    status: 'PROGRESSING',
    statusClass: 'progressing',
    title: 'GRPC Crud',
    description: `
    This is a microservice which I've been working on for about a month now. It's an intro project for me to learn the nitty
    gritty sides of various architecture patterns which I've covered from various books such as
    <em>Designing Distributed Systems</em> and
    <em>The SRE Handbook from Google</em>
    `,
    tech: [
      {
        name: 'Python',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'GRPC',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Kafka',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'ELK',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Docker Compose',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Pypiserver',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      }
    ],
    id: 'grpc-crud'
  },
  {
    links: [
      {
        link: 'http://bit.ly/stack-github',
        title: 'Github Repo',
        alt: 'Github Repository',
        icon: 'fab fa-github'
      },
      {
        link: 'http://bit.ly/stack-demo',
        title: 'Visit Site',
        alt: 'UI',
        icon: 'fas fa-globe'
      },
      {
        link: 'http://bit.ly/stack-slides',
        title: 'Presentation',
        alt: 'Presentation',
        icon: 'fas fa-chalkboard-teacher'
      }
    ],
    status: 'COMPLETED',
    statusClass: 'completed',
    title: 'Stackdriver Demo',
    description: `
    A demo project which I used to showcase the wonderful features provided by the distributed metrics tool called Stackdriver
    at a Devfest event in Ajah, Lagos.
    `,
    tech: [
      {
        name: 'NodeJS',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'StackDriver',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'StackDriver SDKs',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Google Cloud App Engine',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      }
    ],
    id: 'stackdriver-demo'
  },
  {
    links: [
      {
        link: 'https://github.com/Tiemma/kafka-websockets-node',
        title: 'Github Repo - POC ',
        alt: 'Github Repository',
        icon: 'fab fa-github'
      }
    ],
    status: 'IMPLEMENTED',
    statusClass: 'implemented',
    title: 'Kafka On Websockets',
    description: `
    A POC which I worked on to showcase a better model for replacing a polling system on Comet which ran in Scala.
    <br /><br />This was inspired as a solution for the lack of Websockets support for Lift in Scala. It was implemented
    during my employment at GRIT Systems, a power driven hardware IOT company in the heart of VI, Lagos.
    <br /><br />It basically streams data from the kafka clusters which would be consumed by a D3 dashboard for live updates
    about power usuage from the GRIT meters
    `,
    tech: [
      {
        name: 'NodeJS',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Kafka',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Schema Registry',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Avro-Kafka SDK',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Websockets',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      }
    ],
    id: 'kafka-websockets'
  },
  {
    links: [
      {
        link: 'https://github.com/Tiemma/ansible-vagrant-kubernetes-cluster',
        title: 'Github Repo',
        alt: 'Github Repository',
        icon: 'fab fa-github'
      },
      {
        link: 'https://askubuntu.com/questions/1095382/setting-up-a-kubernetes-cluster-on-ubuntu-18-04',
        title: 'Stackoverflow Thread',
        alt: 'Stackoverflow thread',
        icon: 'fab fa-stack-exchange'
      }
    ],
    status: 'COMPLETED',
    statusClass: 'completed',
    title: 'Kubernetes Orchestration',
    description: `
    This is a project which sets up a full kubernetes cluster with slave nodes and all that. It was built to try to diagnose
              the issues for a user who posted it on Stackoverflow.
    `,
    tech: [
      {
        name: 'Ansible',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Vagrant',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Kubernetes',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Bash Scripting',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      }
    ],
    id: 'kubernetes-orchestration'
  },
  {
    links: [
      {
        link: '#projects',
        title: 'Private Project [NO LINK]',
        alt: 'Private',
        icon: 'fas fa-eye-slash'
      }
    ],
    status: 'COMPLETED',
    statusClass: 'completed',
    title: 'Kafka Connect Plugin',
    description: `
    A project which was used to process data on a kafka topic following a massive schema change which wouldn't be migrated to
              older devices. I implemeted this in Java and used Kafka Connect and a couple other tools to generate helper
              classes from the Avro file alongside error handling, logging, benchmarks which hit 5ms highs alongside the
              usual tests and coverage.
              <br /><br />This was my first project where I really thought at scale as the Kafka cluster gets at least 50 messages published
              per second from personal benchmarks for which this was able to process at least 200 following a stress test.
              <br /><br /> This was implemented during my employment at GRIT Systems, a power driven hardware IOT company in the heart
              of VI, Lagos
    `,
    tech: [
      {
        name: 'Java',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Kafka',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Kafka Connect',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Spark [Whilst debugging a schema registry issue, I got to use this alongside]',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      ,
      {
        name: 'Avro class generators [Java]',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      }
    ],
    id: 'kafka-connect-plugin'
  },
  {
    links: [
      {
        link: 'https://github.com/Tiemma/PWA_ALC',
        title: 'Github Repo',
        alt: 'Github Repository',
        icon: 'fab fa-github'
      },
      {
        link: 'https://tiemma.github.io/PWA_ALC/',
        title: 'Visit Site',
        alt: 'UI',
        icon: 'fas fa-globe'
      },
      {
        link: 'https://drive.google.com/file/d/1Xj5XqKpRmMb97wZ1SZriB2MRdRrYTjXC/view',
        title: 'Certificate',
        alt: 'Document',
        icon: 'fas fa-certificate'
      },

    ],
    status: 'COMPLETED',
    statusClass: 'completed',
    title: 'PWA - News for the People',
    description: `
    A PWA developed as part of the challenges for being awarded a certificate in the Andela frontend program.

    `,
    tech: [
      {
        name: 'Service Workers',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'Javascript',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'MaterializeCSS',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      {
        name: 'IndexedDB',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      },
      ,
      {
        name: 'News API',
        image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png'
      }
    ],
    id: 'pwa-andela'
  }
  ];

  let offSet = 0
  let isMobile = () => { return ('ontouchstart' in document.documentElement); }
  projects.forEach((project) => {
    $(`.projects-status-list`).append(
      `<div class="flip-container project magictime" style="transform: translateY(${offSet}rem)" data-id="${project.id}" id="${project.id}">

      <div class="flipper">
        <div class="tool front black text flex-column">
        <p>${project.title}    <a href="#projects"><i class="projects-icon fas fa-expand right"></i></a></p>
          <p>STATUS:
            <em class="${project.statusClass}">${project.status}</em>
          </p>
        </div>
        <div class="tool back black text flex-column">
          <div class="content">
            <h2 class="text sub-header black-text">
              Description <i class="projects-icon far fa-window-close right"></i>
            </h2>
            <p class="description">${project.description}</p>

            <h2 class="text sub-header black-text">
                Technologies Used
            </h2>
            <div id="${project.id}-tools" class="tools-list"></div>

            <h2 class="text sub-header black-text">
                Links
            </h2>
            <div id="${project.id}-links" class="projects-list tools-list">
      
            </div>
          </div>
        </div>
      </div>
    </div>`
    );
    project.links.forEach((link) => {
      createSpeakerMarkup(link.link, link.title, link.alt, project.id, link.icon);
    })
    project.tech.forEach((tech) => {
      createTool(tech.name, tech.image, project.id);
    });
    offSet += isMobile() ? 10 : 15;
  });

  let multiplier = isMobile() ? 11 : 16;
  $(`.projects-status-list`).css('height', ( multiplier * projects.length) + 'rem')

  increaseHeightOnHover();

};
