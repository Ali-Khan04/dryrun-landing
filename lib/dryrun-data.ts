import { Mode } from './modeType';
export const simulatorUrl = 'https://app.dry-run.dev';

export const STEPS = [
  ['01', 'Build', 'Draw walls and obstacles to create an environment.'],
  [
    '02',
    'Sense',
    'Watch the robot perceive nearby space with simulated sensors.',
  ],
  ['03', 'Map', 'See unknown space become known as the robot explores.'],
  ['04', 'Plan', 'Run A* or Dijkstra and visualize how routes are found.'],
] as const;

export const MODES: Mode[] = [
  {
    tag: 'GLOBAL',
    title: 'Full map known up front.',
    copy: 'A* and Dijkstra search an environment the robot already understands.',
    active: true,
  },
  {
    tag: 'REACTIVE',
    title: 'Senses and moves on its own.',
    copy: 'Navigate using live observations instead of receiving the full map beforehand.',
  },
  {
    tag: 'SLAM',
    title: 'Maps as it goes, then plans.',
    copy: 'Reveal the environment through sensing, then plan from the map discovered.',
  },
] as const;

export const CONCEPTS = [
  'A*',
  'Dijkstra',
  'LiDAR',
  'Ultrasonic sensing',
  'Occupancy grids',
  'Known vs unknown',
  'Mapping',
  'Path planning',
  'Goal navigation',
] as const;
