// menu
let clicado = false;
let jogocomeça = false;
let corBotao = "#F6F2F6";
// tempo/texto
let timer = 0;
let etapatexto = 1;
let tempoEspera = 250;
// fantasma e mais
let estadoboneco = "var";
let estadomaterial = 1;
let fantx = 816;
let fanty = 906;
let fantw = 170;
let fanth = 170;
let boneco = null;
let fantdir, fantesq, fantconst, pedro;
let fantsimbolico = 816;
// cenario
let cenariox = 0;
let cenarioy = 0;
let escada1x = 2000;
let escada1ybaixo = 962;
let escada1yalto = 820;
let escada2x = 5162;
let escada2y = 634;
// pulo
let boneconoar = false;
let forcabaixo = 0;
let grav = 0;
let velopulo = 17.5;
// espinhos
let espinhos = [];
let espinhox, espinhoy;
let tempoCair = 0;
// outros
let colisao = false;
let v = 7;
let escadav = 7;
let fim = false;
let falaterminou = false;
let paratudo = false;
let textoespecial = false;
let videoplay = false;
let videojogo;

function preload() {
  cenario = loadImage("cenario.png");
  fantdir = loadImage("fantasmadireita.png");
  fantesq = loadImage("fantasmaesquerda.png");
  fantconst = loadImage("fantconst.png");
  escada1 = loadImage("escada1.png");
  escada2 = loadImage("escada2.png");
  escopo = loadImage("escopo.png");
  imagemespinho = loadImage("espinho.png");
  pedro = loadImage("pedro.png");
}

function criaEspinhos() {
  setInterval(() => {
    espinhos = espinhos.filter(
      (espinho) => espinho.espinhoy < height + espinho.size / 2
    );
    espinhos = [];
    for (let i = 0; i < 25; i++) {
      espinhos.push({
        espinhox: random(0, width),
        espinhoy: random(-50, -200),
        veloespinhos: random(23, 28),
        size: random(82, 110),
      });
    }
  }, 3000);
}

function desenhaBotao(label, x, y) {
  let w = 400;
  let h = 100;

  let sobre =
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2;

  if (clicado) {
  } else if (sobre) {
    fill(30, 205, 22);
  } else {
    fill(corBotao);
  }

  stroke(255);
  strokeWeight(4);
  rect(x - w / 2, y - h / 2, w, h, 20);

  noStroke();
  fill(0);
  textSize(48);
  text(label, x, y);
}

function mousePressed() {
  let w = 400;
  let h = 100;

  if (
    mouseX > width / 2 - w / 2 &&
    mouseX < width / 2 + w / 2 &&
    mouseY > 300 - h / 2 &&
    mouseY < 300 + h / 2
  ) {
    clicado = true;
    jogocomeça = true;
  }
}

function mouseReleased() {
  clicado = false;
}

function TextoUm(x, y) {
  x = 550;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("Olá! Seja bem-vindo(a) à Matrix.", x, y);
}

function TextoDois(x, y) {
  x = 650;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("Lamento em dizer, mas você está preso aqui.", x, y);
}

function TextoTres(x, y) {
  x = 650;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("O que é a Matrix? Isso é uma loooonga história.", x, y);
}

function TextoQuatro(x, y) {
  x = 950;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "O que você está fazendo aqui? É uma boa pergunta, que eu não sei responder...",
    x,
    y
  );
}

function TextoCinco(x, y) {
  x = 480;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("Mas você quer sair, certo?", x, y);
}

function TextoSeis(x, y) {
  x = 950;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Para escapar da Matrix você precisará alterar a forma como as coisas afetam você.",
    x,
    y
  );
}

function TextoSete(x, y) {
  x = 980;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Ande um pouco e você irá encontrar uma escada, ela irá te ajudar a sair desta sala.",
    x,
    y
  );
}

function TextoOito(x, y) {
  x = 780;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("Oh, mas que mal educado eu sou, eu sequer me apresentei!", x, y);
}

function TextoNove(x, y) {
  x = 550;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("Muito prazer, eu me chamo Pedro!", x, y);
}

