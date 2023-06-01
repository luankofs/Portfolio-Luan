function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***********************
  Menu Component
 ***********************/

const Menu = (props) => {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: `menu-container ${props.showMenu}` } /*#__PURE__*/,
    React.createElement("div", { className: "overlay" }) /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "menu-items" } /*#__PURE__*/,
      React.createElement(
        "ul",
        null /*#__PURE__*/,
        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#welcome-section", onClick: props.toggleMenu },
            "INICIO"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#about", onClick: props.toggleMenu },
            "SOBRE"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#projects", onClick: props.toggleMenu },
            "PORTFOLIO"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#contact", onClick: props.toggleMenu },
            "CONTATO"
          )
        )
      ) /*#__PURE__*/,

      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Nav Component
 ***********************/

const Nav = (props) => {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null /*#__PURE__*/,
    React.createElement(
      "nav",
      { id: "navbar" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "nav-wrapper" } /*#__PURE__*/,
        React.createElement(
          "p",
          { className: "brand" },
          "luan" /*#__PURE__*/,

          React.createElement("strong", null, "oliveira")
        ) /*#__PURE__*/,

        React.createElement(
          "a",
          {
            onClick: props.toggleMenu,
            className:
              props.showMenu === "active"
                ? "menu-button active"
                : "menu-button",
          } /*#__PURE__*/,

          React.createElement("span", null)
        )
      )
    )
  );
};

/***********************
  Header Component
 ***********************/

const Header = (props) => {
  return /*#__PURE__*/ React.createElement(
    "header",
    { id: "welcome-section" } /*#__PURE__*/,
    React.createElement("div", { className: "forest" }) /*#__PURE__*/,
    React.createElement("div", { className: "silhouette" }) /*#__PURE__*/,
    React.createElement("div", { className: "moon" }) /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "container" } /*#__PURE__*/,
      React.createElement(
        "h1",
        null /*#__PURE__*/,
        React.createElement(
          "span",
          { className: "line" },
          "designer gráfico"
        ) /*#__PURE__*/,
        React.createElement(
          "span",
          { className: "line" } /*#__PURE__*/,
          React.createElement("span", { className: "color" }, "&"),
          " desenvolvedor web."
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "buttons" } /*#__PURE__*/,
        React.createElement(
          "a",
          { href: "#projects" },
          "Meu portfólio"
        ) /*#__PURE__*/,
        React.createElement(
          "a",
          { href: "#contact", className: "cta" },
          "Entre em contato"
        )
      )
    )
  );
};

/***********************
  About Component
 ***********************/

const About = (props) => {
  return /*#__PURE__*/ React.createElement(
    "section",
    { id: "about" } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "wrapper" } /*#__PURE__*/,
      React.createElement(
        "article",
        null /*#__PURE__*/,
        React.createElement(
          "div",
          { className: "title" } /*#__PURE__*/,
          React.createElement("h3", null, "Quem é essa pessoa?") /*#__PURE__*/,
          React.createElement("p", { className: "separator" })
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "desc full" } /*#__PURE__*/,
          React.createElement(
            "h4",
            { className: "subtitle" },
            "Meu nome é Luan."
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Sou eterno estudante de desenvolvimento web, designer gráfico e UI design, localizado em São Paulo - Brasil."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Iniciando minha jornada nesta área, eu realmente gosto de resolver os problemas que as pessoas enfrentam com tecnologia, bem como tornar as coisas mais bonitas e mais fáceis de usar. Sempre aprendendo coisas novas, estou nesse mercado acumulando experiência há um ano, buscando me firmar como desenvolvedor. Sempre gostei de games, TI e claro, Star Wars! "
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "title" } /*#__PURE__*/,
          React.createElement("h3", null, "Oque você é?") /*#__PURE__*/,
          React.createElement("p", { className: "separator" })
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "desc" } /*#__PURE__*/,
          React.createElement(
            "h4",
            { className: "subtitle" },
            "Eu sou um desenvolvedor"
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Adentrei nesse mercado há quase um ano. Busco firmar experiência, e com isso estou sempre em aprendizado. Meu principal foco é JavaScript, sempre tentando me aplicar e aprimorar na tecnologia. Também deixo tudo mais bonito com CSS e SASS, e sempre que necessário uso alguns dos meus melhores amigos: tailwindCSS, bootstrap, bulma, etc."
          ) /*#__PURE__*/
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "desc" } /*#__PURE__*/,
          React.createElement(
            "h4",
            { className: "subtitle" },
            "e também... designer."
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Meu principal conforto como designer, é trabalhar com produtos da adobe como: Photoshop, Illustrator, Lightroom, entre outros, ao qual já tenho contato há mais de três anos, apesar de nunca ter trabalhado como designer gráfico. Sempre ajudei as pessoas com edição de imagens, criação para mídias sociais e posiiconamento de elementos. Atualmente, estou finalizando cursos voltados a UI e UX design. Para frameworks sempre costumei a usar figma."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Interfaces de usuário, brochuras, livros, branding... Você escolhe! Como mencionei, criar coisas bonitas é particularmente importante para mim."
          )
        )
      )
    )
  );
};

