export const SHUFFLE_TEAMS = 'SHUFFLE_TEAMS';

export const shuffleTeam = (data) => {
  return {
    type: SHUFFLE_TEAMS,
    data,
  }
};