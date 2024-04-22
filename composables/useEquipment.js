function myEquipment() {
  const equipment = window.innerWidth <= 767.99;
  return equipment;
}

export function useEquipment() {
  return {
    myEquipment,
  };
}
