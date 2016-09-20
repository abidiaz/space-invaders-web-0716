class Spaceship {
  
  constructor(name, crewArray, phasers, shields){
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = true;
    this.phasersCharge = 'uncharged';
      if (!!crewArray.length) {
        this.docked = false
      }
      crewArray.forEach((shipCrew)=>{
        shipCrew.currentShip = this
      })
  }
}

