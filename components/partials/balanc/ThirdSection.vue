<template>
    <section class="py-16  px-4 md:px-12">
        <!-- table 1 -->
        <div class=" overflow-x-auto  max-w-[56rem] mx-auto text-xl">
            <h1 class="text-Olive-Green  border-b-4 border-Olive-Green">DIMENSIÓ ECONÒMICA 2022</h1>
            <div class="flex flex-col w-[40.125rem] md:w-full">
                <div class="grid grid-cols-12 py-5 px-2.5 items-center border-b border-black font-super-rotesk-comp tracking-[2px] font-bold">
                    <div class="col-span-4 md:col-span-6"></div>
                    <div class="col-span-4 md:col-span-3 justify-self-end">Ingressos</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end">Despeses</div>
                </div>
                <div class="grid grid-cols-12 py-5 px-2.5 items-center border-b border-black font-super-rotesk-comp tracking-[2px] font-bold">
                    <div class="col-span-4 md:col-span-6">Fundació Catalunya La Pedrera</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end"><Number dot_formated :number="28474926" /> €</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end"><Number dot_formated :number="29753888" /> €</div>
                </div>
                <div class="grid grid-cols-1 py-5 px-2.5 border-b border-black">
                    <div>Entitats vinculades al grup:</div>
                </div>
                <div class="grid grid-cols-12 py-5 px-2.5 items-center ">
                    <div class="col-span-4 md:col-span-6">Món Sant Benet</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end font-super-rotesk-comp tracking-[2px] font-bold"><Number dot_formated :number="5936724" /> €</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end font-super-rotesk-comp tracking-[2px] font-bold"><Number dot_formated :number="5502268" /> €</div>
                </div>
                <div class="grid grid-cols-12 py-5 px-2.5 items-center ">
                    <div class="col-span-4 md:col-span-6">Fundació Alícia</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end font-super-rotesk-comp tracking-[2px] font-bold"><Number dot_formated :number="1355818" /> €</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end font-super-rotesk-comp tracking-[2px] font-bold"><Number dot_formated :number="1341916" /> €</div>
                </div>
                <div class="grid grid-cols-12 py-5 px-2.5 items-center ">
                    <div class="col-span-4 md:col-span-6">Fundació Topromi</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end font-super-rotesk-comp tracking-[2px] font-bold"><Number dot_formated :number="1221893" /> €</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end font-super-rotesk-comp tracking-[2px] font-bold"><Number dot_formated :number="1254080" /> €</div>
                </div>
                <div class="grid grid-cols-12 py-5 px-2.5 items-center ">
                    <div class="col-span-4 md:col-span-6">Serveis Personals TFCLP</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end font-super-rotesk-comp tracking-[2px] font-bold"><Number dot_formated :number="3889677" /> €</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end font-super-rotesk-comp tracking-[2px] font-bold"><Number dot_formated :number="3819900" /> €</div>
                </div>
                <div class="grid grid-cols-12 py-5 px-2.5 items-center bg-Olive-Green text-white font-super-rotesk-comp tracking-[2px] font-bold rounded-r-full">
                    <div class="col-span-4 md:col-span-6">VOLUM DE NEGOCI DEL GRUP</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end"><Number dot_formated :number="40879038" /> €</div>
                    <div class="col-span-4 md:col-span-3 justify-self-end"><Number dot_formated :number="40879038" /> €</div>
                </div>
                
            </div>
        </div>

        <!-- table 2 -->
        <div class="w-full max-w-[40.125rem] md:max-w-[56rem] mx-auto text-xl mt-16 md:mt-32">
            <h1 class="text-Brown border-b-4 border-Brown">DIMENSIÓ ECONÒMICA 2022</h1>
            <div class="flex flex-col">
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4  border-b border-black">
                    <div class="ml-auto font-super-rotesk-comp tracking-[2px] font-bold">Llocs de treball</div>
                </div>
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Fundació Catalunya La Pedrera</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="65" /></div>
                </div>
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Col·legi Oms i de Prat</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="66" /></div>
                </div>
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Serveis Personals TFCLP (1)</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="194" /></div>
                </div>
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Fundació Topromi</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="44" /></div>
                </div>
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Fundació Alícia</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="19" /></div>
                </div>
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Món Sant Benet SL</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="65" /></div>
                </div>
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Cooperativa  Mans</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="37" /></div>
                </div>


                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4 bg-Brown text-white font-super-rotesk-comp tracking-[2px] font-bold rounded-r-full">
                    <div class="">GRUP FUNDACIÓ CATALUNYA LA PEDRERA</div>
                    <div class="shrink-0"><Number  :number="490" /></div>
                </div>


                
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Serveis Espais Socials (2)</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="264" /></div>
                </div>
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Serveis induïts La Pedrera (3)</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="40" /></div>
                </div>
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Serveis induïts Món Sant Benet (3)</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="16" /></div>
                </div>
                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4">
                    <div >Productors associats</div>
                    <div class="shrink-0 font-super-rotesk-comp tracking-[2px] font-bold"><Number  :number="39" /></div>
                </div>


                <div class="w-full py-5 px-2.5 flex justify-between items-center gap-x-4 bg-Brown text-white font-super-rotesk-comp tracking-[2px] font-bold rounded-r-full">
                    <div class="">IMPACTE LABORAL DIRECTE I INDUÏT</div>
                    <div class="shrink-0"><Number  :number="849" /></div>
                </div>
                
            </div>
        </div>

        <div class="md:w-full max-w-[56rem] mx-auto mt-16 md:mt-32">
            <p>1 La Pedrera, Món Sant Benet, MónNatura Delta, MónNatura Pirineus i Xarxa d’Espais Natura 2 21 coordinadors, 32 psicòlegs, 29 fisioterapeutes, 34 monitors, 148 educadors 3 Manteniment, seguretat, neteja i altres serveis</p>
        </div>

    </section>
</template>
<script setup>
import Number from "@/components/UI/Number.vue";
</script>