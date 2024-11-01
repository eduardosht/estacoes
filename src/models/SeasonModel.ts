export type Season = {
  start: { day: number; month: number };
  end: { day: number; month: number };
};

export type Seasons = {
  summer: Season;
  autumn: Season;
  winter: Season;
  spring: Season;
};