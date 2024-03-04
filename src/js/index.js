import iziToast from "izitoast";

iziToast.show({
  target: ".info-toast",
  title: 'Hey',
  message: 'The site has been loaded',
  timeout: 1500,
  displayMode: "1",
  progressBar: false,
  transitionIn: "fadeIn",
  transitionInMobile: "fadeIn",
  transitionOut: "fadeIn",
  transitionOutMobile: "fadeIn",
});