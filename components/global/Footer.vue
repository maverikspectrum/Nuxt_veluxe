<script lang="ts" setup>
</script>

<template>
    <hr class="bar">
    <hr class="bar2">
    <div class="w-full bg-[#0b131a] overflow-hidden relative z-[2]">
        <div class="pt-2 pb-4 selection:bg-[#177aa1] selection:text-white">
            <div class="mx-auto w-full rounded-2xl flex flex-col items-center gap-6">
                <div class="icon-container WPP">
                    <a href="#" class="icon-link">
                        <i class="fa-brands fa-whatsapp text-white text-2xl"></i>
                    </a>
                </div>
                <p class="text-xs text-white pt-2 pb-2 z-[2]">
                    Veluxe Auto®
                </p>
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

/* Container styles */
.icon-container {
  position: relative;
  display: inline-block;
  width: 50px; /* Adjust size */
  height: 50px; /* Adjust size */
}

/* Icon link styles */
.icon-link {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2; /* Ensure it is above the circle */
  text-decoration: none;
}

/* Pseudo-element for the circle */
.icon-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 48%;
  width: 30px; /* Initial size of the circle */
  height: 30px; /* Initial size of the circle */
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0); /* Start small */
  transition: transform 0.3s ease; /* Animation duration and easing */
  z-index: 1; /* Below the icon */
}

/* Pseudo-element for the circle */
.INSTA::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px; /* Initial size of the circle */
  height: 30px; /* Initial size of the circle */
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0); /* Start small */
  transition: transform 0.3s ease; /* Animation duration and easing */
  z-index: 1; /* Below the icon */
}

/* Hover effect: Grow the circle */
.icon-container:hover::before {
  transform: translate(-50%, -50%) scale(1.5); /* Grow to full size */
}

.FB::before {
  background-color: #0866ff; 
  color: #aaacad;
}

.TT::before {
  background-color: black;
}

.LI::before {
  background-color: #007bb6;
}

.INSTA::before {
  background-color: #ff026a; 
}

.WPP::before {
  background-color: #25d366; 
}

.horizontal-line {
    width: 100%; 
    height: 1px;
    background-color: #ccd6db;
    margin: 14px 0;
    border-radius: 1px; 
}
</style>