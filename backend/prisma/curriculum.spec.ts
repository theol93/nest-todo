import { curriculum } from './curriculum';
test('contains the complete curriculum and stable unique keys', () => {
  expect(curriculum).toHaveLength(8);
  expect(new Set(curriculum.map((module) => module.slug)).size).toBe(8);
  expect(curriculum.flatMap((module) => [...module.topics])).toHaveLength(44);
  for (const module of curriculum) {
    expect(new Set(module.topics.map((topic) => topic.key)).size).toBe(
      module.topics.length,
    );
    for (const topic of module.topics) {
      expect(topic.description.length).toBeGreaterThan(10);
      expect(topic.practicalExercise.length).toBeGreaterThan(10);
      expect(topic.objectives.length).toBeGreaterThan(0);
    }
  }
});
