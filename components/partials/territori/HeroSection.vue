<template>
    <section class="h-screen max-h-[46.94rem] relative flex justify-center items-center">
        <img v-if="width <= 768 && width != null" class="z-0 absolute top-0 left-0 h-full w-full object-cover object-center md:hidden" src="/images/territori/hero-background.webp" alt="hero" srcset="">
        <img v-if="width > 768 && width != null" class="hidden z-0 absolute top-0 left-0 h-full w-full object-cover object-left-top md:block" src="/images/territori/hero-background-md.webp" alt="" srcset="">
        
        <div class="flex z-10 flex-col items-center gap-y-10 text-center px-4 text-white">
            <h1 class="text-[2rem] font-medium tracking-[-0.64px] font-reenie-beanie 
                        sm:text-[2.5rem]
                        md:text-[3rem] md:tracking-[-1.28px]
                        lg:text-[4rem]">Impacte social</h1>
            <h2 class=" text-[1.4rem] xs:text-[2.5rem] tracking-[0.25rem] font-normal  max-w-[28.2rem] leading-none 
                        sm:text-[3.6rem] sm:max-w-[34rem]
                        md:text-[5rem] md:max-w-[46.25rem] md:tracking-[0.8rem]
                        lg:text-[7rem] lg:max-w-[57rem]">
               SOSTENIBILITAT <br> I TERRITORI
            </h2>
        </div>
    </section>
</template>


<script setup>
 const width = ref(null);
 onMounted(() => {
     width.value = window.innerWidth;
     window.addEventListener("resize", () => {
         width.value = window.innerWidth;
     });
 });
</script>