function TextoDez(x, y) {
  x = 600;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("Não se preocupe, eu já sei o seu nome...", x, y);
}

function TextoOnze(x, y) {
  x = 1000;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Enfim, prossiga. Saiba que se você ficar muito tempo aqui, será apagado da existência.",
    x,
    y
  );
}

// Se o boneco for var e colidir com a escada

function TextoDoze(x, y) {
  x = 870;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("", x, y);
}

function TextoTreze(x, y) {
  x = 870;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Infelizmente, você não é forte para mover esta escada. Não sozinho.",
    x,
    y
  );
}

function TextoCatorze(x, y) {
  x = 870;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text('Aperte a tecla "2" para adicionar o atributo "let" ao seu nome.', x, y);
}

function TextoQuinze(x, y) {
  x = 950;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Com este atributo, uma barreira envolverá você, e você poderá empurrar coisas.",
    x,
    y
  );
}

// Se o boneco passar do primeiro obstáculo

function TextoDezesseis(x, y) {
  x = 870;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("", x, y);
}

function TextoDezessete(x, y) {
  x = 520;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("Muito bem, você conseguiu!", x, y);
}

function TextoDezoito(x, y) {
  x = 1000;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Na sua frente terão alguns estalactites presos ao teto e você terá de passar por eles.",
    x,
    y
  );
}

function TextoDezenove(x, y) {
  x = 980;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Eles caem periodicamente, mas o intervalo de tempo entre a queda deles é bem curto.",
    x,
    y
  );
}

function TextoVinte(x, y) {
  x = 850;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    'Aperte a tecla "3" para adicionar o atributo "const" ao seu nome.',
    x,
    y
  );
}

function TextoVinteUm(x, y) {
  x = 830;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text("Com este atributo, você se tornará CONSTantemente intangível.", x, y);
}

function TextoVinteDois(x, y) {
  x = 950;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Desse jeito os espinhos não vão te afetar, mas você também não conseguirá andar.",
    x,
    y
  );
}

function TextoVinteTrês(x, y) {
  x = 980;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    'Para voltar a andar aperte a tecla "1", adicionando o atributo "var" ao seu nome.',
    x,
    y
  );
}

function TextoVinteQuatro(x, y) {
  x = 850;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Passando dos espinhos você vai encontrar uma porta. Esta é a saída.",
    x,
    y
  );
}

function TextoVinteCinco(x, y) {
  x = 1050;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Passe por ela e você sairá da Matrix. Vá em paz. Quem sabe não nos vemos um dia, hein?",
    x,
    y
  );
}

// monólogo especial

function TextoEspecial(x, y) {
  x = 900;
  y = 95;
  textSize(30);
  fill(30, 205, 22);
  textFont("Courier New");
  text(
    "Hohoho, parece que você sabe de alguma coisa... Já esteve aqui antes?",
    x,
    y
  );
}

function keyPressed() {
  if (keyCode == 49) {
    estadoboneco = "var";
  }
  if (keyCode == 50 && (etapatexto > 14 || textoespecial == true)) {
    estadoboneco = "let";
  }
  if (keyCode == 51 && (etapatexto > 21 || textoespecial == true)) {
    estadoboneco = "const";
    boneco = fantconst;
  }
  if ((keyCode == 87 || keyCode == 38) && boneconoar == false) {
    boneconoar = true;
    grav = 0.8;
    forcabaixo = -velopulo;
  }
  if (keyCode == 80) {
    textoespecial = true;
    etapatexto = -1;
  }
}

function resetaJogo() {
  jogocomeça = false;
  fantx = 816;
  fanty = 906;
  etapatexto = 1;
  timer = 0;
  cenariox = 0;
  cenarioy = 0;
  escada1x = 2000;
  escada1ybaixo = 962;
  escada1yalto = 820;
  escada2x = 5162;
  escada2y = 634;
  falaterminou = false;
  boneco = fantdir;
  estadoboneco = "var";
}

