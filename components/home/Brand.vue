<template>
    <div class="h-16 bg-[#0b131a]"></div>
    <hr class="bar">
    <hr class="bar2">
    <div class="w-full flex flex-col items-center justify-start gap-24 h-[700px] sm:h-[840px] bg-[#0b131a] overflow-hidden xl:overflow-visible">
        <div class="mt-8 flex flex-col justify-center items-center">
            <h1 class="text-[42px] text-center text-white font-extrabold w-fit leading-[55px]">
                O que procuras?
            </h1>
            <h1 class="text-[42px] text-center text-[#ffbd17] font-extrabold w-fit leading-[55px]">
                Marcas
            </h1>
        </div>
        <div class="h-10 sm:h-16"></div>
        <div class="w-full flex justify-center items-center">
            <div class="circle-container">
                <div class="dotted-circle"></div>

                <div class="item item0 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[70px] xs:w-[80px] sm:w-auto" src="" alt="VeluxeAuto Logo">
                </div>
                <div class="moving-element1 item item1 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[75px] sm:w-[90px]" src="/assets/images/volkswagenLogo.png" alt="LogoChannel">
                </div>
                <div class="moving-element2 item item2 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[75px] sm:w-[80px]" src="/assets/images/bmwLogo.png" alt="LogoChannel">
                </div>
                <div class="moving-element3 item item3 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[75px] sm:w-[90px]" src="/assets/images/audiLogo.png" alt="LogoChannel">
                </div>
                <div class="moving-element4 item item4 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[75px] sm:w-[90px]" src="/assets/images/mercedesLogo.png" alt="LogoChannel">
                </div>
                <div class="moving-element5 item item5 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[65px] sm:w-[90px]" src="/assets/images/fiatLogo.png" alt="LogoChannel">
                </div>
                <div class="moving-element6 item item6 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[55px] sm:w-[75px]" src="/assets/images/peugeoutLogo.png" alt="LogoChannel">
                </div>
                <div class="moving-element7 item item7 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[55px] sm:w-[75px]" src="/assets/images/renaultLogo.png" alt="LogoChannel">
                </div>
                <div class="moving-element8 item item8 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[75px] sm:w-[90px]" src="/assets/images/toyotaLogo.png" alt="LogoChannel">
                </div>
                <div class="moving-element9 item item9 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[75px] sm:w-[110px]" src="/assets/images/nissanLogo.png" alt="LogoChannel">
                </div>
                <div class="moving-element10 item item10 center-item bg-[#13202c] shadow-md rounded-full flex justify-center items-center">
                    <img class="w-[65px] sm:w-[75px]" src="/assets/images/seatLogo.png" alt="LogoChannel">
                </div>
            </div>
        </div>
    </div>    
</template>

<style scoped>
.bar {
  border: none; 
  height: 1px; 
  background: #ffbd17; /* Bright yellow */
  box-shadow: 0 -5px 10px #f5c039, /* Glow above */
              0 5px 10px #f5c039,  /* Glow below */
              0 0 15px #f5c039,   /* Larger glow around */
              0 0 30px #ffbd17;   /* Intense glowing effect */
}

.bar2 {
  border: none; 
  height: 1px; 
  background: #ffbd17; /* Bright yellow */
  box-shadow: 0 -5px 10px #f5c039, /* Glow above */
              0 5px 10px #ffbd17,  /* Glow below */
              0 0 15px #f5c039,   /* Larger glow around */
              0 0 30px #ffbd17;   /* Intense glowing effect */
  transform: rotate(180deg);
}

.circle-container {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}


.dotted-circle {
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  border: 5px #ffbd17;
  padding: 240px; 
  border-radius: 50%; 
  pointer-events: none;
  transform: rotate(225deg) translate(255px) rotate(-225deg);
  box-shadow: 0 -5px 10px #f5c039, /* Glow above */
              0 5px 10px #f5c039,  /* Glow below */
              0 0 15px #f5c039,   /* Larger glow around */
              0 0 30px #ffbd17;   /* Intense glowing effect */
}

