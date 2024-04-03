export default {
  width: 1200,
  height: 900,
  color: "#9ea480",
  nodes: [
    {
      title: "Collaboradors",
      path: "Colaboradors-green.png",
      type: "chip",
      x: 2.4492935982947064e-14,
      y: -400,
      width: 288,
      height: 64,
    },
    {
      title: "Collaboradors ANCHOR",
      type: "anchor",
      x: 173.55349564702328,
      y: -360.38754716096764,
    },
    {
      title: "SJD",
      path: "img-220.jpg",
      link: "https://www.sjdhospitalbarcelona.org/ca",
      x: 312.73259298721194,
      y: -249.3959207434934,
      width: 409,
      height: 225,
    },
    {
      title: "SJD ANCHOR",
      type: "anchor",
      x: 389.97116487272945,
      y: -89.00837358252576,
    },
    {
      title: "AlC Fundacio",
      path: "img-219.jpg",
      link: "https://www.fundacioace.com/",
      x: 389.97116487272945,
      y: 89.00837358252576,
      width: 512,
      height: 363,
    },
    {
      title: "AlC Fundacio ANCHOR",
      type: "anchor",
      x: 312.73259298721194,
      y: 249.3959207434934,
    },
    {
      title: "Veles Per ",
      path: "img-218.jpg",
      link: "https://www.velesperalzheimer.org/",
      x: 173.55349564702328,
      y: 360.38754716096764,
      width: 448,
      height: 350,
    },
    {
      title: "Veles Per  ANCHOR",
      type: "anchor",
      x: 2.4492935982947064e-14,
      y: 400,
    },
    {
      title: "GRUP MUTUAM",
      path: "img-217.jpg",
      link: "https://www.mutuam.cat/",
      x: -173.55349564702323,
      y: 360.38754716096764,
      width: 512,
      height: 137,
    },
    {
      title: "GRUP MUTUAM ANCHOR",
      type: "anchor",
      x: -312.73259298721194,
      y: 249.39592074349343,
    },
    {
      title: "AdSalutem",
      path: "img-216.jpg",
      link: "https://aspesanidadprivada.es/clinicas/ad-salutem-institute-for-healthy-sleep-sl/",
      x: -389.97116487272945,
      y: 89.0083735825258,
      width: 512,
      height: 113,
    },
    {
      title: "AdSalutem ANCHOR",
      type: "anchor",
      x: -389.97116487272945,
      y: -89.0083735825257,
    },
    {
      title: "Creu Roja",
      path: "img-215.jpg",
      link: "https://www2.cruzroja.es/web/creu-roja",
      x: -312.73259298721194,
      y: -249.39592074349335,
      width: 432,
      height: 344,
    },
    {
      title: "Creu Roja ANCHOR",
      type: "anchor",
      x: -173.5534956470233,
      y: -360.38754716096764,
    },
    {
      title: "Socis",
      path: "Socis-green.png",
      type: "chip",
      x: -171.875,
      y: 200,
      width: 154,
      height: 64,
    },
    {
      title: "GEDI",
      path: "img-221.jpg",
      link: "https://gedi.org/",
      x: 118.43390804597702,
      y: 200,
      width: 512,
      height: 174,
    },
  ],
  links: [
    {
      nodes: [
        "Collaboradors",
        "Collaboradors ANCHOR",
        "SJD",
        "SJD ANCHOR",
        "AlC Fundacio",
        "AlC Fundacio ANCHOR",
        "Veles Per ",
        "Veles Per  ANCHOR",
        "GRUP MUTUAM",
        "GRUP MUTUAM ANCHOR",
        "AdSalutem",
        "AdSalutem ANCHOR",
        "Creu Roja",
        "Creu Roja ANCHOR",
      ],
      shape: "circle",
    },
    { nodes: ["Socis", "GEDI"], shape: "dottedLine" },
  ],
  texts: [{ x: 0, y: 0, text: ["Envelliment", "digne"], fontSize: 120 }],
};
