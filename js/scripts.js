//  WORLD MAP HIVES BOUNCE
var mapHives = anime({
    targets: '.map-hive',
    translateY: 5,
    loop: true,
    easing: 'linear',
    duration: 1100,
    direction: 'alternate',
    delay: function(el, i, l) {
        return i * 200;
      }
  });
var mapHivesAlt = anime({
    targets: '.map-hive-alt',
    translateY: -5,
    loop: true,
    easing: 'linear',
    duration: 1100,
    direction: 'alternate',
    delay: function(el, i, l) {
        return i * 100;
      }
  });
// FIRST QUEEN BEE
  var queenLeftWing = anime({
    targets: '#queen-accurate #left-wing',
    rotate: '-80deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 1200,
    direction: 'alternate',
  });
  var queenRightWing = anime({
    targets: '#queen-accurate #right-wing',
    rotate: '80deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 1200,
    direction: 'alternate',
  });
  var queenLeftAntenna = anime({
    targets: '#queen-accurate #left-antenna',
    rotate: '10deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 700,
    direction: 'alternate',
    delay: 1500
  });
  var queenRightAntenna = anime({
    targets: '#queen-accurate #right-antenna',
    rotate: '-15deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 700,
    direction: 'alternate',
    delay: 1500
  });
  var queenFrontLeftLeg = anime({
    targets: '#queen-accurate #front-left',
    rotate: '-15deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 800,
    direction: 'alternate',
    delay: 900
  });
  var queenFrontRightLeg = anime({
    targets: '#queen-accurate #front-right',
    rotate: '20deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 700,
    direction: 'alternate',
    delay: 850
  });
  var queenMidLeftLeg = anime({
    targets: '#queen-accurate #mid-left',
    rotate: '10deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 750,
    direction: 'alternate',
    delay: 775
  });
  var queenMidRightLeg = anime({
    targets: '#queen-accurate #mid-right',
    rotate: '-13deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 850,
    direction: 'alternate',
    delay: 925
  });
  var queenBackLeftLeg = anime({
    targets: '#queen-accurate #back-left',
    rotate: '-7deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 950,
    direction: 'alternate',
    delay: 625
  });
  var queenBackRightLeg = anime({
    targets: '#queen-accurate #back-right',
    rotate: '-9deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 700,
    direction: 'alternate',
    delay: 725
  });



  // FIRST WORKER BEE
  var workerLeftWing = anime({
    targets: '#worker-accurate #left-wing',
    rotate: '80deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 100,
    direction: 'alternate',
  });
  var workerRightWing = anime({
    targets: '#worker-accurate #right-wing',
    rotate: '-80deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 100,
    direction: 'alternate',
  });
  var workerLeftAntenna = anime({
    targets: '#worker-accurate #left-antenna',
    rotate: '10deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 700,
    direction: 'alternate',
    delay: 1600,
  });
  var workerRightAntenna = anime({
    targets: '#worker-accurate #right-antenna',
    rotate: '-15deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 700,
    direction: 'alternate',
    delay: 1600
  });
  var workerFrontLeftLeg = anime({
    targets: '#worker-accurate #front-left',
    rotate: '-15deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 800,
    direction: 'alternate',
    delay: 1000
  });
  var workerFrontRightLeg = anime({
    targets: '#worker-accurate #front-right',
    rotate: '20deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 800,
    direction: 'alternate',
    delay: 850
  });
  var workerMidLeftLeg = anime({
    targets: '#worker-accurate #mid-left',
    rotate: '10deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 750,
    direction: 'alternate',
    delay: 875
  });
  var workerMidRightLeg = anime({
    targets: '#worker-accurate #mid-right',
    rotate: '-13deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 850,
    direction: 'alternate',
    delay: 1025
  });
  var workerBackLeftLeg = anime({
    targets: '#worker-accurate #back-left',
    rotate: '-7deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 1050,
    direction: 'alternate',
    delay: 625
  });
  var workerBackRightLeg = anime({
    targets: '#worker-accurate #back-right',
    rotate: '-9deg',
    loop: true,
    easing: 'easeInOutQuart',
    duration: 700,
    direction: 'alternate',
    delay: 825
  });





    // FIRST DRONE BEE
      var droneLeftAntenna = anime({
        targets: '#drone-accurate #left-antenna',
        rotate: '10deg',
        loop: true,
        easing: 'easeInOutQuart',
        duration: 700,
        direction: 'alternate',
        delay: 1800,
      });
      var droneRightAntenna = anime({
        targets: '#drone-accurate #right-antenna',
        rotate: '-15deg',
        loop: true,
        easing: 'easeInOutQuart',
        duration: 700,
        direction: 'alternate',
        delay: 1800
      });
      var droneFrontLeftLeg = anime({
        targets: '#drone-accurate #front-left',
        rotate: '-15deg',
        loop: true,
        easing: 'easeInOutQuart',
        duration: 800,
        direction: 'alternate',
        delay: 1200
      });
      var droneFrontRightLeg = anime({
        targets: '#drone-accurate #front-right',
        rotate: '20deg',
        loop: true,
        easing: 'easeInOutQuart',
        duration: 800,
        direction: 'alternate',
        delay: 1050
      });
      var droneMidLeftLeg = anime({
        targets: '#drone-accurate #mid-left',
        rotate: '10deg',
        loop: true,
        easing: 'easeInOutQuart',
        duration: 750,
        direction: 'alternate',
        delay: 1075
      });
      var droneMidRightLeg = anime({
        targets: '#drone-accurate #mid-right',
        rotate: '-13deg',
        loop: true,
        easing: 'easeInOutQuart',
        duration: 850,
        direction: 'alternate',
        delay: 1225
      });
      var droneBackLeftLeg = anime({
        targets: '#drone-accurate #back-left',
        rotate: '-7deg',
        loop: true,
        easing: 'easeInOutQuart',
        duration: 1050,
        direction: 'alternate',
        delay: 825
      });
      var droneBackRightLeg = anime({
        targets: '#drone-accurate #back-right',
        rotate: '-9deg',
        loop: true,
        easing: 'easeInOutQuart',
        duration: 700,
        direction: 'alternate',
        delay: 1025
      });

    //   BIG BEE ANTENNA MOVEMENT
      var bigBeeLeftAntenna = anime({
        targets: '.big-bee #left-antenna',
        rotate: '10deg',
        loop: true,
        easing: 'easeInOutQuart',
        duration: 500,
        direction: 'alternate',
        delay: 300,
      });
      var bigBeeRightAntenna = anime({
        targets: '.big-bee #right-antenna',
        rotate: '-15deg',
        loop: true,
        easing: 'easeInOutQuart',
        duration: 700,
        direction: 'alternate',
        delay: 200
      });