.item {
  position: absolute;
  inset: 0px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

.item0 {
  width: 200px;
  height: 200px;
  transform: rotate(230deg) translate(55px) rotate(-230deg);
}

.item1 {
    transform: rotate(54deg) translate(240px) rotate(-54deg);
}

.item2 {
    transform: rotate(90deg) translate(240px) rotate(-90deg);
}

.item3 {
    transform: rotate(126deg) translate(240px) rotate(-126deg);
}

.item4 {
    transform: rotate(162deg) translate(240px) rotate(-162deg);
}

.item5 {
    transform: rotate(198deg) translate(240px) rotate(-198deg);
}

.item6 {
    transform: rotate(234deg) translate(240px) rotate(-234deg);
}

.item7 {
    transform: rotate(270deg) translate(240px) rotate(-270deg);
}

.item8 {
    transform: rotate(306deg) translate(240px) rotate(-306deg);
}

.item9 {
    transform: rotate(342deg) translate(240px) rotate(-342deg);
}

.item10 {
    transform: rotate(18deg) translate(240px) rotate(-18deg);
}

@media (max-width: 640px) {
    .item0 {
        width: 145px;
        height: 145px;
        transform: rotate(230deg) translate(35px) rotate(-230deg);
    }
    .item1 {
        transform: rotate(54deg) translate(170px) rotate(-54deg);
    }
    .item2 {
        transform: rotate(90deg) translate(170px) rotate(-90deg);
    }
    .item3 {
        transform: rotate(126deg) translate(170px) rotate(-126deg);
    }
    .item4 {
        transform: rotate(162deg) translate(170px) rotate(-162deg);
    }
    .item5 {
        transform: rotate(198deg) translate(170px) rotate(-198deg);
    }
    .item6 {
        transform: rotate(234deg) translate(170px) rotate(-234deg);
    }
    .item7 {
        transform: rotate(270deg) translate(170px) rotate(-270deg);
    }
    .item8 {
        transform: rotate(306deg) translate(170px) rotate(-306deg);
    }
    .item9 {
        transform: rotate(342deg) translate(170px) rotate(-342deg);
    }
    .item10 {
        transform: rotate(18deg) translate(170px) rotate(-18deg);
    }
    .dotted-circle {
        position: absolute;
        inset: 0px;
        width: 100%;
        height: 100%;
        border: 5px #ffbd17;
        padding: 170px; 
        border-radius: 50%; 
        pointer-events: none;
        transform: rotate(225deg) translate(180px) rotate(-225deg);
        box-shadow: 0 -5px 10px #f5c039, /* Glow above */
              0 5px 10px #f5c039,  /* Glow below */
              0 0 15px #f5c039,   /* Larger glow around */
              0 0 30px #ffbd17;   /* Intense glowing effect */
    }
    .circle-container {
        position: relative;
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }
}

@media (max-width: 480px) {
    .item0 {
        width: 100px;
        height: 150px;
        transform: rotate(265deg) translate(25px) rotate(-265deg);
    }
    .item1 {
        transform: rotate(58deg) translate(180px) rotate(-58deg);
    }
    .item2 {
        transform: rotate(90deg) translate(195px) rotate(-90deg);
    }
    .item3 {
        transform: rotate(120deg) translate(180px) rotate(-120deg);
    }
    .item4 {
        transform: rotate(154deg) translate(120px) rotate(-154deg);
    }
    .item5 {
        transform: rotate(206deg) translate(120px) rotate(-206deg);
    }
    .item6 {
        transform: rotate(240deg) translate(180px) rotate(-240deg);
    }
    .item7 {
        transform: rotate(270deg) translate(195px) rotate(-270deg);
    }
    .item8 {
        transform: rotate(300deg) translate(180px) rotate(-300deg);
    }
    .item9 {
        transform: rotate(334deg) translate(120px) rotate(-334deg);
    }
    .item10 {
        transform: rotate(26deg) translate(120px) rotate(-26deg);
    }
    .dotted-circle {
        position: absolute;
        inset: 0px;
        width: 100%;
        height: 100%;
        border: 5px #ffbd17;
        padding: 190px 105px; 
        border-radius: 30%; 
        pointer-events: none;
        transform: rotate(246deg) translate(155px) rotate(-246deg);
        box-shadow: 0 -5px 10px #f5c039, /* Glow above */
              0 5px 10px #f5c039,  /* Glow below */
              0 0 15px #f5c039,   /* Larger glow around */
              0 0 30px #ffbd17;   /* Intense glowing effect */
        
    }
    .circle-container {
        position: relative;
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }
}

@keyframes circular-motion1 {
  0% {
    transform: rotate(54deg) translate(240px) rotate(-54deg);
  }
  100% {
    transform: rotate(414deg) translate(240px) rotate(-414deg);
  }
}

.moving-element1 {
  animation: circular-motion1 25s linear infinite;
}

@keyframes circular-motion2 {
  0% {
    transform: rotate(90deg) translate(240px) rotate(-90deg);
  }
  100% {
    transform: rotate(450deg) translate(240px) rotate(-450deg);
  }
}

.moving-element2 {
  animation: circular-motion2 25s linear infinite;
}

@keyframes circular-motion3 {
  0% {
    transform: rotate(126deg) translate(240px) rotate(-126deg);
  }
  100% {
    transform: rotate(486deg) translate(240px) rotate(-486deg);
  }
}

.moving-element3 {
  animation: circular-motion3 25s linear infinite;
}

@keyframes circular-motion4 {
  0% {
    transform: rotate(162deg) translate(240px) rotate(-162deg);
  }
  100% {
    transform: rotate(522deg) translate(240px) rotate(-522deg);
  }
}

.moving-element4 {
  animation: circular-motion4 25s linear infinite;
}

@keyframes circular-motion5 {
  0% {
    transform: rotate(198deg) translate(240px) rotate(-198deg);
  }
  100% {
    transform: rotate(558deg) translate(240px) rotate(-558deg);
  }
}

.moving-element5 {
  animation: circular-motion5 25s linear infinite;
}

@keyframes circular-motion6 {
  0% {
    transform: rotate(234deg) translate(240px) rotate(-234deg);
  }
  100% {
    transform: rotate(594deg) translate(240px) rotate(-594deg);
  }
}

.moving-element6 {
  animation: circular-motion6 25s linear infinite;
}


@keyframes circular-motion7 {
  0% {
    transform: rotate(270deg) translate(240px) rotate(-270deg);
  }
  100% {
    transform: rotate(630deg) translate(240px) rotate(-630deg);
  }
}

.moving-element7 {
  animation: circular-motion7 25s linear infinite;
}

@keyframes circular-motion8 {
  0% {
    transform: rotate(306deg) translate(240px) rotate(-306deg);
  }
  100% {
    transform: rotate(666deg) translate(240px) rotate(-666deg);
  }
}

.moving-element8 {
  animation: circular-motion8 25s linear infinite;
}

@keyframes circular-motion9 {
  0% {
    transform: rotate(342deg) translate(240px) rotate(-342deg);
  }
  100% {
    transform: rotate(702deg) translate(240px) rotate(-702deg);
  }
}

.moving-element9 {
  animation: circular-motion9 25s linear infinite;
}

@keyframes circular-motion10 {
  0% {
    transform: rotate(18deg) translate(240px) rotate(-18deg);
  }
  100% {
    transform: rotate(378deg) translate(240px) rotate(-378deg);
  }
}

.moving-element10 {
  animation: circular-motion10 25s linear infinite;
}

@media (max-width: 640px) {
    @keyframes circular-motion1 {
    0% {
        transform: rotate(54deg) translate(170px) rotate(-54deg);
    }
    100% {
        transform: rotate(414deg) translate(170px) rotate(-414deg);
    }
    }

    .moving-element1 {
    animation: circular-motion1 25s linear infinite;
    }

    @keyframes circular-motion2 {
    0% {
        transform: rotate(90deg) translate(170px) rotate(-90deg);
    }
    100% {
        transform: rotate(450deg) translate(170px) rotate(-450deg);
    }
    }

    .moving-element2 {
    animation: circular-motion2 25s linear infinite;
    }

    @keyframes circular-motion3 {
    0% {
        transform: rotate(126deg) translate(170px) rotate(-126deg);
    }
    100% {
        transform: rotate(486deg) translate(170px) rotate(-486deg);
    }
    }

    .moving-element3 {
    animation: circular-motion3 25s linear infinite;
    }

    @keyframes circular-motion4 {
    0% {
        transform: rotate(162deg) translate(170px) rotate(-162deg);
    }
    100% {
        transform: rotate(522deg) translate(170px) rotate(-522deg);
    }
    }

    .moving-element4 {
    animation: circular-motion4 25s linear infinite;
    }

    @keyframes circular-motion5 {
    0% {
        transform: rotate(198deg) translate(170px) rotate(-198deg);
    }
    100% {
        transform: rotate(558deg) translate(170px) rotate(-558deg);
    }
    }

    .moving-element5 {
    animation: circular-motion5 25s linear infinite;
    }

    @keyframes circular-motion6 {
    0% {
        transform: rotate(234deg) translate(170px) rotate(-234deg);
    }
    100% {
        transform: rotate(594deg) translate(170px) rotate(-594deg);
    }
    }

    .moving-element6 {
    animation: circular-motion6 25s linear infinite;
    }


    @keyframes circular-motion7 {
    0% {
        transform: rotate(270deg) translate(170px) rotate(-270deg);
    }
    100% {
        transform: rotate(630deg) translate(170px) rotate(-630deg);
    }
    }

    .moving-element7 {
    animation: circular-motion7 25s linear infinite;
    }

    @keyframes circular-motion8 {
    0% {
        transform: rotate(306deg) translate(170px) rotate(-306deg);
    }
    100% {
        transform: rotate(666deg) translate(170px) rotate(-666deg);
    }
    }

    .moving-element8 {
    animation: circular-motion8 25s linear infinite;
    }

    @keyframes circular-motion9 {
    0% {
        transform: rotate(342deg) translate(170px) rotate(-342deg);
    }
    100% {
        transform: rotate(702deg) translate(170px) rotate(-702deg);
    }
    }

    .moving-element9 {
    animation: circular-motion9 25s linear infinite;
    }

    @keyframes circular-motion10 {
    0% {
        transform: rotate(18deg) translate(170px) rotate(-18deg);
    }
    100% {
        transform: rotate(378deg) translate(170px) rotate(-378deg);
    }
    }

    .moving-element10 {
    animation: circular-motion10 25s linear infinite;
    }
}

@media (max-width: 480px) {
    @keyframes circular-motion1 {
    0% {
        transform: rotate(58deg) translate(180px) rotate(-58deg);
    }
    10% {
        transform: rotate(90deg) translate(195px) rotate(-90deg);
    }
    20% {
        transform: rotate(120deg) translate(180px) rotate(-120deg);
    }
    30% {
        transform: rotate(154deg) translate(120px) rotate(-154deg);
    }
    40% {
        transform: rotate(206deg) translate(120px) rotate(-206deg);
    }
    50% {
        transform: rotate(240deg) translate(180px) rotate(-240deg);
    }
    60% {
        transform: rotate(270deg) translate(195px) rotate(-270deg);
    }
    70% {
        transform: rotate(300deg) translate(180px) rotate(-300deg);
    }
    80% {
        transform: rotate(334deg) translate(120px) rotate(-334deg);
    }
    90% {
        transform: rotate(386deg) translate(120px) rotate(-386deg);
    }
    100% {
        transform: rotate(418deg) translate(180px) rotate(-418deg);
    }
    }

    .moving-element1 {
    animation: circular-motion1 25s linear infinite;
    }

    @keyframes circular-motion2 {
    0% {
        transform: rotate(90deg) translate(195px) rotate(-90deg);
    }
    10% {
        transform: rotate(120deg) translate(180px) rotate(-120deg);
    }
    20% {
        transform: rotate(154deg) translate(120px) rotate(-154deg);
    }
    30% {
        transform: rotate(206deg) translate(120px) rotate(-206deg);
    }
    40% {
        transform: rotate(240deg) translate(180px) rotate(-240deg);
    }
    50% {
        transform: rotate(270deg) translate(195px) rotate(-270deg);
    }
    60% {
        transform: rotate(300deg) translate(180px) rotate(-300deg);
    }
    70% {
        transform: rotate(334deg) translate(120px) rotate(-334deg);
    }
    80% {
        transform: rotate(386deg) translate(120px) rotate(-386deg);
    }
    90% {
        transform: rotate(418deg) translate(180px) rotate(-418deg);
    }
    100% {
        transform: rotate(450deg) translate(195px) rotate(-450deg);
    }
    }

    .moving-element2 {
    animation: circular-motion2 25s linear infinite;
    }

    @keyframes circular-motion3 {
    0% {
        transform: rotate(120deg) translate(180px) rotate(-120deg);
    }
    10% {
        transform: rotate(154deg) translate(120px) rotate(-154deg);
    }
    20% {
        transform: rotate(206deg) translate(120px) rotate(-206deg);
    }
    30% {
        transform: rotate(240deg) translate(180px) rotate(-240deg);
    }
    40% {
        transform: rotate(270deg) translate(195px) rotate(-270deg);
    }
    50% {
        transform: rotate(300deg) translate(180px) rotate(-300deg);
    }
    60% {
        transform: rotate(334deg) translate(120px) rotate(-334deg);
    }
    70% {
        transform: rotate(386deg) translate(120px) rotate(-386deg);
    }
    80% {
        transform: rotate(418deg) translate(180px) rotate(-418deg);
    }
    90% {
        transform: rotate(450deg) translate(195px) rotate(-450deg);
    }
    100% {
        transform: rotate(480deg) translate(180px) rotate(-480deg);
    }
    }
    .moving-element3 {
    animation: circular-motion3 25s linear infinite;
    }

    @keyframes circular-motion4 {
    0% {
        transform: rotate(154deg) translate(120px) rotate(-154deg);
    }
    10% {
        transform: rotate(206deg) translate(120px) rotate(-206deg);
    }
    20% {
        transform: rotate(240deg) translate(180px) rotate(-240deg);
    }
    30% {
        transform: rotate(270deg) translate(195px) rotate(-270deg);
    }
    40% {
        transform: rotate(300deg) translate(180px) rotate(-300deg);
    }
    50% {
        transform: rotate(334deg) translate(120px) rotate(-334deg);
    }
    60% {
        transform: rotate(386deg) translate(120px) rotate(-386deg);
    }
    70% {
        transform: rotate(418deg) translate(180px) rotate(-418deg);
    }
    80% {
        transform: rotate(450deg) translate(195px) rotate(-450deg);
    }
    90% {
        transform: rotate(480deg) translate(180px) rotate(-480deg);
    }
    100% {
        transform: rotate(514deg) translate(120px) rotate(-514deg);
    }
    }
    .moving-element4 {
    animation: circular-motion4 25s linear infinite;
    }

    @keyframes circular-motion5 {
    0% {
        transform: rotate(206deg) translate(120px) rotate(-206deg);
    }
    10% {
        transform: rotate(240deg) translate(180px) rotate(-240deg);
    }
    20% {
        transform: rotate(270deg) translate(195px) rotate(-270deg);
    }
    30% {
        transform: rotate(300deg) translate(180px) rotate(-300deg);
    }
    40% {
        transform: rotate(334deg) translate(120px) rotate(-334deg);
    }
    50% {
        transform: rotate(386deg) translate(120px) rotate(-386deg);
    }
    60% {
        transform: rotate(418deg) translate(180px) rotate(-418deg);
    }
    70% {
        transform: rotate(450deg) translate(195px) rotate(-450deg);
    }
    80% {
        transform: rotate(480deg) translate(180px) rotate(-480deg);
    }
    90% {
        transform: rotate(514deg) translate(120px) rotate(-514deg);
    }
    100% {
        transform: rotate(566deg) translate(120px) rotate(-566deg);
    }
    }
    .moving-element5 {
    animation: circular-motion5 25s linear infinite;
    }

    @keyframes circular-motion6 {
    0% {
        transform: rotate(240deg) translate(180px) rotate(-240deg);
    }
    10% {
        transform: rotate(270deg) translate(195px) rotate(-270deg);
    }
    20% {
        transform: rotate(300deg) translate(180px) rotate(-300deg);
    }
    30% {
        transform: rotate(334deg) translate(120px) rotate(-334deg);
    }
    40% {
        transform: rotate(386deg) translate(120px) rotate(-386deg);
    }
    50% {
        transform: rotate(418deg) translate(180px) rotate(-418deg);
    }
    60% {
        transform: rotate(450deg) translate(195px) rotate(-450deg);
    }
    70% {
        transform: rotate(480deg) translate(180px) rotate(-480deg);
    }
    80% {
        transform: rotate(514deg) translate(120px) rotate(-514deg);
    }
    90% {
        transform: rotate(566deg) translate(120px) rotate(-566deg);
    }
    100% {
        transform: rotate(600deg) translate(180px) rotate(-600deg);
    }
    }
    .moving-element6 {
    animation: circular-motion6 25s linear infinite;
    }

    @keyframes circular-motion7 {
    0% {
        transform: rotate(270deg) translate(195px) rotate(-270deg);
    }
    10% {
        transform: rotate(300deg) translate(180px) rotate(-300deg);
    }
    20% {
        transform: rotate(334deg) translate(120px) rotate(-334deg);
    }
    30% {
        transform: rotate(386deg) translate(120px) rotate(-386deg);
    }
    40% {
        transform: rotate(418deg) translate(180px) rotate(-418deg);
    }
    50% {
        transform: rotate(450deg) translate(195px) rotate(-450deg);
    }
    60% {
        transform: rotate(480deg) translate(180px) rotate(-480deg);
    }
    70% {
        transform: rotate(514deg) translate(120px) rotate(-514deg);
    }
    80% {
        transform: rotate(566deg) translate(120px) rotate(-566deg);
    }
    90% {
        transform: rotate(600deg) translate(180px) rotate(-600deg);
    }
    100% {
        transform: rotate(630deg) translate(195px) rotate(-630deg);
    }
    }
    .moving-element7 {
    animation: circular-motion7 25s linear infinite;
    }

    @keyframes circular-motion8 {
    0% {
        transform: rotate(300deg) translate(180px) rotate(-300deg);
    }
    10% {
        transform: rotate(334deg) translate(120px) rotate(-334deg);
    }
    20% {
        transform: rotate(386deg) translate(120px) rotate(-386deg);
    }
    30% {
        transform: rotate(418deg) translate(180px) rotate(-418deg);
    }
    40% {
        transform: rotate(450deg) translate(195px) rotate(-450deg);
    }
    50% {
        transform: rotate(480deg) translate(180px) rotate(-480deg);
    }
    60% {
        transform: rotate(514deg) translate(120px) rotate(-514deg);
    }
    70% {
        transform: rotate(566deg) translate(120px) rotate(-566deg);
    }
    80% {
        transform: rotate(600deg) translate(180px) rotate(-600deg);
    }
    90% {
        transform: rotate(630deg) translate(195px) rotate(-630deg);
    }
    100% {
        transform: rotate(660deg) translate(180px) rotate(-660deg);
    }
    }
    .moving-element8 {
    animation: circular-motion8 25s linear infinite;
    }

    @keyframes circular-motion9 {
    0% {
        transform: rotate(334deg) translate(120px) rotate(-334deg);
    }
    10% {
        transform: rotate(386deg) translate(120px) rotate(-386deg);
    }
    20% {
        transform: rotate(418deg) translate(180px) rotate(-418deg);
    }
    30% {
        transform: rotate(450deg) translate(195px) rotate(-450deg);
    }
    40% {
        transform: rotate(480deg) translate(180px) rotate(-480deg);
    }
    50% {
        transform: rotate(514deg) translate(120px) rotate(-514deg);
    }
    60% {
        transform: rotate(566deg) translate(120px) rotate(-566deg);
    }
    70% {
        transform: rotate(600deg) translate(180px) rotate(-600deg);
    }
    80% {
        transform: rotate(630deg) translate(195px) rotate(-630deg);
    }
    90% {
        transform: rotate(660deg) translate(180px) rotate(-660deg);
    }
    100% {
        transform: rotate(694deg) translate(120px) rotate(-694deg);
    }
    }
    .moving-element9 {
    animation: circular-motion9 25s linear infinite;
    }

    @keyframes circular-motion10 {
    0% {
        transform: rotate(386deg) translate(120px) rotate(-386deg);
    }
    10% {
        transform: rotate(418deg) translate(180px) rotate(-418deg);
    }
    20% {
        transform: rotate(450deg) translate(195px) rotate(-450deg);
    }
    30% {
        transform: rotate(480deg) translate(180px) rotate(-480deg);
    }
    40% {
        transform: rotate(514deg) translate(120px) rotate(-514deg);
    }
    50% {
        transform: rotate(566deg) translate(120px) rotate(-566deg);
    }
    60% {
        transform: rotate(600deg) translate(180px) rotate(-600deg);
    }
    70% {
        transform: rotate(630deg) translate(195px) rotate(-630deg);
    }
    80% {
        transform: rotate(660deg) translate(180px) rotate(-660deg);
    }
    90% {
        transform: rotate(694deg) translate(120px) rotate(-694deg);
    }
    100% {
        transform: rotate(746deg) translate(120px) rotate(-746deg);
    }
    }
    .moving-element10 {
    animation: circular-motion10 25s linear infinite;
    }
}
</style>