/***********************
  Project Component
 ***********************/

const Project = (props) => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node",
  };

  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "project" } /*#__PURE__*/,
    React.createElement(
      "a",
      {
        className: "project-link",
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      } /*#__PURE__*/,
      React.createElement("img", {
        className: "project-image",
        src: props.img,
        alt: "Screenshot of " + props.title,
      })
    ) /*#__PURE__*/,

    React.createElement(
      "div",
      { className: "project-details" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "project-tile" } /*#__PURE__*/,
        React.createElement(
          "p",
          { className: "icons" },
          props.tech
            .split(" ")
            .map((t /*#__PURE__*/) =>
              React.createElement("i", { className: tech[t], key: t })
            )
        ),

        props.title,
        " "
      ),

      props.children /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "buttons" } /*#__PURE__*/,
        React.createElement(
          "a",
          { href: repo, target: "_blank", rel: "noopener noreferrer" },
          "Prévia de código " /*#__PURE__*/,
          React.createElement("i", { className: "fas fa-external-link-alt" })
        ) /*#__PURE__*/,

        React.createElement(
          "a",
          { href: link, target: "_blank", rel: "noopener noreferrer" },
          "Testar ao vivo " /*#__PURE__*/,
          React.createElement("i", { className: "fas fa-external-link-alt" })
        )
      )
    )
  );
};

/***********************
  Projects Component
 ***********************/

const Projects = (props) => {
  return /*#__PURE__*/ React.createElement(
    "section",
    { id: "projects" } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "projects-container" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "heading" } /*#__PURE__*/,
        React.createElement(
          "h3",
          { className: "title" },
          "Meus trabalhos"
        ) /*#__PURE__*/,
        React.createElement("p", { className: "separator" }) /*#__PURE__*/,
        React.createElement(
          "p",
          { className: "subtitle" },
          "Apesar de não ter um embargo muito grande na área de programação",
          " estarei sempre mantendo atualizado todos os projetos trabalhei, dessa forma mais pessoas poderão acompanhar meus projetos e quem sabe, trabalharmos juntos para deixar algo mais bonito." /*#__PURE__*/
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "projects-wrapper" } /*#__PURE__*/,
        React.createElement(
          Project,
          {
            title: "Advocacia",
            img: "https://i.ibb.co/f1779y6/Screenshot-1.jpg",
            tech: "css js",
            link: "https://luankofs.github.io/",
            repo: "#",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Construído usando JS, CSS e Figma"
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Projeto criado utilizando o figma e logo após desenvolvendo o site para a advocacia, utilizando técnicas de grid-layout e flex-box, finalizando com JavaScript animando elementos, menu totalmente interativo e mobile, além de galerias, etc."
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Bikcraft.",
            img: "https://i.ibb.co/YDwyrf4/Screenshot-1.jpg",
            tech: "css js",
            link: "https://luankofs.github.io/Bikcraft/",
            repo: "#",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Construido usando CSS e JavaScript."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Projeto criado do 0, utilizando técnicas flex e grid, animando todos os elementos com javascript, assim como pequenos detalhes (menus, galeria, etc)."
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Fórum RPG: Heroes of Olympus.",
            img: "https://i.ibb.co/9sdgnrx/hoo.jpg",
            tech: "js css jquery",
            link: "https://heroesofolympus.forumeiros.com/forum",
            repo: "#",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Construido usando CSS e JavaScript + jQuery."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Aparência geral do site, usando CSS avançado e jQuery. Totalmente interativo, mudando as coress de acordo com o usuário inserido ao grupo"
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "FlexBlog.",
            img: "https://i.ibb.co/SVHGYLZ/Screenshot-1.png",
            tech: "css",
            link: "https://luankofs.github.io/Flexblog/",
            repo: "#",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Construido usando CSS e JavaScript."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Criação de landing page com precificação de produtos."
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Portfólio Lobo.",
            img: "https://i.ibb.co/3NBMyGP/Screenshot-2.jpg",
            tech: "css js",
            link: "https://luankofs.github.io/wolf-portfolio/",
            repo: "#",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Projeto construído usando CSS e JS."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Um projeto de landing page 'simples' portfólio, construído para o curso e cliente Lobo"
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Landing Page",
            img: "https://i.ibb.co/YtMYmHp/Screenshot-1-resized-1.png",
            tech: "js css",
            link: "#",
            repo: "#",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Construído usando CSS + JS."
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Uma simples página para uma série de palestras sobre marketing digital. Design construído no figma e codificando do zero. Não foi usado frameworks neste projeto."
          )
        )
      )
    )
  );
};

