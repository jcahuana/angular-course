import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
  private portfolio: PortfolioInterface[] = [
    {
      name: 'Pasarela Safetypay México',
      url: 'pasarela-pago-safetypay-mexico',
      category: 'Web App',
      cover: 'photos/portafolio/safetypay-mexico/portada.jpg',
      status: 'finished',
      id: 11,
      img_slide: [
        'photos/portafolio/safetypay-mexico/safetypay-mexico-1.jpg',
        'photos/portafolio/safetypay-mexico/safetypay-mexico-2.jpg',
        'photos/portafolio/safetypay-mexico/safetypay-mexico-3.jpg',
      ],
      details: {
        text:
          '<p>Maquetación y programación front-end de la pasarela de pago para Safetypay México. Ésta interfaz se muestra en diferentes tiendas y negocios online afiliadas a Safetypay en todo México.</p><p>Se programó un buscador para los slides que tienen un número grande de tiendas o sucursales. Al realizar la búsqueda, éste mueve el slide hasta resultado seleccionado.</p><p>Cuando se selecciona un elemento de los slides, la interfaz cambia según lo seleccionado.</p><p>Se programó todas las validaciones de formularios: envío de número de celular, envío de instruccciones por correo.</p>',
        compatibility: 'IE9+ / Chrome / Firefox / Safari.',
        technologies: 'SASS - JADE - JS.',
        repo_url: 'https://gitlab.com/jcahuana/safetypay-mexico/tree/master',
        live_link: 'http://jcahuana.gitlab.io/safetypay-mexico/',
      },
    },
    {
      name: 'Web Kia Perú',
      url: 'kia-peru-web',
      category: 'Web Site',
      cover: 'photos/portafolio/kia-web-principal-portada.jpg',
      status: 'finished',
      id: 10,
      img_slide: [
        'photos/portafolio/kia-web-principal-slide-1.jpg',
        'photos/portafolio/kia-web-principal-slide-2.jpg',
        'photos/portafolio/kia-web-principal-slide-3.jpg',
        'photos/portafolio/kia-web-principal-slide-4.jpg',
        'photos/portafolio/kia-web-principal-slide-5.jpg',
        'photos/portafolio/kia-web-principal-slide-6.jpg',
        'photos/portafolio/kia-web-principal-slide-7.jpg',
        'photos/portafolio/kia-web-principal-slide-8.jpg',
        'photos/portafolio/kia-web-principal-slide-9.jpg',
      ],
      details: {
        text:
          '<p>Desarrollo FrontEnd:</p><p>Se maquetó un diseño para múltiples resoluciones, se programó las validaciones e interactividad de todas las pantallas.</p><p>Desarrollo BackEnd:</p><p>Se creo un tema personalizado para wordpress y se montó el sitio sobre dicha solución, con ello fue posible administrar varias secciones importantes en muy corto tiempo.</p>',
        compatibility: 'Chrome - Firefox - IE8+.',
        technologies: 'PHP - Wordpress - HTML5 - CSS3 - Javascript.',
        live_link: '',
      },
    },
    {
      name: 'Groupon Pasarela Payme',
      url: 'groupon-web-pasarela-payme',
      category: 'Web Site',
      cover: 'photos/portafolio/groupon-pasarela-payme-portada.jpg',
      status: 'finished',
      id: 9,
      img_slide: [
        'photos/portafolio/groupon-pasarela-payme-slide-1.jpg',
        'photos/portafolio/groupon-pasarela-payme-slide-2.jpg',
        'photos/portafolio/groupon-pasarela-payme-slide-3.jpg',
        'photos/portafolio/groupon-pasarela-payme-slide-4.jpg',
        'photos/portafolio/groupon-pasarela-payme-slide-5.jpg',
        'photos/portafolio/groupon-pasarela-payme-slide-6.jpg',
      ],
      details: {
        text:
          "<p>Desarrollo FrontEnd: Maquetado e interactividad.</p><p>Se maquetó un diseño para múltiples resolucione y se programó las validaciones e interactividad de todas las pantallas. Las páginas corresponden a la parte Front-End de una pasarela de pago usando 'Pay-me'. Todos los archivos HTML y CSS están minificados, así también los archivos Javascript están concatenados en un sólo archivo y minificado, todo esto para optimizar el tiempo de carga y la cantidad de peticiones al servidor. Por el lado de las imágenes todos los archivos Png y Jpg están optimizados con el mismo propósito de optimizar el tiempo de carga.</p>",
        compatibility: 'Chrome - Firefox - IE8+.',
        technologies: 'HTML5 - CSS3 - Javascript.',
        live_link: '',
      },
    },
    {
      name: 'Fiat Punto',
      url: 'fiat-facebook-app-punto',
      category: 'Facebook App',
      cover: 'photos/portafolio/fiat-punto-portada.jpg',
      status: 'finished',
      id: 8,
      img_slide: [
        'photos/portafolio/fiat-punto-slide-1.jpg',
        'photos/portafolio/fiat-punto-slide-2.jpg',
        'photos/portafolio/fiat-punto-slide-3.jpg',
        'photos/portafolio/fiat-punto-slide-4.jpg',
        'photos/portafolio/fiat-punto-slide-5.jpg',
        'photos/portafolio/fiat-punto-slide-6.jpg',
        'photos/portafolio/fiat-punto-slide-7.jpg',
      ],
      details: {
        text:
          '<p>Aplicación para Fiat Perú.</p><p>La aplicación solicita una cantidad de permisos para poder calcular con cúal de tus amigos tienes mayor actividad según la cantidad de lugares compartidos. El resultado se muestra en una imagen indicando los tres últimos lugares compartidos y te da la opción de poder publicarla en el muro e ingresas al sorteo de unos premios propuestos.</p><p>La aplicación registra los datos los usuarios y la cantidad de imágenes compartidas. Estos datos luego se pueden descargar en un documento excel.</p>',
        compatibility: 'Chrome - Firefox - IE8+.',
        technologies: 'HTML5 - Facebook API - PHP - MySQL.',
        live_link: '',
      },
    },
    {
      name: 'Recetario Cartavio',
      url: 'cartavio-mobile-app-recetario',
      category: 'Mobile App',
      cover: 'photos/portafolio/cartavio-recetario-portada.jpg',
      status: 'finished',
      id: 7,
      img_slide: [
        'photos/portafolio/cartavio-recetario-slide-1.jpg',
        'photos/portafolio/cartavio-recetario-slide-2.jpg',
        'photos/portafolio/cartavio-recetario-slide-3.jpg',
        'photos/portafolio/cartavio-recetario-slide-4.jpg',
        'photos/portafolio/cartavio-recetario-slide-5.jpg',
      ],
      details: {
        text:
          "<p>Áplicación móvil responsive para Ron Cartavio.</p><p>En la página inicial se muestra los productos destacados y se puede ingresar a cada uno de ellos para ver sus descripciones.</p><p>En la segunda sección se muestra una gran variedad de recetas, al ingresar a cualquiera de ellas para ver la preparación, nos da la posibilidad de darle 'like' y ésta se publica en el muro.</p><p>Las otras dos secciones son de historia de la empresa y de los lugares promocionados donde se puede adquirir el producto.</p><p>La aplicación registra los datos los usuarios que le dieron 'like' a alguna receta. Estos datos luego se pueden descargar en un documento excel.</p>",
        compatibility: 'Android - IOS.',
        technologies: 'HTML5 - Phonegap - Facebook API - PHP - MySQL.',
        live_link: '',
      },
    },
    {
      name: 'New Kia Cerato 2014',
      url: 'kia-web-new-cerato-2014',
      category: 'Web Site',
      cover: 'photos/portafolio/kia-cerato2014-portada.jpg',
      status: 'finished',
      id: 6,
      img_slide: [
        'photos/portafolio/kia-cerato2014-slide-1.jpg',
        'photos/portafolio/kia-cerato2014-slide-2.jpg',
        'photos/portafolio/kia-cerato2014-slide-3.jpg',
        'photos/portafolio/kia-cerato2014-slide-4.jpg',
        'photos/portafolio/kia-cerato2014-slide-5.jpg',
        'photos/portafolio/kia-cerato2014-slide-6.jpg',
      ],
      details: {
        text:
          '<p>Sitio web para el lanzamiento de el nuevo Kia Cerato 2014.</p><p>En la primera sección el sitio web muestra la oferta del auto y la actividad en redes sociales como Twitter y Facebook.</p><p>En la segunda sección el sitio web te da a escoger tres videos(la temática es sobre deportes de aventura) que te invitan a participar mediante una pregunta, si la respuesta es afirmativa el sitio web se conecta a la API de facebook para registrar al usuario y luego te da la posibilidad de publicar una imagen en el muro.</p><p>La aplicación registra los datos de cada usuario, la cantidad de imágenes generadas y publicadas en los muros. Todos estos datos luego se pueden descargar en un documento excel.</p>',
        compatibility: 'Chrome - Firefox - IE8+.',
        technologies: 'HTML5 - Facebook API - PHP - MySQL.',
        live_link: '',
      },
    },
    {
      name: 'Verano no es verano',
      url: 'kia-facebook-app-verano-no-es-verano',
      category: 'Facebook App',
      cover: 'photos/portafolio/kia-veranosinkia-portada.jpg',
      status: 'finished',
      id: 5,
      img_slide: [
        'photos/portafolio/kia-veranosinkia-slide-1.jpg',
        'photos/portafolio/kia-veranosinkia-slide-2.jpg',
        'photos/portafolio/kia-veranosinkia-slide-3.jpg',
        'photos/portafolio/kia-veranosinkia-slide-4.jpg',
        'photos/portafolio/kia-veranosinkia-slide-5.jpg',
      ],
      details: {
        text:
          '<p>Aplicación para Kia Perú.</p><p>La aplicación te permite ingresar un texto para completar una frase propuesta. Luego con la frase completa se genera una imagen que será publicada es nuestros muros. Todos los usuarios que participen entran al sorteo de una serie de premios que se darán al final de la campaña.</p><p>La aplicación registra los datos de cada usuario, la cantidad de imágenes generadas y publicadas. Todos estos datos luego se pueden descargar en un documento excel.</p>',
        compatibility: 'Chrome - Firefox - IE8+.',
        technologies: 'HTML5 - Facebook API - PHP - MySQL.',
        live_link: '',
      },
    },
    {
      name: 'Un Día',
      url: 'miamont-facebook-app-un-dia',
      category: 'Facebook App',
      cover: 'photos/portafolio/miamont-undia-portada.jpg',
      status: 'finished',
      id: 4,
      img_slide: [
        'photos/portafolio/miamont-undia-slide-1.jpg',
        'photos/portafolio/miamont-undia-slide-2.jpg',
        'photos/portafolio/miamont-undia-slide-3.jpg',
        'photos/portafolio/miamont-undia-slide-4.jpg',
        'photos/portafolio/miamont-undia-slide-5.jpg',
      ],
      details: {
        text:
          '<p>Aplicación para Mia Mont.</p><p>La aplicación en la primera sección promociona una de las canciones de la cantante, da posibilidad de dejar comentarios de los fans, descargar la canción y compartirla en nuestro muro. En la segunda sección se puede dedicar una imagen a cualquiera de nuestros amigos, ésta imagen además se puede personalizar con un mensaje. En la última sección se puede visualizar los premios por haber usado la aplicación.</p><p>La aplicación registra los datos de cada usuario, las descargas de la canción, las veces que se realizarón la acción de compartir y quiénes dedicaron una imagen. Todos estos datos luego se pueden descargar en un documento excel.</p>',
        compatibility: 'Chrome - Firefox - IE8+.',
        technologies: 'HTML5 - Facebook API - PHP - MySQL.',
        live_link: '',
      },
    },
    {
      name: 'Modelos Toyota',
      url: 'toyota-facebook-app-modelos',
      category: 'Facebook App',
      cover: 'photos/portafolio/toyota-modelos-portada.jpg',
      status: 'finished',
      id: 3,
      img_slide: ['photos/portafolio/toyota-modelos-slide-1.jpg'],
      details: {
        text:
          '<p>Aplicación para Toyota Perú.</p><p>La aplicación es una galería de todos los modelos de autos y camionetas con las que cuenta la marca. Con una sección de modelos destacados en la parte superior</p>',
        compatibility: 'Chrome - Firefox - IE8+.',
        technologies: 'HTML5 - Facebook API - PHP.',
        live_link: '',
      },
    },
    {
      name: 'Momentos Vizzio',
      url: 'vizzio-facebook-app-momentos',
      category: 'Facebook App',
      cover: 'photos/portafolio/vizzio-momentosvizzio-portada.jpg',
      status: 'finished',
      id: 2,
      img_slide: [
        'photos/portafolio/vizzio-momentosvizzio-slide-1.jpg',
        'photos/portafolio/vizzio-momentosvizzio-slide-2.jpg',
        'photos/portafolio/vizzio-momentosvizzio-slide-3.jpg',
        'photos/portafolio/vizzio-momentosvizzio-slide-4.jpg',
      ],
      details: {
        text:
          '<p>Aplicación para Vizzio donde puedes armar una imagen a tu gusto para luego publicarla en tu muro.</p><p>La aplicación te permite escoger una imagen, agregar texto y seleccionar una versión del logo de Vizzio. Mientras se arma la imagen se puede previsualizar cómo va quedando.</p><p>La aplicación registra los datos de cada usuario en una base de datos, que luego se puede descargar en un documento excel.</p>',
        compatibility: 'Chrome - Firefox - IE8+.',
        technologies: 'HTML5 - Facebook API - PHP - MySQL.',
        live_link: '',
      },
    },
    {
      name: 'Eres Rock o Pop',
      url: 'guarana-facebook-app-eres-rock-o-pop',
      category: 'Facebook App',
      cover: 'photos/portafolio/guarana-rockpop-portada.jpg',
      status: 'finished',
      id: 1,
      img_slide: [
        'photos/portafolio/guarana-rockpop-slide-1.jpg',
        'photos/portafolio/guarana-rockpop-slide-2.jpg',
        'photos/portafolio/guarana-rockpop-slide-3.jpg',
        'photos/portafolio/guarana-rockpop-slide-4.jpg',
        'photos/portafolio/guarana-rockpop-slide-5.jpg',
        'photos/portafolio/guarana-rockpop-slide-6.jpg',
      ],
      details: {
        text:
          "<p>Aplicación para Guaraná que promociona tres vídeos semana tras semana para que los usuarios voten por ellos mediante 'Likes'.</p><p>El vídeo más votado de cada semana aparece cada viernes en un canal de televisión.</p><p>Cuando se usa por primera vez la aplicación, ésta te regala un código para un mes de suscripción a sonora.</p><p>La aplicación registra los datos de cada usuario en una base de datos, que luego se puede descargar en un documento excel.</p>",
        compatibility: 'IE8+ - Chrome - Firefox.',
        technologies: 'HTML5 - Facebook API - PHP - MySQL.',
        live_link: '',
      },
    },
  ];
  constructor() {
    console.log('Service ready to use');
  }

  getPortfolio(): PortfolioInterface[] {
    return this.portfolio;
  }
}

interface detailsInterface {
  text: string;
  compatibility: string;
  technologies: string;
  repo_url?: string;
  live_link: string;
}

export interface PortfolioInterface {
  name: string;
  url: string;
  category: string;
  cover: string;
  status: string;
  id: number;
  img_slide: Array<string>;
  details: detailsInterface;
}
