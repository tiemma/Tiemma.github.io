'use strict'



window.onload = () => {

  let timeout = 100;

  $(window).scroll(_.debounce(function () {
    if ($(this).scrollTop() >= $('#landing').position().top) {
      setTimeout(() => {
        $('#about').addClass('spaceInLeft');
        $('#about').removeClass('invisible');
      }, timeout)

    }
    if ($(this).scrollTop() >= $('#about').position().top) {
      setTimeout(() => {
        $('#skills').addClass('spaceInRight');
        $('#skills').removeClass('invisible');
      }, timeout)
    }

    if ($(this).scrollTop() >= $('#skills').position().top) {
      setTimeout(() => {
        $('#speaking').addClass('spaceInRight');
        $('#speaking').removeClass('invisible');
      }, timeout)
    }

    if ($(this).scrollTop() >= $('#contact').position().top) {

    }
  }, 100));

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
    name: 'Kernel Process Lifecycle Debugging<br />[Init, Ltrace]',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'linux'
  },
  {
    name: 'SDN',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'networking'
  }, {
    name: 'Proxies',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'networking'
  }, {
    name: 'Interface / Adapter Model on Linux/Windows',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'networking'
  },
  {
    name: 'DHCP and DNS Configuration <br />[Kea, BIND]',
    image: 'http://akashreddy.com/assets/images/8ff2d571-2e58-4f83-9583-0dda305aaf9fnagios-logo-500x124.png',
    id: 'networking'
  },
  ];

  tools.forEach((tool) => {
    createTool(tool.name, tool.image, tool.id);
  });

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
  }
  ];

  speakerPosts.forEach((speech) => {
    createSpeakerMarkup(speech.link, speech.title, speech.alt, speech.id);
  });


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

  let increaseHeightOnHover = () => {
    let container = '.flip-container ',
      projectContainer = $(container).closest('#projects'),
      prevHeight = projectContainer.height();
    $(container).hover(
      _.debounce(() => {
        console.log($(`${container} .back`).height());
        console.log(prevHeight);
        projectContainer.height($(`${container} .back`).height() + 250)
      }),
      _.debounce(() => {
        projectContainer.height(prevHeight);
      })
    )
  }

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
    status: 'RUNNING',
    statusClass: 'completed',
    title: 'Stackoverflow Lite',
    description: `
    I built this during as a challenge exercise for an application to become a Volunteer Learning Facilitator role at Andela.
    The challenge had hinted that all features be implemented with base technologies[HTML, CSS and JS only!]
    of which no framework or ORM be used.
    <br /> We were also mandated to write tests and cover a degree of criteria with progress tracking with Pivotal
    tracker, linting and code coverage.
    <br /> At the end of the challenge, we went through an array of online training sessions and a final inhouse interview.
    I was among the 5 applicants selected across the 36 states of Nigeria.`,
    tech: [
      {
        name: 'Postgresql<br />[Docker]',
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
  }
  ];

  let offSet = 0
  projects.forEach((project) => {
    $(`.projects-list`).append(
      `<div class="flip-container project" ontouchstart="this.classList.toggle('hover');" style="transform: translateY(${offSet}rem)">

      <div class="flipper">
        <div class="tool front black text flex-column">
          <p>${project.title}</p>
          <p>STATUS:
            <em class="${project.statusClass}">${project.status}</em>
          </p>
        </div>
        <div class="tool back black text flex-column">
          <div class="content">
            <h2 class="text sub-header black-text">
              Description
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
    offSet += 10;
  });

  increaseHeightOnHover();

};
