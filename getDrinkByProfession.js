function getDrinkByProfession(param){
  let newParam = param.toUpperCase();
  switch (newParam) {
      case "JABRONI":
        return "Patron Tequila";
        break;
      case "SCHOOL COUNSELOR":
        return "Anything with Alcohol";
        break;
      case "PROGRAMMER":
        return "Hipster Craft Beer";
        break;
      case "BIKE GANG MEMBER":
        return "Moonshine";
        break;
      case "POLITICIAN":
        return "Your tax dollars";
        break;
      case "RAPPER":
        return "Cristal";
        break;
      default:
        return "Beer";
      break;
  }
}