function setup() {
  createCanvas(1920, 1080);
  textAlign(CENTER, CENTER);
  cenariox = map(cenariox, 0, 15158, 0, 1920);
  boneco = fantdir;

  codigomorse = createAudio("codigomorse.wav");
  musica = createAudio("musica.mp3");

  videojogo = createVideo("video.mp4");

  criaEspinhos();

  frameRate(60);
}

function draw() {
  background(0);
  videojogo.size(1920, 1080);
  videojogo.position(0, 0);
  if (videoplay == false){
    videojogo.hide();
    musica.play();
  } else {
    videojogo.show();
    videojogo.play();
    musica.volume(0);
    musica.stop();
    noCanvas();
  }
  if (!jogocomeça) {
    textSize(100);
    fill(30, 205, 22);
    textFont("Courier New");
    text("Você está na Matrix", width / 2, 150);

    desenhaBotao("Sair", width / 2, 300);
  } else {
    image(cenario, cenariox, cenarioy, 15158, 1080);
    image(escada1, escada1x, 820, 520, 260);
    image(escada2, escada2x, escada2y, 228, 133);
    image(boneco, fantx, fanty, fantw, fanth);

    if (estadoboneco == "const") {
      grav = 0;
      forcabaixo = 0;
    }
    if (fanty == 906 && estadoboneco == "var") {
      boneco = fantdir;
    }

    if (textoespecial == false) {
      if (etapatexto === 1) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoUm(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
      } else if (etapatexto === 2) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoDois(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
      } else if (etapatexto === 3) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoTres(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
      } else if (etapatexto === 4) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoQuatro(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
      } else if (etapatexto === 5) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoCinco(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
      } else if (etapatexto === 6) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoSeis(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
      } else if (etapatexto === 7) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoSete(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
      } else if (etapatexto === 8) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoOito(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
      } else if (etapatexto === 9) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoNove(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
      } else if (etapatexto === 10) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoDez(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
      } else if (etapatexto === 11) {
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoOnze(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          etapatexto++;
          timer = 0;
          codigomorse.stop();
        }
        falaterminou = true;
      }

      timer++;

      if (cenariox == -1015) {
        if (falaterminou == false) {
          cenariox = cenariox;
        }
        falaterminou = false;
        if (etapatexto === 12) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            TextoDoze(200, 100);
          }
          if (timer >= 100 + tempoEspera / 2) {
            etapatexto++;
            timer = 0;
          }
        } else if (etapatexto === 13) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoTreze(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 14) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoCatorze(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 15) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoQuinze(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 16) {
          falaterminou = true;
        }
      }

      if (cenariox == -3626) {
        if (falaterminou == false) {
          cenariox = cenariox;
        }
        falaterminou = false;
        if (etapatexto === 16) {
          if (timer < 150) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            TextoDezesseis(200, 100);
          }
          if (timer >= 100 + tempoEspera / 2) {
            etapatexto++;
            timer = 0;
          }
        } else if (etapatexto === 17) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoDezessete(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 18) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoDezoito(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 19) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoDezenove(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 20) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoVinte(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 21) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoVinteUm(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 22) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoVinteDois(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 23) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoVinteTrês(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 24) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoVinteQuatro(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + tempoEspera) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 25) {
          if (timer < 100) {
            fill(0);
            rect(0, 70, width, 80);
          } else {
            image(pedro, 50, 50, 100, 100);
            TextoVinteCinco(200, 100);
            codigomorse.play();
          }
          if (timer >= 100 + (tempoEspera*2)) {
            etapatexto++;
            timer = 0;
            codigomorse.stop();
          }
        } else if (etapatexto === 26 && fim == false) {
          falaterminou = true;
        }
      }
    } else {
      if (etapatexto != -2) {
        timer++;
        if (timer < 100) {
          fill(0);
          rect(0, 70, width, 80);
        } else {
          image(pedro, 50, 50, 100, 100);
          TextoEspecial(200, 100);
          codigomorse.play();
        }
        if (timer >= 100 + tempoEspera) {
          timer = 0;
          etapatexto = -2;
          textoespecial = true;
          codigomorse.stop();
        }
        falaterminou = true;
      }
    }

    if (falaterminou == true) {
      if (estadoboneco == "let") {
        image(escopo, fantx, fanty - 20, 170, 200);
      }

      fanty += forcabaixo;
      forcabaixo += grav;
      if (fanty >= 505 && cenariox <= -2495 && cenariox >= -3420) {
        fanty = 505;
        forcabaixo = 0;
        grav = 0;
        boneconoar = false;
      } else if (fanty >= 645 && escada1x <= 795 && escada1x >= 300) {
        fanty = 645;
        forcabaixo = 0;
        grav = 0;
        boneconoar = false;
      } else if (fanty >= 790 && escada1x <= 980 && escada1x >= 300) {
        fanty = 790;
        forcabaixo = 0;
        grav = 0;
        boneconoar = false;
        colisao = true;
      } else if (fanty >= 906) {
        fanty = 906;
        forcabaixo = 0;
        grav = 0;
        boneconoar = false;
      } else {
        boneconoar = true;
        grav = 0.8;
      }

      if (
        (estadoboneco == "var" || estadoboneco == "let") &&
        fim == false &&
        (keyIsDown(RIGHT_ARROW) || keyIsDown(68))
      ) {
        boneco = fantdir;
        cenariox -= v;
        if (colisao == false) {
          fantsimbolico += v;
        }

        for (let i = 0; i < espinhos.length; i++) {
          espinhos[i].espinhox -= v;
        }

        if (fanty > 505 && cenariox < -2485 && cenariox > -2495) {
          cenariox += v;
        } else if (fanty > 600 && escada1x <= 800 && escada1x > 795) {
          cenariox += v;
        } else if (fanty > 790 && escada1x <= 990 && escada1x > 980) {
          if (estadoboneco == "let") {
            escada1x = escada1x;
            if (cenariox == -1967) {
              escada1x = 990;
              cenariox = cenariox;
              colisao = true;
            }
          } else {
            colisao = true;
            cenariox += v;
          }
        } else {
          colisao = false;
          escada1x -= escadav;
        }
      } else if (
        (estadoboneco == "var" || estadoboneco == "let") &&
        fim == false &&
        (keyIsDown(LEFT_ARROW) || keyIsDown(65))
      ) {
        boneco = fantesq;
        cenariox += v;

        if (colisao == false) {
          fantsimbolico -= v;
        }

        for (let i = 0; i < espinhos.length; i++) {
          espinhos[i].espinhox += v;
        }

        escada1x += v;
        if (
          (fanty > 645 && escada1x < 300 && escada1x > 295) ||
          (cenariox < -3420 && cenariox > -3430)
        ) {
          escada1x -= v;
          cenariox -= v;
          colisao = true;
        } else {
          colisao = false;
        }
      }

      if (cenariox <= -5607 && cenariox >= -10500) {
        for (let espinho of espinhos) {
          espinho.espinhoy += espinho.veloespinhos;

          image(
            imagemespinho,
            espinho.espinhox - espinho.size / 2,
            espinho.espinhoy,
            espinho.size,
            espinho.size
          );

          if (espinho.espinhoy > height - espinho.size / 2) {
            espinho.espinhoy = height - espinho.size / 2;
            espinho.veloespinhos = 0;
          }

          if (
            espinho.espinhoy > fanty &&
            espinho.espinhoy < fanty + 20 &&
            estadoboneco != "const"
          ) {
            resetaJogo();
          }
        }
      } else if (cenariox <= -13146) {
        fim = true;

        if (
          (estadoboneco == "var" || estadoboneco == "let") &&
          (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) &&
          paratudo == false &&
          falaterminou == true
        ) {
          fantx += v;
          boneco = fantdir;
          if (fantx == 2223) {
            paratudo = true;
            videoplay = true;
          }
        } else if (
          (estadoboneco == "var" || estadoboneco == "let") &&
          (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) &&
          paratudo == false &&
          falaterminou == true
        ) {
          fantx -= v;
          boneco = fantesq;
        }
      }
    }
  }
}