/***********************
  Contact Component
 ***********************/

const Contact = (props) => {
  return /*#__PURE__*/ React.createElement(
    "section",
    { id: "contact" } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "container" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "heading-wrapper" } /*#__PURE__*/,
        React.createElement(
          "div",
          { className: "heading" } /*#__PURE__*/,
          React.createElement(
            "p",
            { className: "title" },
            "Como você " /*#__PURE__*/,
            React.createElement("br", null),
            "pode me contatar?"
          ) /*#__PURE__*/,

          React.createElement("p", { className: "separator" }) /*#__PURE__*/,
          React.createElement(
            "p",
            { className: "subtitle" },
            "por favor, use o formulário para enviar um e-mail para: ",
            "" /*#__PURE__*/,
            React.createElement(
              "span",
              { className: "mail" },
              "luanolivfurlan" /*#__PURE__*/,

              React.createElement("i", { className: "fas fa-at at" }),
              "gmail" /*#__PURE__*/,

              React.createElement("i", { className: "fas fa-circle dot" }),
              "com"
            ),
            ":"
          )
        ) /*#__PURE__*/,

        React.createElement(SocialLinks, null)
      ) /*#__PURE__*/,

      React.createElement(
        "form",
        {
          id: "contact-form",
          action: "https://formsubmit.co/luanolivfurlan@gmail.com",
          method: "post",
        } /*#__PURE__*/,
        React.createElement("input", {
          placeholder: "Nome",
          name: "name",
          type: "text",
          required: true,
        }) /*#__PURE__*/,
        React.createElement("input", {
          placeholder: "Email",
          name: "email",
          type: "email",
          required: true,
        }) /*#__PURE__*/,
        React.createElement("textarea", {
          placeholder: "Mensagem",
          type: "text",
          name: "message",
        }) /*#__PURE__*/,
        React.createElement("hidden", {
          name: "_next",
          value: "",
        }) /*#__PURE__*/,
        React.createElement("input", {
          className: "button",
          id: "submit",
          value: "Enviar",
          type: "submit",
        })
      )
    )
  );
};

/***********************
  Footer Component
 ***********************/

const Footer = (props) => {
  return /*#__PURE__*/ React.createElement(
    "footer",
    null /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "wrapper" } /*#__PURE__*/,
      React.createElement("h3", null, "Obrigado pela visita") /*#__PURE__*/,
      React.createElement(
        "p",
        null,
        "\xA9 ",
        new Date().getFullYear(),
        " Luan Furlan."
      ) /*#__PURE__*/,
      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Social Links Component
 ***********************/

const SocialLinks = (props) => {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "social" } /*#__PURE__*/,
    React.createElement(
      "a",
      {
        href: "https://twitter.com/luankofs",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link para meu perfil no Twitter",
      },

      " " /*#__PURE__*/,
      React.createElement("i", { className: "fab fa-twitter" })
    ) /*#__PURE__*/,

    React.createElement(
      "a",
      {
        id: "profile-link",
        href: "https://github.com/luankofs",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link para o meu perfil do github",
      },

      " " /*#__PURE__*/,
      React.createElement("i", { className: "fab fa-github" })
    ) /*#__PURE__*/
  );
};

/***********************
  Main Component
 ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      menuState: false,
    });
    _defineProperty(
      this,
      "toggleMenu",

      () => {
        this.setState((state) => ({
          menuState: !state.menuState
            ? "active"
            : state.menuState === "deactive"
            ? "active"
            : "deactive",
        }));
      }
    );
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null /*#__PURE__*/,
      React.createElement(Menu, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }) /*#__PURE__*/,
      React.createElement(Nav, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }) /*#__PURE__*/,
      React.createElement(Header, null) /*#__PURE__*/,
      React.createElement(About, null) /*#__PURE__*/,
      React.createElement(Projects, null) /*#__PURE__*/,
      React.createElement(Contact, null) /*#__PURE__*/,
      React.createElement(Footer, null)
    );
  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}

ReactDOM.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.getElementById("app")
);
