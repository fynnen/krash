export const SORTMETHODS = {
  Random: "Random",
  Mixed: "Mixed",
  Splitted: "Splitted"
};

export const LOCATIONS = {
  MTL: {id: "MTL", name: "Montréal"},
  QC: {id: "QC", name: "Québec"},
  HOME: {id: "HOME", name: "Distance"},
};

export const ROLES = {
  FE: {id: "FE", name: "Front-end"},
  BE: {id: "BE", name: "Back-end"},
  QA: {id: "QA", name: "Qualité assurance"},
};

export const BREAKPOINTS = {
  XS: {
    min: 0,
    max: 480,
  },
  SM: {
    min: 481,
    max: 720,
  },
  MD: {
    min: 721,
    max: 1024,
  },
  LG: {
    min: 1025,
    max: 99999,
  }
};

export const SORTBY = {
  ALPHABETIC: 'ALPHABETIC',
  LOCATION: 'LOCATION',
  ROLE: 'ROLE',
};
