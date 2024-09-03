// utils/statsUtils.ts

export interface MinMaxValues {
  min: number;
  max: number;
}

export interface MinMaxStats {
  pts: MinMaxValues;
  ast: MinMaxValues;
  drb: MinMaxValues;
  stl: MinMaxValues;
  blk: MinMaxValues;
  fg_pct: MinMaxValues;
  threeP_pct: MinMaxValues;
  ft_pct: MinMaxValues;
}

export function normalize(value: number, min: number, max: number): number {
  return ((value - min) / (max - min)) * 100;
}

export function aggregateStats(stats: Record<number, any>): any {
  const allYearsStats = Object.values(stats);
  const aggregated = {
    pts: 0,
    ast: 0,
    drb: 0,
    stl: 0,
    blk: 0,
    fg_pct: 0,
    threeP_pct: 0,
    ft_pct: 0,
    count: allYearsStats.length,
  };

  allYearsStats.forEach(yearStats => {
    aggregated.pts += yearStats.pts;
    aggregated.ast += yearStats.ast;
    aggregated.drb += yearStats.drb;
    aggregated.stl += yearStats.stl;
    aggregated.blk += yearStats.blk;
    aggregated.fg_pct += yearStats.fg_pct;
    aggregated.threeP_pct += yearStats["3p_pct"];
    aggregated.ft_pct += yearStats.ft_pct;
  });

  // Calculate averages
  aggregated.pts /= aggregated.count;
  aggregated.ast /= aggregated.count;
  aggregated.drb /= aggregated.count;
  aggregated.stl /= aggregated.count;
  aggregated.blk /= aggregated.count;
  aggregated.fg_pct /= aggregated.count;
  aggregated.threeP_pct /= aggregated.count;
  aggregated.ft_pct /= aggregated.count;

  return aggregated;
}

export function findMinMax(stats: Record<number, any>): MinMaxStats {
  const allYearsStats = Object.values(stats);

  const minMax: MinMaxStats = {
    pts: { min: Infinity, max: -Infinity },
    ast: { min: Infinity, max: -Infinity },
    drb: { min: Infinity, max: -Infinity },
    stl: { min: Infinity, max: -Infinity },
    blk: { min: Infinity, max: -Infinity },
    fg_pct: { min: Infinity, max: -Infinity },
    threeP_pct: { min: Infinity, max: -Infinity },
    ft_pct: { min: Infinity, max: -Infinity },
  };

  allYearsStats.forEach(yearStats => {
    (Object.keys(minMax) as (keyof MinMaxStats)[]).forEach(key => {
      const value = yearStats[key];
      if (value < minMax[key].min) minMax[key].min = value;
      if (value > minMax[key].max) minMax[key].max = value;
    });
  });

  return minMax;
}
